import { useState, useEffect, useRef } from "react";
import { IoMdClose, IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const productLabels = {
  compro: "Company Profile",
  erp: "ERP System",
  "wa-apps": "WhatsApp Apps",
};

function SlideTrack({ images, idx, goTo, className, style, vertical }) {
  const touchStart = useRef(0);
  const touchAxis = useRef("x");
  const [touching, setTouching] = useState(false);
  const [delta, setDelta] = useState(0);

  if (!images.length) return null;

  const axis = vertical ? "y" : "x";

  const onStart = (e) => {
    touchAxis.current = axis;
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
    if (delta > 40) goTo(idx - 1);
    else if (delta < -40) goTo(idx + 1);
    setDelta(0);
  };

  const onWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0 || e.deltaX > 0) goTo(idx + 1);
    else goTo(idx - 1);
  };

  const translate = vertical
    ? `translateY(${touching ? delta - idx * 100 : -idx * 100}%)`
    : `translateX(${touching ? delta - idx * 100 : -idx * 100}%)`;

  return (
    <div className={`overflow-hidden ${className}`} style={style}
      onTouchStart={onStart} onTouchMove={onMove} onTouchEnd={onEnd}
      onWheel={onWheel}>
      <div className={`flex ${vertical ? "flex-col" : ""} transition-transform duration-300 ease-out ${vertical ? "w-full" : "h-full"}`}
        style={{ transform: translate }}>
        {images.map((src, i) => (
          <div key={i} className={`${vertical ? "w-full min-h-full" : "min-w-full h-full"} flex items-center justify-center`}>
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

  const [showDesktop, setShowDesktop] = useState(true);
  const [showMobile, setShowMobile] = useState(true);

  const allImages = [];
  const count = Math.max(desktopImages.length, mobileImages.length, 1);
  for (let i = 0; i < count; i++) {
    allImages.push({
      desktop: desktopImages[i % desktopImages.length],
      mobile: mobileImages[i % mobileImages.length],
    });
  }

  const [imgIdx, setImgIdx] = useState(0);

  const productLabel = productLabels[project?.product] || project?.product || "";
  const domain = project?.link ? project.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "";

  const goTo = (next) => {
    if (next < 0) next = allImages.length - 1;
    if (next >= allImages.length) next = 0;
    setImgIdx(next);
  };

  useEffect(() => {
    if (!originRect.current) { setPhase("open"); return; }
    const maxW = Math.min(window.innerWidth * 0.9, 680);
    const finalLeft = (window.innerWidth - maxW) / 2;
    const finalTop = Math.max(window.innerHeight * 0.025, 10);
    const finalHeight = window.innerHeight * 0.95;

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
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); goTo(imgIdx - 1); }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); goTo(imgIdx + 1); }
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [imgIdx]);

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

          {/* Image area */}
          <div className="flex-1 overflow-hidden select-none relative bg-gray-50">
            <div className="w-full h-full flex items-center justify-center p-[2%]">
              {hasDesktop || hasMobile ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  {showDesktop && hasDesktop && (
                    <SlideTrack images={desktopImages} idx={imgIdx} goTo={goTo}
                      className="w-[95%] aspect-[669/376] rounded-xl shadow-xl"
                    />
                  )}
                  {showMobile && hasMobile && (
                    <SlideTrack images={mobileImages} idx={imgIdx} goTo={goTo}
                      className="absolute w-[26%] aspect-[245/485] rounded-[0.8rem] shadow-xl"
                      style={{ bottom: "2%", left: "1%" }} vertical
                    />
                  )}
                </div>
              ) : (
                <span className="text-gray-400 text-sm italic">No images</span>
              )}
            </div>

            {/* Arrows */}
            {allImages.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); goTo(imgIdx - 1); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-md transition text-gray-700 z-10">
                  <IoMdArrowBack size={16} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); goTo(imgIdx + 1); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-md transition text-gray-700 z-10">
                  <IoMdArrowForward size={16} />
                </button>
              </>
            )}

            {/* Dots */}
            {allImages.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-[0.35rem]">
                {allImages.map((_, i) => (
                  <button key={i} onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
                    className={`w-[0.4rem] h-[0.4rem] rounded-full transition-all duration-300 ${i === imgIdx ? "bg-LightBlue-c scale-150" : "bg-gray-400/60 hover:bg-gray-500/80"}`} />
                ))}
              </div>
            )}

            {/* View toggles */}
            <div className="absolute top-3 right-3 flex gap-1.5 z-10">
              {hasDesktop && (
                <button onClick={() => setShowDesktop(v => !v)}
                  className={`px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.08em] rounded-md transition-all font-medium ${
                    showDesktop
                      ? "bg-LightBlue-c text-white shadow-sm"
                      : "bg-white/70 text-gray-500 hover:bg-white/90"
                  }`}>
                  Desktop
                </button>
              )}
              {hasMobile && (
                <button onClick={() => setShowMobile(v => !v)}
                  className={`px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.08em] rounded-md transition-all font-medium ${
                    showMobile
                      ? "bg-LightBlue-c text-white shadow-sm"
                      : "bg-white/70 text-gray-500 hover:bg-white/90"
                  }`}>
                  Mobile
                </button>
              )}
            </div>
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
