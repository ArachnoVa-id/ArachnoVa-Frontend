import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

const productLabels = {
  compro: "Company Profile",
  erp: "ERP System",
  "wa-apps": "WhatsApp Apps",
};

function MockupPreview({ images, mobileImages }) {
  const [idx, setIdx] = useState(0);
  const touchStart = useRef(0);
  const [touching, setTouching] = useState(false);
  const [deltaX, setDeltaX] = useState(0);

  const count = Math.max(images?.length || 1, mobileImages?.length || 1);

  const goTo = (next) => {
    if (next < 0) next = count - 1;
    if (next >= count) next = 0;
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

  const desktopSrc = images?.[idx % images.length];
  const mobileSrc = mobileImages?.[idx % mobileImages.length];

  if (!desktopSrc && !mobileSrc) return null;

  return (
    <div className="flex flex-col min-h-0 flex-1">
      <div className="flex-1 rounded-lg overflow-hidden border border-border relative select-none bg-gray-50 min-h-0"
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className="flex h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${touching ? deltaX - idx * 100 : -idx * 100}%)` }}>
          {Array.from({ length: count }).map((_, i) => {
            const ds = images?.[i % images.length];
            const ms = mobileImages?.[i % mobileImages.length];
            return (
              <div key={i} className="min-w-full h-full flex items-center justify-center bg-gray-50 p-[3%]">
                <div className="relative w-full h-full max-h-full max-w-full flex items-center justify-center">
                  {ds && (
                    <img src={ds} alt=""
                      className="w-[80%] aspect-[669/376] rounded-lg shadow-lg object-cover"
                      draggable="false" />
                  )}
                  {ms && (
                    <img src={ms} alt=""
                      className="absolute w-[22%] aspect-[245/485] rounded-[0.6rem] shadow-lg object-cover"
                      style={{ bottom: "-5%", left: "2%" }}
                      draggable="false" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {count > 1 && (
        <div className="flex items-center justify-center gap-[0.35rem] mt-[0.4rem] shrink-0">
          {Array.from({ length: count }).map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`w-[0.4rem] h-[0.4rem] rounded-full transition-all duration-300 ${i === idx ? "bg-LightBlue-c scale-150" : "bg-gray-300 hover:bg-gray-400"}`} />
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
    const maxW = Math.min(window.innerWidth * 0.9, 1024);
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
        background: "white",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
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
        background: "white",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
      };

  return (
    <>
      <div className="fixed inset-0 z-[199] bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
        style={{ opacity: phase === "start" ? 0 : 1, transition: "opacity 0.3s ease" }} />

      <div ref={cardRef} style={startStyle}>
        <div className="h-full flex flex-col"
          style={{ opacity: phase === "start" ? 0 : 1, transition: "opacity 0.2s ease 0.15s" }}>

          {/* Header */}
          <div className="flex items-start justify-between px-5 pt-4 pb-3 border-b border-border shrink-0">
            <div className="min-w-0 mr-4">
              {productLabel && (
                <span className="text-[0.65rem] uppercase tracking-[0.12em] text-gray-400 font-medium">
                  {productLabel}
                </span>
              )}
              <h2 className="text-xl font-SourceSansProBold text-neutral-g truncate leading-tight mt-0.5">
                {project.title}
              </h2>
              {domain && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-LightBlue-c hover:underline truncate block mt-0.5">
                  {domain}
                </a>
              )}
            </div>
            <div className="flex items-center gap-3 shrink-0 mt-0.5">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-gradient-to-r from-LightBlue-c to-LightBlue-d text-white text-xs font-InterBold rounded-lg hover:translate-y-[-1px] transition-transform">
                  Visit Project
                </a>
              )}
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 p-1 transition-colors">
                <IoMdClose size={22} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">
            {/* Left — mockup preview with swipe */}
            <div className="lg:w-[60%] p-4 pb-3 flex flex-col overflow-hidden min-h-0">
              {hasDesktop || hasMobile ? (
                <MockupPreview images={desktopImages} mobileImages={mobileImages} />
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-400 text-sm italic">
                  No images available
                </div>
              )}
            </div>

            {/* Right — description */}
            {project.description && (
              <div className="lg:w-[40%] overflow-hidden border-t lg:border-t-0 lg:border-l border-border p-5 flex items-start">
                <p className="text-sm text-neutral-e leading-relaxed whitespace-pre-line overflow-y-auto max-h-full">
                  {project.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
