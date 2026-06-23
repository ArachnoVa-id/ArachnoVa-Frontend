import { useCollection } from "@/context/DataContext";

export default function PricingAdmin() {
  const [pricing, setPricing] = useCollection("pricing");

  const addRow = () => {
    const rows = [...(pricing.featureRows || []), "New Feature"];
    const plans = (pricing.plans || []).map((p) => ({ ...p, values: [...(p.values || []), ""] }));
    setPricing({ ...pricing, featureRows: rows, plans });
  };

  const removeRow = (i) => {
    const rows = pricing.featureRows.filter((_, idx) => idx !== i);
    const plans = (pricing.plans || []).map((p) => ({ ...p, values: p.values.filter((_, idx) => idx !== i) }));
    setPricing({ ...pricing, featureRows: rows, plans });
  };

  const addPlan = () => {
    const plans = [...(pricing.plans || [])];
    plans.push({ name: "New Plan", price: "", priceNote: "", popular: false, cta: "https://wa.me/6287882832538", ctaText: "Pilih Paket", values: (pricing.featureRows || []).map(() => "") });
    setPricing({ ...pricing, plans });
  };

  const removePlan = (i) => {
    const plans = pricing.plans.filter((_, idx) => idx !== i);
    setPricing({ ...pricing, plans });
  };

  const updateCell = (planIdx, rowIdx, value) => {
    const plans = [...pricing.plans];
    const values = [...(plans[planIdx].values || [])];
    values[rowIdx] = value;
    plans[planIdx] = { ...plans[planIdx], values };
    setPricing({ ...pricing, plans });
  };

  const updatePlanField = (planIdx, field, value) => {
    const plans = [...pricing.plans];
    plans[planIdx] = { ...plans[planIdx], [field]: value };
    setPricing({ ...pricing, plans });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Services Pricing Table</h2>
        <div className="flex gap-2">
          <button onClick={addRow} className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">+ Add Row</button>
          <button onClick={addPlan} className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">+ Add Plan</button>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-r border-gray-200 min-w-[160px]">Feature</th>
              {pricing.plans?.map((plan, pi) => (
                <th key={pi} className="px-3 py-3 border-b border-r border-gray-200 text-center min-w-[180px] relative group">
                  <input value={plan.name} onChange={(e) => updatePlanField(pi, "name", e.target.value)} className="w-full text-center font-semibold text-gray-900 bg-transparent border-none focus:outline-none" />
                  <button onClick={() => removePlan(pi)} className="absolute -top-1 -right-1 text-red-400 hover:text-red-600 text-xs bg-white rounded-full w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">✕</button>
                </th>
              ))}
            </tr>
            <tr className="bg-gray-50/50">
              <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 border-b border-r border-gray-200">Price</th>
              {pricing.plans?.map((plan, pi) => (
                <th key={pi} className="px-3 py-2 border-b border-r border-gray-200 text-center">
                  <div className="flex gap-1 items-center justify-center">
                    <input value={plan.priceNote || ""} onChange={(e) => updatePlanField(pi, "priceNote", e.target.value)} placeholder="Note" className="w-16 text-center text-[11px] text-gray-400 bg-transparent border border-gray-200 rounded px-1 focus:outline-none" />
                    <input value={plan.price} onChange={(e) => updatePlanField(pi, "price", e.target.value)} className="w-20 text-center font-semibold text-gray-900 bg-transparent border-none focus:outline-none" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricing.featureRows?.map((feature, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/30"}>
                <td className="px-4 py-2.5 border-b border-r border-gray-200 font-medium text-gray-700">
                  <div className="flex items-center gap-2">
                    <input value={feature} onChange={(e) => {
                      const rows = [...pricing.featureRows];
                      rows[ri] = e.target.value;
                      setPricing({ ...pricing, featureRows: rows });
                    }} className="bg-transparent border-none focus:outline-none w-full" />
                    <button onClick={() => removeRow(ri)} className="text-red-300 hover:text-red-500 text-xs shrink-0">✕</button>
                  </div>
                </td>
                {pricing.plans?.map((plan, pi) => (
                  <td key={pi} className="px-3 py-2.5 border-b border-r border-gray-200 text-center">
                    <input value={plan.values?.[ri] ?? ""} onChange={(e) => updateCell(pi, ri, e.target.value)} className="w-full text-center bg-transparent border border-transparent hover:border-gray-200 focus:border-blue-400 focus:outline-none rounded px-1 py-0.5 transition" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick plan field edits */}
      {pricing.plans?.length > 0 && (
        <details className="mt-4 text-sm text-gray-500">
          <summary className="cursor-pointer hover:text-gray-700">CTA settings</summary>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {pricing.plans.map((plan, pi) => (
              <div key={pi} className="border border-gray-200 rounded-lg p-3 space-y-2">
                <p className="font-medium text-gray-700">{plan.name}</p>
                <div className="flex gap-2">
                  <input value={plan.ctaText || ""} onChange={(e) => updatePlanField(pi, "ctaText", e.target.value)} placeholder="Btn text" className="flex-1 px-2 py-1 border border-gray-200 rounded text-xs focus:outline-none" />
                  <input value={plan.cta || ""} onChange={(e) => updatePlanField(pi, "cta", e.target.value)} placeholder="URL" className="flex-1 px-2 py-1 border border-gray-200 rounded text-xs font-mono focus:outline-none" />
                </div>
                <label className="flex items-center gap-2 text-xs">
                  <input type="checkbox" checked={!!plan.popular} onChange={(e) => updatePlanField(pi, "popular", e.target.checked)} className="rounded" />
                  Popular / Highlighted
                </label>
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
