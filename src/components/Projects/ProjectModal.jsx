import { useState, useEffect, useRef } from "react";
import { IoMdClose, IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

export default function ProjectModal({ project, onClose, originEl }) {
  const [desktopIdx, setDesktopIdx] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);
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

  const prevDesktop = () => setDesktopIdx((i) => (i > 0 ? i - 1 : desktopImages.length - 1));
  const nextDesktop = () => setDesktopIdx((i) => (i < desktopImages.length - 1 ? i + 1 : 0));
  const prevMobile = () => setMobileIdx((i) => (i > 0 ? i - 1 : mobileImages.length - 1));
  const nextMobile = () => setMobileIdx((i) => (i < mobileImages.length - 1 ? i + 1 : 0));

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
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") { e.preventDefault(); prevDesktop(); }
      if (e.key === "ArrowRight") { e.preventDefault(); nextDesktop(); }
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [desktopIdx, mobileIdx]);

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
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[199] bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
        style={{
          opacity: phase === "start" ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Expanding card */}
      <div ref={cardRef} style={startStyle}>
        <div className="h-full flex flex-col overflow-y-auto" style={{ opacity: phase === "start" ? 0 : 1, transition: "opacity 0.2s ease 0.15s" }}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border shrink-0">
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-neutral-g truncate">{project.title}</h2>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-LightBlue-c hover:underline truncate block">{project.link}</a>
              )}
            </div>
            <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 p-1 shrink-0 ml-2"><IoMdClose size={24} /></button>
          </div>

          {/* Images */}
          <div className={`p-4 grid gap-6 ${hasDesktop && hasMobile ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
            {hasDesktop && (
              <div>
                <p className="text-xs font-medium text-gray-500 mb-2">Desktop ({desktopIdx + 1}/{desktopImages.length})</p>
                <div className="flex items-center gap-2">
                  {desktopImages.length > 1 && (
                    <button onClick={prevDesktop} className="shrink-0 w-8 h-8 flex items-center justify-center bg-white border border-border rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition text-gray-600">
                      <IoMdArrowBack size={16} />
                    </button>
                  )}
                  <div className="flex-1 bg-gray-100 rounded-xl overflow-hidden border border-border min-w-0">
                    <img src={desktopImages[desktopIdx]} alt="" className="w-full h-auto" draggable="false" />
                  </div>
                  {desktopImages.length > 1 && (
                    <button onClick={nextDesktop} className="shrink-0 w-8 h-8 flex items-center justify-center bg-white border border-border rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition text-gray-600">
                      <IoMdArrowForward size={16} />
                    </button>
                  )}
                </div>
              </div>
            )}
            {hasMobile && (
              <div>
                <p className="text-xs font-medium text-gray-500 mb-2">Mobile ({mobileIdx + 1}/{mobileImages.length})</p>
                <div className="flex items-center gap-2 justify-center">
                  {mobileImages.length > 1 && (
                    <button onClick={prevMobile} className="shrink-0 w-8 h-8 flex items-center justify-center bg-white border border-border rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition text-gray-600">
                      <IoMdArrowBack size={16} />
                    </button>
                  )}
                  <div className="bg-gray-100 rounded-xl overflow-hidden border border-border max-w-[200px] w-full">
                    <img src={mobileImages[mobileIdx]} alt="" className="w-full h-auto" draggable="false" />
                  </div>
                  {mobileImages.length > 1 && (
                    <button onClick={nextMobile} className="shrink-0 w-8 h-8 flex items-center justify-center bg-white border border-border rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition text-gray-600">
                      <IoMdArrowForward size={16} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {project.description && (
            <div className="px-4 pb-4">
              <p className="text-sm text-neutral-e leading-relaxed">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-LightBlue-c to-LightBlue-d text-white text-sm font-InterBold rounded-lg hover:translate-y-[-2px] transition-transform">
                Visit Project
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
