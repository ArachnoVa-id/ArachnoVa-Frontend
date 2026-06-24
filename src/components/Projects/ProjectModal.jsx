import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

const productLabels = {
  compro: "Company Profile",
  erp: "ERP System",
  "wa-apps": "WhatsApp Apps",
};

function SwipeImages({ images }) {
  const [idx, setIdx] = useState(0);
  const touchStart = useRef(0);
  const [touching, setTouching] = useState(false);
  const [deltaX, setDeltaX] = useState(0);

  if (!images.length) return null;

  const goTo = (next) => {
    if (next < 0) next = images.length - 1;
    if (next >= images.length) next = 0;
    setIdx(next);
  };

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; setTouching(true); setDeltaX(0); };
  const onTouchMove = (e) => { setDeltaX(e.touches[0].clientX - touchStart.current); };
  const onTouchEnd = () => {
    setTouching(false);
    if (deltaX > 50) goTo(idx - 1);
    else if (deltaX < -50) goTo(idx + 1);
    setDeltaX(0);
  };

  return (
    <div>
      <div className="rounded-lg overflow-hidden border border-zinc-700/60 relative select-none"
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${touching ? deltaX - idx * 100 : -idx * 100}%)` }}>
          {images.map((src, i) => (
            <div key={i} className="min-w-full flex items-center justify-center bg-zinc-800/50">
              <img src={src} alt="" className="w-full h-auto select-none pointer-events-none" draggable="false" />
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-[0.35rem] mt-[0.6rem]">
          {images.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`w-[0.4rem] h-[0.4rem] rounded-full transition-all duration-300 ${i === idx ? "bg-LightBlue-c scale-150" : "bg-zinc-600 hover:bg-zinc-400"}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectModal({ project, onClose, originEl }) {
  const [phase, setPhase] = useState("start");
  const cardRef = useRef(null);
  const originRect = useRef(null);

  if (!originRect.current && originEl) {
    originRect.current = originEl.getBoundingClientRect();
  }

  const desktopImages = project?.desktopImages?.filter(Boolean) || [project?.imageDesktop].filter(Boolean);
  const mobileImages = project?.mobileImages?.filter(Boolean) || [project?.imageMobile].filter(Boolean);
  const hasDesktop = desktopImages.length > 0;
  const hasMobile = mobileImages.length > 0;
  const productLabel = productLabels[project?.product] || project?.product || "";
  const domain = project?.link ? project.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "";

  useEffect(() => {
    if (!originRect.current) { setPhase("open"); return; }
    const maxW = Math.min(window.innerWidth * 0.9, 1100);
    const finalLeft = (window.innerWidth - maxW) / 2;
    const finalTop = Math.max(window.innerHeight * 0.05, 20);
    const finalHeight = window.innerHeight * 0.9;

    requestAnimationFrame(() => {
      if (!cardRef.current) return;
      cardRef.current.style.top = originRect.current.top + "px";
      cardRef.current.style.left = originRect.current.left + "px";
      cardRef.current.style.width = originRect.current.width + "px";
      cardRef.current.style.height = originRect.current.height + "px";
      cardRef.current.style.borderRadius = "12px";

      requestAnimationFrame(() => {
        if (!cardRef.current) return;
        cardRef.current.style.transition = "all 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-radius 0.35s ease";
        cardRef.current.style.top = finalTop + "px";
        cardRef.current.style.left = finalLeft + "px";
        cardRef.current.style.width = maxW + "px";
        cardRef.current.style.height = finalHeight + "px";
        cardRef.current.style.borderRadius = "12px";
        setPhase("open");
      });
    });
  }, []);

  const handleClose = () => {
    if (cardRef.current && originRect.current) {
      cardRef.current.style.transition = "all 0.2s ease, border-radius 0.2s ease";
      cardRef.current.style.top = originRect.current.top + "px";
      cardRef.current.style.left = originRect.current.left + "px";
      cardRef.current.style.width = originRect.current.width + "px";
      cardRef.current.style.height = originRect.current.height + "px";
      cardRef.current.style.borderRadius = "12px";
      setPhase("exiting");
    }
    setTimeout(onClose, 200);
  };

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, []);

  if (!project) return null;

  const startStyle = originRect.current
    ? {
        position: "fixed",
        zIndex: 200,
        top: originRect.current.top + "px",
        left: originRect.current.left + "px",
        width: originRect.current.width + "px",
        height: originRect.current.height + "px",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#18181B",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
      }
    : {
        position: "fixed",
        zIndex: 200,
        top: "5%",
        left: "5%",
        width: "90%",
        height: "90%",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#18181B",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
      };

  return (
    <>
      <div className="fixed inset-0 z-[199] bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        style={{ opacity: phase === "start" ? 0 : 1, transition: "opacity 0.3s ease" }} />

      <div ref={cardRef} style={startStyle}>
        <div className="h-full flex flex-col text-zinc-100"
          style={{ opacity: phase === "start" ? 0 : 1, transition: "opacity 0.2s ease 0.15s" }}>

          {/* Header — gallery metadata bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 shrink-0 min-h-0">
            <div className="flex items-center gap-3 min-w-0 truncate">
              {productLabel && (
                <span className="text-[0.65rem] uppercase tracking-[0.12em] text-zinc-500 font-medium shrink-0">
                  {productLabel}
                </span>
              )}
              {domain && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="text-[0.65rem] uppercase tracking-[0.12em] text-zinc-400 hover:text-LightBlue-c transition-colors truncate shrink-0">
                  {domain}
                </a>
              )}
            </div>
            <div className="flex items-center gap-3 shrink-0">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-gradient-to-r from-LightBlue-c to-LightBlue-d text-white text-xs font-InterBold rounded-lg hover:brightness-110 transition-all">
                  Visit Project
                </a>
              )}
              <button onClick={handleClose} className="text-zinc-500 hover:text-zinc-300 p-1 transition-colors">
                <IoMdClose size={20} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* Left — gallery images */}
            <div className="lg:w-[60%] p-5 overflow-y-auto flex flex-col gap-5">
              {hasDesktop && <SwipeImages images={desktopImages} />}
              {hasMobile && <SwipeImages images={mobileImages} />}
              {!hasDesktop && !hasMobile && (
                <div className="flex items-center justify-center h-full text-zinc-600 text-sm italic">
                  No images available
                </div>
              )}
            </div>

            {/* Right — gallery label card */}
            {project.description && (
              <div className="lg:w-[40%] overflow-y-auto border-t lg:border-t-0 lg:border-l border-zinc-800 p-5">
                <div className="bg-zinc-800/60 rounded-lg p-5 border border-zinc-700/40">
                  <h2 className="text-lg font-SourceSansProBold text-white mb-3 leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-sm text-zinc-400 leading-[1.7] whitespace-pre-line">
                    {project.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
