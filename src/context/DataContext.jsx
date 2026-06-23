import { createContext, useContext, useState, useEffect, useCallback } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "";
const ENV_API_KEY = import.meta.env.VITE_CMS_API_KEY || "";

const DataContext = createContext(null);

const defaults = {
  projects: [],
  services: [],
  pricing: { title: "", subtitle: "", packages: [] },
  products: { title: "", subtitle: "", items: [] },
  hero: {},
  "homepage-sections": {},
  mechanisms: { stages: [] },
  navigation: { navLinks: [], socialLinks: [], contactWhatsApp: "" },
  redirects: [],
  "about-us": {},
  templates: [],
};

function authHeaders(forWrite) {
  if (forWrite) {
    const key = sessionStorage.getItem("cms_api_key") || ENV_API_KEY;
    const h = { "Content-Type": "application/json" };
    if (key) h["x-api-key"] = key;
    return h;
  }
  return {};
}

export function DataProvider({ children }) {
  const [data, setData] = useState(defaults);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(() => sessionStorage.getItem("cms_auth") === "true");

  const fetchAll = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/all`);
      if (!res.ok) throw new Error("API unavailable");
      const json = await res.json();
      setData((prev) => ({ ...prev, ...json }));
    } catch {
      console.warn("CMS API unavailable, using default data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const update = useCallback(async (collection, value) => {
    setData((prev) => ({ ...prev, [collection]: value }));
    try {
      await fetch(`${API_BASE}/api/${collection}`, {
        method: "PUT",
        headers: authHeaders(true),
        body: JSON.stringify(value),
      });
    } catch {
      console.error(`Failed to save ${collection}`);
    }
  }, []);

  const login = useCallback((password) => {
    if (password === "arachnova2024") {
      sessionStorage.setItem("cms_auth", "true");
      sessionStorage.setItem("cms_api_key", password);
      setAuth(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem("cms_auth");
    sessionStorage.removeItem("cms_api_key");
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
