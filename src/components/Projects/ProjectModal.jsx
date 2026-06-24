import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

const productLabels = {
  compro: "Company Profile",
  erp: "ERP System",
  "wa-apps": "WhatsApp Apps",
};

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

  const allImages = [];
  const count = Math.max(desktopImages.length, mobileImages.length);
  for (let i = 0; i < count; i++) {
    allImages.push({
      desktop: desktopImages[i % desktopImages.length],
      mobile: mobileImages[i % mobileImages.length],
    });
  }
  if (!allImages.length) allImages.push({ desktop: null, mobile: null });

  const [imgIdx, setImgIdx] = useState(0);
  const touchStart = useRef(0);
  const [touching, setTouching] = useState(false);
  const [deltaX, setDeltaX] = useState(0);

  const productLabel = productLabels[project?.product] || project?.product || "";
  const domain = project?.link ? project.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "";

  const goTo = (next) => {
    if (next < 0) next = allImages.length - 1;
    if (next >= allImages.length) next = 0;
    setImgIdx(next);
  };

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; setTouching(true); setDeltaX(0); };
  const onTouchMove = (e) => { setDeltaX(e.touches[0].clientX - touchStart.current); };
  const onTouchEnd = () => {
    setTouching(false);
    if (deltaX > 50) goTo(imgIdx - 1);
    else if (deltaX < -50) goTo(imgIdx + 1);
    setDeltaX(0);
  };

  useEffect(() => {
    if (!originRect.current) { setPhase("open"); return; }
    const maxW = Math.min(window.innerWidth * 0.9, 468);
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
        cardRef.current.style.borderRadius = "0";
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
        top: "2.5%",
        left: "50%",
        width: "min(90vw, 468px)",
        height: "95%",
        borderRadius: "0",
        overflow: "hidden",
        background: "white",
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

          {/* Header — profile bar style */}
          <div className="flex items-center justify-between px-3 py-2.5 border-b border-border shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-LightBlue-c to-LightBlue-d flex items-center justify-center text-white text-[0.55rem] font-bold shrink-0">
                {project.title?.charAt(0)?.toUpperCase() || "P"}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-neutral-g leading-tight truncate">{project.title}</p>
                {domain && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[0.65rem] text-LightBlue-c hover:underline truncate block leading-tight">
                    {domain}
                  </a>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-gradient-to-r from-LightBlue-c to-LightBlue-d text-white text-[0.65rem] font-InterBold rounded-lg hover:brightness-110 transition-all">
                  Visit
                </a>
              )}
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 p-0.5 transition-colors">
                <IoMdClose size={18} />
              </button>
            </div>
          </div>

          {/* Image area — Instagram style */}
          <div className="flex-1 overflow-hidden bg-black select-none relative"
            onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <div className="flex h-full transition-transform duration-300 ease-out"
              style={{ transform: `translateX(${touching ? deltaX - imgIdx * 100 : -imgIdx * 100}%)` }}>
              {allImages.map((pair, i) => (
                <div key={i} className="min-w-full h-full flex items-center justify-center bg-black">
                  {pair.desktop && pair.mobile ? (
                    <div className="relative w-full h-full flex items-center justify-center p-[5%]">
                      <img src={pair.desktop} alt="" className="w-[80%] aspect-[669/376] rounded-lg shadow-2xl object-cover" draggable="false" />
                      <img src={pair.mobile} alt="" className="absolute w-[22%] aspect-[245/485] rounded-[0.6rem] shadow-2xl object-cover" style={{ bottom: "3%", left: "4%" }} draggable="false" />
                    </div>
                  ) : pair.desktop ? (
                    <img src={pair.desktop} alt="" className="w-full h-full object-contain p-[3%]" draggable="false" />
                  ) : pair.mobile ? (
                    <div className="flex items-center justify-center w-full h-full p-[8%]">
                      <img src={pair.mobile} alt="" className="h-full w-auto rounded-lg shadow-2xl" draggable="false" />
                    </div>
                  ) : (
                    <div className="text-gray-500 text-sm italic">No image</div>
                  )}
                </div>
              ))}
            </div>

            {/* Dots overlay */}
            {allImages.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-[0.3rem]">
                {allImages.map((_, i) => (
                  <button key={i} onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
                    className={`w-[0.35rem] h-[0.35rem] rounded-full transition-all duration-300 ${i === imgIdx ? "bg-white scale-150" : "bg-white/50 hover:bg-white/80"}`} />
                ))}
              </div>
            )}
          </div>

          {/* Description area */}
          <div className="shrink-0 px-3 py-2.5 border-t border-border">
            {productLabel && (
              <span className="text-[0.6rem] uppercase tracking-[0.1em] text-gray-400 font-medium">{productLabel}</span>
            )}
            {project.description && (
              <p className="text-xs text-neutral-e leading-relaxed mt-1 whitespace-pre-line">{project.description}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
