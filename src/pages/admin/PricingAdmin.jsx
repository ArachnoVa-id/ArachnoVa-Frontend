import { useCollection } from "@/context/DataContext";

export default function PricingAdmin() {
  const [pricing, setPricing] = useCollection("pricing");

  const updateSection = (field, value) => {
    setPricing({ ...pricing, [field]: value });
  };

  const updatePackage = (index, field, value) => {
    const pkgs = [...pricing.packages];
    if (field.startsWith("features.")) {
      const feat = field.split(".")[1];
      pkgs[index] = { ...pkgs[index], features: { ...pkgs[index].features, [feat]: value } };
    } else {
      pkgs[index] = { ...pkgs[index], [field]: value };
    }
    setPricing({ ...pricing, packages: pkgs });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
            <input value={pricing.title || ""} onChange={(e) => updateSection("title", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Section Subtitle</label>
            <input value={pricing.subtitle || ""} onChange={(e) => updateSection("subtitle", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {pricing.packages?.map((pkg, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">{pkg.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Package Name</label>
                <input value={pkg.name} onChange={(e) => updatePackage(i, "name", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                <input value={pkg.subtitle} onChange={(e) => updatePackage(i, "subtitle", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input value={pkg.price} onChange={(e) => updatePackage(i, "price", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Note</label>
                <input value={pkg.priceNote || ""} onChange={(e) => updatePackage(i, "priceNote", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pages</label>
                <input value={pkg.features.pages} onChange={(e) => updatePackage(i, "features.pages", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sections</label>
                <input value={pkg.features.sections} onChange={(e) => updatePackage(i, "features.sections", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Time</label>
                <input value={pkg.features.estimatedTime} onChange={(e) => updatePackage(i, "features.estimatedTime", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Admin Config</label>
                <select value={pkg.features.adminConfig === null ? "" : String(pkg.features.adminConfig)} onChange={(e) => {
                  const v = e.target.value;
                  updatePackage(i, "features.adminConfig", v === "" ? null : v === "true");
                }} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option value="">Not Applicable</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customization</label>
                <input value={pkg.features.customization} onChange={(e) => updatePackage(i, "features.customization", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Extension</label>
                <input value={pkg.features.extension} onChange={(e) => updatePackage(i, "features.extension", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
