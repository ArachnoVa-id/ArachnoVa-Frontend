import { useCollection } from "@/context/DataContext";

export default function SettingsAdmin() {
  const [settings, setSettings] = useCollection("settings");

  const update = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Settings</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm max-w-xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp URL</label>
            <input value={settings.whatsapp || ""} onChange={(e) => update("whatsapp", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" placeholder="https://wa.me/..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input value={settings.email || ""} onChange={(e) => update("email", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" placeholder="mailto:..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Instagram URL</label>
            <input value={settings.instagram || ""} onChange={(e) => update("instagram", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" placeholder="https://instagram.com/..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
            <input value={settings.linkedin || ""} onChange={(e) => update("linkedin", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" placeholder="https://linkedin.com/..." />
          </div>
        </div>
      </div>
    </div>
  );
}
