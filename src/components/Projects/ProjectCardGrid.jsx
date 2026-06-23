import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectCardGrid({ projects }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!projects?.length) return null;

  return (
    <section className="w-full bg-white-MainPage lg:py-[5.208vw] py-[13.953vw] lg:px-[10vw] px-[5.581vw]">
      <div data-aos="fade-down" className="text-center mb-[3vw]">
        <p className="font-SourceSansProBold lg:text-[1.563vw] text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
          Our Projects
        </p>
        <h2 className="font-SourceSansProBold lg:text-[2.396vw] text-[6.977vw] text-neutral-g lg:leading-[2.8vw] leading-[7.5vw] mt-[0.5vw]">
          Explore Our Work
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5vw]">
        {projects.map((project, i) => (
          <a
            key={project.id || i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay={(i % 4) * 100}
            className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-[0.3vw]"
          >
            {/* Desktop + Mobile screenshots side by side */}
            <div className="relative flex p-[0.5vw] gap-[0.3vw] bg-gray-100">
              {/* Mobile mockup */}
              <div className="w-[30%] aspect-[9/19] rounded-md overflow-hidden border border-[#E2E8F0] bg-white flex-shrink-0">
                {project.imageMobile && (
                  <img
                    src={project.imageMobile}
                    alt=""
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                )}
              </div>
              {/* Desktop mockup */}
              <div className="flex-1 aspect-[16/10] rounded-md overflow-hidden border border-[#E2E8F0] bg-white">
                {project.imageDesktop && (
                  <img
                    src={project.imageDesktop}
                    alt=""
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                )}
              </div>
            </div>
            {/* Info */}
            <div className="p-[1vw]">
              <h3 className="font-SourceSansProBold lg:text-[0.938vw] text-[3.5vw] text-neutral-g group-hover:text-LightBlue-d transition-colors truncate">
                {project.title}
              </h3>
              <p className="font-SourceSansProSemibold lg:text-[0.73vw] text-[2.8vw] text-neutral-e mt-[0.3vw] line-clamp-2 lg:leading-[1.2vw] leading-[4vw]">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
