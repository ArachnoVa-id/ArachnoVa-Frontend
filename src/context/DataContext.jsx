import { createContext, useContext, useState, useEffect, useCallback } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "";
const SESSION_KEY = "av_session";

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

// Google sign-in session: { token, email, name, isAdmin }. Kept per browser tab.
function readSession() {
  try {
    const s = JSON.parse(sessionStorage.getItem(SESSION_KEY));
    return s?.token && s.expiresAt > Date.now() ? s : null;
  } catch {
    return null;
  }
}

function getToken() {
  return readSession()?.token;
}

// Fetch against the API with the signed-in user's session token attached.
export function authFetch(path, options = {}) {
  const headers = { ...options.headers };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  return fetch(`${API_BASE}${path}`, { ...options, headers });
}

export function DataProvider({ children }) {
  const [data, setData] = useState(defaults);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(readSession);
  const auth = !!user?.isAdmin;

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
        sessionStorage.removeItem(SESSION_KEY);
        setUser(null);
      }
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
    } catch (e) {
      console.error(`Failed to save ${collection}:`, e.message);
    }
  }, []);

  // Exchanges a Google ID token for a session. Resolves to { user } or { error }.
  const login = useCallback(async (credential) => {
    try {
      const res = await fetch(`${API_BASE}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credential }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.token) return { error: json.error || `Login failed (${res.status})` };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(json));
      setUser(json);
      return { user: json };
    } catch (e) {
      return { error: `Login failed: ${e.message}` };
    }
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, auth, user, login, logout, update, refetch: fetchAll }}>
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
