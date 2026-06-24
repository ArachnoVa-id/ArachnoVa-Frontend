import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

function SwipeImages({ images, label }) {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);
  const touchStart = useRef(0);
  const [touching, setTouching] = useState(false);
  const [deltaX, setDeltaX] = useState(0);

  if (!images.length) return null;

  const goTo = (next) => {
    if (next < 0) next = images.length - 1;
    if (next >= images.length) next = 0;
    setIdx(next);
  };

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
    setTouching(true);
    setDeltaX(0);
  };
  const onTouchMove = (e) => {
    setDeltaX(e.touches[0].clientX - touchStart.current);
  };
  const onTouchEnd = () => {
    setTouching(false);
    if (deltaX > 50) goTo(idx - 1);
    else if (deltaX < -50) goTo(idx + 1);
    setDeltaX(0);
  };

  return (
    <div>
      <div className="bg-gray-100 rounded-xl overflow-hidden border border-border relative select-none"
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div ref={trackRef} className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${touching ? deltaX - idx * 100 : -idx * 100}%)` }}>
          {images.map((src, i) => (
            <div key={i} className="min-w-full flex items-center justify-center bg-gray-100">
              <img src={src} alt="" className="w-full h-auto select-none pointer-events-none" draggable="false" />
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-[0.4rem] mt-[0.5rem]">
          {images.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`w-[0.5rem] h-[0.5rem] rounded-full transition-all duration-300 ${i === idx ? "bg-LightBlue-c scale-125" : "bg-gray-300 hover:bg-gray-400"}`} />
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
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, []);

  if (!project) return null;

  const startStyle = originRect.current ? {
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
  } : {
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
        <div className="h-full flex flex-col" style={{ opacity: phase === "start" ? 0 : 1, transition: "opacity 0.2s ease 0.15s" }}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border shrink-0">
            <h2 className="text-xl font-bold text-neutral-g truncate">{project.title}</h2>
            <div className="flex items-center gap-3 shrink-0">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-gradient-to-r from-LightBlue-c to-LightBlue-d text-white text-sm font-InterBold rounded-lg hover:translate-y-[-1px] transition-transform">
                  Visit Project
                </a>
              )}
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 p-1"><IoMdClose size={24} /></button>
            </div>
          </div>

          {/* Body: images left, desc right */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* Left: Images */}
            <div className="lg:w-[60%] p-4 overflow-y-auto flex flex-col gap-4">
              {hasDesktop && <SwipeImages images={desktopImages} label="Desktop" />}
              {hasMobile && <SwipeImages images={mobileImages} label="Mobile" />}
            </div>

            {/* Right: Description */}
            {project.description && (
              <div className="lg:w-[40%] p-4 overflow-y-auto border-t lg:border-t-0 lg:border-l border-border">
                <p className="text-sm text-neutral-e leading-relaxed whitespace-pre-line">{project.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
