import { createContext, useContext, useState, useEffect, useCallback } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "";
const TOKEN_KEY = "cms_token";

const DataContext = createContext(null);

const defaults = {
  projects: [],
  services: [],
  pricing: { title: "", subtitle: "", packages: [] },
  products: { title: "", subtitle: "", items: [] },
  redirects: [],
  team: [],
  settings: { whatsapp: "https://wa.me/6287882832538", email: "mailto:arachnova.id@gmail.com", instagram: "https://www.instagram.com/arachnova.id/", linkedin: "https://www.linkedin.com/company/arachnova-id/" },
};

function getToken() {
  return sessionStorage.getItem(TOKEN_KEY);
}

// Fetch against the CMS API with the admin session token attached.
export function authFetch(path, options = {}) {
  const headers = { ...options.headers };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  return fetch(`${API_BASE}${path}`, { ...options, headers });
}

export function DataProvider({ children }) {
  const [data, setData] = useState(defaults);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(() => !!getToken());

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

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const update = useCallback(async (collection, value) => {
    setData((prev) => ({ ...prev, [collection]: value }));
    try {
      const res = await authFetch(`/api/${collection}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });
      if (res.status === 401) {
        sessionStorage.removeItem(TOKEN_KEY);
        setAuth(false);
      }
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
    } catch (e) {
      console.error(`Failed to save ${collection}:`, e.message);
    }
  }, []);

  // Exchanges a Google ID token for a CMS session. Resolves to null on success, or an error message.
  const login = useCallback(async (credential) => {
    try {
      const res = await fetch(`${API_BASE}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credential }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.token) return json.error || `Login failed (${res.status})`;
      sessionStorage.setItem(TOKEN_KEY, json.token);
      setAuth(true);
      return null;
    } catch (e) {
      return `Login failed: ${e.message}`;
    }
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(TOKEN_KEY);
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
