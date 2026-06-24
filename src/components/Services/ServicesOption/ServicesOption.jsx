import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "@/components/ui/Img";

function renderValue(val, feature) {
  if (feature === "Konfigurasi Admin" || val === true || val === false || val === "true" || val === "false" || val === "✓" || val === "✗") {
    if (val === true || val === "true" || val === "✓") {
      return (
        <div className="lg:w-[1.46rem] w-[6.5rem]">
          <Image src="/image/OurServices/green-check.svg" alt="" width={36} height={36} style={{ width: "100%", height: "auto" }} />
        </div>
      );
    }
    if (val === false || val === "false" || val === "✗") {
      return (
        <div className="lg:w-[1.32rem] w-[5.9rem]">
          <Image src="/image/OurServices/red-cross.svg" alt="" width={28} height={28} style={{ width: "100%", height: "auto" }} />
        </div>
      );
    }
    return null;
  }
  if (val === null || val === "" || val === "-") return null;
  return <span>{val}</span>;
}

export default function ServicesOption({ data }) {
  const { title, subtitle, featureRows, plans } = data || {};

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  if (!plans || plans.length === 0) return null;

  return (
    <section className="relative w-full lg:min-h-screen flex flex-col justify-center items-center bg-white-MainPage overflow-hidden lg:pt-[2.3rem] lg:pb-[2.7rem] pt-[6.1rem] pb-[10.2rem]">
      <div className="relative flex flex-col justify-center items-center text-black lg:gap-[0.68rem] gap-[1.22rem]">
        <div data-aos="fade-down" className="flex flex-col justify-center items-center lg:gap-[0.09rem] gap-[0.41rem]">
          <div className="text-neutral-g font-SourceSansProBold leading-[125%] lg:text-[1.82rem] text-[6.1rem]">
            {title || "Choose Your Services"}
          </div>
          <div className="text-neutral-e text-center leading-[150%] font-SourceSansProSemibold lg:text-[0.91rem] lg:w-[37.8rem] text-[2.8rem] w-[79.4rem]">
            {subtitle || ""}
          </div>
        </div>

        <div className="flex justify-start items-center bg-white-MainPage lg:w-auto lg:overflow-visible w-[79.4rem] overflow-x-scroll overflow-visible">
          <div data-aos="fade-up" className="flex bg-[#FAFDFF] border-[#E2E8F0] lg:border-[0.14rem] lg:rounded-[0.91rem] lg:shadow-[0_8px_15px_-7px_rgba(0,0,0,0.25)] border-[0.41rem] rounded-[3.3rem] shadow-[0_20px_65px_-33px_rgba(0,0,0,0.15)]">
            {/* Feature labels column */}
            <div className="flex flex-col border-[#E2E8F0] lg:border-r-[0.045rem] lg:w-[16.4rem] border-r-[0.2rem] w-[26.9rem]">
              <div className="flex flex-col justify-center items-start border-[#E2E8F0] lg:border-b-[0.045rem] lg:h-[2.6rem] lg:p-[0.73rem] lg:gap-[0.14rem] border-b-[0.2rem] h-[13.2rem] p-[2.0rem] gap-[0.81rem]">
                <div className="font-SourceSansProBold text-neutral-g leading-[125%] lg:text-[1.09rem] text-[4.1rem]">
                  Spesifikasi Layanan
                </div>
                <div className="font-SourceSansProSemibold text-neutral-e lg:text-[0.68rem] lg:leading-[133.333%] text-[2.4rem] leading-[5/3]">
                  Pilih Paket yang Sesuai untuk Kebutuhan Anda
                </div>
              </div>
              <div className="flex flex-col justify-center border-[#E2E8F0] lg:p-[0.73rem] lg:border-b-[0.045rem] lg:h-[1.4rem] p-[2.0rem] border-b-[0.2rem] h-[6.3rem]">
                <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] lg:text-[1.09rem] text-[3.7rem]">
                  Harga
                </div>
              </div>
              {featureRows?.map((feature, i) => (
                <div key={i} className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold lg:p-[0.73rem] lg:border-b-[0.045rem] lg:h-[0.91rem] lg:text-[0.82rem] p-[2.0rem] border-b-[0.2rem] h-[4.1rem] text-[3.3rem]">
                  {feature}
                </div>
              ))}
            </div>

            {/* Plan columns */}
            {plans.map((plan, pi) => (
              <div key={pi} className={`flex flex-col border-[#E2E8F0] relative ${pi < plans.length - 1 ? "lg:border-r-[0.045rem] border-r-[0.2rem]" : ""} lg:w-[16.4rem] w-[27.7rem]`}>
                {/* Header */}
                <div className="flex flex-col items-center border-[#E2E8F0] relative lg:border-b-[0.045rem] lg:h-[2.6rem] lg:p-[0.64rem] lg:gap-[0.32rem] border-b-[0.2rem] h-[13.2rem] px-[2.0rem] py-[2.8rem] gap-[0.81rem]">
                  <div className="w-full h-full relative">
                    <div className="flex flex-col justify-center items-center relative lg:gap-0 gap-[0.2rem]">
                      <div className="font-SourceSansProBold text-center text-neutral-g lg:text-[1.28rem] text-[3.7rem]">
                        {plan.name}
                      </div>
                      <div className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%] lg:text-[0.64rem] lg:w-auto text-[2.4rem] w-[21.8rem]">
                        {plan.subtitle || ""}
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                      <a href={plan.cta || "https://wa.me/6287882832538"} className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-6px] hover:scale-[110%] transition-all duration-500 ease-in-out lg:h-[0.52rem] lg:w-[13.9rem] lg:rounded-[0.36rem] h-[2.0rem] w-[19.5rem] rounded-[1.63rem]">
                        <p className="font-InterBold text-neutral-a lg:text-[0.73rem] text-[2.8rem]">{plan.ctaText || "Pilih Paket"}</p>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex flex-col justify-center items-center border-[#E2E8F0] lg:p-[0.73rem] lg:border-b-[0.045rem] lg:h-[1.4rem] border-b-[0.2rem] h-[6.3rem]">
                  <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] lg:text-[1.28rem] text-[3.7rem]">
                    {plan.priceNote && <div className="font-InterSemibold text-neutral-d lg:text-[0.64rem] lg:leading-[200%] text-[2.4rem] leading-[125%]">{plan.priceNote}</div>}
                    {plan.price}
                  </div>
                </div>

                {/* Feature values */}
                {featureRows?.map((feature, fi) => {
                  const val = plan.values?.[fi];
                  return (
                    <div key={fi} className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold lg:p-[0.73rem] lg:border-b-[0.045rem] lg:h-[0.91rem] lg:text-[0.82rem] border-b-[0.2rem] h-[4.1rem] text-[2.8rem] text-center">
                      {renderValue(val, feature)}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
