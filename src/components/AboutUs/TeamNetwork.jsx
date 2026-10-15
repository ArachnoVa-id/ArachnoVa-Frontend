import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";

// three.js is heavy, so the graph is only fetched when the section scrolls near the viewport.
const TeamNetworkGraph = lazy(() => import("./TeamNetworkGraph"));

function useNearViewport(ref, ready) {
  const [near, setNear] = useState(false);
  useEffect(() => {
    if (!ready || !ref.current || near) return undefined;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "400px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [ref, near, ready]);
  return near;
}

function webglAvailable() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
  } catch {
    return false;
  }
}

export default function TeamNetwork({ members, projects }) {
  const ref = useRef(null);
  const near = useNearViewport(ref, !!members?.length);
  const [height, setHeight] = useState(560);
  const [webgl] = useState(() => (typeof window === "undefined" ? false : webglAvailable()));

  useEffect(() => {
    const fit = () => setHeight(window.innerWidth < 768 ? 420 : window.innerWidth < 1024 ? 520 : 620);
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  const stats = useMemo(() => {
    const visible = new Set((projects || []).filter((p) => !p.hidden).map((p) => p.id));
    let links = 0;
    const used = new Set();
    let people = 0;
    (members || []).forEach((m) => {
      const ids = (m.projectIds || []).filter((id) => visible.has(id));
      if (ids.length) people += 1;
      links += ids.length;
      ids.forEach((id) => used.add(id));
    });
    return { people, projects: used.size, links };
  }, [members, projects]);

  if (!members?.length) return null;

  return (
    <section ref={ref} aria-labelledby="network-title"
      className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,#0F3B47_0%,#06212A_45%,#001118_100%)] lg:py-20 py-14 lg:px-24 px-4">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(#84D4E1_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 max-w-[90rem] mx-auto">
        {/* Graph: left on desktop, below the text on phones */}
        <div className="relative order-2 lg:order-1 flex-1 min-w-0 -mx-4 lg:mx-0 lg:-ml-24" style={{ height }}>
          {near && webgl ? (
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-[#8FC3CE] text-sm">Loading network…</div>}>
              <TeamNetworkGraph members={members} projects={projects} height={height} />
            </Suspense>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#8FC3CE] text-sm">
              {near && !webgl ? "Your browser can't show the 3D network, see the team below." : null}
            </div>
          )}
        </div>

        {/* Text: right on desktop */}
        <div className="order-1 lg:order-2 lg:w-[30rem] shrink-0 text-center lg:text-left">
          <p className="font-SourceSansProBold lg:text-xl text-[16px] text-LightBlue-a">Our Network</p>
          <h2 id="network-title" className="font-SourceSansProBold lg:text-4xl text-[28px] text-white mt-2 leading-tight">
            The People Behind Every Project
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#B8D9E0]">
            Every circle is a teammate or a project we shipped. Each line is a collaboration.
          </p>
          <dl className="mt-6 grid grid-cols-3 gap-3 max-w-[30rem] mx-auto lg:mx-0">
            {[["People", stats.people], ["Projects", stats.projects], ["Collaborations", stats.links]].map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-white/5 border border-white/10 py-3 px-2 text-center">
                <dt className="text-[10px] sm:text-[11px] uppercase tracking-[0.04em] sm:tracking-[0.1em] text-[#8FC3CE] truncate">{k}</dt>
                <dd className="text-white text-2xl font-bold tabular-nums">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 flex justify-center lg:justify-start gap-5 text-[13px] text-[#B8D9E0]">
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full border-2 border-[#2EC1D9]" aria-hidden="true" />Teammate</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full border-2 border-[#F5B942]" aria-hidden="true" />Project</span>
          </div>
          <ul className="mt-6 hidden lg:block space-y-2 text-[13px] text-[#8FC3CE]">
            <li><b className="text-white font-semibold">Drag</b> to rotate</li>
            <li><b className="text-white font-semibold">Click into it</b>, then scroll or pinch to zoom</li>
            <li><b className="text-white font-semibold">Hover</b> a circle for roles and project counts</li>
            <li><b className="text-white font-semibold">Click</b> a project to open it, or a teammate to jump to their card</li>
          </ul>
        </div>
      </div>
      <p className="sr-only">
        {stats.people} team members collaborated across {stats.projects} projects. The full list of people, their roles and projects follows in the team section below.
      </p>
    </section>
  );
}
