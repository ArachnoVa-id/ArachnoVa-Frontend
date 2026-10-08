import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectModal from "./ProjectModal";

const defaultCategories = [
  { key: "compro", label: "Company Profile" },
  { key: "erp", label: "ERP" },
  { key: "wa-apps", label: "WhatsApp Apps" },
];

// Keep the address bar in sync (?category=…&projectId=…) so a filtered view or an open
// project can be shared and linked from proposals. replaceState: no extra history entries.
function updateQuery(changes) {
  const params = new URLSearchParams(window.location.search);
  for (const [k, v] of Object.entries(changes)) {
    if (v === null || v === undefined || v === "all") params.delete(k);
    else params.set(k, v);
  }
  const qs = params.toString();
  window.history.replaceState(window.history.state, "", `${window.location.pathname}${qs ? `?${qs}` : ""}`);
}

export default function ProjectCardGrid({ projects, services, autoOpenId, onAutoOpenDone, cardRefs: externalRefs }) {
  const categories = services?.length
    ? services.map((s) => ({ key: s.productTag || s.key, label: s.title }))
    : defaultCategories;
  const [category, setCategory] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    // A shared project link must find its card, so it always starts unfiltered.
    return params.get("projectId") ? "all" : params.get("category") || "all";
  });
  const [selected, setSelected] = useState(null);
  const [originEl, setOriginEl] = useState(null);
  const internalRefs = useRef({});
  const cardRefs = externalRefs || internalRefs;

  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  useEffect(() => {
    if (autoOpenId && cardRefs.current[autoOpenId]) {
      setOriginEl(cardRefs.current[autoOpenId]);
      setSelected(projects.find((p) => p.id === autoOpenId));
      onAutoOpenDone?.();
    }
  }, [autoOpenId, projects]);

  const openProject = (project, e) => {
    if (e?.currentTarget) setOriginEl(e.currentTarget);
    setSelected(project);
    updateQuery({ projectId: project.id });
  };

  const closeProject = () => {
    setSelected(null);
    setOriginEl(null);
    updateQuery({ projectId: null });
  };

  const chooseCategory = (key) => {
    setCategory(key);
    updateQuery({ category: key });
  };

  if (!projects?.length) return null;

  const known = new Set(categories.map((c) => c.key));
  const activeCategory = category === "all" || known.has(category) ? category : "all";
  const visible = activeCategory === "all" ? projects : projects.filter((p) => p.product === activeCategory);
  const chips = [{ key: "all", label: "All", count: projects.length }].concat(
    categories.map((c) => ({ ...c, count: projects.filter((p) => p.product === c.key).length })).filter((c) => c.count > 0)
  );

  return (
    <section className="w-full bg-white-MainPage lg:py-[5.2rem] py-[clamp(3rem,18vw,14rem)] lg:px-[10.0rem] px-[clamp(1.2rem,8vw,5.6rem)]" id="project-cards">
      <div data-aos="fade-down" className="text-center mb-[3.0rem]">
        <p className="font-SourceSansProBold lg:text-[1.56rem] text-[clamp(1rem,6vw,4.2rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">Our Projects</p>
        <h2 className="font-SourceSansProBold lg:text-[2.4rem] text-[clamp(1.8rem,10vw,7rem)] text-neutral-g lg:leading-[2.8rem] leading-[clamp(2.2rem,11vw,7.5rem)] mt-[0.5rem]">Explore Our Work</h2>
      </div>

      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap justify-center gap-2 mb-[2.0rem]">
        {chips.map((c) => (
          <button
            type="button"
            key={c.key}
            onClick={() => chooseCategory(c.key)}
            aria-pressed={activeCategory === c.key}
            className={`min-h-[44px] px-4 rounded-full border font-InterSemibold text-[0.85rem] transition-all ${
              activeCategory === c.key
                ? "bg-LightBlue-c border-LightBlue-c text-white shadow-sm"
                : "bg-white border-border text-neutral-e hover:border-LightBlue-c/50"
            }`}
          >
            {c.label} <span className="opacity-70">({c.count})</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]">
        {visible.map((project, i) => {
          const hasDesktop = project.desktopImages?.length > 0 || project.imageDesktop;
          const hasMobile = project.mobileImages?.length > 0 || project.imageMobile;
          return (
            <div
              key={project.id || i}
              ref={(el) => { cardRefs.current[project.id] = el; }}
              onClick={(e) => openProject(project, e)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProject(project, e); }
              }}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`Open project ${project.title}`}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 100}
              className="group bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-[0.3rem] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-LightBlue-c"
            >
              {(hasDesktop || hasMobile) ? (
                <div className="relative w-full aspect-[824.28/426.9] bg-gray-50">
                  {project.preview && (
                    <div className="absolute top-0 left-0 z-10 overflow-visible pointer-events-none">
                      <div className="bg-amber-500 text-white text-[9px] font-bold uppercase tracking-wider px-6 py-0.5 -ml-2 -mt-0.5 rotate-[-45deg] origin-top-left shadow-sm">Preview</div>
                    </div>
                  )}
                  <div className="w-full h-full overflow-hidden">
                    {hasDesktop && hasMobile ? (
                      <>
                        <img src={project.imageDesktop || project.desktopImages[0]} alt=""
                          className="absolute w-[80%] aspect-[669/376] rounded-lg shadow-lg right-0 top-[5%]"
                          draggable="false" loading="lazy" />
                        <img src={project.imageMobile || project.mobileImages[0]} alt=""
                          className="absolute w-[22%] aspect-[245/485] rounded-[0.6rem] shadow-lg -bottom-[2%] left-[4%]"
                          draggable="false" loading="lazy" />
                      </>
                    ) : hasDesktop ? (
                      <img src={project.imageDesktop || project.desktopImages[0]} alt=""
                        className="w-full h-full object-contain rounded-lg shadow-lg p-[3%]"
                        draggable="false" loading="lazy" />
                    ) : hasMobile ? (
                      <img src={project.imageMobile || project.mobileImages[0]} alt=""
                        className="h-full w-auto rounded-lg shadow-lg mx-auto p-[5%]"
                        draggable="false" loading="lazy" />
                    ) : null}
                  </div>
                </div>
              ) : null}
              <div className="p-[clamp(0.3rem,2vw,1rem)] pt-[clamp(0.5rem,2.5vw,1.5rem)]">
                <h3 className="font-SourceSansProBold lg:text-[0.94rem] text-[clamp(1rem,5vw,3.5rem)] text-neutral-g group-hover:text-LightBlue-d transition-colors truncate">
                  {project.title}
                </h3>
                <p className="font-SourceSansProSemibold lg:text-[0.73rem] text-[clamp(0.8rem,4vw,2.8rem)] text-neutral-e mt-[0.3rem] line-clamp-2 lg:leading-[1.2rem] leading-[clamp(1.2rem,5vw,4rem)]">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          originEl={originEl}
          onClose={closeProject}
        />
      )}
    </section>
  );
}
