import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCollection } from "@/context/DataContext";

export default function RedirectGuard({ children }) {
  const [redirects] = useCollection("redirects");
  const { pathname } = useLocation();

  useEffect(() => {
    const lookup = {};
    (redirects || []).forEach((r) => { if (r.path) lookup[r.path] = r.redirect; });
    const url = lookup[pathname];
    if (url) {
      window.location.replace(url);
    }
  }, [pathname, redirects]);

  return children;
}
