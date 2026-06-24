import { createContext, useContext, useState, useEffect, useCallback } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "";
const ENV_API_KEY = import.meta.env.VITE_CMS_API_KEY || "";

const DataContext = createContext(null);

const defaults = {
  projects: [],
  services: [],
  pricing: { title: "", subtitle: "", packages: [] },
  products: { title: "", subtitle: "", items: [] },
  redirects: [],
  team: [],
  settings: { whatsapp: "{settings?.whatsapp || "https://wa.me/6287882832538"}", email: "mailto:arachnova.id@gmail.com", instagram: "https://www.instagram.com/arachnova.id/", linkedin: "https://www.linkedin.com/company/arachnova-id/" },
};

function authHeaders(forWrite) {
  if (forWrite) {
    const h = { "Content-Type": "application/json" };
    if (ENV_API_KEY) h["x-api-key"] = ENV_API_KEY;
    return h;
  }
  return {};
}

export function DataProvider({ children }) {
  const [data, setData] = useState(defaults);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(() => sessionStorage.getItem("cms_auth") === "true");

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/all`);
      if (!res.ok) throw new Error(`API unavailable (${res.status})`);
      const json = await res.json();
      setData((prev) => ({ ...prev, ...json }));
    } catch (e) {
      console.warn("CMS API unavailable, using default data:", e.message);
      setTimeout(fetchAll, 3000);
      return;
    } finally {
      setLoading(false);
    }
  }, []);

  const settings = useSettings();
  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const update = useCallback(async (collection, value) => {
    setData((prev) => ({ ...prev, [collection]: value }));
    try {
      const res = await fetch(`${API_BASE}/api/${collection}`, {
        method: "PUT",
        headers: authHeaders(true),
        body: JSON.stringify(value),
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
    } catch (e) {
      console.error(`Failed to save ${collection}:`, e.message);
      alert(`Save failed: ${e.message}`);
    }
  }, []);

  const login = useCallback((password) => {
    if (password === "arachnova2024") {
      sessionStorage.setItem("cms_auth", "true");
      setAuth(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem("cms_auth");
    setAuth(false);
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, auth, login, logout, update, refetch: fetchAll }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used within DataProvider");
  return ctx;
}

export function useCollection(name) {
  const { data, update } = useData();
  return [data[name] ?? defaults[name], (val) => update(name, val)];
}

export function useSettings() {
  const { data } = useData();
  return data.settings || defaults.settings;
}
