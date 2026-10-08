import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Google Analytics page views. index.html configures gtag with send_page_view: false, because the
// automatic hit fired before the route's <title> was applied and every page was logged as "ArachnoVa".
// Helmet updates the title asynchronously, so wait for it to settle before sending the hit.
export default function RouteTracker() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.startsWith("/admin")) return;
    const t = setTimeout(() => {
      if (typeof window.gtag !== "function") return;
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    }, 300);
    return () => clearTimeout(t);
  }, [location.pathname, location.search]);
  return null;
}
