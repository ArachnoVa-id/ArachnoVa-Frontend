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
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
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

      <section className="relative w-full bg-white-MainPage lg:pt-[clamp(0.8rem,5.0vw,7.2rem)] pt-[clamp(3.52rem,22.0vw,31.68rem)] lg:pb-[clamp(0.2rem,1.0vw,1.44rem)] pb-[clamp(0.8rem,5.0vw,7.2rem)] h-screen overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <svg className="absolute lg:w-[clamp(6.4rem,40.0vw,50rem)] w-[clamp(12.8rem,80.0vw,50rem)] lg:top-[clamp(0.32rem,2.0vw,2.88rem)] top-[clamp(1.6rem,10.0vw,14.4rem)] lg:left-[clamp(4.8rem,30.0vw,43.2rem)] left-[clamp(1.6rem,10.0vw,14.4rem)]" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "blur(60px)" }}>
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
          <div className="text-center bg-white/90 lg:py-[clamp(0.2rem,1.0vw,1.44rem)] py-[clamp(0.48rem,3.0vw,4.32rem)] lg:px-[clamp(0.48rem,3.0vw,4.32rem)] px-[clamp(0.96rem,6.0vw,8.64rem)] rounded-xl shadow-[0_0.5vw_2vw_rgba(0,0,0,0.08)] backdrop-blur-md">
            <p className="font-SourceSansProBold lg:text-[clamp(0.5rem,1.3vw,1.87rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">Our Projects</p>
            <h2 className="font-SourceSansProBold lg:text-[clamp(0.5rem,2.0vw,2.88rem)] text-[clamp(1.12rem,6.977vw,8rem)] text-neutral-g lg:leading-[clamp(0.45rem,2.8vw,4.03rem)] leading-[clamp(1.2rem,7.5vw,10.8rem)] mt-[clamp(0.2rem,0.3vw,0.43rem)]">Explore Our Work</h2>
          </div>
        </div>

        <div className="flex flex-col gap-[clamp(0.2rem,0.15vw,0.22rem)] relative z-[5]">
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
        <ProjectCardGrid projects={projects} autoOpenId={autoOpenId} onAutoOpenDone={() => setAutoOpenId(null)} />
      </div>
    </>
  );
}
