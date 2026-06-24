import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";

const productTypes = [
  { key: "compro", label: "Company Profile", short: "ComPro" },
  { key: "erp", label: "Enterprise System", short: "ERP" },
  { key: "wa-apps", label: "WhatsApp Apps", short: "WA Apps" },
];

export default function PortoSection({ projects }) {
  const [active, setActive] = useState("compro");

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const filtered = projects.filter((p) => p.product === active);
  const currentProject = filtered[0];

  return (
    <section className="w-full lg:aspect-[1920/1312] max-lg:aspect-[430/1101] relative flex flex-row justify-center items-center bg-white-MainPage gap-y-[clamp(0.33rem,2.083vw,3.0rem)]">
      {/* Desktop */}
      <div className="flex flex-col justify-center items-center max-lg:hidden w-full lg:pt-[clamp(0.8rem,5.0vw,7.2rem)]">
        <div className="text-neutral-g text-[clamp(0.5rem,2.3vw,3.31rem)] font-SourceSansProBold flex justify-center">
          Our Tractions
        </div>
        <p className="text-neutral-e w-[clamp(9.28rem,58.0vw,50rem)] text-center text-[clamp(0.5rem,1.0vw,1.44rem)] font-SourceSansProSemibold mt-[clamp(0.2rem,0.75vw,1.08rem)] mb-[clamp(0.33rem,2.083vw,3.0rem)]">
          ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI. Kami dengan bangga mempersembahkan beberapa karya kami sebagai gambaran representatif.
        </p>

        {/* Product type cards + Portfolio preview side by side */}
        <div className="flex flex-row items-start gap-x-[clamp(0.48rem,3.0vw,4.32rem)] w-[clamp(12.8rem,80.0vw,50rem)]">
          {/* Left: Product type cards */}
          <div className="flex flex-col gap-[clamp(0.2rem,1.0vw,1.44rem)] w-[clamp(5.12rem,32.0vw,46.08rem)]">
            {productTypes.map((pt) => {
              const count = projects.filter((p) => p.product === pt.key).length;
              const isActive = active === pt.key;
              return (
                <div
                  key={pt.key}
                  onClick={() => setActive(pt.key)}
                  className={`group w-full lg:h-[clamp(1.1rem,6.875vw,9.9rem)] flex flex-row lg:p-[clamp(0.2rem,1.25vw,1.8rem)] gap-x-[clamp(0.2rem,1.042vw,1.5rem)] rounded-[clamp(0.2rem,0.729vw,1.05rem)] cursor-pointer z-50 border-[0.129vw] transition-all duration-300 ${
                    isActive ? "border-LightBlue-c shadow-md" : "border-border bg-white hover:shadow-sm"
                  }`}
                >
                  <div className="flex flex-col gap-y-[clamp(0.2rem,0.469vw,0.68rem)] flex-1 justify-center">
                    <p className={`font-SourceSansProBold lg:text-[clamp(0.5rem,1.458vw,2.1rem)] transition-all duration-500 ${
                      isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]" : "text-neutral-g"
                    }`}>
                      {pt.label}
                    </p>
                    <p className="font-SourceSansProSemibold lg:text-[clamp(0.5rem,0.833vw,1.2rem)] text-neutral-d">
                      {count} project{count > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Portfolio preview */}
          <div className="flex-1 relative">
            {currentProject && (
              <div data-aos="fade-left" className="bg-border p-[clamp(0.2rem,0.2vw,0.29rem)] rounded-[clamp(0.2rem,0.781vw,1.12rem)] group">
                <div className="aspect-[1008/588] w-full p-[clamp(0.2rem,1.0vw,1.44rem)] bg-[#FBFCFD] flex flex-col shadow-2xl rounded-[clamp(0.2rem,0.781vw,1.12rem)]">
                  <div className="w-full h-full relative overflow-y-scroll no-scrollbar rounded-[clamp(0.2rem,0.781vw,1.12rem)]">
                    <img
                      src={currentProject.imageDesktop}
                      alt=""
                      className="w-full rounded-xl"
                      draggable="false"
                    />
                    <div className="p-[clamp(0.2rem,1.2vw,1.73rem)] w-full h-full fixed top-0 left-0 pointer-events-none">
                      <div className="w-full justify-center items-center flex group-hover:opacity-0 opacity-100 group-hover:delay-0 delay-[350ms] group-hover:duration-500 duration-[1200ms]">
                        <img
                          alt="scroll"
                          src="/image/Porto/scroll-down.gif"
                          className="w-[clamp(0.8rem,5.0vw,7.2rem)] z-[3] absolute bottom-[clamp(0.32rem,2.0vw,2.88rem)] rounded-xl"
                          draggable="false"
                        />
                      </div>
                      <div className="w-full h-full bg-gradient-to-b from-transparent from-55% to-black group-hover:opacity-0 duration-500 rounded-[clamp(0.2rem,0.781vw,1.12rem)]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Mobile mockup */}
            {currentProject?.imageMobile && (
              <div className="bg-border absolute aspect-[303/514] z-[3] w-[clamp(2.52rem,15.781vw,22.72rem)] p-[.2vw] shadow-2xl rounded-[clamp(0.2rem,0.521vw,0.75rem)] -bottom-[4vh] -right-[clamp(0.64rem,4.0vw,5.76rem)] flex flex-col">
                <div className="relative w-full h-full bg-white rounded-[clamp(0.2rem,0.521vw,0.75rem)] p-[.5vw] group">
                  <div className="relative w-full h-full no-scrollbar overflow-y-scroll rounded-[clamp(0.2rem,0.521vw,0.75rem)]">
                    <img
                      src={currentProject.imageMobile}
                      alt=""
                      className="w-full"
                      draggable="false"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full p-[.5vw] pointer-events-none">
                    <div className="w-full justify-center items-center flex group-hover:opacity-0 opacity-100 group-hover:delay-0 delay-[350ms] group-hover:duration-[450ms] duration-[1200ms]">
                      <img
                        alt="scroll"
                        src="/image/Porto/scroll-down.gif"
                        className="w-[clamp(0.8rem,5.0vw,7.2rem)] z-[3] absolute bottom-[clamp(0.2rem,1.0vw,1.44rem)] rounded-xl origin-bottom scale-[.8]"
                        draggable="false"
                      />
                    </div>
                    <div className="w-full h-full bg-gradient-to-b from-transparent from-55% to-black group-hover:opacity-0 duration-500 rounded-[clamp(0.2rem,0.521vw,0.75rem)]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <a
          href="/projects"
          className="flex flex-row justify-center items-center w-[clamp(1.57rem,9.792vw,14.1rem)] gap-x-[clamp(0.2rem,0.26vw,0.37rem)] mt-[clamp(0.72rem,4.531vw,6.52rem)] aspect-[188/48] bg-transparent rounded-[clamp(0.2rem,0.417vw,0.6rem)] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
        >
          <p className="font-InterBold text-[clamp(0.5rem,0.833vw,1.2rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
            More Projects
          </p>
          <FaArrowRight className="text-[#24AAA7] w-[clamp(0.2rem,1.25vw,1.8rem)] aspect-[1/1]" />
        </a>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden w-full pt-[clamp(4.0rem,25.0vw,36.0rem)] pb-[clamp(1.6rem,10.0vw,14.4rem)] px-[clamp(0.89rem,5.581vw,8.04rem)]">
        <div className="text-neutral-g text-[clamp(1.28rem,8.0vw,8rem)] font-SourceSansProBold text-center">Our Tractions</div>
        <p className="text-neutral-e text-[clamp(0.5rem,3.0vw,4.32rem)] text-center font-SourceSansProSemibold my-[clamp(0.48rem,3.0vw,4.32rem)]">
          ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI.
        </p>

        <div className="flex flex-wrap gap-[clamp(0.32rem,2.0vw,2.88rem)] mb-[clamp(0.8rem,5.0vw,7.2rem)] justify-center">
          {productTypes.map((pt) => (
            <button
              key={pt.key}
              onClick={() => setActive(pt.key)}
              className={`px-[clamp(0.64rem,4.0vw,5.76rem)] py-[clamp(0.32rem,2.0vw,2.88rem)] rounded-[clamp(0.32rem,2.0vw,2.88rem)] text-[clamp(0.5rem,3.0vw,4.32rem)] font-InterBold transition-all ${
                active === pt.key ? "bg-LightBlue-c text-white" : "bg-border text-neutral-e"
              }`}
            >
              {pt.short}
            </button>
          ))}
        </div>

        {currentProject && (
          <div className="bg-border p-[clamp(0.2rem,0.5vw,0.72rem)] rounded-[clamp(0.28rem,1.781vw,2.56rem)] shadow-2xl w-full">
            <div className="w-full aspect-[390/228] bg-transparent p-[clamp(0.35rem,2.2vw,3.17rem)] bg-[#FBFCFD] rounded-[clamp(0.28rem,1.781vw,2.56rem)] flex flex-col overflow-y-scroll no-scrollbar">
              <div className="relative w-full h-full group">
                <div className="w-full h-full overflow-y-scroll no-scrollbar rounded-xl overflow-clip">
                  <img src={currentProject.imageDesktop} alt="" className="w-full" draggable="false" />
                </div>
              </div>
            </div>
          </div>
        )}

        <a href="/projects" className="flex flex-row justify-center items-center gap-x-[clamp(0.32rem,2.0vw,2.88rem)] mt-[clamp(1.28rem,8.0vw,11.52rem)]">
          <p className="font-InterBold text-[clamp(0.56rem,3.5vw,5.04rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
            More Projects
          </p>
          <FaArrowRight className="text-[#24AAA7] w-[clamp(0.64rem,4.0vw,5.76rem)]" />
        </a>
      </div>
    </section>
  );
}
