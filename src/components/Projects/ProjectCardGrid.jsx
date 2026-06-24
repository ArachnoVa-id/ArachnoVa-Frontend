import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectModal from "./ProjectModal";

export default function ProjectCardGrid({ projects, autoOpenId, onAutoOpenDone, cardRefs: externalRefs }) {
  const [selected, setSelected] = useState(null);
  const [originRect, setOriginRect] = useState(null);
  const internalRefs = useRef({});
  const cardRefs = externalRefs || internalRefs;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (autoOpenId && cardRefs.current[autoOpenId]) {
      setOriginRect(cardRefs.current[autoOpenId]);
      setSelected(projects.find((p) => p.id === autoOpenId));
      onAutoOpenDone?.();
    }
  }, [autoOpenId, projects]);

  const openProject = (project, e) => {
    if (e?.currentTarget) setOriginRect(e.currentTarget);
    setSelected(project);
  };

  if (!projects?.length) return null;

  return (
    <section className="w-full bg-white-MainPage lg:py-[0.83rem] py-[2.23rem] lg:px-[1.6rem] px-[0.89rem]" id="project-cards">
      <div data-aos="fade-down" className="text-center mb-[0.48rem]">
        <p className="font-SourceSansProBold lg:text-[0.5rem] text-[0.67rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">Our Projects</p>
        <h2 className="font-SourceSansProBold lg:text-[0.5rem] text-[1.12rem] text-neutral-g lg:leading-[0.45rem] leading-[1.2rem] mt-[0.2rem]">Explore Our Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[0.24rem]">
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
              className="group bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-[0.1rem] cursor-pointer"
            >
              <div className="relative w-full aspect-[824.28/426.9] bg-gray-50">
                {hasDesktop && (
                  <img src={project.imageDesktop || project.desktopImages[0]} alt=""
                    className="absolute w-[80%] aspect-[669/376] rounded-lg shadow-lg right-0 top-[5%]"
                    draggable="false" loading="lazy" />
                )}
                {hasMobile && (
                  <img src={project.imageMobile || project.mobileImages[0]} alt=""
                    className="absolute w-[22%] aspect-[245/485] rounded-[0.2rem] shadow-lg -bottom-[2%] left-[4%]"
                    draggable="false" loading="lazy" />
                )}
              </div>
              <div className="p-[0.2rem] pt-[0.24rem]">
                <h3 className="font-SourceSansProBold lg:text-[0.5rem] text-[0.56rem] text-neutral-g group-hover:text-LightBlue-d transition-colors truncate">
                  {project.title}
                </h3>
                <p className="font-SourceSansProSemibold lg:text-[0.5rem] text-[0.5rem] text-neutral-e mt-[0.2rem] line-clamp-2 lg:leading-[0.2rem] leading-[0.64rem]">
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
          originEl={originRect}
          onClose={() => { setSelected(null); setOriginRect(null); }}
        />
      )}
    </section>
  );
}
