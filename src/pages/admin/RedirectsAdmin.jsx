import { useCollection } from "@/context/DataContext";

export default function RedirectsAdmin() {
  const [redirects, setRedirects] = useCollection("redirects");

  const update = (index, field, value) => {
    const next = [...redirects];
    next[index] = { ...next[index], [field]: value };
    setRedirects(next);
  };

  const add = () => {
    setRedirects([...redirects, { path: "", redirect: "" }]);
  };

  const remove = (index) => {
    setRedirects(redirects.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Redirects</h2>
        <button onClick={add} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">+ Add Redirect</button>
      </div>
      <div className="space-y-3">
        {redirects.map((r, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex gap-3 items-start">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-1">From Path</label>
              <input value={r.path} onChange={(e) => update(i, "path", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-1">Redirect To</label>
              <input value={r.redirect} onChange={(e) => update(i, "redirect", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
            </div>
            <button onClick={() => remove(i)} className="mt-5 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm">×</button>
          </div>
        ))}
      </div>
    </div>
  );
}
