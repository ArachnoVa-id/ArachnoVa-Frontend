import { useCollection } from "@/context/DataContext";

export default function NavigationAdmin() {
  const [nav, setNav] = useCollection("navigation");

  const update = (field, value) => setNav({ ...nav, [field]: value });

  const updateNavLink = (index, field, value) => {
    const links = [...(nav.navLinks || [])];
    links[index] = { ...links[index], [field]: value };
    update("navLinks", links);
  };

  const addNavLink = () => {
    update("navLinks", [...(nav.navLinks || []), { label: "", href: "" }]);
  };

  const removeNavLink = (index) => {
    update("navLinks", nav.navLinks.filter((_, i) => i !== index));
  };

  const updateSocial = (index, field, value) => {
    const links = [...(nav.socialLinks || [])];
    links[index] = { ...links[index], [field]: value };
    update("socialLinks", links);
  };

  const addSocial = () => {
    update("socialLinks", [...(nav.socialLinks || []), { platform: "", href: "", icon: "" }]);
  };

  const removeSocial = (index) => {
    update("socialLinks", nav.socialLinks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Navigation</h2>

      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Link</label>
              <input value={nav.contactWhatsApp || ""} onChange={(e) => update("contactWhatsApp", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input value={nav.contactEmail || ""} onChange={(e) => update("contactEmail", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Footer Copyright</label>
              <input value={nav.footer?.copyright || ""} onChange={(e) => update("footer", { ...nav.footer, copyright: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Follow Us Text</label>
              <input value={nav.footer?.followText || ""} onChange={(e) => update("footer", { ...nav.footer, followText: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Nav Links</h3>
            <button onClick={addNavLink} className="text-sm text-blue-600 hover:text-blue-800 font-medium">+ Add Link</button>
          </div>
          <div className="space-y-2">
            {nav.navLinks?.map((link, i) => (
              <div key={i} className="flex gap-2">
                <input value={link.label} onChange={(e) => updateNavLink(i, "label", e.target.value)} placeholder="Label" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                <input value={link.href} onChange={(e) => updateNavLink(i, "href", e.target.value)} placeholder="/path" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
                <button onClick={() => removeNavLink(i)} className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm">×</button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Social Links</h3>
            <button onClick={addSocial} className="text-sm text-blue-600 hover:text-blue-800 font-medium">+ Add Social</button>
          </div>
          <div className="space-y-2">
            {nav.socialLinks?.map((link, i) => (
              <div key={i} className="flex gap-2">
                <input value={link.platform} onChange={(e) => updateSocial(i, "platform", e.target.value)} placeholder="Platform" className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                <input value={link.href} onChange={(e) => updateSocial(i, "href", e.target.value)} placeholder="URL" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
                <input value={link.icon || ""} onChange={(e) => updateSocial(i, "icon", e.target.value)} placeholder="Icon name" className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                <button onClick={() => removeSocial(i)} className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm">×</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
