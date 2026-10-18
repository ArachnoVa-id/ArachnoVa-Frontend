import { useEffect, useRef } from "react";

// One shared scroll listener moves every registered element by
// (its distance from the viewport centre) * speed. Negative speed lags behind the page
// (backgrounds), positive runs ahead of it (floating foreground pieces).
const items = new Set();
let ticking = false;
function update() {
  ticking = false;
  const mid = window.innerHeight / 2;
  for (const { el, speed } of items) {
    const r = el.parentElement?.getBoundingClientRect() || el.getBoundingClientRect();
    if (r.bottom < -200 || r.top > window.innerHeight + 200) continue;
    const off = (r.top + r.height / 2 - mid) * speed;
    el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
  }
}
function onScroll() {
  if (!ticking) { ticking = true; requestAnimationFrame(update); }
}

export function useParallax(speed = 0.1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
    const item = { el, speed };
    items.add(item);
    if (items.size === 1) { window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onScroll); }
    el.style.willChange = "transform";
    onScroll();
    return () => {
      items.delete(item);
      el.style.transform = "";
      if (!items.size) { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); }
    };
  }, [speed]);
  return ref;
}

export function Parallax({ speed, className = "", children }) {
  const ref = useParallax(speed);
  return <div ref={ref} className={className}>{children}</div>;
}
