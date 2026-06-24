import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaArrowLeft, FaArrowRight as FaArrowRightIcon } from "react-icons/fa";

const productTypes = [
  { key: "compro", label: "Company Profile", short: "ComPro" },
  { key: "erp", label: "Enterprise System", short: "ERP" },
  { key: "wa-apps", label: "WhatsApp Apps", short: "WA Apps" },
];

export default function PortoSection({ projects }) {
  const [active, setActive] = useState("compro");
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const filtered = projects.filter((p) => p.product === active);
  const currentProject = filtered[projectIndex] || filtered[0];
  const totalInCategory = filtered.length;

  const nextProject = () => setProjectIndex((i) => (i + 1) % totalInCategory);
  const prevProject = () => setProjectIndex((i) => (i - 1 + totalInCategory) % totalInCategory);

  const switchCategory = (key) => {
    setActive(key);
    setProjectIndex(0);
  };

  return (
    <section className="w-full bg-white-MainPage lg:py-[3.5rem] py-[8vw] overflow-hidden">
      {/* Desktop */}
      <div className="max-lg:hidden flex flex-col items-center w-full">
        <p className="font-SourceSansProBold text-[1.6rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
          Our Tractions
        </p>
        <p className="text-neutral-e text-[0.75rem] text-center font-SourceSansProSemibold mt-[0.3rem] mb-[1.5rem] max-w-[50rem]">
          ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI.
        </p>

        <div className="flex items-start gap-x-[2rem] w-[75rem]">
          {/* Left: Product type cards */}
          <div className="flex flex-col gap-[0.6rem] w-[22rem] shrink-0">
            {productTypes.map((pt) => {
              const count = projects.filter((p) => p.product === pt.key).length;
              const isActive = active === pt.key;
              return (
                <div
                  key={pt.key}
                  onClick={() => switchCategory(pt.key)}
                  className={`w-full lg:h-[4.8rem] flex flex-row lg:p-[0.9rem] gap-x-[0.7rem] rounded-[0.6rem] cursor-pointer border-[0.1rem] transition-all duration-300 ${
                    isActive ? "border-LightBlue-c shadow-sm" : "border-border bg-white hover:shadow-sm"
                  }`}
                >
                  <div className="flex flex-col gap-y-[0.3rem] flex-1 justify-center">
                    <p className={`font-SourceSansProBold lg:text-[1rem] transition-all duration-500 ${
                      isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]" : "text-neutral-g"
                    }`}>
                      {pt.label}
                    </p>
                    <p className="font-SourceSansProSemibold lg:text-[0.6rem] text-neutral-d">
                      {count} project{count > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Portfolio preview with swipe */}
          <div className="flex-1 relative">
            {currentProject && (
              <div data-aos="fade-left" className="bg-border p-[0.15rem] rounded-[0.6rem]">
                <div className="aspect-[1008/588] w-full p-[0.7rem] bg-[#FBFCFD] shadow-lg rounded-[0.6rem] overflow-hidden">
                  {totalInCategory > 1 && (
                    <>
                      <button onClick={prevProject} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition">
                        <FaArrowLeft size={16} />
                      </button>
                      <button onClick={nextProject} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition">
                        <FaArrowRight size={16} />
                      </button>
                    </>
                  )}
                  <img src={currentProject.imageDesktop} alt="" className="w-full rounded-lg" draggable="false" />
                </div>
              </div>
            )}
            {currentProject?.imageMobile && (
              <div className="bg-border absolute aspect-[303/514] z-[3] w-[11rem] p-[0.15rem] shadow-lg rounded-[0.4rem] -bottom-[3vh] -right-[3rem] flex flex-col">
                <div className="relative w-full h-full bg-white rounded-[0.4rem] overflow-hidden">
                  <img src={currentProject.imageMobile} alt="" className="w-full" draggable="false" />
                </div>
              </div>
            )}
          </div>
        </div>

        <a href="/projects" className="flex items-center gap-x-[0.3rem] mt-[2.5rem] hover:scale-[102%] transition-all duration-300">
          <p className="font-InterBold text-[0.7rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">More Projects</p>
          <FaArrowRightIcon className="text-[#24AAA7] w-[1rem]" />
        </a>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col items-center w-full px-[4vw]">
        <p className="font-SourceSansProBold text-[6vw] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5] text-center">
          Our Tractions
        </p>
        <p className="text-neutral-e text-[3vw] text-center font-SourceSansProSemibold mt-[1vw] mb-[4vw] max-w-[90vw]">
          ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI.
        </p>

        <div className="flex gap-[2vw] mb-[4vw] justify-center w-full overflow-x-auto no-scrollbar">
          {productTypes.map((pt) => (
            <button key={pt.key} onClick={() => switchCategory(pt.key)}
              className={`px-[3vw] py-[1.5vw] rounded-[2vw] text-[3vw] font-InterBold whitespace-nowrap transition-all ${
                active === pt.key ? "bg-LightBlue-c text-white" : "bg-border text-neutral-e"
              }`}
            >
              {pt.short}
            </button>
          ))}
        </div>

        {currentProject && (
          <div className="relative w-full max-w-[90vw]">
            {totalInCategory > 1 && (
              <>
                <button onClick={prevProject} className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow transition">
                  <FaArrowLeft size={12} />
                </button>
                <button onClick={nextProject} className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow transition">
                  <FaArrowRight size={12} />
                </button>
              </>
            )}
            <div className="bg-border p-[0.4vw] rounded-[2vw] shadow-md w-full">
              <div className="w-full aspect-[390/228] bg-[#FBFCFD] rounded-[2vw] overflow-hidden">
                <img src={currentProject.imageDesktop} alt="" className="w-full h-full object-cover" draggable="false" />
              </div>
            </div>
          </div>
        )}

        <a href="/projects" className="flex items-center gap-x-[2vw] mt-[6vw]">
          <p className="font-InterBold text-[3.5vw] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">More Projects</p>
          <FaArrowRightIcon className="text-[#24AAA7] w-[4vw]" />
        </a>
      </div>
    </section>
  );
}
