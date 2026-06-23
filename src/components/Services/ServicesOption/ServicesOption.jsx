import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "@/components/ui/Img";

function renderValue(val, feature) {
  if (feature === "Konfigurasi Admin") {
    if (val === true || val === "true" || val === "✓") {
      return (
        <div className="lg:w-[1.667vw] w-[7.442vw]">
          <Image src="/image/OurServices/green-check.svg" alt="" width={36} height={36} style={{ width: "100%", height: "auto" }} />
        </div>
      );
    }
    if (val === false || val === "false" || val === "✗") {
      return (
        <div className="lg:w-[1.51vw] w-[6.744vw]">
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
    <section className="relative w-full lg:min-h-screen flex flex-col justify-center items-center bg-white-MainPage overflow-hidden lg:pt-[5.208vw] lg:pb-[6.25vw] pt-[13.953vw] pb-[23.256vw]">
      <div className="relative flex flex-col justify-center items-center text-black lg:gap-[3.125vw] gap-[5.581vw]">
        <div data-aos="fade-down" className="flex flex-col justify-center items-center lg:gap-[0.417vw] gap-[1.86vw]">
          <div className="text-neutral-g font-SourceSansProBold leading-[125%] lg:text-[2.083vw] text-[6.977vw]">
            {title || "Choose Your Services"}
          </div>
          <div className="text-neutral-e text-center leading-[150%] font-SourceSansProSemibold lg:text-[1.042vw] lg:w-[43.229vw] text-[3.256vw] w-[90.699vw]">
            {subtitle || ""}
          </div>
        </div>

        <div className="flex justify-start items-center bg-white-MainPage lg:w-auto lg:overflow-visible w-[90.698vw] overflow-x-scroll overflow-visible">
          <div data-aos="fade-up" className="flex bg-[#FAFDFF] border-[#E2E8F0] lg:border-[0.156vw] lg:rounded-[1.042vw] lg:shadow-[0_0.573vw_1.042vw_-0.521vw_rgba(0,0,0,0.25)] border-[0.465vw] rounded-[3.721vw] shadow-[0_1.395vw_4.651vw_-2.326vw_rgba(0,0,0,0.15)]">
            {/* Feature labels column */}
            <div className="flex flex-col border-[#E2E8F0] lg:border-r-[0.052vw] lg:w-[18.75vw] border-r-[0.233vw] w-[30.698vw]">
              <div className="flex flex-col justify-center items-start border-[#E2E8F0] lg:border-b-[0.052vw] lg:h-[11.719vw] lg:p-[1.667vw] lg:gap-[0.625vw] border-b-[0.233vw] h-[60.465vw] p-[4.651vw] gap-[3.721vw]">
                <div className="font-SourceSansProBold text-neutral-g leading-[125%] lg:text-[1.25vw] text-[4.651vw]">
                  Spesifikasi Layanan
                </div>
                <div className="font-SourceSansProSemibold text-neutral-e lg:text-[0.781vw] lg:leading-[133.333%] text-[2.791vw] leading-[5/3]">
                  Pilih Paket yang Sesuai untuk Kebutuhan Anda
                </div>
              </div>
              <div className="flex flex-col justify-center border-[#E2E8F0] lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[6.406vw] p-[4.651vw] border-b-[0.233vw] h-[28.837vw]">
                <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5] lg:text-[1.25vw] text-[4.186vw]">
                  Harga
                </div>
              </div>
              {featureRows?.map((feature, i) => (
                <div key={i} className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw] p-[4.651vw] border-b-[0.233vw] h-[18.605vw] text-[3.721vw]">
                  {feature}
                </div>
              ))}
            </div>

            {/* Plan columns */}
            {plans.map((plan, pi) => (
              <div key={pi} className={`flex flex-col border-[#E2E8F0] relative lg:border-r-[0.052vw] lg:w-[18.75vw] border-r-[0.233vw] w-[31.628vw] ${pi === plans.length - 1 ? "" : ""}`}>
                {/* Header */}
                <div className="flex flex-col items-center border-[#E2E8F0] relative lg:border-b-[0.052vw] lg:h-[11.719vw] lg:p-[1.458vw] lg:gap-[1.458vw] border-b-[0.233vw] h-[60.465vw] px-[4.651vw] py-[6.512vw] gap-[3.721vw]">
                  <div className="w-full h-full relative">
                    <div className="flex flex-col justify-center items-center relative lg:gap-0 gap-[0.93vw]">
                      <div className={`font-SourceSansProBold text-center lg:text-[1.458vw] text-[4.186vw] ${plan.name === "Landing Page" ? "text-nowrap" : ""} text-neutral-g`}>
                        {plan.name}
                      </div>
                      <div className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%] lg:text-[0.729vw] lg:w-auto text-[2.791vw] w-[24.885vw]">
                        {plan.subtitle || ""}
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                      <a
                        href={plan.cta || "https://wa.me/6287882832538"}
                        className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-0.417vw] hover:scale-[110%] transition-all duration-500 ease-in-out lg:h-[2.396vw] lg:w-[15.833vw] lg:rounded-[0.417vw] h-[9.302vw] w-[22.326vw] rounded-[1.86vw]"
                      >
                        <p className="font-InterBold text-neutral-a lg:text-[0.833vw] text-[3.256vw]">
                          {plan.ctaText || "Pilih Paket"}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex flex-col justify-center items-center border-[#E2E8F0] lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[6.406vw] border-b-[0.233vw] h-[28.837vw]">
                  <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5] lg:text-[1.458vw] text-[4.186vw]">
                    {plan.priceNote && (
                      <div className="font-InterSemibold text-neutral-d lg:text-[0.729vw] lg:leading-[200%] text-[2.791vw] leading-[125%]">{plan.priceNote}</div>
                    )}
                    {plan.price}
                  </div>
                </div>

                {/* Feature values */}
                {featureRows?.map((feature, fi) => {
                  const val = plan.values?.[fi];
                  return (
                    <div key={fi} className={`flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw] border-b-[0.233vw] h-[18.605vw] text-[3.256vw] text-center`}>
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
