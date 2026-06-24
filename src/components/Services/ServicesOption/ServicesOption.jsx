import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "@/components/ui/Img";

function renderValue(val, feature) {
  if (feature === "Konfigurasi Admin" || val === true || val === false || val === "true" || val === "false" || val === "✓" || val === "✗") {
    if (val === true || val === "true" || val === "✓") {
      return (
        <div className="lg:w-[clamp(0.27rem,1.667vw,2.4rem)] w-[clamp(1.19rem,7.442vw,10.72rem)]">
          <Image src="/image/OurServices/green-check.svg" alt="" width={36} height={36} style={{ width: "100%", height: "auto" }} />
        </div>
      );
    }
    if (val === false || val === "false" || val === "✗") {
      return (
        <div className="lg:w-[clamp(0.24rem,1.51vw,2.17rem)] w-[clamp(1.08rem,6.744vw,9.71rem)]">
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
    <section className="relative w-full lg:min-h-screen flex flex-col justify-center items-center bg-white-MainPage overflow-hidden lg:pt-[clamp(0.83rem,2.604vw,7.5rem)] lg:pb-[clamp(1.0rem,3.125vw,9.0rem)] pt-[clamp(2.23rem,6.976vw,20.09rem)] pb-[clamp(3.72rem,11.628vw,33.49rem)]">
      <div className="relative flex flex-col justify-center items-center text-black lg:gap-[clamp(0.5rem,0.781vw,4.5rem)] gap-[clamp(0.89rem,1.395vw,8.04rem)]">
        <div data-aos="fade-down" className="flex flex-col justify-center items-center lg:gap-[clamp(0.2rem,0.104vw,0.6rem)] gap-[clamp(0.3rem,0.465vw,2.68rem)]">
          <div className="text-neutral-g font-SourceSansProBold leading-[125%] lg:text-[clamp(0.5rem,2.083vw,3.0rem)] text-[clamp(1.12rem,6.977vw,8rem)]">
            {title || "Choose Your Services"}
          </div>
          <div className="text-neutral-e text-center leading-[150%] font-SourceSansProSemibold lg:text-[clamp(0.5rem,1.042vw,1.5rem)] lg:w-[clamp(6.92rem,43.229vw,50rem)] text-[clamp(0.52rem,3.256vw,4.69rem)] w-[clamp(14.51rem,90.699vw,50rem)]">
            {subtitle || ""}
          </div>
        </div>

        <div className="flex justify-start items-center bg-white-MainPage lg:w-auto lg:overflow-visible w-[clamp(14.51rem,90.698vw,50rem)] overflow-x-scroll overflow-visible">
          <div data-aos="fade-up" className="flex bg-[#FAFDFF] border-[#E2E8F0] lg:border-[0.156vw] lg:rounded-[clamp(0.2rem,1.042vw,1.5rem)] lg:shadow-[0_0.573vw_1.042vw_-0.521vw_rgba(0,0,0,0.25)] border-[0.465vw] rounded-[clamp(0.6rem,3.721vw,5.36rem)] shadow-[0_1.395vw_4.651vw_-2.326vw_rgba(0,0,0,0.15)]">
            {/* Feature labels column */}
            <div className="flex flex-col border-[#E2E8F0] lg:border-r-[0.052vw] lg:w-[clamp(3.0rem,18.75vw,27.0rem)] border-r-[0.233vw] w-[clamp(4.91rem,30.698vw,44.21rem)]">
              <div className="flex flex-col justify-center items-start border-[#E2E8F0] lg:border-b-[0.052vw] lg:h-[clamp(1.88rem,2.929vw,16.88rem)] lg:p-[clamp(0.27rem,0.834vw,2.4rem)] lg:gap-[clamp(0.2rem,0.156vw,0.9rem)] border-b-[0.233vw] h-[clamp(9.67rem,15.117vw,50rem)] p-[clamp(0.74rem,2.325vw,6.7rem)] gap-[clamp(0.6rem,0.93vw,5.36rem)]">
                <div className="font-SourceSansProBold text-neutral-g leading-[125%] lg:text-[clamp(0.5rem,1.25vw,1.8rem)] text-[clamp(0.74rem,4.651vw,6.7rem)]">
                  Spesifikasi Layanan
                </div>
                <div className="font-SourceSansProSemibold text-neutral-e lg:text-[clamp(0.5rem,0.781vw,1.12rem)] lg:leading-[133.333%] text-[clamp(0.5rem,2.791vw,4.02rem)] leading-[5/3]">
                  Pilih Paket yang Sesuai untuk Kebutuhan Anda
                </div>
              </div>
              <div className="flex flex-col justify-center border-[#E2E8F0] lg:p-[clamp(0.27rem,0.834vw,2.4rem)] lg:border-b-[0.052vw] lg:h-[clamp(1.02rem,1.601vw,9.22rem)] p-[clamp(0.74rem,2.325vw,6.7rem)] border-b-[0.233vw] h-[clamp(4.61rem,7.209vw,41.53rem)]">
                <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] lg:text-[clamp(0.5rem,1.25vw,1.8rem)] text-[clamp(0.67rem,4.186vw,6.03rem)]">
                  Harga
                </div>
              </div>
              {featureRows?.map((feature, i) => (
                <div key={i} className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold lg:p-[clamp(0.27rem,0.834vw,2.4rem)] lg:border-b-[0.052vw] lg:h-[clamp(0.67rem,1.042vw,6.0rem)] lg:text-[clamp(0.5rem,0.938vw,1.35rem)] p-[clamp(0.74rem,2.325vw,6.7rem)] border-b-[0.233vw] h-[clamp(2.98rem,4.652vw,26.79rem)] text-[clamp(0.6rem,3.721vw,5.36rem)]">
                  {feature}
                </div>
              ))}
            </div>

            {/* Plan columns */}
            {plans.map((plan, pi) => (
              <div key={pi} className={`flex flex-col border-[#E2E8F0] relative ${pi < plans.length - 1 ? "lg:border-r-[0.052vw] border-r-[0.233vw]" : ""} lg:w-[clamp(3.0rem,18.75vw,27.0rem)] w-[clamp(5.06rem,31.628vw,45.54rem)]`}>
                {/* Header */}
                <div className="flex flex-col items-center border-[#E2E8F0] relative lg:border-b-[0.052vw] lg:h-[clamp(1.88rem,2.929vw,16.88rem)] lg:p-[clamp(0.23rem,0.729vw,2.1rem)] lg:gap-[clamp(0.23rem,0.364vw,2.1rem)] border-b-[0.233vw] h-[clamp(9.67rem,15.117vw,50rem)] px-[clamp(0.74rem,2.325vw,6.7rem)] py-[clamp(1.04rem,3.256vw,9.38rem)] gap-[clamp(0.6rem,0.93vw,5.36rem)]">
                  <div className="w-full h-full relative">
                    <div className="flex flex-col justify-center items-center relative lg:gap-0 gap-[clamp(0.2rem,0.233vw,1.34rem)]">
                      <div className="font-SourceSansProBold text-center text-neutral-g lg:text-[clamp(0.5rem,1.458vw,2.1rem)] text-[clamp(0.67rem,4.186vw,6.03rem)]">
                        {plan.name}
                      </div>
                      <div className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%] lg:text-[clamp(0.5rem,0.729vw,1.05rem)] lg:w-auto text-[clamp(0.5rem,2.791vw,4.02rem)] w-[clamp(3.98rem,24.885vw,35.83rem)]">
                        {plan.subtitle || ""}
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                      <a href={plan.cta || "https://wa.me/6287882832538"} className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-0.417vw] hover:scale-[110%] transition-all duration-500 ease-in-out lg:h-[clamp(0.38rem,0.599vw,3.45rem)] lg:w-[clamp(2.53rem,15.833vw,22.8rem)] lg:rounded-[clamp(0.2rem,0.417vw,0.6rem)] h-[clamp(1.49rem,2.325vw,13.39rem)] w-[clamp(3.57rem,22.326vw,32.15rem)] rounded-[clamp(0.3rem,1.86vw,2.68rem)]">
                        <p className="font-InterBold text-neutral-a lg:text-[clamp(0.5rem,0.833vw,1.2rem)] text-[clamp(0.52rem,3.256vw,4.69rem)]">{plan.ctaText || "Pilih Paket"}</p>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex flex-col justify-center items-center border-[#E2E8F0] lg:p-[clamp(0.27rem,0.834vw,2.4rem)] lg:border-b-[0.052vw] lg:h-[clamp(1.02rem,1.601vw,9.22rem)] border-b-[0.233vw] h-[clamp(4.61rem,7.209vw,41.53rem)]">
                  <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] lg:text-[clamp(0.5rem,1.458vw,2.1rem)] text-[clamp(0.67rem,4.186vw,6.03rem)]">
                    {plan.priceNote && <div className="font-InterSemibold text-neutral-d lg:text-[clamp(0.5rem,0.729vw,1.05rem)] lg:leading-[200%] text-[clamp(0.5rem,2.791vw,4.02rem)] leading-[125%]">{plan.priceNote}</div>}
                    {plan.price}
                  </div>
                </div>

                {/* Feature values */}
                {featureRows?.map((feature, fi) => {
                  const val = plan.values?.[fi];
                  return (
                    <div key={fi} className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold lg:p-[clamp(0.27rem,0.834vw,2.4rem)] lg:border-b-[0.052vw] lg:h-[clamp(0.67rem,1.042vw,6.0rem)] lg:text-[clamp(0.5rem,0.938vw,1.35rem)] border-b-[0.233vw] h-[clamp(2.98rem,4.652vw,26.79rem)] text-[clamp(0.52rem,3.256vw,4.69rem)] text-center">
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
