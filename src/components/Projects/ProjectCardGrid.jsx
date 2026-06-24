import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectModal from "./ProjectModal";

export default function ProjectCardGrid({ projects, autoOpenId, onAutoOpenDone }) {
  const [selected, setSelected] = useState(null);
  const [originRect, setOriginRect] = useState(null);
  const cardRefs = useRef({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (autoOpenId && cardRefs.current[autoOpenId]) {
      const rect = cardRefs.current[autoOpenId].getBoundingClientRect();
      setOriginRect(rect);
      setSelected(projects.find((p) => p.id === autoOpenId));
      onAutoOpenDone?.();
    }
  }, [autoOpenId, projects]);

  const openProject = (project, e) => {
    const rect = e?.currentTarget?.getBoundingClientRect?.();
    if (rect) setOriginRect(rect);
    setSelected(project);
  };

  if (!projects?.length) return null;

  return (
    <section className="w-full bg-white-MainPage lg:py-[clamp(0.83rem,5.208vw,7.5rem)] py-[clamp(2.23rem,13.953vw,20.09rem)] lg:px-[clamp(1.6rem,10.0vw,14.4rem)] px-[clamp(0.89rem,5.581vw,8.04rem)]" id="project-cards">
      <div data-aos="fade-down" className="text-center mb-[clamp(0.48rem,3.0vw,4.32rem)]">
        <p className="font-SourceSansProBold lg:text-[clamp(0.5rem,1.563vw,2.25rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">Our Projects</p>
        <h2 className="font-SourceSansProBold lg:text-[clamp(0.5rem,2.396vw,3.45rem)] text-[clamp(1.12rem,6.977vw,8rem)] text-neutral-g lg:leading-[clamp(0.45rem,2.8vw,4.03rem)] leading-[clamp(1.2rem,7.5vw,10.8rem)] mt-[clamp(0.2rem,0.5vw,0.72rem)]">Explore Our Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(0.24rem,1.5vw,2.16rem)]">
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
              className="group bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-[clamp(0.1rem,0.3vw,0.43rem)] cursor-pointer"
            >
              <div className="relative w-full aspect-[824.28/426.9] bg-gray-50">
                {hasDesktop && (
                  <img src={project.imageDesktop || project.desktopImages[0]} alt=""
                    className="absolute w-[80%] aspect-[669/376] rounded-lg shadow-lg right-0 top-[5%]"
                    draggable="false" loading="lazy" />
                )}
                {hasMobile && (
                  <img src={project.imageMobile || project.mobileImages[0]} alt=""
                    className="absolute w-[22%] aspect-[245/485] rounded-[clamp(0.2rem,0.6vw,0.86rem)] shadow-lg -bottom-[2%] left-[4%]"
                    draggable="false" loading="lazy" />
                )}
              </div>
              <div className="p-[clamp(0.2rem,1.0vw,1.44rem)] pt-[clamp(0.24rem,1.5vw,2.16rem)]">
                <h3 className="font-SourceSansProBold lg:text-[clamp(0.5rem,0.938vw,1.35rem)] text-[clamp(0.56rem,3.5vw,5.04rem)] text-neutral-g group-hover:text-LightBlue-d transition-colors truncate">
                  {project.title}
                </h3>
                <p className="font-SourceSansProSemibold lg:text-[clamp(0.5rem,0.73vw,1.05rem)] text-[clamp(0.5rem,2.8vw,4.03rem)] text-neutral-e mt-[clamp(0.2rem,0.3vw,0.43rem)] line-clamp-2 lg:leading-[clamp(0.2rem,1.2vw,1.73rem)] leading-[clamp(0.64rem,4.0vw,5.76rem)]">
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
          originRect={originRect}
          onClose={() => { setSelected(null); setOriginRect(null); }}
        />
      )}
    </section>
  );
}
