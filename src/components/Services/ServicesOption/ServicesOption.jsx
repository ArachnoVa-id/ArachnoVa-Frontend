import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "@/components/ui/Img";

function renderValue(val, feature) {
  if (feature === "Konfigurasi Admin" || val === true || val === false || val === "true" || val === "false" || val === "✓" || val === "✗") {
    if (val === true || val === "true" || val === "✓") {
      return (
        <div className="lg:w-[0.27rem] w-[1.19rem]">
          <Image src="/image/OurServices/green-check.svg" alt="" width={36} height={36} style={{ width: "100%", height: "auto" }} />
        </div>
      );
    }
    if (val === false || val === "false" || val === "✗") {
      return (
        <div className="lg:w-[0.24rem] w-[1.08rem]">
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
    <section className="relative w-full lg:min-h-screen flex flex-col justify-center items-center bg-white-MainPage overflow-hidden lg:pt-[0.83rem] lg:pb-[1.0rem] pt-[2.23rem] pb-[3.72rem]">
      <div className="relative flex flex-col justify-center items-center text-black lg:gap-[0.5rem] gap-[0.89rem]">
        <div data-aos="fade-down" className="flex flex-col justify-center items-center lg:gap-[0.2rem] gap-[0.3rem]">
          <div className="text-neutral-g font-SourceSansProBold leading-[125%] lg:text-[0.5rem] text-[1.12rem]">
            {title || "Choose Your Services"}
          </div>
          <div className="text-neutral-e text-center leading-[150%] font-SourceSansProSemibold lg:text-[0.5rem] lg:w-[6.92rem] text-[0.52rem] w-[14.51rem]">
            {subtitle || ""}
          </div>
        </div>

        <div className="flex justify-start items-center bg-white-MainPage lg:w-auto lg:overflow-visible w-[14.51rem] overflow-x-scroll overflow-visible">
          <div data-aos="fade-up" className="flex bg-[#FAFDFF] border-[#E2E8F0] lg:border-[3px] lg:rounded-[0.2rem] lg:shadow-[0_11px_20px_-10px_rgba(0,0,0,0.25)] border-[9px] rounded-[0.6rem] shadow-[0_27px_89px_-45px_rgba(0,0,0,0.15)]">
            {/* Feature labels column */}
            <div className="flex flex-col border-[#E2E8F0] lg:border-r-[1px] lg:w-[3.0rem] border-r-[4px] w-[4.91rem]">
              <div className="flex flex-col justify-center items-start border-[#E2E8F0] lg:border-b-[1px] lg:h-[1.88rem] lg:p-[0.27rem] lg:gap-[0.2rem] border-b-[4px] h-[9.67rem] p-[0.74rem] gap-[0.6rem]">
                <div className="font-SourceSansProBold text-neutral-g leading-[125%] lg:text-[0.5rem] text-[0.74rem]">
                  Spesifikasi Layanan
                </div>
                <div className="font-SourceSansProSemibold text-neutral-e lg:text-[0.5rem] lg:leading-[133.333%] text-[0.5rem] leading-[5/3]">
                  Pilih Paket yang Sesuai untuk Kebutuhan Anda
                </div>
              </div>
              <div className="flex flex-col justify-center border-[#E2E8F0] lg:p-[0.27rem] lg:border-b-[1px] lg:h-[1.02rem] p-[0.74rem] border-b-[4px] h-[4.61rem]">
                <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] lg:text-[0.5rem] text-[0.67rem]">
                  Harga
                </div>
              </div>
              {featureRows?.map((feature, i) => (
                <div key={i} className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold lg:p-[0.27rem] lg:border-b-[1px] lg:h-[0.67rem] lg:text-[0.5rem] p-[0.74rem] border-b-[4px] h-[2.98rem] text-[0.6rem]">
                  {feature}
                </div>
              ))}
            </div>

            {/* Plan columns */}
            {plans.map((plan, pi) => (
              <div key={pi} className={`flex flex-col border-[#E2E8F0] relative ${pi < plans.length - 1 ? "lg:border-r-[1px] border-r-[4px]" : ""} lg:w-[3.0rem] w-[5.06rem]`}>
                {/* Header */}
                <div className="flex flex-col items-center border-[#E2E8F0] relative lg:border-b-[1px] lg:h-[1.88rem] lg:p-[0.23rem] lg:gap-[0.23rem] border-b-[4px] h-[9.67rem] px-[0.74rem] py-[1.04rem] gap-[0.6rem]">
                  <div className="w-full h-full relative">
                    <div className="flex flex-col justify-center items-center relative lg:gap-0 gap-[0.2rem]">
                      <div className="font-SourceSansProBold text-center text-neutral-g lg:text-[0.5rem] text-[0.67rem]">
                        {plan.name}
                      </div>
                      <div className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%] lg:text-[0.5rem] lg:w-auto text-[0.5rem] w-[3.98rem]">
                        {plan.subtitle || ""}
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                      <a href={plan.cta || "https://wa.me/6287882832538"} className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-8px] hover:scale-[110%] transition-all duration-500 ease-in-out lg:h-[0.38rem] lg:w-[2.53rem] lg:rounded-[0.2rem] h-[1.49rem] w-[3.57rem] rounded-[0.3rem]">
                        <p className="font-InterBold text-neutral-a lg:text-[0.5rem] text-[0.52rem]">{plan.ctaText || "Pilih Paket"}</p>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex flex-col justify-center items-center border-[#E2E8F0] lg:p-[0.27rem] lg:border-b-[1px] lg:h-[1.02rem] border-b-[4px] h-[4.61rem]">
                  <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] lg:text-[0.5rem] text-[0.67rem]">
                    {plan.priceNote && <div className="font-InterSemibold text-neutral-d lg:text-[0.5rem] lg:leading-[200%] text-[0.5rem] leading-[125%]">{plan.priceNote}</div>}
                    {plan.price}
                  </div>
                </div>

                {/* Feature values */}
                {featureRows?.map((feature, fi) => {
                  const val = plan.values?.[fi];
                  return (
                    <div key={fi} className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold lg:p-[0.27rem] lg:border-b-[1px] lg:h-[0.67rem] lg:text-[0.5rem] border-b-[4px] h-[2.98rem] text-[0.52rem] text-center">
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
