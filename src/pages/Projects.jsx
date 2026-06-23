import { Helmet } from "react-helmet-async";
import { useCollection } from "@/context/DataContext";
import MarqueeCarousel from "@/components/Projects/MarqueeCarousel";
import ProjectCardGrid from "@/components/Projects/ProjectCardGrid";

export default function ProjectsPage() {
  const [projects] = useCollection("projects");
  const images = projects.map((p) => p.imageDesktop).filter(Boolean);

  const rowCount = 6;

  return (
    <>
      <Helmet>
        <title>Our Projects | ArachnoVa</title>
      </Helmet>

      {/* Section 1: Marquee carousel rows with centered header */}
      <section className="relative w-full bg-white-MainPage lg:pt-[7vw] pt-[25vw] lg:pb-[3vw] pb-[8vw] overflow-hidden">
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none lg:mt-[-2vw]">
          <div className="text-center bg-white/90 lg:py-[2.5vw] py-[5vw] lg:px-[4vw] px-[8vw] rounded-xl shadow-[0_0.5vw_2vw_rgba(0,0,0,0.08)] backdrop-blur-md">
            <p className="font-SourceSansProBold lg:text-[1.563vw] text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
              Our Projects
            </p>
            <h2 className="font-SourceSansProBold lg:text-[2.396vw] text-[6.977vw] text-neutral-g lg:leading-[2.8vw] leading-[7.5vw] mt-[0.5vw]">
              Explore Our Work
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-[1.5vw]">
          {Array.from({ length: rowCount }).map((_, i) => (
            <MarqueeCarousel
              key={i}
              images={images}
              direction={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </section>

      {/* Section 2: Project cards grid */}
      <ProjectCardGrid projects={projects} />
    </>
  );
}
