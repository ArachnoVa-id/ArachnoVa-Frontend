import { useState, useEffect, memo } from "react";
import { useCollection, authFetch } from "@/context/DataContext";
import { useToast } from "@/components/ui/Toast";
import { FiPlus, FiSave, FiUpload, FiSearch, FiX, FiLinkedin, FiGithub, FiGlobe, FiTrash2, FiEdit2 } from "react-icons/fi";

const gradientColors = [
  "from-purple-400 to-pink-400", "from-blue-400 to-teal-400",
  "from-orange-400 to-red-400", "from-green-400 to-cyan-400",
  "from-yellow-400 to-orange-400", "from-pink-400 to-rose-400",
  "from-indigo-400 to-purple-400", "from-teal-400 to-green-400",
];

function uploadFile(file) {
  const fd = new FormData();
  fd.append("file", file);
  return authFetch("/api/upload", { method: "POST", body: fd }).then(async (r) => {
    const json = await r.json().catch(() => ({}));
    if (!r.ok || !json.url) throw new Error(json.error || `Upload failed (${r.status})`);
    return json;
  });
}

function ProjectPicker({ selected, roles = {}, onChange, onRolesChange, projects }) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const filtered = (projects || []).filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  const remove = (id) => {
    onChange(selected.filter((x) => x !== id));
    if (roles[String(id)] !== undefined) {
      const { [String(id)]: _drop, ...rest } = roles;
      onRolesChange(rest);
    }
  };
  return (
    <div className="relative">
      <div className="flex flex-col gap-1 mb-1">
        {selected.map((id) => {
          const p = (projects || []).find((x) => x.id === id);
          return p ? (
            <div key={id} className="flex items-center gap-2 bg-blue-50 rounded-lg pl-2.5 pr-1 py-1">
              <span className="text-xs text-blue-700 truncate flex-1 min-w-0" title={p.title}>{p.title}</span>
              <input defaultValue={roles[String(id)] || ""} placeholder="Role (e.g. Frontend)"
                onBlur={(e) => onRolesChange({ ...roles, [String(id)]: e.target.value.trim() })}
                className="w-[45%] px-2 py-1 border border-blue-100 rounded text-xs bg-white" />
              <button onClick={() => remove(id)} aria-label={`Remove ${p.title}`} className="text-blue-400 hover:text-red-500 p-0.5"><FiX size={10} /></button>
            </div>
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
                className="w-full text-left px-3 py-1.5 text-[11px] hover:bg-blue-50 text-gray-700">{p.title}</button>
            ))}
          </div>
        )}
        {open && <div className="fixed inset-0 z-[-1]" onClick={() => setOpen(false)} />}
      </div>
    </div>
  );
}

function Avatar({ member, gradientColor, size = "w-14 h-14", text = "text-lg" }) {
  return member.image ? (
    <img src={member.image} alt="" className={`${size} rounded-full object-cover`} />
  ) : (
    <div className={`${size} rounded-full bg-gradient-to-br ${gradientColor} flex items-center justify-center text-white ${text} font-bold`}>
      {member.name?.charAt(0) || "?"}
    </div>
  );
}

// Compact, read-only card; everything is edited in the side panel.
const MemberCard = memo(({ member, idx, gradientColor, onOpen, onDragStart, selected }) => {
  const links = [
    member.linkedin && FiLinkedin,
    member.github && FiGithub,
    member.website && FiGlobe,
  ].filter(Boolean);
  const count = (member.projectIds || []).length;
  return (
    <button
      type="button"
      draggable
      onDragStart={(e) => { e.dataTransfer.setData("text/plain", String(idx)); onDragStart?.(idx); }}
      onClick={() => onOpen(idx)}
      className={`group text-left bg-white rounded-xl border p-3 shadow-sm transition hover:shadow-md hover:border-blue-300 flex items-center gap-3 min-w-0 ${selected ? "border-blue-500 ring-2 ring-blue-100" : "border-gray-200"}`}
    >
      <Avatar member={member} gradientColor={gradientColor} />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-gray-900 truncate">{member.name || <span className="text-gray-400 italic">Unnamed</span>}</p>
        <p className="text-xs text-gray-500 truncate">{member.role || "—"}</p>
        <div className="flex items-center gap-2 mt-1.5 text-gray-400">
          {links.map((Icon, i) => <Icon key={i} size={12} />)}
          <span className={`ml-auto text-[11px] px-1.5 py-0.5 rounded-full ${count ? "bg-blue-50 text-blue-600" : "bg-gray-100 text-gray-400"}`}>
            {count} project{count === 1 ? "" : "s"}
          </span>
        </div>
      </div>
      <FiEdit2 size={14} className="text-gray-300 group-hover:text-blue-500 shrink-0" />
    </button>
  );
});

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-medium text-gray-500 mb-1">{label}</span>
      {children}
    </label>
  );
}

