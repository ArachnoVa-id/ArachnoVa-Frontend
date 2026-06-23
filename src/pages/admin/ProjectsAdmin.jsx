import { useState, useRef, useEffect } from "react";
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
  const [local, setLocal] = useState(null);
  const [dirty, setDirty] = useState(false);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  useEffect(() => {
    if (projects && !local) setLocal(JSON.parse(JSON.stringify(projects)));
  }, [projects]);

  const save = () => { setProjects(local); setDirty(false); };

  const updateLocal = (fn) => {
    setLocal((prev) => { setDirty(true); return fn(prev); });
  };

  const remove = (id) => {
    if (confirm("Delete this project?")) {
      updateLocal((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleDragStart = (i) => { dragItem.current = i; };
  const handleDragEnter = (i) => { dragOverItem.current = i; };
  const handleDragEnd = () => {
    const from = dragItem.current;
    const to = dragOverItem.current;
    if (from === null || to === null || from === to) { dragItem.current = null; dragOverItem.current = null; return; }
    updateLocal((prev) => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
    dragItem.current = null;
    dragOverItem.current = null;
  };

  if (!local) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        <div className="flex items-center gap-3">
          {dirty && <span className="text-xs text-amber-600 font-medium">Unsaved changes</span>}
          <button onClick={save} className={`px-4 py-1.5 text-sm rounded-lg font-medium transition ${dirty ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`} disabled={!dirty}>Save</button>
        </div>
      </div>

      <div className="space-y-2">
        {local.map((p, i) => (
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
            <button onClick={() => remove(p.id)} className="text-sm text-red-600 hover:text-red-800 font-medium shrink-0">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
