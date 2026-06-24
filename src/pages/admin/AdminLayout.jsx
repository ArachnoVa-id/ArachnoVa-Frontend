import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useData } from "@/context/DataContext";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: "📊", end: true },
  { to: "/admin/projects", label: "Projects", icon: "📁" },
  { to: "/admin/pricing", label: "Services", icon: "⚙️" },
  { to: "/admin/redirects", label: "Redirects", icon: "🔀" },
  { to: "/admin/team", label: "Team", icon: "👥" },
  { to: "/admin/settings", label: "Settings", icon: "⚡" },
];

export default function AdminLayout() {
  const { auth, logout, loading } = useData();
  const navigate = useNavigate();

  if (!auth) {
    navigate("/admin/login", { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-base text-gray-900">CMS Admin</h1>
            </div>

            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex flex-col items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  <span className="text-lg leading-none">{item.icon}</span>
                  <span className="mt-0.5 whitespace-nowrap">{item.label}</span>
                </NavLink>
              ))}
            </nav>

            <button
              onClick={() => { logout(); navigate("/admin/login"); }}
              className="text-xs text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}
