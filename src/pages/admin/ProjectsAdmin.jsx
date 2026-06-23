import { useState } from "react";
import { useCollection } from "@/context/DataContext";

export default function ProjectsAdmin() {
  const [projects, setProjects] = useCollection("projects");
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const empty = { type: 1, title: "", description: "", imageDesktop: "", imageMobile: "", link: "" };

  const save = (item) => {
    if (editing) {
      setProjects(projects.map((p) => (p.id === editing.id ? { ...item, id: editing.id } : p)));
    } else {
      setProjects([...projects, { ...item, id: Date.now() }]);
    }
    setEditing(null);
    setShowForm(false);
  };

  const remove = (id) => {
    if (confirm("Delete this project?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  const move = (index, dir) => {
    const next = [...projects];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setProjects(next);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        <button
          onClick={() => { setEditing(null); setShowForm(true); }}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
        >
          + Add Project
        </button>
      </div>

      {showForm && (
        <ProjectForm
          initial={editing || empty}
          onSave={save}
          onCancel={() => { setShowForm(false); setEditing(null); }}
        />
      )}

      <div className="space-y-3">
        {projects.map((p, i) => (
          <div key={p.id} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4 shadow-sm">
            <div className="flex flex-col gap-1">
              <button onClick={() => move(i, -1)} className="text-gray-400 hover:text-gray-600 text-xs" disabled={i === 0}>▲</button>
              <span className="text-xs text-gray-400 text-center">{i + 1}</span>
              <button onClick={() => move(i, 1)} className="text-gray-400 hover:text-gray-600 text-xs" disabled={i === projects.length - 1}>▼</button>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              {p.imageDesktop && <img src={p.imageDesktop} alt="" className="w-full h-full object-cover" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{p.title}</p>
              <p className="text-sm text-gray-500 truncate">{p.link}</p>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${p.type === 1 ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"}`}>
              Type {p.type}
            </span>
            <button onClick={() => { setEditing(p); setShowForm(true); }} className="text-sm text-blue-600 hover:text-blue-800 font-medium">Edit</button>
            <button onClick={() => remove(p.id)} className="text-sm text-red-600 hover:text-red-800 font-medium">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial);
  const update = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-4">{initial.id ? "Edit Project" : "New Project"}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input value={form.title} onChange={(e) => update("title", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea value={form.description} onChange={(e) => update("description", e.target.value)} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Desktop Image Path</label>
          <input value={form.imageDesktop} onChange={(e) => update("imageDesktop", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Image Path</label>
          <input value={form.imageMobile} onChange={(e) => update("imageMobile", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Link URL</label>
          <input value={form.link} onChange={(e) => update("link", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Layout Type</label>
          <select value={form.type} onChange={(e) => update("type", Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value={1}>Type 1 (Image Left)</option>
            <option value={2}>Type 2 (Image Right)</option>
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
