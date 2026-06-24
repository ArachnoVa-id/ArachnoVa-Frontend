import { useState, useEffect } from "react";
import { useCollection } from "@/context/DataContext";
import { useToast } from "@/components/ui/Toast";
import { FiPlus, FiSave, FiUpload, FiSearch, FiX, FiLinkedin, FiUserPlus, FiUsers } from "react-icons/fi";

const API_BASE = import.meta.env.VITE_API_URL || "";
const gradientColors = [
  "from-purple-400 to-pink-400", "from-blue-400 to-teal-400",
  "from-orange-400 to-red-400", "from-green-400 to-cyan-400",
  "from-yellow-400 to-orange-400", "from-pink-400 to-rose-400",
  "from-indigo-400 to-purple-400", "from-teal-400 to-green-400",
];

function uploadFile(file) {
  const fd = new FormData();
  fd.append("file", file);
  return fetch(`${API_BASE}/api/upload`, { method: "POST", body: fd }).then((r) => r.json());
}

function ProjectPicker({ selected, onChange, projects }) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const filtered = (projects || []).filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-1 mb-1">
        {selected.map((id) => {
          const p = (projects || []).find((x) => x.id === id);
          return p ? (
            <span key={id} className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-[10px] px-1.5 py-0.5 rounded-full">
              {p.title}
              <button onClick={() => onChange(selected.filter((x) => x !== id))} className="hover:text-red-500"><FiX size={10} /></button>
            </span>
          ) : null;
        })}
      </div>
      <div className="relative">
        <FiSearch size={12} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
        <input value={search} onChange={(e) => { setSearch(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)} placeholder="Search projects..."
          className="w-full pl-6 pr-2 py-1.5 border border-gray-200 rounded-lg text-[11px] focus:outline-none focus:border-blue-400" />
        {open && filtered.length > 0 && (
          <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-32 overflow-y-auto">
            {filtered.filter((p) => !selected.includes(p.id)).map((p) => (
              <button key={p.id} onClick={() => { onChange([...selected, p.id]); setSearch(""); setOpen(false); }}
                className="w-full text-left px-3 py-1.5 text-[11px] hover:bg-blue-50 text-gray-700">
                {p.title}
              </button>
            ))}
          </div>
        )}
        {open && <div className="fixed inset-0 z-[-1]" onClick={() => setOpen(false)} />}
      </div>
    </div>
  );
}

export default function TeamAdmin() {
  const [members, setMembers] = useCollection("team");
  const [projects] = useCollection("projects");
  const [local, setLocal] = useState(null);
  const [dirty, setDirty] = useState(false);
  const [fetchingLi, setFetchingLi] = useState(null);
  const toast = useToast();

  useEffect(() => {
    if (members && !local) setLocal(JSON.parse(JSON.stringify(members)));
  }, [members]);

  const save = () => { setMembers(local); setDirty(false); toast("Team saved", "success"); };
  const update = (fn) => { setLocal((prev) => { setDirty(true); return fn(prev); }); };
  const add = (type) => update((prev) => [...prev, { name: "", role: "", image: "", linkedin: "", type, projectIds: [] }]);
  const remove = (i) => update((prev) => prev.filter((_, idx) => idx !== i));
  const change = (i, field, value) => update((prev) => {
    const next = [...prev]; next[i] = { ...next[i], [field]: value }; return next;
  });

  const handleUpload = async (i) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        const { url } = await uploadFile(file);
        change(i, "image", url);
      } catch (e) { toast("Upload failed: " + e.message, "error"); }
    };
    input.click();
  };

  const fetchLinkedInImage = async (i) => {
    const member = local?.[i];
    if (!member?.linkedin) { toast("Enter a LinkedIn URL first", "info"); return; }
    setFetchingLi(i);
    try {
      const res = await fetch(`${API_BASE}/api/linkedin-image?url=${encodeURIComponent(member.linkedin)}`);
      const data = await res.json();
      if (data.image) {
        change(i, "image", data.image);
        toast(data.avatar ? "Generated avatar from name" : "Profile image fetched", "success");
      }
      if (data.name && (!member.name || member.name.startsWith("John") || member.name.startsWith("Jane") || member.name.includes("Doe"))) {
        change(i, "name", data.name);
        toast("Name auto-filled from LinkedIn", "success");
      } else if (!data.image && !data.name) {
        toast(data.error || "Could not fetch data", "error");
      }
    } catch (e) {
      toast("Error: " + e.message, "error");
    }
    setFetchingLi(null);
  };

  const Section = ({ title, type, icon: Icon, color }) => {
    const items = local.filter((m) => type === "all" ? true : m.type === type);
    const indices = items.map((m) => local.indexOf(m));
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${color}`} />
            {title} ({indices.length})
          </h3>
          <button onClick={() => add(type)} className="px-2.5 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 flex items-center gap-1">
            <FiPlus size={12} /> Add
          </button>
        </div>
        {indices.length === 0 ? (
          <p className="text-sm text-gray-400 italic">No members yet</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {indices.map((idx) => {
              const m = local[idx];
              return (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm">
                  {/* Avatar */}
                  <div className="relative w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden cursor-pointer group" onClick={() => handleUpload(idx)}>
                    {m.image ? (
                      <img src={m.image} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${gradientColors[idx % gradientColors.length]} flex items-center justify-center text-white text-lg font-bold`}>
                        {m.name?.charAt(0) || "?"}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-white text-[10px] rounded-full">
                      <FiUpload size={14} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <input value={m.name} onChange={(e) => change(idx, "name", e.target.value)}
                      placeholder="Name" className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-xs text-center font-medium" />
                    <input value={m.role} onChange={(e) => change(idx, "role", e.target.value)}
                      placeholder="Role" className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-xs text-center" />

                    {/* LinkedIn */}
                    <div className="flex gap-1">
                      <input value={m.linkedin || ""} onChange={(e) => change(idx, "linkedin", e.target.value)}
                        placeholder="LinkedIn URL" className="flex-1 px-2 py-1 border border-gray-200 rounded-lg text-[10px] font-mono" />
                      <button onClick={() => fetchLinkedInImage(idx)} disabled={fetchingLi === idx}
                        className="px-1.5 py-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 disabled:opacity-50 flex items-center"
                        title="Fetch profile pic from LinkedIn">
                        {fetchingLi === idx ? <span className="text-[10px]">...</span> : <FiLinkedin size={12} />}
                      </button>
                    </div>

                    {/* Personal Website */}
                    <input value={m.website || ""} onChange={(e) => change(idx, "website", e.target.value)}
                      placeholder="Personal website URL" className="w-full px-2 py-1 border border-gray-200 rounded-lg text-[10px] font-mono" />

                    {/* Project picker */}
                    <ProjectPicker selected={m.projectIds || []} onChange={(ids) => change(idx, "projectIds", ids)} projects={projects} />

                    <button onClick={() => remove(idx)} className="w-full text-xs text-red-500 hover:bg-red-50 py-1.5 rounded-lg flex items-center justify-center gap-1">
                      <FiX size={12} /> Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  if (!local) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Team Members</h2>
        <div className="flex items-center gap-3">
          {dirty && <span className="text-xs text-amber-600 font-medium">Unsaved</span>}
          <button onClick={save} className={`px-3 py-1.5 text-sm rounded-lg font-medium transition flex items-center gap-1.5 ${dirty ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`} disabled={!dirty}>
            <FiSave size={14} /> Save
          </button>
        </div>
      </div>

      <Section title="Internal Team" type="internal" color="bg-blue-500" />
      <Section title="Collaborator Team" type="collaborator" color="bg-green-500" />
    </div>
  );
}
