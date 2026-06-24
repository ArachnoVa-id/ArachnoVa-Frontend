import { useState, useEffect } from "react";
import { useCollection } from "@/context/DataContext";
import { FiTrash2 } from "react-icons/fi";

export default function PricingAdmin() {
  const [pricing, setPricing] = useCollection("pricing");
  const [local, setLocal] = useState(null);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (pricing && !local) setLocal(JSON.parse(JSON.stringify(pricing)));
  }, [pricing]);

  const save = () => { setPricing(local); setDirty(false); };

  const update = (fn) => { setLocal((prev) => { setDirty(true); return fn(prev); }); };

  const updatePlanField = (pi, field, value) => update((p) => {
    const plans = [...p.plans];
    plans[pi] = { ...plans[pi], [field]: value };
    return { ...p, plans };
  });

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

  const updateCell = (pi, ri, value) => update((p) => {
    const plans = [...p.plans];
    const values = [...(plans[pi].values || [])];
    values[ri] = value;
    plans[pi] = { ...plans[pi], values };
    return { ...p, plans };
  });

  const updateRowLabel = (ri, value) => update((p) => {
    const rows = [...p.featureRows];
    rows[ri] = value;
    return { ...p, featureRows: rows };
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
          <button onClick={save} className={`px-4 py-1.5 text-sm rounded-lg font-medium transition ${dirty ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`} disabled={!dirty}>Save</button>
        </div>
      </div>

      {/* Single combined table */}
      <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-r border-gray-200 min-w-[160px]">Feature</th>
              {local.plans?.map((plan, pi) => (
                <th key={pi} className="px-3 py-3 border-b border-r border-gray-200 text-center min-w-[180px] relative group">
                  <input value={plan.name} onChange={(e) => updatePlanField(pi, "name", e.target.value)}
                    className="w-full text-center font-semibold text-gray-900 bg-transparent border-none focus:outline-none" />
                  <button onClick={() => removePlan(pi)}
                    className="absolute -top-3 -right-3 text-red-400 hover:text-red-600 bg-white rounded-full w-7 h-7 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition hover:shadow-lg hover:scale-110 z-10"><FiTrash2 size={14} /></button>
                </th>
              ))}
            </tr>
            {/* Subtitle */}
            <tr className="bg-gray-50/30">
              <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 border-b border-r border-gray-200">Subtitle</th>
              {local.plans?.map((plan, pi) => (
                <th key={pi} className="px-3 py-2 border-b border-r border-gray-200 text-center">
                  <textarea value={plan.subtitle || ""} onChange={(e) => updatePlanField(pi, "subtitle", e.target.value)}
                    placeholder="Plan description" rows={2} className="w-full text-center text-xs border border-gray-200 rounded px-1 py-1 focus:outline-none resize-none" />
                </th>
              ))}
            </tr>
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
          </thead>
          <tbody>
            {/* Feature rows */}
            {local.featureRows?.map((feature, ri) => (
              <tr key={`feat-${ri}`} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/30"}>
                <td className="px-4 py-2.5 border-b border-r border-gray-200 font-medium text-gray-700">
                  <div className="flex items-center gap-2">
                    <input value={feature} onChange={(e) => updateRowLabel(ri, e.target.value)}
                      className="bg-transparent border-none focus:outline-none w-full" />
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

            {/* Empty separator row */}
            <tr className="bg-gray-100/50">
              <td colSpan={(local.plans?.length || 0) + 1} className="h-6 border-b border-r border-gray-200" />
            </tr>

            {/* CTA section header */}
            <tr className="bg-gray-50">
              <td className="px-4 py-2.5 border-b border-r border-gray-200 text-xs font-semibold text-gray-500">CTA Settings</td>
              {local.plans?.map((plan, pi) => (
                <td key={pi} className="px-3 py-2.5 border-b border-r border-gray-200 text-center text-xs font-medium text-gray-500">
                  {plan.name}
                </td>
              ))}
            </tr>

            {/* CTA: Button Text */}
            <tr className="bg-white">
              <td className="px-4 py-2.5 border-b border-r border-gray-200 text-xs font-medium text-gray-500">Button Text</td>
              {local.plans?.map((plan, pi) => (
                <td key={pi} className="px-3 py-2 border-b border-r border-gray-200 text-center">
                  <input value={plan.ctaText || ""} onChange={(e) => updatePlanField(pi, "ctaText", e.target.value)}
                    placeholder="Btn text" className="w-full px-2 py-1.5 text-xs border border-gray-200 rounded focus:outline-none text-center" />
                </td>
              ))}
            </tr>

            {/* CTA: URL */}
            <tr className="bg-gray-50/30">
              <td className="px-4 py-2.5 border-b border-r border-gray-200 text-xs font-medium text-gray-500">URL</td>
              {local.plans?.map((plan, pi) => (
                <td key={pi} className="px-3 py-2 border-b border-r border-gray-200 text-center">
                  <input value={plan.cta || ""} onChange={(e) => updatePlanField(pi, "cta", e.target.value)}
                    placeholder="URL" className="w-full px-2 py-1.5 text-xs font-mono border border-gray-200 rounded focus:outline-none" />
                </td>
              ))}
            </tr>

            {/* CTA: Popular */}
            <tr className="bg-white">
              <td className="px-4 py-2.5 border-r border-gray-200 text-xs font-medium text-gray-500">Popular</td>
              {local.plans?.map((plan, pi) => (
                <td key={pi} className="px-3 py-2 border-r border-gray-200 text-center">
                  <label className="inline-flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
                    <input type="checkbox" checked={!!plan.popular} onChange={(e) => updatePlanField(pi, "popular", e.target.checked)} className="rounded" />
                    Highlight
                  </label>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
