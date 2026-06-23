import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const tractions = [
  {
    title: "ComPro",
    subtitle: "Company Profile",
    description:
      "Website profiling yang menyajikan informasi lengkap perusahaan, organisasi, atau institusi. Multi-page dengan navigasi profesional, cocok untuk branding dan credibility.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#7C3AED" strokeWidth="2" fill="none" />
        <line x1="10" y1="16" x2="22" y2="16" stroke="#7C3AED" strokeWidth="2" />
        <line x1="10" y1="22" x2="30" y2="22" stroke="#7C3AED" strokeWidth="2" />
        <line x1="10" y1="28" x2="26" y2="28" stroke="#7C3AED" strokeWidth="2" />
      </svg>
    ),
    link: "/services",
    gradient: "from-[#76BDE4] to-[#79CACA]",
  },
  {
    title: "ERP",
    subtitle: "Enterprise System",
    description:
      "Sistem terintegrasi untuk mengelola operasional bisnis: dashboard, database, inventory, hingga laporan keuangan. Solusi end-to-end untuk digitalisasi perusahaan.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="12" cy="12" r="5" stroke="#7C3AED" strokeWidth="2" fill="none" />
        <circle cx="28" cy="12" r="5" stroke="#7C3AED" strokeWidth="2" fill="none" />
        <circle cx="12" cy="28" r="5" stroke="#7C3AED" strokeWidth="2" fill="none" />
        <circle cx="28" cy="28" r="5" stroke="#7C3AED" strokeWidth="2" fill="none" />
        <line x1="17" y1="12" x2="23" y2="12" stroke="#7C3AED" strokeWidth="2" />
        <line x1="12" y1="17" x2="12" y2="23" stroke="#7C3AED" strokeWidth="2" />
        <line x1="28" y1="17" x2="28" y2="23" stroke="#7C3AED" strokeWidth="2" />
        <line x1="17" y1="28" x2="23" y2="28" stroke="#7C3AED" strokeWidth="2" />
      </svg>
    ),
    link: "/services",
    gradient: "from-[#7C3AED] to-[#6D28D9]",
  },
  {
    title: "WhatsApp Apps",
    subtitle: "WA Integration",
    description:
      "Aplikasi berbasis WhatsApp API untuk automation: broadcast, chatbot, order management, CRM, dan customer service terintegrasi. Optimalkan komunikasi bisnis Anda.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <path d="M8 32L11 24C9 21 8 18 8 15C8 9 13 5 20 5C27 5 32 9 32 15C32 21 27 25 20 25H18L8 32Z" stroke="#7C3AED" strokeWidth="2" fill="none" />
        <circle cx="15" cy="15" r="1.5" fill="#7C3AED" />
        <circle cx="20" cy="15" r="1.5" fill="#7C3AED" />
        <circle cx="25" cy="15" r="1.5" fill="#7C3AED" />
      </svg>
    ),
    link: "/services",
    gradient: "from-[#7C3AED] to-[#6D28D9]",
  },
];

export default function Tractions() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="w-full bg-white-MainPage lg:py-[5.208vw] py-[13.953vw] overflow-hidden">
      <div className="flex flex-col items-center lg:gap-[3.125vw] gap-[5.581vw] lg:px-[10vw] px-[5.581vw]">
        <div data-aos="fade-down" className="text-center lg:max-w-[50vw]">
          <p className="font-SourceSansProBold lg:text-[1.563vw] text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#6D28D9]">
            Our Tractions
          </p>
          <h2 className="font-SourceSansProBold lg:text-[2.396vw] text-[6.977vw] text-neutral-g lg:leading-[2.8vw] leading-[7.5vw] mt-[0.5vw]">
            Solutions We Deliver
          </h2>
          <p className="font-SourceSansProSemibold lg:text-[1.042vw] text-[3.256vw] text-neutral-e lg:mt-[1vw] mt-[3vw] lg:leading-[1.8vw] leading-[5vw]">
            Dari company profile hingga sistem enterprise dan integrasi WhatsApp — kami hadirkan solusi digital yang tepat untuk setiap kebutuhan
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-[1.5vw] lg:gap-[2.083vw] w-full">
          {tractions.map((item, i) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-white rounded-xl border border-border lg:p-[2.083vw] p-[5.581vw] shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-[0.5vw] group"
            >
              <div className={`w-fit p-[0.8vw] rounded-lg bg-gradient-to-br ${item.gradient} bg-opacity-10 mb-[1.5vw]`}>
                {item.icon}
              </div>
              <p className="font-SourceSansProBold lg:text-[1.25vw] text-[4.186vw] text-neutral-g">
                {item.title}
              </p>
              <p className="font-InterSemibold lg:text-[0.833vw] text-[2.791vw] text-LightBlue-cDark mb-[0.8vw]">
                {item.subtitle}
              </p>
              <p className="font-SourceSansProSemibold lg:text-[0.938vw] text-[3.256vw] text-neutral-e lg:leading-[1.6vw] leading-[5vw]">
                {item.description}
              </p>
              <a
                href={item.link}
                className="inline-block mt-[1.2vw] font-InterBold lg:text-[0.833vw] text-[2.791vw] text-LightBlue-c hover:text-LightBlue-cDark transition-colors"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
