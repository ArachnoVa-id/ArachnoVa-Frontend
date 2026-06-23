import { useCollection } from "@/context/DataContext";

const API_BASE = import.meta.env.VITE_API_URL || "";
const gradientColors = [
  "from-purple-400 to-pink-400",
  "from-blue-400 to-teal-400",
  "from-orange-400 to-red-400",
  "from-green-400 to-cyan-400",
  "from-yellow-400 to-orange-400",
  "from-pink-400 to-rose-400",
  "from-indigo-400 to-purple-400",
  "from-teal-400 to-green-400",
];

function uploadFile(file) {
  const fd = new FormData();
  fd.append("file", file);
  return fetch(`${API_BASE}/api/upload`, { method: "POST", body: fd }).then((r) => r.json());
}

export default function TeamAdmin() {
  const [members, setMembers] = useCollection("team");

  const update = (index, field, value) => {
    const next = [...(members || [])];
    next[index] = { ...next[index], [field]: value };
    setMembers(next);
  };

  const add = () => {
    setMembers([...(members || []), { name: "", role: "", image: "" }]);
  };

  const remove = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const handleUpload = async (index) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        const { url } = await uploadFile(file);
        update(index, "image", url);
      } catch (e) {
        alert("Upload failed: " + e.message);
      }
    };
    input.click();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Team Members</h2>
        <button onClick={add} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">+ Add Member</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members?.map((m, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            <div
              className={`w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br ${gradientColors[i % gradientColors.length]} flex items-center justify-center text-white text-2xl font-bold overflow-hidden cursor-pointer relative group`}
              onClick={() => handleUpload(i)}
            >
              {m.image ? (
                <img src={m.image} alt="" className="w-full h-full object-cover" />
              ) : (
                <span>{m.name?.charAt(0) || "?"}</span>
              )}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-white text-xs font-normal rounded-full">
                Upload
              </div>
            </div>
            <div className="space-y-2">
              <input value={m.name} onChange={(e) => update(i, "name", e.target.value)} placeholder="Name" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-center font-medium" />
              <input value={m.role} onChange={(e) => update(i, "role", e.target.value)} placeholder="Role" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-center" />
              <button onClick={() => remove(i)} className="w-full text-sm text-red-600 hover:bg-red-50 py-2 rounded-lg">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
