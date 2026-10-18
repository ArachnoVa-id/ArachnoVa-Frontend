import { useEffect, useRef, useState } from "react";
import { useCollection } from "@/context/DataContext";

// Each step is told through a real project, so it reads as what we did, not a promise.
const STEPS = [
  { title: "We listen first", text: "Before talking features, we learn how your work really runs and where it hurts.", project: "Bank Kompos Banjarasri", example: "Farmers couldn't tell when compost was ready, so that became the whole brief." },
  { title: "We agree on the simplest fix", text: "One clear plan with milestones, so you know what you get and when.", project: "Yutaka Villa", example: "Double bookings came from chat orders, so the fix was one shared availability calendar." },
  { title: "You try it early", text: "You get a working link within the first weeks and shape it while it's being built.", project: "Roetix", example: "Organizers tested ticket sales on a live demo long before opening day." },
  { title: "We add AI only where it helps", text: "AI is used when it removes real work for your team, never just to look modern.", project: "19Next", example: "AI scores practice interviews so job seekers get feedback instantly, not days later." },
  { title: "We stay after launch", text: "We keep it running, fix what comes up and grow it with you.", project: "PT Solusi Cerdas Sampah", example: "The waste bank's daily operations moved onto the system and we still look after it." },
];
const AUTO_MS = 6000;

export default function Process() {
  const [projects] = useCollection("projects");
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const paused = useRef(false);
  const elapsed = useRef(0); // ms spent on the current step (frozen while hovered)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let raf = 0;
    let last = performance.now();
    const tick = (t) => {
      const dt = t - last;
      last = t;
      if (!paused.current) {
        elapsed.current += dt;
        if (elapsed.current >= AUTO_MS) { elapsed.current = 0; setActive((a) => (a + 1) % STEPS.length); }
        setProgress(elapsed.current / AUTO_MS);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // keep the active tab visible in the horizontal (phone) list without scrolling the page
  const listRef = useRef(null);
  useEffect(() => {
    const ol = listRef.current;
    const btn = ol?.children[active];
    if (!ol || !btn || ol.scrollWidth <= ol.clientWidth) return;
    ol.scrollTo({ left: btn.offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  const choose = (i) => { setActive(i); elapsed.current = 0; setProgress(0); };
  const step = STEPS[active];
  const proj = (projects || []).find((p) => p.title === step.project);
  const shot = proj?.imageDesktop || proj?.desktopImages?.[0];

  return (
    <section aria-labelledby="process-title" className="w-full bg-white lg:px-24 px-4 lg:py-16 py-12"
      onMouseEnter={() => { paused.current = true; }} onMouseLeave={() => { paused.current = false; }}
      onFocus={() => { paused.current = true; }} onBlur={() => { paused.current = false; }}>
      <div className="max-w-[72rem] mx-auto">
        <div className="mb-8 lg:mb-10 max-w-[40rem]">
          <p className="text-[13px] font-semibold text-LightBlue-e">How we work</p>
          <h2 id="process-title" className="font-SourceSansProBold lg:text-[2rem] text-[26px] text-neutral-g leading-tight mt-1">Five steps, shown through work we've actually done</h2>
        </div>

        <div className="grid lg:grid-cols-[22rem_1fr] gap-6 lg:gap-10 items-start">
          <ol ref={listRef} className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 snap-x" role="tablist" aria-label="Steps">
            {STEPS.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.title} className="snap-start shrink-0 lg:shrink">
                  <button type="button" role="tab" aria-selected={on} onClick={() => choose(i)}
                    className={`relative w-full text-left rounded-2xl px-4 py-3.5 min-h-[56px] overflow-hidden transition border ${on ? "bg-neutral-g border-neutral-g text-white" : "bg-white-MainPage border-gray-200 text-neutral-f hover:border-LightBlue-c"}`}>
                    <span className="flex items-center gap-3">
                      <span className={`w-[28px] h-[28px] rounded-full text-[13px] font-bold flex items-center justify-center shrink-0 ${on ? "bg-LightBlue-c text-white" : "bg-white border border-gray-300 text-neutral-e"}`}>{i + 1}</span>
                      <span className="font-SourceSansProBold text-[15px] whitespace-nowrap lg:whitespace-normal">{s.title}</span>
                    </span>
                    {on && <span className="absolute left-0 bottom-0 h-[3px] bg-LightBlue-c" style={{ width: `${progress * 100}%` }} aria-hidden="true" />}
                  </button>
                </li>
              );
            })}
          </ol>

          <div key={active} role="tabpanel" className="rounded-3xl border border-gray-200 bg-white-MainPage overflow-hidden animate-[step-in_.45s_ease-out] motion-reduce:animate-none">
            <style>{"@keyframes step-in { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: none } }"}</style>
            <div className="p-6 lg:p-8">
              <p className="text-[12px] font-semibold text-LightBlue-e">Step {active + 1} of {STEPS.length}</p>
              <h3 className="font-SourceSansProBold text-[22px] lg:text-[26px] text-neutral-g mt-1 leading-tight">{step.title}</h3>
              <p className="text-[16px] leading-relaxed text-neutral-e mt-2 max-w-[36rem]">{step.text}</p>
            </div>
            <div className="border-t border-gray-200 bg-white p-5 lg:p-6 flex flex-col sm:flex-row gap-4 items-start">
              {shot && <img src={shot} alt="" loading="lazy" className="w-full sm:w-[220px] aspect-[16/10] object-cover object-top rounded-xl border border-gray-200" />}
              <div className="min-w-0">
                <p className="text-[12px] font-semibold text-gray-500">For example</p>
                <p className="flex items-center gap-2 mt-1 font-SourceSansProBold text-[16px] text-neutral-g">
                  {proj?.logo && <img src={proj.logo} alt="" className="w-[26px] h-[26px] rounded-md object-contain bg-white border border-gray-200" />}
                  {step.project}
                </p>
                <p className="text-[15px] leading-relaxed text-neutral-f mt-1">{step.example}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
