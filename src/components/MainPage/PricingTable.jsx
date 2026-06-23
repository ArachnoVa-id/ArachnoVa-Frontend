import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CheckIcon() {
  return (
    <svg className="lg:w-[1.2vw] w-[4vw] lg:h-[1.2vw] h-[4vw]" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" fill="#22C55E" />
      <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="lg:w-[1.2vw] w-[4vw] lg:h-[1.2vw] h-[4vw]" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" fill="#EF4444" />
      <path d="M7 7L13 13M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg className="lg:w-[1.2vw] w-[4vw] lg:h-[1.2vw] h-[4vw]" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" fill="#9CA3AF" />
      <line x1="6" y1="10" x2="14" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function renderValue(val) {
  if (val === true || val === "true" || val === "✓") return <CheckIcon />;
  if (val === false || val === "false" || val === "✗") return <CrossIcon />;
  if (val === null || val === "" || val === "-") return <MinusIcon />;
  return <span className="text-neutral-g font-InterSemibold lg:text-[0.833vw] text-[3vw]">{val}</span>;
}

export default function PricingTable({ data }) {
  const { title, subtitle, featureRows, plans } = data || {};

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  if (!plans || plans.length === 0) return null;

  return (
    <section className="w-full bg-white-MainPage lg:py-[5.208vw] py-[13.953vw] overflow-hidden">
      <div className="flex flex-col items-center lg:gap-[3.125vw] gap-[5.581vw] lg:px-[10vw] px-[5.581vw]">
        <div data-aos="fade-down" className="text-center lg:max-w-[55vw]">
          <p className="font-SourceSansProBold lg:text-[1.563vw] text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
            {title || "Pricing"}
          </p>
          <h2 className="font-SourceSansProBold lg:text-[2.396vw] text-[6.977vw] text-neutral-g lg:leading-[2.8vw] leading-[7.5vw] mt-[0.5vw]">
            {subtitle || "Choose Your Plan"}
          </h2>
        </div>

        {/* Desktop table */}
        <div data-aos="fade-up" className="w-full max-lg:hidden">
          <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            <div className="grid" style={{ gridTemplateColumns: `1fr repeat(${plans.length}, 1fr)` }}>
              {/* Header row */}
              <div className="p-[1.5vw] border-r border-[#E2E8F0] bg-gradient-to-br from-[#76BDE4] to-[#52CEE0]" />
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={`p-[1.5vw] text-center border-r border-[#E2E8F0] last:border-r-0 ${
                    plan.popular ? "bg-gradient-to-br from-[#76BDE4] to-[#52CEE0]" : ""
                  }`}
                >
                  <p className={`font-SourceSansProBold lg:text-[1.25vw] ${plan.popular ? "text-white" : "text-neutral-g"}`}>
                    {plan.name}
                  </p>
                  <p className={`font-InterBold lg:text-[1.8vw] mt-[0.3vw] ${plan.popular ? "text-white" : "text-LightBlue-c"}`}>
                    {plan.price}
                  </p>
                  {plan.priceNote && (
                    <p className={`lg:text-[0.73vw] font-InterSemibold ${plan.popular ? "text-white/80" : "text-neutral-d"}`}>
                      {plan.priceNote}
                    </p>
                  )}
                </div>
              ))}

              {/* Feature rows */}
              {featureRows?.map((feature, rowIndex) => (
                <div key={rowIndex} className="contents">
                  <div className={`p-[1vw] lg:px-[1.5vw] flex items-center border-t border-[#E2E8F0] border-r ${rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                    <p className="font-InterBold lg:text-[0.833vw] text-neutral-f">{feature}</p>
                  </div>
                  {plans.map((plan, colIndex) => (
                    <div
                      key={colIndex}
                      className={`p-[1vw] flex items-center justify-center border-t border-[#E2E8F0] border-r last:border-r-0 ${
                        rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      {renderValue(plan.values?.[rowIndex])}
                    </div>
                  ))}
                </div>
              ))}

              {/* CTA row */}
              <div className="border-t border-[#E2E8F0] border-r" />
              {plans.map((plan, i) => (
                <div key={i} className="p-[1.2vw] text-center border-t border-[#E2E8F0] border-r last:border-r-0">
                  <a
                    href={plan.cta || "https://wa.me/6287882832538"}
                    className="inline-block font-InterBold lg:text-[0.833vw] text-neutral-a bg-gradient-to-r from-[#2EC1D9] to-[#179FB5] px-[1.5vw] py-[0.6vw] rounded-[0.4vw] hover:translate-y-[-0.15vw] transition-all duration-300"
                  >
                    {plan.ctaText || "Pilih Paket"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="w-full lg:hidden space-y-[4vw]">
          {plans.map((plan, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className={`bg-white rounded-xl border border-[#E2E8F0] p-[5.581vw] shadow-sm ${plan.popular ? "ring-2 ring-LightBlue-c" : ""}`}>
              <p className="font-SourceSansProBold text-[5vw] text-neutral-g text-center">{plan.name}</p>
              <p className="font-InterBold text-[6vw] text-LightBlue-c text-center mt-[1vw]">{plan.price}</p>
              {plan.priceNote && <p className="text-[3vw] font-InterSemibold text-neutral-d text-center">{plan.priceNote}</p>}
              <div className="mt-[4vw] space-y-[2vw]">
                {featureRows?.map((feature, ri) => (
                  <div key={ri} className="flex justify-between items-center py-[1.5vw] border-b border-[#E2E8F0] last:border-b-0">
                    <p className="font-InterBold text-[3.5vw] text-neutral-f">{feature}</p>
                    <div className="flex-shrink-0 ml-[2vw]">{renderValue(plan.values?.[ri])}</div>
                  </div>
                ))}
              </div>
              <a
                href={plan.cta || "https://wa.me/6287882832538"}
                className="block text-center font-InterBold text-[3.5vw] text-neutral-a bg-gradient-to-r from-[#2EC1D9] to-[#179FB5] py-[2.5vw] rounded-[1.5vw] mt-[4vw]"
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