const inputCls = "w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400";

function EditPanel({ member, idx, gradientColor, projects, onChange, onClose, onUpload, onFetchLinkedIn, fetching, onRemove }) {
  const [urlInput, setUrlInput] = useState("");
  const change = (field, val) => onChange(idx, field, val);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <>
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} aria-hidden="true" />
      <aside role="dialog" aria-label={`Edit ${member.name || "member"}`}
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Edit member</h3>
          <button onClick={onClose} aria-label="Close" className="p-2 -m-2 text-gray-400 hover:text-gray-700"><FiX size={18} /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
          <section className="flex items-center gap-4">
            <button onClick={() => onUpload(idx)} className="relative rounded-full group shrink-0" title="Upload photo">
              <Avatar member={member} gradientColor={gradientColor} size="w-20 h-20" text="text-2xl" />
              <span className="absolute inset-0 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"><FiUpload size={16} /></span>
            </button>
            <div className="flex-1 space-y-2">
              <div className="flex gap-1.5">
                <input value={urlInput} onChange={(e) => setUrlInput(e.target.value)} placeholder="Paste image URL" className={`${inputCls} text-xs`} />
                <button onClick={() => { if (urlInput) { change("image", urlInput); setUrlInput(""); } }}
                  className="px-3 bg-gray-100 text-gray-700 rounded-lg text-xs hover:bg-gray-200">Set</button>
              </div>
              <div className="flex gap-1.5">
                <button onClick={() => onUpload(idx)} className="flex-1 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs hover:bg-blue-100 flex items-center justify-center gap-1"><FiUpload size={12} /> Upload</button>
                <button onClick={() => onFetchLinkedIn(idx)} disabled={fetching}
                  className="flex-1 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs hover:bg-blue-100 disabled:opacity-50 flex items-center justify-center gap-1"><FiLinkedin size={12} /> {fetching ? "Fetching…" : "From LinkedIn"}</button>
                {member.image && <button onClick={() => change("image", "")} className="px-2 text-xs text-gray-400 hover:text-red-500">Clear</button>}
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <Field label="Name"><input defaultValue={member.name} onBlur={(e) => change("name", e.target.value)} className={inputCls} /></Field>
            <Field label="Role"><input defaultValue={member.role} onBlur={(e) => change("role", e.target.value)} className={inputCls} /></Field>
            <Field label="Group">
              <select value={member.type} onChange={(e) => change("type", e.target.value)} className={inputCls}>
                <option value="internal">Internal team</option>
                <option value="collaborator">Collaborator</option>
              </select>
            </Field>
          </section>

          <section className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Links</h4>
            <Field label="LinkedIn"><input defaultValue={member.linkedin || ""} onBlur={(e) => change("linkedin", e.target.value)} placeholder="https://www.linkedin.com/in/…" className={`${inputCls} font-mono text-xs`} /></Field>
            <Field label="GitHub"><input defaultValue={member.github || ""} onBlur={(e) => change("github", e.target.value)} placeholder="https://github.com/…" className={`${inputCls} font-mono text-xs`} /></Field>
            <Field label="Website"><input defaultValue={member.website || ""} onBlur={(e) => change("website", e.target.value)} placeholder="https://…" className={`${inputCls} font-mono text-xs`} /></Field>
          </section>

          <section>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Projects &amp; roles ({(member.projectIds || []).length})
            </h4>
            <ProjectPicker selected={member.projectIds || []} roles={member.projectRoles || {}}
              onChange={(ids) => change("projectIds", ids)} onRolesChange={(r) => change("projectRoles", r)} projects={projects} />
          </section>
        </div>

        <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
          <button onClick={() => { if (window.confirm(`Remove ${member.name || "this member"}?`)) { onRemove(idx); onClose(); } }}
            className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1.5"><FiTrash2 size={14} /> Remove member</button>
          <button onClick={onClose} className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700">Done</button>
        </div>
      </aside>
    </>
  );
}

