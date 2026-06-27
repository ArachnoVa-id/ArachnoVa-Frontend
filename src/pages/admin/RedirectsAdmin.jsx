import { useState, useEffect } from "react";
import { useCollection } from "@/context/DataContext";
import { useToast } from "@/components/ui/Toast";

export default function RedirectsAdmin() {
  const [redirects, setRedirects] = useCollection("redirects");
  const [local, setLocal] = useState(null);
  const [dirty, setDirty] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (redirects && !local) setLocal(JSON.parse(JSON.stringify(redirects)));
  }, [redirects]);

  const save = () => { setRedirects(local); setDirty(false); toast("Redirects saved", "success"); };

  const update = (fn) => {
    setLocal((prev) => { setDirty(true); return fn(prev); });
  };

  const add = () => update((prev) => [...prev, { path: "", redirect: "" }]);

  const remove = (i) => update((prev) => prev.filter((_, idx) => idx !== i));

  const change = (i, field, value) => update((prev) => {
    const next = [...prev];
    next[i] = { ...next[i], [field]: value };
    return next;
  });

  if (!local) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Redirects</h2>
        <div className="flex items-center gap-3">
          {dirty && <span className="text-xs text-amber-600 font-medium">Unsaved changes</span>}
          <button onClick={add} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">+ Add Redirect</button>
          <button onClick={save} className={`px-4 py-1.5 text-sm rounded-lg font-medium transition ${dirty ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`} disabled={!dirty}>Save</button>
        </div>
      </div>
      <div className="space-y-3">
        {local.map((r, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex gap-3 items-start">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-1">From Path</label>
              <input value={r.path} onChange={(e) => change(i, "path", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
              {r.path && <p className="text-[10px] text-gray-400 mt-0.5">https://neo.arachnova.id{r.path}</p>}
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-1">Redirect To</label>
              <input value={r.redirect} onChange={(e) => change(i, "redirect", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
              {r.redirect && <p className="text-[10px] text-gray-400 mt-0.5 truncate">{r.redirect}</p>}
            </div>
            <button onClick={() => remove(i)} className="mt-5 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm">×</button>
          </div>
        ))}
      </div>
    </div>
  );
}
