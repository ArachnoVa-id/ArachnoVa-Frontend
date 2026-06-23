import { useCollection } from "@/context/DataContext";

const sectionFields = [
  { key: "aboutUs", label: "About Us Section", fields: [
    { dataKey: "title", label: "Title" },
    { dataKey: "subtitle", label: "Subtitle" },
    { dataKey: "description", label: "Description", textarea: true },
    { dataKey: "cta.text", label: "CTA Text" },
    { dataKey: "cta.href", label: "CTA Link" },
  ]},
  { key: "cta", label: "CTA Section", fields: [
    { dataKey: "title", label: "Title" },
    { dataKey: "subtitle", label: "Subtitle" },
    { dataKey: "buttonText", label: "Button Text" },
    { dataKey: "buttonHref", label: "Button Link" },
    { dataKey: "backgroundImage", label: "BG Image Path" },
  ]},
  { key: "portfolio", label: "Portfolio Section", fields: [
    { dataKey: "title", label: "Title" },
    { dataKey: "description", label: "Description", textarea: true },
    { dataKey: "image", label: "Desktop Image" },
    { dataKey: "imageMobile", label: "Mobile Image" },
    { dataKey: "cta.text", label: "CTA Text" },
    { dataKey: "cta.href", label: "CTA Link" },
  ]},
];

function getNested(obj, path) {
  return path.split(".").reduce((o, k) => (o || {})[k], obj) || "";
}

function setNested(obj, path, value) {
  const keys = path.split(".");
  const last = keys.pop();
  const target = keys.reduce((o, k) => {
    if (!(k in o)) o[k] = {};
    return o[k];
  }, obj);
  target[last] = value;
  return obj;
}

export default function HomepageSectionsAdmin() {
  const [sections, setSections] = useCollection("homepage-sections");

  const update = (sectionKey, dataKey, value) => {
    const copy = { ...sections };
    if (!copy[sectionKey]) copy[sectionKey] = {};
    setNested(copy[sectionKey], dataKey, value);
    setSections(copy);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Homepage Sections</h2>
      <div className="space-y-6">
        {sectionFields.map((section) => (
          <div key={section.key} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">{section.label}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.fields.map((field) => {
                const val = getNested(sections[section.key] || {}, field.dataKey);
                return (
                  <div key={field.dataKey} className={field.textarea ? "md:col-span-2" : ""}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                    {field.textarea ? (
                      <textarea value={val} onChange={(e) => update(section.key, field.dataKey, e.target.value)} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                    ) : (
                      <input value={val} onChange={(e) => update(section.key, field.dataKey, e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
