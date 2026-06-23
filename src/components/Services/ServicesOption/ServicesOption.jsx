import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function renderValue(val) {
  if (val === true || val === "true" || val === "✓") return <span className="text-green-500 lg:text-[1.2vw] text-[4vw]">✓</span>;
  if (val === false || val === "false" || val === "✗") return <span className="text-red-500 lg:text-[1.2vw] text-[4vw]">✗</span>;
  if (val === null || val === "" || val === "-") return <span className="text-gray-300 lg:text-[1.2vw] text-[4vw]">—</span>;
  return <span className="text-neutral-g font-InterSemibold lg:text-[0.833vw] text-[2.8vw]">{val}</span>;
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
          <div data-aos="fade-up" className="flex bg-[#FAFDFF] border-border lg:border-[0.156vw] lg:rounded-[1.042vw] lg:shadow-[0_0.573vw_1.042vw_-0.521vw_rgba(0,0,0,0.25)] border-[0.465vw] rounded-[3.721vw] shadow-[0_1.395vw_4.651vw_-2.326vw_rgba(0,0,0,0.15)]">
            {/* Feature labels column */}
            <div className="flex flex-col border-border lg:border-r-[0.052vw] lg:w-[18.75vw] border-r-[0.233vw] w-[30.698vw]">
              <div className="flex flex-col justify-center items-start border-border lg:border-b-[0.052vw] lg:h-[11.719vw] lg:p-[1.667vw] lg:gap-[0.625vw] border-b-[0.233vw] h-[60.465vw] p-[4.651vw] gap-[3.721vw]">
                <div className="font-SourceSansProBold text-neutral-g leading-[125%] lg:text-[1.25vw] text-[4.651vw]">
                  Spesifikasi Layanan
                </div>
                <div className="font-SourceSansProSemibold text-neutral-e lg:text-[0.781vw] lg:leading-[133.333%] text-[2.791vw] leading-[5/3]">
                  Pilih Paket yang Sesuai untuk Kebutuhan Anda
                </div>
              </div>
              {featureRows?.map((feature, i) => (
                <div key={i} className={`flex flex-col justify-center border-border font-InterSemibold lg:p-[1.667vw] lg:border-b-[0.052vw] lg:text-[0.938vw] p-[4.651vw] border-b-[0.233vw] h-[18.605vw] text-[3.256vw] ${i === 0 ? "lg:h-[6.406vw] h-[28.837vw]" : "lg:h-[4.167vw]"}`}>
                  <div className={i === 0 ? "font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5] lg:text-[1.25vw] text-[4.186vw]" : ""}>
                    {i === 0 ? "Harga" : feature}
                  </div>
                </div>
              ))}
            </div>

            {/* Plan columns */}
            {plans.map((plan, pi) => (
              <div key={pi} className={`flex flex-col border-border relative lg:border-r-[0.052vw] lg:w-[18.75vw] border-r-[0.233vw] w-[31.628vw] ${plan.popular ? "bg-gradient-to-b from-white to-blue-50" : ""}`}>
                <div className="flex flex-col items-center border-border relative lg:border-b-[0.052vw] lg:h-[11.719vw] lg:p-[1.458vw] lg:gap-[1.458vw] border-b-[0.233vw] h-[60.465vw] px-[4.651vw] py-[6.512vw] gap-[3.721vw]">
                  <div className="w-full h-full relative">
                    <div className="flex flex-col justify-center items-center relative lg:gap-0 gap-[0.93vw]">
                      <div className="font-SourceSansProBold text-center text-neutral-g lg:text-[1.458vw] text-[4.186vw]">
                        {plan.name}
                      </div>
                      <div className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%] lg:text-[0.729vw] lg:w-auto text-[2.791vw] w-[24.885vw]">
                        {plan.subtitle || ""}
                      </div>
                      {plan.popular && (
                        <div className="absolute -top-[2vw] right-[0.5vw] bg-LightBlue-c text-white lg:text-[0.625vw] text-[2vw] px-[1vw] py-[0.2vw] rounded-full font-InterBold">
                          POPULAR
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                      <a href={plan.cta || "https://wa.me/6287882832538"} className="inline-block font-InterBold lg:text-[0.729vw] text-[2.5vw] text-surface bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] lg:px-[1.5vw] px-[4vw] lg:py-[0.5vw] py-[1.5vw] rounded-[0.3vw] hover:translate-y-[-0.15vw] transition-all duration-300 whitespace-nowrap">
                        {plan.ctaText || "Pilih Paket"}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex flex-col justify-center items-center border-border lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[6.406vw] border-b-[0.233vw] h-[28.837vw]">
                  <div className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5] lg:text-[1.458vw] text-[4.186vw]">
                    {plan.price}
                  </div>
                  {plan.priceNote && (
                    <div className="font-InterSemibold text-neutral-gMuted lg:text-[0.729vw] text-[2.5vw]">{plan.priceNote}</div>
                  )}
                </div>

                {/* Feature values */}
                {featureRows?.map((feature, fi) => {
                  const val = plan.values?.[fi];
                  return (
                    <div key={fi} className={`flex flex-col justify-center items-center border-border font-InterSemibold lg:p-[1.667vw] lg:border-b-[0.052vw] lg:text-[0.938vw] border-b-[0.233vw] h-[18.605vw] text-[3.256vw] ${fi === 0 ? "lg:h-[6.406vw] h-[28.837vw]" : "lg:h-[4.167vw]"}`}>
                      {renderValue(val)}
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
