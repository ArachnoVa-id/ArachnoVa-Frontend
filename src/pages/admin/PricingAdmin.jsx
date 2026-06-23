import { useCollection } from "@/context/DataContext";

export default function PricingAdmin() {
  const [pricing, setPricing] = useCollection("pricing");

  const updateMeta = (field, value) => {
    setPricing({ ...pricing, [field]: value });
  };

  const addFeatureRow = () => {
    const featureRows = [...(pricing.featureRows || []), "New Feature"];
    const plans = (pricing.plans || []).map((p) => ({
      ...p,
      values: [...(p.values || []), ""],
    }));
    setPricing({ ...pricing, featureRows, plans });
  };

  const removeFeatureRow = (index) => {
    const featureRows = pricing.featureRows.filter((_, i) => i !== index);
    const plans = (pricing.plans || []).map((p) => ({
      ...p,
      values: p.values.filter((_, i) => i !== index),
    }));
    setPricing({ ...pricing, featureRows, plans });
  };

  const updateFeatureRow = (index, value) => {
    const featureRows = [...pricing.featureRows];
    featureRows[index] = value;
    setPricing({ ...pricing, featureRows });
  };

  const addPlan = () => {
    const plans = [...(pricing.plans || [])];
    plans.push({
      name: "New Plan",
      price: "",
      priceNote: "",
      popular: false,
      cta: "https://wa.me/6287882832538",
      ctaText: "Pilih Paket",
      values: (pricing.featureRows || []).map(() => ""),
    });
    setPricing({ ...pricing, plans });
  };

  const removePlan = (index) => {
    const plans = pricing.plans.filter((_, i) => i !== index);
    setPricing({ ...pricing, plans });
  };

  const updatePlan = (index, field, value) => {
    const plans = [...pricing.plans];
    plans[index] = { ...plans[index], [field]: value };
    setPricing({ ...pricing, plans });
  };

  const updatePlanValue = (planIndex, rowIndex, value) => {
    const plans = [...pricing.plans];
    const values = [...(plans[planIndex].values || [])];
    values[rowIndex] = value;
    plans[planIndex] = { ...plans[planIndex], values };
    setPricing({ ...pricing, plans });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Table</h2>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
            <input value={pricing.title || ""} onChange={(e) => updateMeta("title", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Section Subtitle</label>
            <input value={pricing.subtitle || ""} onChange={(e) => updateMeta("subtitle", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </div>
      </div>

      {/* Feature Rows */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Features (Rows)</h3>
          <button onClick={addFeatureRow} className="text-sm text-blue-600 hover:text-blue-800 font-medium">+ Add Feature</button>
        </div>
        <div className="space-y-2">
          {pricing.featureRows?.map((feature, i) => (
            <div key={i} className="flex gap-2 items-center">
              <span className="text-xs text-gray-400 w-6">{i + 1}.</span>
              <input value={feature} onChange={(e) => updateFeatureRow(i, e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              <button onClick={() => removeFeatureRow(i)} className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm">×</button>
            </div>
          ))}
        </div>
      </div>

      {/* Plans */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Plans (Columns)</h3>
          <button onClick={addPlan} className="text-sm text-blue-600 hover:text-blue-800 font-medium">+ Add Plan</button>
        </div>
        {pricing.plans?.map((plan, pi) => (
          <div key={pi} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-900">{plan.name || `Plan ${pi + 1}`}</h4>
              <button onClick={() => removePlan(pi)} className="text-sm text-red-600 hover:text-red-800 font-medium">Remove</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Plan Name</label>
                <input value={plan.name} onChange={(e) => updatePlan(pi, "name", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Price</label>
                <input value={plan.price} onChange={(e) => updatePlan(pi, "price", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Price Note</label>
                <input value={plan.priceNote || ""} onChange={(e) => updatePlan(pi, "priceNote", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
              <div className="flex items-center gap-3 pt-5">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={!!plan.popular} onChange={(e) => updatePlan(pi, "popular", e.target.checked)} className="rounded" />
                  Popular / Highlighted
                </label>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">CTA Link</label>
                <input value={plan.cta || ""} onChange={(e) => updatePlan(pi, "cta", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">CTA Button Text</label>
                <input value={plan.ctaText || ""} onChange={(e) => updatePlan(pi, "ctaText", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-xs font-medium text-gray-500 mb-2">Feature Values (match order of Features above)</p>
              <div className="space-y-2">
                {pricing.featureRows?.map((feature, ri) => (
                  <div key={ri} className="flex gap-2 items-center">
                    <span className="text-xs text-gray-400 w-6 flex-shrink-0">{ri + 1}.</span>
                    <span className="text-xs text-gray-600 w-40 flex-shrink-0 truncate">{feature}</span>
                    <input value={plan.values?.[ri] ?? ""} onChange={(e) => updatePlanValue(pi, ri, e.target.value)} className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm" placeholder="Value, ✓, ✗, or -" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
