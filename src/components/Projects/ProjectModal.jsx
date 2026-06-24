import { useState, useEffect } from "react";
import { IoMdClose, IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

export default function ProjectModal({ project, onClose }) {
  const [desktopIdx, setDesktopIdx] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);

  const desktopImages = project?.desktopImages?.filter(Boolean) || [project?.imageDesktop].filter(Boolean);
  const mobileImages = project?.mobileImages?.filter(Boolean) || [project?.imageMobile].filter(Boolean);
  const hasDesktop = desktopImages.length > 0;
  const hasMobile = mobileImages.length > 0;

  const prevDesktop = () => setDesktopIdx((i) => (i > 0 ? i - 1 : desktopImages.length - 1));
  const nextDesktop = () => setDesktopIdx((i) => (i < desktopImages.length - 1 ? i + 1 : 0));
  const prevMobile = () => setMobileIdx((i) => (i > 0 ? i - 1 : mobileImages.length - 1));
  const nextMobile = () => setMobileIdx((i) => (i < mobileImages.length - 1 ? i + 1 : 0));

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") { e.preventDefault(); prevDesktop(); }
      if (e.key === "ArrowRight") { e.preventDefault(); nextDesktop(); }
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [desktopIdx, mobileIdx]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h2 className="text-xl font-bold text-neutral-g">{project.title}</h2>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-LightBlue-c hover:underline">{project.link}</a>
            )}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1"><IoMdClose size={24} /></button>
        </div>

        <div className={`p-4 grid gap-4 ${hasDesktop && hasMobile ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
          {hasDesktop && (
            <div>
              <p className="text-xs font-medium text-gray-500 mb-2">Desktop ({desktopIdx + 1}/{desktopImages.length})</p>
              <div className="relative bg-gray-100 rounded-xl overflow-hidden border border-border">
                {desktopImages.length > 1 && (
                  <>
                    <button onClick={prevDesktop} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition"><IoMdArrowBack size={18} /></button>
                    <button onClick={nextDesktop} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition"><IoMdArrowForward size={18} /></button>
                  </>
                )}
                <img src={desktopImages[desktopIdx]} alt="" className="w-full h-auto" draggable="false" />
              </div>
            </div>
          )}

          {hasMobile && (
            <div>
              <p className="text-xs font-medium text-gray-500 mb-2">Mobile ({mobileIdx + 1}/{mobileImages.length})</p>
              <div className="relative bg-gray-100 rounded-xl overflow-hidden border border-border max-w-[280px] mx-auto">
                {mobileImages.length > 1 && (
                  <>
                    <button onClick={prevMobile} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition"><IoMdArrowBack size={18} /></button>
                    <button onClick={nextMobile} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition"><IoMdArrowForward size={18} /></button>
                  </>
                )}
                <img src={mobileImages[mobileIdx]} alt="" className="w-full h-auto" draggable="false" />
              </div>
            </div>
          )}
        </div>

        {project.description && (
          <div className="px-4 pb-4">
            <p className="text-sm text-neutral-e leading-relaxed">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-LightBlue-c to-LightBlue-d text-white text-sm font-InterBold rounded-lg hover:translate-y-[-0.1vw] transition-transform">
              Visit Project
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
