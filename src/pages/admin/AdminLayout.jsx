import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useData } from "@/context/DataContext";
import { useState } from "react";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: "📊", end: true },
  { to: "/admin/projects", label: "Projects", icon: "📁" },
  { to: "/admin/services", label: "Services", icon: "⚙️" },
  { to: "/admin/pricing", label: "Pricing", icon: "💰" },
  { to: "/admin/products", label: "Products", icon: "🛍️" },
  { to: "/admin/hero", label: "Hero Section", icon: "🎯" },
  { to: "/admin/homepage-sections", label: "Home Sections", icon: "🏠" },
  { to: "/admin/about-us", label: "About Us", icon: "👥" },
  { to: "/admin/navigation", label: "Navigation", icon: "🧭" },
  { to: "/admin/redirects", label: "Redirects", icon: "🔀" },
];

export default function AdminLayout() {
  const { auth, logout } = useData();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!auth) {
    navigate("/admin/login", { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform lg:translate-x-0 lg:static lg:inset-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <h1 className="font-bold text-lg text-gray-900">CMS Admin</h1>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50"
                }`
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button
            onClick={() => { logout(); navigate("/admin/login"); }}
            className="w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 gap-4 lg:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="font-bold text-lg">CMS Admin</h1>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