export default function TeamAdmin() {
  const [members, setMembers] = useCollection("team");
  const [projects] = useCollection("projects");
  const [local, setLocal] = useState(null);
  const [dirty, setDirty] = useState(false);
  const [fetchingLi, setFetchingLi] = useState(null);
  const [dragIdx, setDragIdx] = useState(null);
  const [openIdx, setOpenIdx] = useState(null);
  const [query, setQuery] = useState("");
  const toast = useToast();

  useEffect(() => {
    if (members && !local) setLocal(JSON.parse(JSON.stringify(members)));
  }, [members]);

  const save = () => { setMembers(local); setDirty(false); toast("Team saved", "success"); };
  const update = (fn) => { setLocal((prev) => { setDirty(true); return fn(prev); }); };
  const add = (type) => {
    update((prev) => [...prev, { name: "", role: "", image: "", linkedin: "", github: "", type, projectIds: [], projectRoles: {}, website: "" }]);
    setOpenIdx(local.length);
  };
  const remove = (i) => update((prev) => prev.filter((_, idx) => idx !== i));
  const change = (i, field, value) => update((prev) => {
    const next = [...prev]; next[i] = { ...next[i], [field]: value }; return next;
  });

  const handleDrop = (targetType) => (e) => {
    e.preventDefault();
    const from = parseInt(e.dataTransfer.getData("text/plain"));
    if (!isNaN(from) && local[from]?.type !== targetType) change(from, "type", targetType);
    setDragIdx(null);
  };

  const handleUpload = async (i) => {
    const input = document.createElement("input");
    input.type = "file"; input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      try { const { url } = await uploadFile(file); change(i, "image", url); }
      catch (e) { toast("Upload failed: " + e.message, "error"); }
    };
    input.click();
  };

  const fetchLinkedInImage = async (i) => {
    const member = local?.[i];
    if (!member?.linkedin) { toast("Enter a LinkedIn URL first", "info"); return; }
    setFetchingLi(i);
    try {
      const res = await authFetch(`/api/linkedin-image?url=${encodeURIComponent(member.linkedin)}`);
      const data = await res.json();
      if (data.image) { change(i, "image", data.image); toast("Profile image fetched", "success"); }
      if (!data.image) { window.open(member.linkedin, "_blank"); toast("LinkedIn opened. Right-click photo → Copy Image Address → paste it here", "info", 5000); }
    } catch (e) { toast("Error: " + e.message, "error"); }
    setFetchingLi(null);
  };

  if (!local) return null;

  const q = query.trim().toLowerCase();
  const matches = (m) => !q || [m.name, m.role].some((v) => (v || "").toLowerCase().includes(q));

  const renderGroup = (type, title, color) => {
    const indices = local.map((m, i) => (m.type === type && matches(m) ? i : -1)).filter((i) => i >= 0);
    const total = local.filter((m) => m.type === type).length;
    return (
      <div
        key={type}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop(type)}
        className={`mb-8 p-3 -mx-3 rounded-xl border-2 border-dashed transition-colors ${dragIdx !== null ? "border-blue-300 bg-blue-50/30" : "border-transparent"}`}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${color}`} /> {title}
            <span className="text-sm font-normal text-gray-400">{q ? `${indices.length} of ${total}` : total}</span>
          </h3>
          <button onClick={() => add(type)} className="px-2.5 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 flex items-center gap-1">
            <FiPlus size={12} /> Add
          </button>
        </div>
        {indices.length === 0 ? (
          <p className="text-sm text-gray-400 italic text-center py-6">{q ? "No matches" : "Drop members here"}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
            {indices.map((idx) => (
              <MemberCard
                key={idx}
                member={local[idx]}
                idx={idx}
                selected={openIdx === idx}
                gradientColor={gradientColors[idx % gradientColors.length]}
                onOpen={setOpenIdx}
                onDragStart={setDragIdx}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="text-xl font-bold text-gray-900">Team Members</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <FiSearch size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name or role"
              className="pl-8 pr-3 py-1.5 border border-gray-200 rounded-lg text-sm w-56 focus:outline-none focus:border-blue-400" />
          </div>
          {dirty && <span className="text-xs text-amber-600 font-medium">Unsaved</span>}
          <button onClick={save} className={`px-3 py-1.5 text-sm rounded-lg font-medium transition flex items-center gap-1.5 ${dirty ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`} disabled={!dirty}>
            <FiSave size={14} /> Save
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-400 -mt-4 mb-5">Click a member to edit. Drag a card between groups to move it.</p>
      {renderGroup("internal", "Internal Team", "bg-blue-500")}
      {renderGroup("collaborator", "Collaborator Team", "bg-green-500")}

      {openIdx !== null && local[openIdx] && (
        <EditPanel
          key={openIdx}
          member={local[openIdx]}
          idx={openIdx}
          gradientColor={gradientColors[openIdx % gradientColors.length]}
          projects={projects}
          onChange={change}
          onClose={() => setOpenIdx(null)}
          onUpload={handleUpload}
          onFetchLinkedIn={fetchLinkedInImage}
          fetching={fetchingLi === openIdx}
          onRemove={remove}
        />
      )}
    </div>
  );
}
