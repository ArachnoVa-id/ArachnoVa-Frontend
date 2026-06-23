import { useState } from "react";
import { useCollection } from "@/context/DataContext";

export default function ServicesAdmin() {
  const [services, setServices] = useCollection("services");

  const update = (key, field, value) => {
    setServices(services.map((s) => (s.key === key ? { ...s, [field]: value } : s)));
  };

  const addImage = (key) => {
    update(key, "images", [...(services.find((s) => s.key === key)?.images || []), ""]);
  };

  const updateImage = (key, imgIndex, value) => {
    const s = services.find((s) => s.key === key);
    const imgs = [...s.images];
    imgs[imgIndex] = value;
    update(key, "images", imgs);
  };

  const removeImage = (key, imgIndex) => {
    const s = services.find((s) => s.key === key);
    update(key, "images", s.images.filter((_, i) => i !== imgIndex));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Services</h2>
      <div className="space-y-6">
        {services.map((s) => (
          <div key={s.key} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input value={s.title} onChange={(e) => update(s.key, "title", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Icon Path</label>
                <input value={s.icon} onChange={(e) => update(s.key, "icon", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea value={s.description} onChange={(e) => update(s.key, "description", e.target.value)} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Images</label>
                <div className="space-y-2">
                  {s.images.map((img, i) => (
                    <div key={i} className="flex gap-2">
                      <input value={img} onChange={(e) => updateImage(s.key, i, e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
                      <button onClick={() => removeImage(s.key, i)} className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm">×</button>
                    </div>
                  ))}
                  <button onClick={() => addImage(s.key)} className="text-sm text-blue-600 hover:text-blue-800 font-medium">+ Add Image</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
