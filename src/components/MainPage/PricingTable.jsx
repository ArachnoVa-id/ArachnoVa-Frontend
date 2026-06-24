import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CheckIcon() {
  return (
    <svg className="lg:w-[1.73rem] w-[5.76rem] lg:h-[1.73rem] h-[5.76rem]" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" fill="#22C55E" />
      <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="lg:w-[1.73rem] w-[5.76rem] lg:h-[1.73rem] h-[5.76rem]" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" fill="#EF4444" />
      <path d="M7 7L13 13M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg className="lg:w-[1.73rem] w-[5.76rem] lg:h-[1.73rem] h-[5.76rem]" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" fill="#9CA3AF" />
      <line x1="6" y1="10" x2="14" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function renderValue(val) {
  if (val === true || val === "true" || val === "✓") return <CheckIcon />;
  if (val === false || val === "false" || val === "✗") return <CrossIcon />;
  if (val === null || val === "" || val === "-") return <MinusIcon />;
  return <span className="text-neutral-g font-InterSemibold lg:text-[1.2rem] text-[4.32rem]">{val}</span>;
}

export default function PricingTable({ data }) {
  const { title, subtitle, featureRows, plans } = data || {};

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  if (!plans || plans.length === 0) return null;

  return (
    <section className="w-full bg-white-MainPage lg:py-[7.5rem] py-[20.09rem] overflow-hidden">
      <div className="flex flex-col items-center lg:gap-[4.5rem] gap-[8.04rem] lg:px-[14.4rem] px-[8.04rem]">
        <div data-aos="fade-down" className="text-center lg:max-w-[50rem]">
          <p className="font-SourceSansProBold lg:text-[2.25rem] text-[6.03rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
            {title || "Pricing"}
          </p>
          <h2 className="font-SourceSansProBold lg:text-[3.45rem] text-[8rem] text-neutral-g lg:leading-[4.03rem] leading-[10.8rem] mt-[0.72rem]">
            {subtitle || "Choose Your Plan"}
          </h2>
        </div>

        {/* Desktop table */}
        <div data-aos="fade-up" className="w-full max-lg:hidden">
          <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="grid" style={{ gridTemplateColumns: `1fr repeat(${plans.length}, 1fr)` }}>
              {/* Header row */}
              <div className="p-[2.16rem] border-r border-border bg-gradient-to-br from-[#76BDE4] to-[#52CEE0]" />
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={`p-[2.16rem] text-center border-r border-border last:border-r-0 ${
                    plan.popular ? "bg-gradient-to-br from-[#76BDE4] to-[#52CEE0]" : ""
                  }`}
                >
                  <p className={`font-SourceSansProBold lg:text-[1.8rem] ${plan.popular ? "text-white" : "text-neutral-g"}`}>
                    {plan.name}
                  </p>
                  <p className={`font-InterBold lg:text-[2.59rem] mt-[0.43rem] ${plan.popular ? "text-white" : "text-LightBlue-c"}`}>
                    {plan.price}
                  </p>
                  {plan.priceNote && (
                    <p className={`lg:text-[1.05rem] font-InterSemibold ${plan.popular ? "text-white/80" : "text-neutral-d"}`}>
                      {plan.priceNote}
                    </p>
                  )}
                </div>
              ))}

              {/* Feature rows */}
              {featureRows?.map((feature, rowIndex) => (
                <div key={rowIndex} className="contents">
                  <div className={`p-[1.44rem] lg:px-[2.16rem] flex items-center border-t border-border border-r ${rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                    <p className="font-InterBold lg:text-[1.2rem] text-neutral-g">{feature}</p>
                  </div>
                  {plans.map((plan, colIndex) => (
                    <div
                      key={colIndex}
                      className={`p-[1.44rem] flex items-center justify-center border-t border-border border-r last:border-r-0 ${
                        rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      {renderValue(plan.values?.[rowIndex])}
                    </div>
                  ))}
                </div>
              ))}

              {/* CTA row */}
              <div className="border-t border-border border-r" />
              {plans.map((plan, i) => (
                <div key={i} className="p-[1.73rem] text-center border-t border-border border-r last:border-r-0">
                  <a
                    href={plan.cta || "https://wa.me/6287882832538"}
                    className="inline-block font-InterBold lg:text-[1.2rem] text-neutral-a bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] px-[2.16rem] py-[0.86rem] rounded-[0.58rem] hover:translate-y-[-1px] transition-all duration-300"
                  >
                    {plan.ctaText || "Pilih Paket"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="w-full lg:hidden space-y-[0.94rem]">
          {plans.map((plan, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className={`bg-white rounded-xl border border-border p-[8.04rem] shadow-sm ${plan.popular ? "ring-2 ring-LightBlue-c" : ""}`}>
              <p className="font-SourceSansProBold text-[7.2rem] text-neutral-g text-center">{plan.name}</p>
              <p className="font-InterBold text-[8rem] text-LightBlue-c text-center mt-[1.44rem]">{plan.price}</p>
              {plan.priceNote && <p className="text-[4.32rem] font-InterSemibold text-neutral-d text-center">{plan.priceNote}</p>}
              <div className="mt-[5.76rem] space-y-[0.47rem]">
                {featureRows?.map((feature, ri) => (
                  <div key={ri} className="flex justify-between items-center py-[2.16rem] border-b border-border last:border-b-0">
                    <p className="font-InterBold text-[5.04rem] text-neutral-g">{feature}</p>
                    <div className="flex-shrink-0 ml-[2.88rem]">{renderValue(plan.values?.[ri])}</div>
                  </div>
                ))}
              </div>
              <a
                href={plan.cta || "https://wa.me/6287882832538"}
                className="block text-center font-InterBold text-[5.04rem] text-neutral-a bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] py-[3.6rem] rounded-[2.16rem] mt-[5.76rem]"
              >
                {plan.ctaText || "Pilih Paket"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
