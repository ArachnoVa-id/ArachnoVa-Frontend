import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectModal from "./ProjectModal";

export default function ProjectCardGrid({ projects, autoOpenId, onAutoOpenDone, cardRefs: externalRefs }) {
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
  };

  if (!projects?.length) return null;

  return (
    <section className="w-full bg-white-MainPage lg:py-[5.2rem] py-[14.0rem] lg:px-[10.0rem] px-[5.6rem]" id="project-cards">
      <div data-aos="fade-down" className="text-center mb-[3.0rem]">
        <p className="font-SourceSansProBold lg:text-[1.56rem] text-[4.2rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">Our Projects</p>
        <h2 className="font-SourceSansProBold lg:text-[2.4rem] text-[7.0rem] text-neutral-g lg:leading-[2.8rem] leading-[7.5rem] mt-[0.5rem]">Explore Our Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]">
        {projects.map((project, i) => {
          const hasDesktop = project.desktopImages?.length > 0 || project.imageDesktop;
          const hasMobile = project.mobileImages?.length > 0 || project.imageMobile;
          return (
            <div
              key={project.id || i}
              ref={(el) => { cardRefs.current[project.id] = el; }}
              onClick={(e) => openProject(project, e)}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 100}
              className="group bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-[0.3rem] cursor-pointer"
            >
              {hasDesktop && hasMobile ? (
                /* Both: stacked preview */
                <div className="relative w-full aspect-[824.28/426.9] bg-gray-50">
                  <img src={project.imageDesktop || project.desktopImages[0]} alt=""
                    className="absolute w-[80%] aspect-[669/376] rounded-lg shadow-lg right-0 top-[5%]"
                    draggable="false" loading="lazy" />
                  <img src={project.imageMobile || project.mobileImages[0]} alt=""
                    className="absolute w-[22%] aspect-[245/485] rounded-[0.6rem] shadow-lg -bottom-[2%] left-[4%]"
                    draggable="false" loading="lazy" />
                </div>
              ) : hasDesktop ? (
                /* Desktop only: full width */
                <div className="relative w-full aspect-[824.28/426.9] bg-gray-50 flex items-center justify-center p-[3%]">
                  <img src={project.imageDesktop || project.desktopImages[0]} alt=""
                    className="w-full h-full object-contain rounded-lg shadow-lg"
                    draggable="false" loading="lazy" />
                </div>
              ) : hasMobile ? (
                /* Mobile only: centered */
                <div className="relative w-full aspect-[824.28/426.9] bg-gray-50 flex items-center justify-center p-[5%]">
                  <img src={project.imageMobile || project.mobileImages[0]} alt=""
                    className="h-full w-auto rounded-lg shadow-lg"
                    draggable="false" loading="lazy" />
                </div>
              ) : null}
              <div className="p-[1.0rem] pt-[1.5rem]">
                <h3 className="font-SourceSansProBold lg:text-[0.94rem] text-[3.5rem] text-neutral-g group-hover:text-LightBlue-d transition-colors truncate">
                  {project.title}
                </h3>
                <p className="font-SourceSansProSemibold lg:text-[0.73rem] text-[2.8rem] text-neutral-e mt-[0.3rem] line-clamp-2 lg:leading-[1.2rem] leading-[4.0rem]">
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
          onClose={() => { setSelected(null); setOriginEl(null); }}
        />
      )}
    </section>
  );
}
