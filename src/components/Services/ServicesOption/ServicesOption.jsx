import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "@/components/ui/Img";

function renderValue(val, feature) {
  if (feature === "Konfigurasi Admin" || val === true || val === false || val === "true" || val === "false" || val === "✓" || val === "✗") {
    if (val === true || val === "true" || val === "✓") {
      return (
        <div className="lg:w-[2.4rem] w-[10.72rem]">
          <Image src="/image/OurServices/green-check.svg" alt="" width={36} height={36} style={{ width: "100%", height: "auto" }} />
        </div>
      );
    }
    if (val === false || val === "false" || val === "✗") {
      return (
        <div className="lg:w-[2.17rem] w-[9.71rem]">
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
    <section className="relative w-full lg:min-h-screen flex flex-col justify-center items-center bg-white-MainPage overflow-hidden lg:pt-[7.5rem] lg:pb-[9.0rem] pt-[20.09rem] pb-[33.49rem]">
      <div className="relative flex flex-col justify-center items-center text-black lg:gap-[4.5rem] gap-[8.04rem]">
        <div data-aos="fade-down" className="flex flex-col justify-center items-center lg:gap-[0.6rem] gap-[2.68rem]">
          <div className="text-neutral-g font-SourceSansProBold leading-[125%] lg:text-[3.0rem] text-[8rem]">
            {title || "Choose Your Services"}
          </div>
          <div className="text-neutral-e text-center leading-[150%] font-SourceSansProSemibold lg:text-[1.5rem] lg:w-[50rem] text-[4.69rem] w-[50rem]">
            {subtitle || ""}
          </div>
        </div>

        <div className="flex justify-start items-center bg-white-MainPage lg:w-auto lg:overflow-visible w-[50rem] overflow-x-scroll overflow-visible">
          <div data-aos="fade-up" className="flex bg-[#FAFDFF] border-[#E2E8F0] lg:border-[0.037rem] lg:rounded-[1.5rem] lg:shadow-[0_2px_4px_-2px_rgba(0,0,0,0.25)] border-[0.11rem] rounded-[5.36rem] shadow-[0_5px_17px_-9px_rgba(0,0,0,0.15)]">
            {/* Feature labels column */}
            <div className="flex flex-col border-[#E2E8F0] lg:border-r-[0.012rem] lg:w-[27.0rem] border-r-[0.055rem] w-[44.21rem]">
              <div className="flex flex-col justify-center items-start border-[#E2E8F0] lg:border-b-[0.012rem] lg:h-[16.88rem] lg:p-[2.4rem] lg:gap-[0.9rem] border-b-[0.055rem] h-[50rem] p-[6.7rem] gap-[5.36rem]">
                <div className="font-SourceSansProBold text-neutral-g leading-[125%] lg:text-[1.8rem] text-[6.7rem]">
                  Spesifikasi Layanan
                </div>
                <div className="font-SourceSansProSemibold text-neutral-e lg:text-[1.12rem] lg:leading-[133.333%] text-[4.02rem] leading-[5/3]">
                  Pilih Paket yang Sesuai untuk Kebutuhan Anda
                </div>
              </div>
              <div className="flex flex-col justify-center border-[#E2E8F0] lg:p-[2.4rem] lg:border-b-[0.012rem] lg:h-[9.22rem] p-[6.7rem] border-b-[0.055rem] h-[41.53rem]">
                <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] lg:text-[1.8rem] text-[6.03rem]">
                  Harga
                </div>
              </div>
              {featureRows?.map((feature, i) => (
                <div key={i} className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold lg:p-[2.4rem] lg:border-b-[0.012rem] lg:h-[6.0rem] lg:text-[1.35rem] p-[6.7rem] border-b-[0.055rem] h-[26.79rem] text-[5.36rem]">
                  {feature}
                </div>
              ))}
            </div>

            {/* Plan columns */}
            {plans.map((plan, pi) => (
              <div key={pi} className={`flex flex-col border-[#E2E8F0] relative ${pi < plans.length - 1 ? "lg:border-r-[0.012rem] border-r-[0.055rem]" : ""} lg:w-[27.0rem] w-[45.54rem]`}>
                {/* Header */}
                <div className="flex flex-col items-center border-[#E2E8F0] relative lg:border-b-[0.012rem] lg:h-[16.88rem] lg:p-[2.1rem] lg:gap-[2.1rem] border-b-[0.055rem] h-[50rem] px-[6.7rem] py-[9.38rem] gap-[5.36rem]">
                  <div className="w-full h-full relative">
                    <div className="flex flex-col justify-center items-center relative lg:gap-0 gap-[1.34rem]">
                      <div className="font-SourceSansProBold text-center text-neutral-g lg:text-[2.1rem] text-[6.03rem]">
                        {plan.name}
                      </div>
                      <div className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%] lg:text-[1.05rem] lg:w-auto text-[4.02rem] w-[35.83rem]">
                        {plan.subtitle || ""}
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                      <a href={plan.cta || "https://wa.me/6287882832538"} className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-2px] hover:scale-[110%] transition-all duration-500 ease-in-out lg:h-[3.45rem] lg:w-[22.8rem] lg:rounded-[0.6rem] h-[13.39rem] w-[32.15rem] rounded-[2.68rem]">
                        <p className="font-InterBold text-neutral-a lg:text-[1.2rem] text-[4.69rem]">{plan.ctaText || "Pilih Paket"}</p>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex flex-col justify-center items-center border-[#E2E8F0] lg:p-[2.4rem] lg:border-b-[0.012rem] lg:h-[9.22rem] border-b-[0.055rem] h-[41.53rem]">
                  <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] lg:text-[2.1rem] text-[6.03rem]">
                    {plan.priceNote && <div className="font-InterSemibold text-neutral-d lg:text-[1.05rem] lg:leading-[200%] text-[4.02rem] leading-[125%]">{plan.priceNote}</div>}
                    {plan.price}
                  </div>
                </div>

                {/* Feature values */}
                {featureRows?.map((feature, fi) => {
                  const val = plan.values?.[fi];
                  return (
                    <div key={fi} className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold lg:p-[2.4rem] lg:border-b-[0.012rem] lg:h-[6.0rem] lg:text-[1.35rem] border-b-[0.055rem] h-[26.79rem] text-[4.69rem] text-center">
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
