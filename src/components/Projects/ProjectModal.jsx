import { useState, useEffect, useRef } from "react";
import { IoMdClose, IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const productLabels = {
  compro: "Company Profile",
  erp: "ERP System",
  "wa-apps": "WhatsApp Apps",
};

function SlideTrack({ images, idx, goTo, className, style, vertical }) {
  const touchStart = useRef(0);
  const [touching, setTouching] = useState(false);
  const [delta, setDelta] = useState(0);

  if (!images.length) return null;

  const n = images.length;
  const axis = vertical ? "y" : "x";
  const slidePct = 100 / n;

  const onStart = (e) => {
    const val = axis === "y" ? e.touches[0].clientY : e.touches[0].clientX;
    touchStart.current = val;
    setTouching(true);
    setDelta(0);
  };
  const onMove = (e) => {
    const val = axis === "y" ? e.touches[0].clientY : e.touches[0].clientX;
    setDelta(val - touchStart.current);
  };
  const onEnd = () => {
    setTouching(false);
    const thresh = 40;
    if (delta > thresh) goTo(idx - 1);
    else if (delta < -thresh) goTo(idx + 1);
    setDelta(0);
  };

  const onWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0 || e.deltaX > 0) goTo(idx + 1);
    else goTo(idx - 1);
  };

  const trackPct = touching ? (delta / (axis === "y" ? window.innerHeight : window.innerWidth)) * 100 : 0;
  const offset = trackPct - idx * slidePct;

  return (
    <div className={`overflow-hidden ${className}`} style={style}
      onTouchStart={onStart} onTouchMove={onMove} onTouchEnd={onEnd}
      onWheel={onWheel}>
      <div className="flex transition-transform duration-300 ease-out"
        style={{
          [vertical ? "flexDirection" : ""]: vertical ? "column" : undefined,
          width: vertical ? "100%" : `${n * 100}%`,
          height: vertical ? `${n * 100}%` : "100%",
          transform: vertical ? `translateY(${offset}%)` : `translateX(${offset}%)`,
        }}>
        {images.map((src, i) => (
          <div key={i} className="flex items-center justify-center"
            style={{
              width: vertical ? "100%" : `${slidePct}%`,
              height: vertical ? `${slidePct}%` : "100%",
            }}>
            <img src={src} alt="" className="w-full h-full object-cover select-none pointer-events-none" draggable="false" />
          </div>
        ))}
      </div>
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

  const views = [];
  if (hasDesktop) views.push("desktop");
  if (hasMobile) views.push("mobile");

  const [view, setView] = useState(views[0] || null);
  const [desktopIdx, setDesktopIdx] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);
  const activeIdx = view === "desktop" ? desktopIdx : mobileIdx;
  const activeImages = view === "desktop" ? desktopImages : mobileImages;

  const productLabel = productLabels[project?.product] || project?.product || "";
  const domain = project?.link ? project.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "";

  const goTo = (next) => {
    const setter = view === "desktop" ? setDesktopIdx : setMobileIdx;
    const imgs = view === "desktop" ? desktopImages : mobileImages;
    if (next < 0) next = imgs.length - 1;
    if (next >= imgs.length) next = 0;
    setter(next);
  };

  useEffect(() => {
    if (!originRect.current) { setPhase("open"); return; }
    const maxW = Math.min(window.innerWidth * 0.9, 680);
    const finalLeft = (window.innerWidth - maxW) / 2;
    const finalHeight = Math.min(window.innerHeight * 0.78, 680);
    const finalTop = Math.max((window.innerHeight - finalHeight) / 2, 10);

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
        cardRef.current.style.borderRadius = "16px";
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
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); goTo(activeIdx - 1); }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); goTo(activeIdx + 1); }
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeIdx, view]);

  if (!project) return null;

  const startStyle = originRect.current
    ? {
        position: "fixed", zIndex: 200,
        top: originRect.current.top + "px", left: originRect.current.left + "px",
        width: originRect.current.width + "px", height: originRect.current.height + "px",
        borderRadius: "12px", overflow: "hidden", background: "white",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
      }
    : {
        position: "fixed", zIndex: 200, top: "2.5%", left: "50%",
        width: "min(90vw, 680px)", height: "95%", borderRadius: "16px",
        overflow: "hidden", background: "white",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
        transform: "translateX(-50%)",
      };

  return (
    <>
      <div className="fixed inset-0 z-[199] bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        style={{ opacity: phase === "start" ? 0 : 1, transition: "opacity 0.3s ease" }} />

      <div ref={cardRef} style={startStyle}>
        <div className="h-full flex flex-col bg-white"
          style={{ opacity: phase === "start" ? 0 : 1, transition: "opacity 0.2s ease 0.15s" }}>

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-LightBlue-c to-LightBlue-d flex items-center justify-center text-white text-[0.6rem] font-bold shrink-0">
                {project.title?.charAt(0)?.toUpperCase() || "P"}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-neutral-g leading-tight truncate">{project.title}</p>
                {domain && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="text-[0.65rem] text-LightBlue-c hover:underline truncate block leading-tight">
                    {domain}
                  </a>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="px-3 py-1 bg-gradient-to-r from-LightBlue-c to-LightBlue-d text-white text-xs font-InterBold rounded-lg hover:brightness-110 transition-all">
                  Visit
                </a>
              )}
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 p-0.5 transition-colors">
                <IoMdClose size={20} />
              </button>
            </div>
          </div>

          {/* View toggle */}
          {views.length > 1 && (
            <div className="flex justify-center shrink-0 bg-gray-50 border-b border-border">
              <div className="flex p-0.5 gap-0.5">
                {views.map(v => (
                  <button key={v} onClick={() => setView(v)}
                    className={`px-4 py-1 text-xs uppercase tracking-[0.08em] font-semibold rounded-md transition-all ${
                      view === v
                        ? "bg-LightBlue-c text-white shadow-sm"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    }`}>
                    {v === "desktop" ? "Desktop" : "Mobile"}
                    <span className="ml-1 text-[0.5rem] opacity-60">({(v === "desktop" ? desktopImages : mobileImages).length})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Image area */}
          <div className="flex-1 overflow-hidden select-none relative bg-gray-50">
            {view === "desktop" ? (
              <div className="w-full h-full flex items-center justify-center p-[1%]">
                <SlideTrack images={desktopImages} idx={desktopIdx} goTo={(n) => {
                  const imgs = desktopImages;
                  if (n < 0) n = imgs.length - 1;
                  if (n >= imgs.length) n = 0;
                  setDesktopIdx(n);
                }} className="w-full h-full rounded-xl shadow-xl" />
              </div>
            ) : view === "mobile" ? (
              <div className="w-full h-full flex items-center justify-center p-[2%]">
                <SlideTrack images={mobileImages} idx={mobileIdx} goTo={(n) => {
                  const imgs = mobileImages;
                  if (n < 0) n = imgs.length - 1;
                  if (n >= imgs.length) n = 0;
                  setMobileIdx(n);
                }} className="h-full w-auto aspect-[245/485] rounded-[0.8rem] shadow-xl" vertical />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm italic">No images</div>
            )}

            {/* Arrows */}
            {activeImages.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); goTo(activeIdx - 1); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-md transition text-gray-700 z-10">
                  <IoMdArrowBack size={16} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); goTo(activeIdx + 1); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-md transition text-gray-700 z-10">
                  <IoMdArrowForward size={16} />
                </button>
              </>
            )}

            {/* Dots */}
            {activeImages.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-[0.35rem]">
                {activeImages.map((_, i) => (
                  <button key={i} onClick={(e) => { e.stopPropagation(); goTo(i); }}
                    className={`w-[0.4rem] h-[0.4rem] rounded-full transition-all duration-300 ${i === activeIdx ? "bg-LightBlue-c scale-150" : "bg-gray-400/60 hover:bg-gray-500/80"}`} />
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="shrink-0 px-4 py-3 border-t border-border">
            {productLabel && (
              <span className="text-[0.6rem] uppercase tracking-[0.1em] text-gray-400 font-medium">{productLabel}</span>
            )}
            {project.description && (
              <p className="text-sm text-neutral-e leading-relaxed mt-1 whitespace-pre-line">{project.description}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
