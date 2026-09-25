import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "@/context/DataContext";

const API_BASE = import.meta.env.VITE_API_URL || "";
const GSI_SRC = "https://accounts.google.com/gsi/client";

function loadGoogleScript() {
  if (window.google?.accounts?.id) return Promise.resolve();
  return new Promise((resolve, reject) => {
    let script = document.querySelector(`script[src="${GSI_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = GSI_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () => reject(new Error("Could not load Google Sign-In")));
  });
}

export default function Login() {
  const [error, setError] = useState("");
  const [status, setStatus] = useState("loading"); // loading | ready | signing-in
  const buttonRef = useRef(null);
  const { login } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/auth/config`);
        const { googleClientId } = await res.json();
        if (!googleClientId) throw new Error("Google login is not configured on the server");
        await loadGoogleScript();
        if (cancelled) return;

        window.google.accounts.id.initialize({
          client_id: googleClientId,
          callback: async ({ credential }) => {
            setStatus("signing-in");
            setError("");
            const err = await login(credential);
            if (err) {
              setError(err);
              setStatus("ready");
            } else {
              navigate("/admin");
            }
          },
        });
        window.google.accounts.id.renderButton(buttonRef.current, {
          theme: "outline",
          size: "large",
          text: "signin_with",
          width: 280,
        });
        setStatus("ready");
      } catch (e) {
        if (!cancelled) setError(e.message);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [login, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">CMS Admin</h1>
        <p className="text-sm text-gray-500 mb-6">Sign in with an authorized Google account</p>
        <div className="flex justify-center min-h-[44px]">
          <div ref={buttonRef} className={status === "signing-in" ? "opacity-60 pointer-events-none" : ""} />
        </div>
        {status === "loading" && !error && <p className="text-sm text-gray-500 text-center mt-2">Loading...</p>}
        {status === "signing-in" && <p className="text-sm text-gray-500 text-center mt-4">Signing in...</p>}
        {error && <p className="text-sm text-red-600 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
}
