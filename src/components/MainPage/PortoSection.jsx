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
    <section className="w-full lg:aspect-[1920/1312] max-lg:aspect-[430/1101] relative flex flex-row justify-center items-center bg-white-MainPage gap-y-[1.17rem]">
      {/* Desktop */}
      <div className="flex flex-col justify-center items-center max-lg:hidden w-full lg:pt-[2.8rem]">
        <div className="text-neutral-g text-[1.29rem] font-SourceSansProBold flex justify-center">
          Our Tractions
        </div>
        <p className="text-neutral-e w-[32.6rem] text-center text-[0.56rem] font-SourceSansProSemibold mt-[0.42rem] mb-[1.17rem]">
          ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI. Kami dengan bangga mempersembahkan beberapa karya kami sebagai gambaran representatif.
        </p>

        {/* Product type cards + Portfolio preview side by side */}
        <div className="flex flex-row items-start gap-x-[1.69rem] w-[45.0rem]">
          {/* Left: Product type cards */}
          <div className="flex flex-col gap-[0.56rem] w-[18.0rem]">
            {productTypes.map((pt) => {
              const count = projects.filter((p) => p.product === pt.key).length;
              const isActive = active === pt.key;
              return (
                <div
                  key={pt.key}
                  onClick={() => setActive(pt.key)}
                  className={`group w-full lg:h-[3.9rem] flex flex-row lg:p-[0.7rem] gap-x-[0.59rem] rounded-[0.41rem] cursor-pointer z-50 border-[0.07rem] transition-all duration-300 ${
                    isActive ? "border-LightBlue-c shadow-md" : "border-border bg-white hover:shadow-sm"
                  }`}
                >
                  <div className="flex flex-col gap-y-[0.26rem] flex-1 justify-center">
                    <p className={`font-SourceSansProBold lg:text-[0.82rem] transition-all duration-500 ${
                      isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]" : "text-neutral-g"
                    }`}>
                      {pt.label}
                    </p>
                    <p className="font-SourceSansProSemibold lg:text-[0.47rem] text-neutral-d">
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
              <div data-aos="fade-left" className="bg-border p-[0.11rem] rounded-[0.44rem] group">
                <div className="aspect-[1008/588] w-full p-[0.56rem] bg-[#FBFCFD] flex flex-col shadow-2xl rounded-[0.44rem]">
                  <div className="w-full h-full relative overflow-y-scroll no-scrollbar rounded-[0.44rem]">
                    <img
                      src={currentProject.imageDesktop}
                      alt=""
                      className="w-full rounded-xl"
                      draggable="false"
                    />
                    <div className="p-[0.68rem] w-full h-full fixed top-0 left-0 pointer-events-none">
                      <div className="w-full justify-center items-center flex group-hover:opacity-0 opacity-100 group-hover:delay-0 delay-[350ms] group-hover:duration-500 duration-[1200ms]">
                        <img
                          alt="scroll"
                          src="/image/Porto/scroll-down.gif"
                          className="w-[2.8rem] z-[3] absolute bottom-[1.12rem] rounded-xl"
                          draggable="false"
                        />
                      </div>
                      <div className="w-full h-full bg-gradient-to-b from-transparent from-55% to-black group-hover:opacity-0 duration-500 rounded-[0.44rem]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Mobile mockup */}
            {currentProject?.imageMobile && (
              <div className="bg-border absolute aspect-[303/514] z-[3] w-[8.9rem] p-[0.11rem] shadow-2xl rounded-[0.29rem] -bottom-[4vh] -right-[2.2rem] flex flex-col">
                <div className="relative w-full h-full bg-white rounded-[0.29rem] p-[0.28rem] group">
                  <div className="relative w-full h-full no-scrollbar overflow-y-scroll rounded-[0.29rem]">
                    <img
                      src={currentProject.imageMobile}
                      alt=""
                      className="w-full"
                      draggable="false"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full p-[0.28rem] pointer-events-none">
                    <div className="w-full justify-center items-center flex group-hover:opacity-0 opacity-100 group-hover:delay-0 delay-[350ms] group-hover:duration-[450ms] duration-[1200ms]">
                      <img
                        alt="scroll"
                        src="/image/Porto/scroll-down.gif"
                        className="w-[2.8rem] z-[3] absolute bottom-[0.56rem] rounded-xl origin-bottom scale-[.8]"
                        draggable="false"
                      />
                    </div>
                    <div className="w-full h-full bg-gradient-to-b from-transparent from-55% to-black group-hover:opacity-0 duration-500 rounded-[0.29rem]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <a
          href="/projects"
          className="flex flex-row justify-center items-center w-[5.5rem] gap-x-[0.15rem] mt-[2.5rem] aspect-[188/48] bg-transparent rounded-[0.23rem] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
        >
          <p className="font-InterBold text-[0.47rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
            More Projects
          </p>
          <FaArrowRight className="text-[#24AAA7] w-[0.7rem] aspect-[1/1]" />
        </a>
      </div>

      {/* Mobile */}
      <div className="flex flex-col justify-center items-center lg:hidden w-full pt-[14.1rem] pb-[5.6rem] px-[3.1rem]">
        <div className="text-neutral-g text-[4.5rem] font-SourceSansProBold text-center">Our Tractions</div>
        <p className="text-neutral-e text-[1.69rem] text-center font-SourceSansProSemibold my-[1.69rem]">
          ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI.
        </p>

        <div className="flex flex-wrap gap-[1.12rem] mb-[2.8rem] justify-center">
          {productTypes.map((pt) => (
            <button
              key={pt.key}
              onClick={() => setActive(pt.key)}
              className={`px-[2.2rem] py-[1.12rem] rounded-[1.12rem] text-[1.69rem] font-InterBold transition-all ${
                active === pt.key ? "bg-LightBlue-c text-white" : "bg-border text-neutral-e"
              }`}
            >
              {pt.short}
            </button>
          ))}
        </div>

        {currentProject && (
          <div className="bg-border p-[0.28rem] rounded-[1.0rem] shadow-2xl w-full">
            <div className="w-full aspect-[390/228] bg-transparent p-[1.24rem] bg-[#FBFCFD] rounded-[1.0rem] flex flex-col overflow-y-scroll no-scrollbar">
              <div className="relative w-full h-full group">
                <div className="w-full h-full overflow-y-scroll no-scrollbar rounded-xl overflow-clip">
                  <img src={currentProject.imageDesktop} alt="" className="w-full" draggable="false" />
                </div>
              </div>
            </div>
          </div>
        )}

        <a href="/projects" className="flex flex-row justify-center items-center gap-x-[1.12rem] mt-[4.5rem]">
          <p className="font-InterBold text-[1.97rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
            More Projects
          </p>
          <FaArrowRight className="text-[#24AAA7] w-[2.2rem]" />
        </a>
      </div>
    </section>
  );
}
