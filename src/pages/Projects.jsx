import { useRef, useCallback, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useCollection, useData } from "@/context/DataContext";
import { useLocation } from "react-router-dom";
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
  const { loading } = useData();
  const [projects] = useCollection("projects");
  const gridRef = useRef(null);
  const cardRefs = useRef({});
  const [autoOpenId, setAutoOpenId] = useState(null);
  const location = useLocation();
  const hasHandledQuery = useRef(false);

  useEffect(() => {
    if (hasHandledQuery.current) return;
    const params = new URLSearchParams(location.search);
    const pid = params.get("projectId");
    if (pid) {
      hasHandledQuery.current = true;
      const id = Number(pid);
      setTimeout(() => {
        const el = cardRefs.current[id];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => setAutoOpenId(id), 700);
        }
      }, 500);
    }
  }, [projects, location]);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-LightBlue-c" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Our Projects | ArachnoVa</title>
      </Helmet>

      <section className="relative w-full bg-white-MainPage lg:pt-[5.0rem] pt-[clamp(5rem,25vw,22rem)] lg:pb-[1.0rem] pb-[clamp(1rem,8vw,5rem)] max-h-screen overflow-hidden flex flex-col justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <svg className="absolute lg:w-[40.0rem] w-[clamp(20rem,100vw,80rem)] lg:top-[2.0rem] top-[clamp(2rem,15vw,10rem)] lg:left-[30.0rem] left-[clamp(2rem,15vw,10rem)]" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "blur(60px)" }}>
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

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none lg:mt-[-32px]">
          <div className="text-center bg-white/90 lg:py-[1.0rem] py-[clamp(0.8rem,5vw,3rem)] lg:px-[3.0rem] px-[clamp(1.5rem,8vw,6rem)] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-md">
            <p className="font-SourceSansProBold lg:text-[1.3rem] text-[clamp(1rem,6vw,4.2rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">Our Projects</p>
            <h2 className="font-SourceSansProBold lg:text-[2.0rem] text-[clamp(1.8rem,10vw,7rem)] text-neutral-g lg:leading-[2.8rem] leading-[clamp(2.2rem,11vw,7.5rem)] mt-[0.3rem]">Explore Our Work</h2>
          </div>
        </div>

        <div className="flex flex-col gap-[0.15rem] relative z-[5]">
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
