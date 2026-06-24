import { useRef, useCallback, useState } from "react";
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
  const gridRef = useRef(null);
  const cardRefs = useRef({});
  const [autoOpenId, setAutoOpenId] = useState(null);

  const imageData = shuffle(
    projects.flatMap((p) =>
      (p.desktopImages || []).filter(Boolean).map((src) => ({
        src,
        projectId: p.id,
        projectTitle: p.title,
      }))
    )
  );

  const rowCount = 6;
  const chunkSize = Math.ceil(imageData.length / rowCount);
  const imageChunks = Array.from({ length: rowCount }, (_, i) =>
    imageData.slice(i * chunkSize, (i + 1) * chunkSize)
  );

  const handleCarouselClick = useCallback((projectId) => {
    const el = cardRefs.current[projectId];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      const wait = () => {
        setAutoOpenId(projectId);
        window.removeEventListener("scrollend", wait);
      };
      window.addEventListener("scrollend", wait, { once: true });
      setTimeout(() => setAutoOpenId(projectId), 700);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Projects | ArachnoVa</title>
      </Helmet>

      <section className="relative w-full bg-white-MainPage lg:pt-[0.8rem] pt-[3.52rem] lg:pb-[0.2rem] pb-[0.8rem] h-screen overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <svg className="absolute lg:w-[6.4rem] w-[12.8rem] lg:top-[0.32rem] top-[1.6rem] lg:left-[4.8rem] left-[1.6rem]" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "blur(60px)" }}>
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

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none lg:mt-[-2.4rem]">
          <div className="text-center bg-white/90 lg:py-[0.2rem] py-[0.48rem] lg:px-[0.48rem] px-[0.96rem] rounded-xl shadow-[0_0.6.0rem_2.4rem_rgba(0,0,0,0.08)] backdrop-blur-md">
            <p className="font-SourceSansProBold lg:text-[0.5rem] text-[0.67rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">Our Projects</p>
            <h2 className="font-SourceSansProBold lg:text-[0.5rem] text-[1.12rem] text-neutral-g lg:leading-[0.45rem] leading-[1.2rem] mt-[0.2rem]">Explore Our Work</h2>
          </div>
        </div>

        <div className="flex flex-col gap-[0.2rem] relative z-[5]">
          {imageChunks.map((chunk, i) => (
            <MarqueeCarousel
              key={i}
              items={chunk}
              direction={i % 2 === 0 ? "left" : "right"}
              onItemClick={handleCarouselClick}
            />
          ))}
        </div>
      </section>

      <div ref={gridRef}>
        <ProjectCardGrid projects={projects} autoOpenId={autoOpenId} onAutoOpenDone={() => setAutoOpenId(null)} cardRefs={cardRefs} />
      </div>
    </>
  );
}
