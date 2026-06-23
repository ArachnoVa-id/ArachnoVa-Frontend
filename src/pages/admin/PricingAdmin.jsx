import { useState, useEffect } from "react";
import { useCollection } from "@/context/DataContext";

export default function PricingAdmin() {
  const [pricing, setPricing] = useCollection("pricing");
  const [local, setLocal] = useState(null);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (pricing && !local) setLocal(JSON.parse(JSON.stringify(pricing)));
  }, [pricing]);

  const update = (fn) => {
    setLocal((prev) => {
      const next = fn(prev);
      setDirty(true);
      return next;
    });
  };

  const save = () => {
    setPricing(local);
    setDirty(false);
  };

  const addRow = () => update((p) => ({
    ...p, featureRows: [...(p.featureRows || []), "New Feature"],
    plans: (p.plans || []).map((pl) => ({ ...pl, values: [...(pl.values || []), ""] }))
  }));

  const removeRow = (i) => update((p) => ({
    ...p, featureRows: p.featureRows.filter((_, idx) => idx !== i),
    plans: (p.plans || []).map((pl) => ({ ...pl, values: pl.values.filter((_, idx) => idx !== i) }))
  }));

  const addPlan = () => update((p) => ({
    ...p, plans: [...(p.plans || []), {
      name: "New Plan", price: "", priceNote: "", popular: false,
      cta: "https://wa.me/6287882832538", ctaText: "Pilih Paket",
      subtitle: "", values: (p.featureRows || []).map(() => "")
    }]
  }));

  const removePlan = (i) => update((p) => ({
    ...p, plans: p.plans.filter((_, idx) => idx !== i)
  }));

  const updateCell = (planIdx, rowIdx, value) => update((p) => {
    const plans = [...p.plans];
    const values = [...(plans[planIdx].values || [])];
    values[rowIdx] = value;
    plans[planIdx] = { ...plans[planIdx], values };
    return { ...p, plans };
  });

  const updatePlanField = (planIdx, field, value) => update((p) => {
    const plans = [...p.plans];
    plans[planIdx] = { ...plans[planIdx], [field]: value };
    return { ...p, plans };
  });

  if (!local) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Services Pricing Table</h2>
        <div className="flex items-center gap-3">
          {dirty && <span className="text-xs text-amber-600 font-medium">Unsaved changes</span>}
          <button onClick={addRow} className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">+ Add Row</button>
          <button onClick={addPlan} className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">+ Add Plan</button>
          <button onClick={save} className={`px-4 py-1.5 text-sm rounded-lg font-medium transition ${dirty ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`} disabled={!dirty}>
            {dirty ? "Save Changes" : "Saved"}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
        <table className="w-full text-sm">
          <thead>
            {/* Row 1: Plan name + delete */}
            <tr className="bg-gray-50">
              <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-r border-gray-200 min-w-[160px]">Feature</th>
              {local.plans?.map((plan, pi) => (
                <th key={pi} className="px-3 py-3 border-b border-r border-gray-200 text-center min-w-[180px] relative group">
                  <input value={plan.name} onChange={(e) => updatePlanField(pi, "name", e.target.value)}
                    className="w-full text-center font-semibold text-gray-900 bg-transparent border-none focus:outline-none" />
                  <button onClick={() => removePlan(pi)}
                    className="absolute -top-1 -right-1 text-red-400 hover:text-red-600 text-xs bg-white rounded-full w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">✕</button>
                </th>
              ))}
            </tr>
            {/* Row 2: Price */}
            <tr className="bg-gray-50/50">
              <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 border-b border-r border-gray-200">Price</th>
              {local.plans?.map((plan, pi) => (
                <th key={pi} className="px-3 py-2 border-b border-r border-gray-200 text-center">
                  <div className="flex gap-1 items-center justify-center">
                    <input value={plan.priceNote || ""} onChange={(e) => updatePlanField(pi, "priceNote", e.target.value)}
                      placeholder="Note" className="w-14 text-center text-[11px] text-gray-400 bg-transparent border border-gray-200 rounded px-1 focus:outline-none" />
                    <input value={plan.price} onChange={(e) => updatePlanField(pi, "price", e.target.value)}
                      className="w-20 text-center font-semibold text-gray-900 bg-transparent border-none focus:outline-none" />
                  </div>
                </th>
              ))}
            </tr>
            {/* Row 3: Buttons + Popular */}
            <tr className="bg-gray-50/30">
              <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 border-b border-r border-gray-200">CTA</th>
              {local.plans?.map((plan, pi) => (
                <th key={pi} className="px-3 py-2 border-b border-r border-gray-200 text-center">
                  <div className="flex flex-col gap-1 items-center">
                    <div className="flex gap-1 w-full">
                      <input value={plan.ctaText || ""} onChange={(e) => updatePlanField(pi, "ctaText", e.target.value)}
                        placeholder="Btn text" className="flex-1 min-w-0 px-1.5 py-1 text-[11px] border border-gray-200 rounded focus:outline-none text-center" />
                      <input value={plan.cta || ""} onChange={(e) => updatePlanField(pi, "cta", e.target.value)}
                        placeholder="URL" className="flex-1 min-w-0 px-1.5 py-1 text-[11px] font-mono border border-gray-200 rounded focus:outline-none" />
                    </div>
                    <label className="flex items-center gap-1.5 text-[11px] text-gray-500">
                      <input type="checkbox" checked={!!plan.popular} onChange={(e) => updatePlanField(pi, "popular", e.target.checked)} className="rounded" />
                      Highlight
                    </label>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {local.featureRows?.map((feature, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/30"}>
                <td className="px-4 py-2.5 border-b border-r border-gray-200 font-medium text-gray-700">
                  <div className="flex items-center gap-2">
                    <input value={feature} onChange={(e) => {
                      const rows = [...local.featureRows];
                      rows[ri] = e.target.value;
                      setLocal((p) => { setDirty(true); return { ...p, featureRows: rows }; });
                    }} className="bg-transparent border-none focus:outline-none w-full" />
                    <button onClick={() => removeRow(ri)} className="text-red-300 hover:text-red-500 text-xs shrink-0">✕</button>
                  </div>
                </td>
                {local.plans?.map((plan, pi) => (
                  <td key={pi} className="px-3 py-2.5 border-b border-r border-gray-200 text-center">
                    <input value={plan.values?.[ri] ?? ""} onChange={(e) => updateCell(pi, ri, e.target.value)}
                      className="w-full text-center bg-transparent border border-transparent hover:border-gray-200 focus:border-blue-400 focus:outline-none rounded px-1 py-0.5 transition" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
