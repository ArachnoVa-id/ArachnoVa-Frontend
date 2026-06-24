import { useState, useEffect } from "react";
import { useCollection } from "@/context/DataContext";
import { useToast } from "@/components/ui/Toast";

export default function SettingsAdmin() {
  const [settings, setSettings] = useCollection("settings");
  const [local, setLocal] = useState(null);
  const [dirty, setDirty] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (settings && !local) setLocal({ ...settings });
  }, [settings]);

  const update = (field, value) => {
    setLocal((prev) => { setDirty(true); return { ...prev, [field]: value }; });
  };

  const save = () => {
    setSettings(local);
    setDirty(false);
    toast("Settings saved", "success");
  };

  if (!local) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Contact Settings</h2>
        <div className="flex items-center gap-3">
          {dirty && <span className="text-xs text-amber-600 font-medium">Unsaved</span>}
          <button onClick={save} className={`px-4 py-1.5 text-sm rounded-lg font-medium transition ${dirty ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`} disabled={!dirty}>Save</button>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm max-w-xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp URL</label>
            <input value={local.whatsapp || ""} onChange={(e) => update("whatsapp", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input value={local.email || ""} onChange={(e) => update("email", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Instagram URL</label>
            <input value={local.instagram || ""} onChange={(e) => update("instagram", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
            <input value={local.linkedin || ""} onChange={(e) => update("linkedin", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
          </div>
        </div>
      </div>
    </div>
  );
}
