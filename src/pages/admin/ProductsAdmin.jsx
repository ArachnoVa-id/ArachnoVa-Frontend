import { useCollection } from "@/context/DataContext";

export default function ProductsAdmin() {
  const [products, setProducts] = useCollection("products");

  const updateSection = (field, value) => {
    setProducts({ ...products, [field]: value });
  };

  const updateItem = (index, field, value) => {
    const items = [...(products.items || [])];
    items[index] = { ...items[index], [field]: value };
    setProducts({ ...products, items });
  };

  const updateSlideImage = (itemIndex, imgIndex, value) => {
    const items = [...(products.items || [])];
    const imgs = [...(items[itemIndex].slideImages || [])];
    imgs[imgIndex] = value;
    items[itemIndex] = { ...items[itemIndex], slideImages: imgs };
    setProducts({ ...products, items });
  };

  const addSlideImage = (itemIndex) => {
    const items = [...(products.items || [])];
    items[itemIndex] = { ...items[itemIndex], slideImages: [...(items[itemIndex].slideImages || []), ""] };
    setProducts({ ...products, items });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Products (Homepage)</h2>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
            <input value={products.title || ""} onChange={(e) => updateSection("title", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Section Subtitle</label>
            <input value={products.subtitle || ""} onChange={(e) => updateSection("subtitle", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {products.items?.map((item, i) => (
          <div key={item.id || i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">{item.title || `Product ${i + 1}`}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input value={item.title} onChange={(e) => updateItem(i, "title", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
                <input value={item.id} onChange={(e) => updateItem(i, "id", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Layout Variant</label>
                <select value={item.variant} onChange={(e) => updateItem(i, "variant", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option value="Left">Left</option>
                  <option value="Right">Right</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                <input value={item.href} onChange={(e) => updateItem(i, "href", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea value={item.description} onChange={(e) => updateItem(i, "description", e.target.value)} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Slide Images</label>
                {item.slideImages?.map((img, j) => (
                  <div key={j} className="flex gap-2 mb-2">
                    <input value={img} onChange={(e) => updateSlideImage(i, j, e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
                  </div>
                ))}
                <button onClick={() => addSlideImage(i)} className="text-sm text-blue-600 hover:text-blue-800 font-medium">+ Add Image</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
