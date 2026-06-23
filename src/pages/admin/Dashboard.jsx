import { useData } from "@/context/DataContext";

const cards = [
  { key: "projects", label: "Projects", color: "bg-blue-500" },
  { key: "services", label: "Services", color: "bg-green-500" },
  { key: "pricing", label: "Pricing Packages", color: "bg-purple-500" },
  { key: "products", label: "Products", color: "bg-yellow-500" },
  { key: "navigation", label: "Nav Links", color: "bg-indigo-500" },
  { key: "redirects", label: "Redirects", color: "bg-red-500" },
  { key: "templates", label: "Template Categories", color: "bg-pink-500" },
  { key: "mechanisms", label: "Mechanism Stages", color: "bg-teal-500" },
];

export default function Dashboard() {
  const { data, loading } = useData();

  const getCount = (key) => {
    const d = data[key];
    if (Array.isArray(d)) return d.length;
    if (d?.packages) return d.packages.length;
    if (d?.items) return d.items.length;
    if (d?.stages) return d.stages.length;
    if (d?.navLinks) return d.navLinks.length;
    return "✓";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div key={card.key} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className={`w-3 h-3 rounded-full ${card.color}`} />
              <span className="text-2xl font-bold text-gray-900">{getCount(card.key)}</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
