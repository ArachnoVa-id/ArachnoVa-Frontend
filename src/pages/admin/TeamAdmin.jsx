import { useState, useEffect } from "react";
import { useCollection } from "@/context/DataContext";
import { useToast } from "@/components/ui/Toast";

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

export default function TeamAdmin() {
  const [members, setMembers] = useCollection("team");
  const [projects] = useCollection("projects");
  const [local, setLocal] = useState(null);
  const [dirty, setDirty] = useState(false);
  const [fetchingLinkedIn, setFetchingLinkedIn] = useState(null);
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
    setFetchingLinkedIn(i);
    try {
      const res = await fetch(`${API_BASE}/api/linkedin-image?url=${encodeURIComponent(member.linkedin)}`);
      if (!res.ok) throw new Error("Not found");
      const data = await res.json();
      if (data.image) {
        change(i, "image", data.image);
        toast("Profile image fetched from LinkedIn", "success");
      }
    } catch (e) {
      toast("Could not fetch LinkedIn image: " + e.message, "error");
    }
    setFetchingLinkedIn(null);
  };

  if (!local) return null;

  const internal = local.filter((m) => m.type === "internal");
  const collaborator = local.filter((m) => m.type !== "internal");
  const allIndices = local.map((_, i) => i);

  const MemberCard = ({ member, idx }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      {/* Avatar */}
      <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden cursor-pointer group" onClick={() => handleUpload(idx)}>
        {member.image ? (
          <img src={member.image} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradientColors[idx % gradientColors.length]} flex items-center justify-center text-white text-2xl font-bold`}>
            {member.name?.charAt(0) || "?"}
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-white text-xs rounded-full">Upload</div>
      </div>

      <div className="space-y-2">
        <input value={member.name} onChange={(e) => change(idx, "name", e.target.value)}
          placeholder="Name" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-center font-medium" />
        <input value={member.role} onChange={(e) => change(idx, "role", e.target.value)}
          placeholder="Role" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-center" />

        {/* LinkedIn */}
        <div className="flex gap-1">
          <input value={member.linkedin || ""} onChange={(e) => change(idx, "linkedin", e.target.value)}
            placeholder="LinkedIn URL" className="flex-1 px-2 py-1.5 border border-gray-300 rounded-lg text-[11px] font-mono" />
          <button onClick={() => fetchLinkedInImage(idx)} disabled={fetchingLinkedIn === idx}
            className="px-2 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-[11px] hover:bg-blue-100 shrink-0 disabled:opacity-50">
            {fetchingLinkedIn === idx ? "..." : "Fetch Pic"}
          </button>
        </div>

        {/* Project connections */}
        <div>
          <p className="text-[11px] text-gray-500 mb-1">Projects</p>
          <div className="flex flex-wrap gap-1 max-h-20 overflow-y-auto">
            {(projects || []).map((p) => {
              const isConnected = (member.projectIds || []).includes(p.id);
              return (
                <button key={p.id} onClick={() => {
                  const ids = member.projectIds || [];
                  change(idx, "projectIds", isConnected ? ids.filter((id) => id !== p.id) : [...ids, p.id]);
                }}
                  className={`text-[10px] px-1.5 py-0.5 rounded-full border transition ${
                    isConnected ? "bg-blue-500 text-white border-blue-500" : "bg-white text-gray-500 border-gray-200 hover:border-blue-300"
                  }`}>
                  {p.title}
                </button>
              );
            })}
          </div>
        </div>

        <button onClick={() => remove(idx)} className="w-full text-sm text-red-600 hover:bg-red-50 py-2 rounded-lg">Remove</button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Team Members</h2>
        <div className="flex items-center gap-3">
          {dirty && <span className="text-xs text-amber-600 font-medium">Unsaved</span>}
          <button onClick={() => add("internal")} className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">+ Internal</button>
          <button onClick={() => add("collaborator")} className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">+ Collaborator</button>
          <button onClick={save} className={`px-4 py-1.5 text-sm rounded-lg font-medium transition ${dirty ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`} disabled={!dirty}>Save</button>
        </div>
      </div>

      {/* Internal Team */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          Internal Team
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {local.map((m, i) => m.type === "internal" ? <MemberCard key={i} member={m} idx={i} /> : null)}
        </div>
      </div>

      {/* Collaborator Team */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Collaborator Team
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {local.map((m, i) => m.type !== "internal" ? <MemberCard key={i} member={m} idx={i} /> : null)}
        </div>
      </div>
    </div>
  );
}
