import { useState, useRef } from "react";
import { useCollection } from "@/context/DataContext";

const API_BASE = import.meta.env.VITE_API_URL || "";

function uploadFile(file) {
  const fd = new FormData();
  fd.append("file", file);
  return fetch(`${API_BASE}/api/upload`, { method: "POST", body: fd }).then((r) => r.json());
}

function ImageRow({ label, images, onAdd, onRemove, onMove }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="flex flex-wrap gap-2">
        {images.map((img, idx) => (
          <div key={idx} className="relative group w-28 h-20 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
            {idx === 0 && <div className="absolute top-0 left-0 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded-br z-10">COVER</div>}
            <img src={img} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-1">
              <button onClick={() => onMove(idx, -1)} disabled={idx === 0} className="text-white text-xs bg-white/20 rounded p-1 disabled:opacity-30">◀</button>
              <button onClick={() => onMove(idx, 1)} disabled={idx === images.length - 1} className="text-white text-xs bg-white/20 rounded p-1 disabled:opacity-30">▶</button>
              <button onClick={() => onRemove(idx)} className="text-white text-xs bg-red-500/70 rounded p-1">✕</button>
            </div>
          </div>
        ))}
        <button onClick={onAdd} className="w-28 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-500 transition text-xs">
          + Add
        </button>
      </div>
    </div>
  );
}

export default function ProjectsAdmin() {
  const [projects, setProjects] = useCollection("projects");
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const empty = { type: 1, title: "", description: "", imageDesktop: "", imageMobile: "", desktopImages: [], mobileImages: [], link: "" };

  const save = (item) => {
    const payload = {
      ...item,
      desktopImages: item.desktopImages || [],
      mobileImages: item.mobileImages || [],
      imageDesktop: item.desktopImages?.[0] || "",
      imageMobile: item.mobileImages?.[0] || "",
    };
    if (editing) {
      setProjects(projects.map((p) => (p.id === editing.id ? { ...payload, id: editing.id } : p)));
    } else {
      setProjects([...projects, { ...payload, id: Date.now() }]);
    }
    setEditing(null);
    setShowForm(false);
  };

  const remove = (id) => {
    if (confirm("Delete this project?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  const handleDragStart = (i) => { dragItem.current = i; };
  const handleDragEnter = (i) => { dragOverItem.current = i; };
  const handleDragEnd = () => {
    const from = dragItem.current;
    const to = dragOverItem.current;
    if (from === null || to === null || from === to) { dragItem.current = null; dragOverItem.current = null; return; }
    const next = [...projects];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    setProjects(next);
    dragItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        <button onClick={() => { setEditing(null); setShowForm(true); }} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">+ Add Project</button>
      </div>

      {showForm && (
        <ProjectForm initial={editing || empty} onSave={save} onCancel={() => { setShowForm(false); setEditing(null); }} />
      )}

      <div className="space-y-2">
        {projects.map((p, i) => (
          <div key={p.id} draggable onDragStart={() => handleDragStart(i)} onDragEnter={() => handleDragEnter(i)} onDragEnd={handleDragEnd} onDragOver={(e) => e.preventDefault()}
            className={`bg-white rounded-xl border border-gray-200 p-3 flex items-center gap-3 shadow-sm cursor-grab active:cursor-grabbing transition-all ${dragItem.current === i ? "opacity-50" : ""}`}>
            <div className="text-gray-300 cursor-grab text-sm">⠿</div>
            <div className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              {p.imageDesktop && <img src={p.imageDesktop} alt="" className="w-full h-full object-cover" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{p.title}</p>
              <p className="text-xs text-gray-400">{(p.desktopImages?.length || 0) + (p.mobileImages?.length || 0)} images</p>
            </div>
            <button onClick={() => { setEditing(p); setShowForm(true); }} className="text-sm text-blue-600 hover:text-blue-800 font-medium shrink-0">Edit</button>
            <button onClick={() => remove(p.id)} className="text-sm text-red-600 hover:text-red-800 font-medium shrink-0">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState({ ...initial, desktopImages: initial.desktopImages || [], mobileImages: initial.mobileImages || [] });
  const [uploading, setUploading] = useState(false);

  const update = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  const handleUpload = async (field) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      setUploading(true);
      try {
        const { url } = await uploadFile(file);
        const arr = [...(form[field] || []), url];
        update(field, arr);
        if (field === "desktopImages" && arr.length === 1) update("imageDesktop", url);
        if (field === "mobileImages" && arr.length === 1) update("imageMobile", url);
      } catch (e) { alert("Upload failed: " + e.message); }
      setUploading(false);
    };
    input.click();
  };

  const removeImg = (field, idx) => {
    const arr = form[field].filter((_, i) => i !== idx);
    update(field, arr);
    if (field === "desktopImages") update("imageDesktop", arr[0] || "");
    if (field === "mobileImages") update("imageMobile", arr[0] || "");
  };

  const moveImg = (field, idx, dir) => {
    const target = idx + dir;
    if (target < 0 || target >= form[field].length) return;
    const arr = [...form[field]];
    [arr[idx], arr[target]] = [arr[target], arr[idx]];
    update(field, arr);
    if (field === "desktopImages") update("imageDesktop", arr[0] || "");
    if (field === "mobileImages") update("imageMobile", arr[0] || "");
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-4">{initial.id ? "Edit Project" : "New Project"}</h3>

      <ImageRow label="Desktop Images (first = cover)" images={form.desktopImages}
        onAdd={() => handleUpload("desktopImages")}
        onRemove={(idx) => removeImg("desktopImages", idx)}
        onMove={(idx, dir) => moveImg("desktopImages", idx, dir)} />

      <ImageRow label="Mobile Images (first = cover)" images={form.mobileImages}
        onAdd={() => handleUpload("mobileImages")}
        onRemove={(idx) => removeImg("mobileImages", idx)}
        onMove={(idx, dir) => moveImg("mobileImages", idx, dir)} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input value={form.title} onChange={(e) => update("title", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea value={form.description} onChange={(e) => update("description", e.target.value)} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Link URL</label>
          <input value={form.link} onChange={(e) => update("link", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Tag</label>
          <select value={form.product || "compro"} onChange={(e) => update("product", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option value="compro">Company Profile</option>
            <option value="erp">ERP</option>
            <option value="wa-apps">WhatsApp Apps</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={() => onSave(form)} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
          {initial.id ? "Update" : "Create"}
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200">Cancel</button>
      </div>
    </div>
  );
}
