import { Helmet } from "react-helmet-async";
import { useCollection } from "@/context/DataContext";
import MarqueeCarousel from "@/components/Projects/MarqueeCarousel";
import ProjectCardGrid from "@/components/Projects/ProjectCardGrid";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ProjectsPage() {
  const [projects] = useCollection("projects");

  const allImages = shuffle(
    projects.flatMap((p) => [
      ...(p.desktopImages || []),
      ...(p.mobileImages || []),
    ]).filter(Boolean)
  );

  const rowCount = 6;

  return (
    <>
      <Helmet>
        <title>Our Projects | ArachnoVa</title>
      </Helmet>

      <section className="relative w-full bg-white-MainPage lg:pt-[6vw] pt-[22vw] lg:pb-[2vw] pb-[5vw] overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none lg:mt-[-2vw]">
          <div className="text-center bg-white/90 lg:py-[1.5vw] py-[3vw] lg:px-[3vw] px-[6vw] rounded-xl shadow-[0_0.5vw_2vw_rgba(0,0,0,0.08)] backdrop-blur-md">
            <p className="font-SourceSansProBold lg:text-[1.563vw] text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
              Our Projects
            </p>
            <h2 className="font-SourceSansProBold lg:text-[2.396vw] text-[6.977vw] text-neutral-g lg:leading-[2.8vw] leading-[7.5vw] mt-[0.5vw]">
              Explore Our Work
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-[0.3vw]">
          {Array.from({ length: rowCount }).map((_, i) => (
            <MarqueeCarousel
              key={i}
              images={allImages}
              direction={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </section>

      <ProjectCardGrid projects={projects} />
    </>
  );
}
