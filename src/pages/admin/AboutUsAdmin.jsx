import { useCollection } from "@/context/DataContext";

export default function AboutUsAdmin() {
  const [about, setAbout] = useCollection("about-us");

  const update = (field, value) => setAbout({ ...about, [field]: value });

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">About Us Page</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input value={about.title || ""} onChange={(e) => update("title", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
            <input value={about.subtitle || ""} onChange={(e) => update("subtitle", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
            <input value={about.brand || ""} onChange={(e) => update("brand", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea value={about.description || ""} onChange={(e) => update("description", e.target.value)} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Vision</label>
            <textarea value={about.vision || ""} onChange={(e) => update("vision", e.target.value)} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Mission</label>
            <textarea value={about.mission || ""} onChange={(e) => update("mission", e.target.value)} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
