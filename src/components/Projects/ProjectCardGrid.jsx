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
    <section className="w-full bg-white-MainPage lg:py-[7.5rem] py-[20.09rem] lg:px-[14.4rem] px-[8.04rem]" id="project-cards">
      <div data-aos="fade-down" className="text-center mb-[4.32rem]">
        <p className="font-SourceSansProBold lg:text-[2.25rem] text-[6.03rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">Our Projects</p>
        <h2 className="font-SourceSansProBold lg:text-[3.45rem] text-[8rem] text-neutral-g lg:leading-[4.03rem] leading-[10.8rem] mt-[0.72rem]">Explore Our Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2.16rem]">
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
              className="group bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-[0.43rem] cursor-pointer"
            >
              <div className="relative w-full aspect-[824.28/426.9] bg-gray-50">
                {hasDesktop && (
                  <img src={project.imageDesktop || project.desktopImages[0]} alt=""
                    className="absolute w-[80%] aspect-[669/376] rounded-lg shadow-lg right-0 top-[5%]"
                    draggable="false" loading="lazy" />
                )}
                {hasMobile && (
                  <img src={project.imageMobile || project.mobileImages[0]} alt=""
                    className="absolute w-[22%] aspect-[245/485] rounded-[0.86rem] shadow-lg -bottom-[2%] left-[4%]"
                    draggable="false" loading="lazy" />
                )}
              </div>
              <div className="p-[1.44rem] pt-[2.16rem]">
                <h3 className="font-SourceSansProBold lg:text-[1.35rem] text-[5.04rem] text-neutral-g group-hover:text-LightBlue-d transition-colors truncate">
                  {project.title}
                </h3>
                <p className="font-SourceSansProSemibold lg:text-[1.05rem] text-[4.03rem] text-neutral-e mt-[0.43rem] line-clamp-2 lg:leading-[1.73rem] leading-[5.76rem]">
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
