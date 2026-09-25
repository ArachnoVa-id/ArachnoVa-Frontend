import { useEffect, useRef, useState } from "react";
import { useData } from "@/context/DataContext";

const API_BASE = import.meta.env.VITE_API_URL || "";
const GSI_SRC = "https://accounts.google.com/gsi/client";

let configPromise;
// Public client config from the server: Google client ID, Midtrans client key.
export function getAuthConfig() {
  configPromise ??= fetch(`${API_BASE}/api/auth/config`)
    .then((r) => r.json())
    .catch((e) => {
      configPromise = undefined;
      throw e;
    });
  return configPromise;
}

export function loadScript(src, attrs = {}) {
  return new Promise((resolve, reject) => {
    let script = document.querySelector(`script[src="${src}"]`);
    if (script?.dataset.loaded) return resolve();
    if (!script) {
      script = document.createElement("script");
      script.src = src;
      script.async = true;
      Object.entries(attrs).forEach(([k, v]) => script.setAttribute(k, v));
      document.head.appendChild(script);
    }
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      resolve();
    });
    script.addEventListener("error", () => reject(new Error(`Could not load ${src}`)));
  });
}

// Renders Google's "Sign in with Google" button; calls onSignedIn(user) after the server accepts it.
export default function GoogleSignIn({ onSignedIn, width = 280 }) {
  const [error, setError] = useState("");
  const [status, setStatus] = useState("loading"); // loading | ready | signing-in
  const buttonRef = useRef(null);
  const onSignedInRef = useRef(onSignedIn);
  onSignedInRef.current = onSignedIn;
  const { login } = useData();

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const { googleClientId } = await getAuthConfig();
        if (!googleClientId) throw new Error("Google sign-in is not configured on the server");
        await loadScript(GSI_SRC);
        if (cancelled) return;

        window.google.accounts.id.initialize({
          client_id: googleClientId,
          callback: async ({ credential }) => {
            setStatus("signing-in");
            setError("");
            const { user, error: err } = await login(credential);
            setStatus("ready");
            if (err) setError(err);
            else onSignedInRef.current?.(user);
          },
        });
        window.google.accounts.id.renderButton(buttonRef.current, {
          theme: "outline",
          size: "large",
          text: "signin_with",
          width,
        });
        setStatus("ready");
      } catch (e) {
        if (!cancelled) setError(e.message);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [login, width]);

  return (
    <div>
      <div className="flex justify-center min-h-[44px]">
        <div ref={buttonRef} className={status === "signing-in" ? "opacity-60 pointer-events-none" : ""} />
      </div>
      {status === "loading" && !error && <p className="text-sm text-gray-500 text-center mt-2">Loading...</p>}
      {status === "signing-in" && <p className="text-sm text-gray-500 text-center mt-4">Signing in...</p>}
      {error && <p className="text-sm text-red-600 text-center mt-4">{error}</p>}
    </div>
  );
}
