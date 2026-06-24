import { useSettings } from "@/context/DataContext";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "@/components/ui/Img";

function CheckIcon() {
  return <div className="w-6 h-6 sm:w-7 sm:h-7 mx-auto"><Image src="/image/OurServices/green-check.svg" alt="✓" width={36} height={36} style={{ width: "100%", height: "auto" }} /></div>;
}
function CrossIcon() {
  return <div className="w-6 h-6 sm:w-7 sm:h-7 mx-auto"><Image src="/image/OurServices/red-cross.svg" alt="✗" width={28} height={28} style={{ width: "100%", height: "auto" }} /></div>;
}

function renderValue(val, feature) {
  if (val === true || val === "true" || val === "✓") return <CheckIcon />;
  if (val === false || val === "false" || val === "✗") return <CrossIcon />;
  if (val === null || val === "" || val === "-") return <span className="text-gray-300">—</span>;
  return <span className="text-neutral-g font-InterSemibold text-sm lg:text-sm whitespace-pre-line">{val}</span>;
}

const cell = "px-3 py-2.5 border-b border-r border-[#E2E8F0] last:border-r-0 text-center text-sm";
const headCell = "px-3 py-3 border-b border-r border-[#E2E8F0] text-center";

export default function ServicesOption({ data }) {
  const { title, subtitle, featureRows, plans } = data || {};

  const settings = useSettings();
  useEffect(() => { AOS.init({ duration: 1500 }); }, []);

  if (!plans || plans.length === 0) return null;

  return (
    <section className="w-full bg-white-MainPage py-12 lg:py-16 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-5xl px-4">
        <div data-aos="fade-down" className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-SourceSansProBold text-neutral-g">
            {title || "Choose Your Services"}
          </h2>
          <p className="mt-2 text-sm lg:text-base text-neutral-e max-w-xl mx-auto">
            {subtitle || ""}
          </p>
        </div>

        {/* Desktop table */}
        <div data-aos="fade-up" className="hidden lg:block bg-[#FAFDFF] border border-[#E2E8F0] rounded-xl shadow-[0_10px_40px_-10px_rgba(71,85,105,0.25)] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#E2E8F0]">
                <th className={`${headCell} text-left text-neutral-g font-SourceSansProBold bg-gray-50/50`}>Spesifikasi Layanan</th>
                {plans.map((plan, pi) => (
                  <th key={pi} className={`${headCell} font-SourceSansProBold text-neutral-g bg-gray-50/50`}>
                    {plan.name}
                    {plan.subtitle && <p className="font-SourceSansProSemibold text-neutral-e text-xs font-normal mt-0.5">{plan.subtitle}</p>}
                  </th>
                ))}
              </tr>
              <tr className="border-b border-[#E2E8F0]">
                <td className={`${cell} text-left font-semibold`}>
                  <span className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">Harga</span>
                </td>
                {plans.map((plan, pi) => (
                  <td key={pi} className={cell}>
                    {plan.priceNote && <div className="text-[10px] text-neutral-d">{plan.priceNote}</div>}
                    <span className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] text-base lg:text-lg">{plan.price}</span>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows?.map((feature, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/30"}>
                  <td className={`${cell} text-left font-medium text-neutral-g`}>{feature}</td>
                  {plans.map((plan, pi) => (
                    <td key={pi} className={cell}>{renderValue(plan.values?.[ri], feature)}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className={cell} />
                {plans.map((plan, pi) => (
                  <td key={pi} className="px-3 py-3 text-center">
                    <a href={plan.cta || "https://wa.me/6287882832538"} className="inline-flex items-center justify-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] text-white text-xs font-InterBold px-3 py-1.5 rounded-md hover:scale-105 transition-transform">
                      {plan.ctaText || "Pilih Paket"}
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile: card layout */}
        <div className="lg:hidden space-y-4">
          {plans.map((plan, pi) => (
            <div key={pi} data-aos="fade-up" data-aos-delay={pi * 100} className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-sm">
              <h3 className="font-SourceSansProBold text-lg text-neutral-g text-center mb-1">{plan.name}</h3>
              {plan.subtitle && <p className="text-neutral-e text-xs text-center mb-3">{plan.subtitle}</p>}
              <div className="mb-3 text-center">
                {plan.priceNote && <p className="text-[11px] text-neutral-d">{plan.priceNote}</p>}
                <p className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D] text-xl">{plan.price}</p>
              </div>
              {featureRows?.map((feature, ri) => (
                <div key={ri} className="flex justify-between items-center py-2 border-t border-[#E2E8F0] text-sm">
                  <span className="font-medium text-neutral-g">{feature}</span>
                  <span>{renderValue(plan.values?.[ri], feature)}</span>
                </div>
              ))}
              <a href={plan.cta || "https://wa.me/6287882832538"} className="block text-center mt-4 bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] text-white font-InterBold text-sm py-2.5 rounded-lg">
                {plan.ctaText || "Pilih Paket"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
