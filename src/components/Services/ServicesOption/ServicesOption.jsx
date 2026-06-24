import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "@/components/ui/Img";

function renderValue(val, feature) {
  if (feature === "Konfigurasi Admin" || val === true || val === false || val === "true" || val === "false" || val === "✓" || val === "✗") {
    if (val === true || val === "true" || val === "✓") {
      return (
        <div className="lg:w-[0.94rem] w-[4.2rem]">
          <Image src="/image/OurServices/green-check.svg" alt="" width={36} height={36} style={{ width: "100%", height: "auto" }} />
        </div>
      );
    }
    if (val === false || val === "false" || val === "✗") {
      return (
        <div className="lg:w-[0.85rem] w-[3.8rem]">
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
    <section className="relative w-full lg:min-h-screen flex flex-col justify-center items-center bg-white-MainPage overflow-hidden lg:pt-[1.46rem] lg:pb-[1.76rem] pt-[3.9rem] pb-[6.5rem]">
      <div className="relative flex flex-col justify-center items-center text-black lg:gap-[0.44rem] gap-[0.78rem]">
        <div data-aos="fade-down" className="flex flex-col justify-center items-center lg:gap-[0.06rem] gap-[0.26rem]">
          <div className="text-neutral-g font-SourceSansProBold leading-[125%] lg:text-[1.17rem] text-[3.9rem]">
            {title || "Choose Your Services"}
          </div>
          <div className="text-neutral-e text-center leading-[150%] font-SourceSansProSemibold lg:text-[0.59rem] lg:w-[24.3rem] text-[1.83rem] w-[51.0rem]">
            {subtitle || ""}
          </div>
        </div>

        <div className="flex justify-start items-center bg-white-MainPage lg:w-auto lg:overflow-visible w-[51.0rem] overflow-x-scroll overflow-visible">
          <div data-aos="fade-up" className="flex bg-[#FAFDFF] border-[#E2E8F0] lg:border-[0.09rem] lg:rounded-[0.59rem] lg:shadow-[0_5px_9px_-5px_rgba(0,0,0,0.25)] border-[0.26rem] rounded-[2.1rem] shadow-[0_13px_42px_-21px_rgba(0,0,0,0.15)]">
            {/* Feature labels column */}
            <div className="flex flex-col border-[#E2E8F0] lg:border-r-[0.029rem] lg:w-[10.5rem] border-r-[0.13rem] w-[17.3rem]">
              <div className="flex flex-col justify-center items-start border-[#E2E8F0] lg:border-b-[0.029rem] lg:h-[1.65rem] lg:p-[0.47rem] lg:gap-[0.09rem] border-b-[0.13rem] h-[8.5rem] p-[1.31rem] gap-[0.52rem]">
                <div className="font-SourceSansProBold text-neutral-g leading-[125%] lg:text-[0.7rem] text-[2.6rem]">
                  Spesifikasi Layanan
                </div>
                <div className="font-SourceSansProSemibold text-neutral-e lg:text-[0.44rem] lg:leading-[133.333%] text-[1.57rem] leading-[5/3]">
                  Pilih Paket yang Sesuai untuk Kebutuhan Anda
                </div>
              </div>
              <div className="flex flex-col justify-center border-[#E2E8F0] lg:p-[0.47rem] lg:border-b-[0.029rem] lg:h-[0.9rem] p-[1.31rem] border-b-[0.13rem] h-[4.1rem]">
                <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] lg:text-[0.7rem] text-[2.4rem]">
                  Harga
                </div>
              </div>
              {featureRows?.map((feature, i) => (
                <div key={i} className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold lg:p-[0.47rem] lg:border-b-[0.029rem] lg:h-[0.59rem] lg:text-[0.53rem] p-[1.31rem] border-b-[0.13rem] h-[2.6rem] text-[2.1rem]">
                  {feature}
                </div>
              ))}
            </div>

            {/* Plan columns */}
            {plans.map((plan, pi) => (
              <div key={pi} className={`flex flex-col border-[#E2E8F0] relative ${pi < plans.length - 1 ? "lg:border-r-[0.029rem] border-r-[0.13rem]" : ""} lg:w-[10.5rem] w-[17.8rem]`}>
                {/* Header */}
                <div className="flex flex-col items-center border-[#E2E8F0] relative lg:border-b-[0.029rem] lg:h-[1.65rem] lg:p-[0.41rem] lg:gap-[0.2rem] border-b-[0.13rem] h-[8.5rem] px-[1.31rem] py-[1.83rem] gap-[0.52rem]">
                  <div className="w-full h-full relative">
                    <div className="flex flex-col justify-center items-center relative lg:gap-0 gap-[0.13rem]">
                      <div className="font-SourceSansProBold text-center text-neutral-g lg:text-[0.82rem] text-[2.4rem]">
                        {plan.name}
                      </div>
                      <div className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%] lg:text-[0.41rem] lg:w-auto text-[1.57rem] w-[14.0rem]">
                        {plan.subtitle || ""}
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                      <a href={plan.cta || "https://wa.me/6287882832538"} className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-4px] hover:scale-[110%] transition-all duration-500 ease-in-out lg:h-[0.34rem] lg:w-[8.9rem] lg:rounded-[0.23rem] h-[1.31rem] w-[12.6rem] rounded-[1.05rem]">
                        <p className="font-InterBold text-neutral-a lg:text-[0.47rem] text-[1.83rem]">{plan.ctaText || "Pilih Paket"}</p>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex flex-col justify-center items-center border-[#E2E8F0] lg:p-[0.47rem] lg:border-b-[0.029rem] lg:h-[0.9rem] border-b-[0.13rem] h-[4.1rem]">
                  <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] lg:text-[0.82rem] text-[2.4rem]">
                    {plan.priceNote && <div className="font-InterSemibold text-neutral-d lg:text-[0.41rem] lg:leading-[200%] text-[1.57rem] leading-[125%]">{plan.priceNote}</div>}
                    {plan.price}
                  </div>
                </div>

                {/* Feature values */}
                {featureRows?.map((feature, fi) => {
                  const val = plan.values?.[fi];
                  return (
                    <div key={fi} className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold lg:p-[0.47rem] lg:border-b-[0.029rem] lg:h-[0.59rem] lg:text-[0.53rem] border-b-[0.13rem] h-[2.6rem] text-[1.83rem] text-center">
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
