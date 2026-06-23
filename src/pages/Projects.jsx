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
    projects.flatMap((p) => [...(p.desktopImages || [])]).filter(Boolean)
  );

  const rowCount = 6;

  return (
    <>
      <Helmet>
        <title>Our Projects | ArachnoVa</title>
      </Helmet>

      <section className="relative w-full bg-white-MainPage lg:pt-[5vw] pt-[22vw] lg:pb-[1vw] pb-[5vw] h-screen overflow-hidden flex flex-col justify-center">
        {/* Decorative blur shape */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <svg className="absolute lg:w-[40vw] w-[80vw] lg:top-[2vw] top-[10vw] lg:left-[30vw] left-[10vw]" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "blur(60px)" }}>
            <path d="M300 0C450 0 550 50 600 150C650 250 600 350 500 380C400 410 200 420 100 350C0 280 -50 150 50 80C150 10 200 0 300 0Z" fill="url(#blobGrad)" opacity="0.3" />
            <defs>
              <linearGradient id="blobGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1AB0C8" />
                <stop offset="50%" stopColor="#84D4E1" />
                <stop offset="100%" stopColor="#179FB5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none lg:mt-[-2vw]">
          <div className="text-center bg-white/90 lg:py-[1vw] py-[3vw] lg:px-[3vw] px-[6vw] rounded-xl shadow-[0_0.5vw_2vw_rgba(0,0,0,0.08)] backdrop-blur-md">
            <p className="font-SourceSansProBold lg:text-[1.3vw] text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
              Our Projects
            </p>
            <h2 className="font-SourceSansProBold lg:text-[2vw] text-[6.977vw] text-neutral-g lg:leading-[2.8vw] leading-[7.5vw] mt-[0.3vw]">
              Explore Our Work
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-[0.15vw] relative z-[5]">
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
