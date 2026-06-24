import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "@/components/ui/Img";

function renderValue(val, feature) {
  if (feature === "Konfigurasi Admin" || val === true || val === false || val === "true" || val === "false" || val === "✓" || val === "✗") {
    if (val === true || val === "true" || val === "✓") {
      return (
        <div className="lg:w-[1.67rem] w-[7.4rem]">
          <Image src="/image/OurServices/green-check.svg" alt="" width={36} height={36} style={{ width: "100%", height: "auto" }} />
        </div>
      );
    }
    if (val === false || val === "false" || val === "✗") {
      return (
        <div className="lg:w-[1.51rem] w-[6.7rem]">
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
    <section className="relative w-full lg:min-h-screen flex flex-col justify-center items-center bg-white-MainPage overflow-hidden lg:pt-[2.6rem] lg:pb-[3.1rem] pt-[7.0rem] pb-[11.6rem]">
      <div className="relative flex flex-col justify-center items-center text-black lg:gap-[0.78rem] gap-[1.4rem]">
        <div data-aos="fade-down" className="flex flex-col justify-center items-center lg:gap-[0.1rem] gap-[0.46rem]">
          <div className="text-neutral-g font-SourceSansProBold leading-[125%] lg:text-[2.1rem] text-[7.0rem]">
            {title || "Choose Your Services"}
          </div>
          <div className="text-neutral-e text-center leading-[150%] font-SourceSansProSemibold lg:text-[1.04rem] lg:w-[43.2rem] text-[3.3rem] w-[90.7rem]">
            {subtitle || ""}
          </div>
        </div>

        <div className="flex justify-start items-center bg-white-MainPage lg:w-auto lg:overflow-visible w-[90.7rem] overflow-x-scroll overflow-visible">
          <div data-aos="fade-up" className="flex bg-[#FAFDFF] border-[#E2E8F0] lg:border-[0.16rem] lg:rounded-[1.04rem] lg:shadow-[0_9px_17px_-8px_rgba(0,0,0,0.25)] border-[0.46rem] rounded-[3.7rem] shadow-[0_22px_74px_-37px_rgba(0,0,0,0.15)]">
            {/* Feature labels column */}
            <div className="flex flex-col border-[#E2E8F0] lg:border-r-[0.06rem] lg:w-[18.8rem] border-r-[0.23rem] w-[30.7rem]">
              <div className="flex flex-col justify-center items-start border-[#E2E8F0] lg:border-b-[0.06rem] lg:h-[2.9rem] lg:p-[0.83rem] lg:gap-[0.16rem] border-b-[0.23rem] h-[15.1rem] p-[2.3rem] gap-[0.93rem]">
                <div className="font-SourceSansProBold text-neutral-g leading-[125%] lg:text-[1.25rem] text-[4.7rem]">
                  Spesifikasi Layanan
                </div>
                <div className="font-SourceSansProSemibold text-neutral-e lg:text-[0.78rem] lg:leading-[133.333%] text-[2.8rem] leading-[5/3]">
                  Pilih Paket yang Sesuai untuk Kebutuhan Anda
                </div>
              </div>
              <div className="flex flex-col justify-center border-[#E2E8F0] lg:p-[0.83rem] lg:border-b-[0.06rem] lg:h-[1.6rem] p-[2.3rem] border-b-[0.23rem] h-[7.2rem]">
                <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] lg:text-[1.25rem] text-[4.2rem]">
                  Harga
                </div>
              </div>
              {featureRows?.map((feature, i) => (
                <div key={i} className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold lg:p-[0.83rem] lg:border-b-[0.06rem] lg:h-[1.04rem] lg:text-[0.94rem] p-[2.3rem] border-b-[0.23rem] h-[4.7rem] text-[3.7rem]">
                  {feature}
                </div>
              ))}
            </div>

            {/* Plan columns */}
            {plans.map((plan, pi) => (
              <div key={pi} className={`flex flex-col border-[#E2E8F0] relative ${pi < plans.length - 1 ? "lg:border-r-[0.06rem] border-r-[0.23rem]" : ""} lg:w-[18.8rem] w-[31.6rem]`}>
                {/* Header */}
                <div className="flex flex-col items-center border-[#E2E8F0] relative lg:border-b-[0.06rem] lg:h-[2.9rem] lg:p-[0.73rem] lg:gap-[0.36rem] border-b-[0.23rem] h-[15.1rem] px-[2.3rem] py-[3.3rem] gap-[0.93rem]">
                  <div className="w-full h-full relative">
                    <div className="flex flex-col justify-center items-center relative lg:gap-0 gap-[0.23rem]">
                      <div className="font-SourceSansProBold text-center text-neutral-g lg:text-[1.46rem] text-[4.2rem]">
                        {plan.name}
                      </div>
                      <div className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%] lg:text-[0.73rem] lg:w-auto text-[2.8rem] w-[24.9rem]">
                        {plan.subtitle || ""}
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                      <a href={plan.cta || "https://wa.me/6287882832538"} className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-7px] hover:scale-[110%] transition-all duration-500 ease-in-out lg:h-[0.6rem] lg:w-[15.8rem] lg:rounded-[0.42rem] h-[2.3rem] w-[22.3rem] rounded-[1.86rem]">
                        <p className="font-InterBold text-neutral-a lg:text-[0.83rem] text-[3.3rem]">{plan.ctaText || "Pilih Paket"}</p>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex flex-col justify-center items-center border-[#E2E8F0] lg:p-[0.83rem] lg:border-b-[0.06rem] lg:h-[1.6rem] border-b-[0.23rem] h-[7.2rem]">
                  <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] lg:text-[1.46rem] text-[4.2rem]">
                    {plan.priceNote && <div className="font-InterSemibold text-neutral-d lg:text-[0.73rem] lg:leading-[200%] text-[2.8rem] leading-[125%]">{plan.priceNote}</div>}
                    {plan.price}
                  </div>
                </div>

                {/* Feature values */}
                {featureRows?.map((feature, fi) => {
                  const val = plan.values?.[fi];
                  return (
                    <div key={fi} className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold lg:p-[0.83rem] lg:border-b-[0.06rem] lg:h-[1.04rem] lg:text-[0.94rem] border-b-[0.23rem] h-[4.7rem] text-[3.3rem] text-center">
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
