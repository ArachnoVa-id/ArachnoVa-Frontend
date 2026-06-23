import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const tractions = [
  {
    title: "ComPro",
    subtitle: "Company Profile",
    description:
      "Website profiling yang menyajikan informasi lengkap perusahaan, organisasi, atau institusi. Multi-page dengan navigasi profesional, cocok untuk branding dan credibility.",
    icon: "/image/OurMechs/icon-1.png",
    tag: "compro",
  },
  {
    title: "ERP",
    subtitle: "Enterprise System",
    description:
      "Sistem terintegrasi untuk mengelola operasional bisnis: dashboard, database, inventory, hingga laporan keuangan. Solusi end-to-end untuk digitalisasi perusahaan.",
    icon: "/image/OurMechs/icon-2.png",
    tag: "erp",
  },
  {
    title: "WhatsApp Apps",
    subtitle: "WA Integration",
    description:
      "Aplikasi berbasis WhatsApp API untuk automation: broadcast, chatbot, order management, CRM, dan customer service terintegrasi. Optimalkan komunikasi bisnis Anda.",
    icon: "/image/OurMechs/icon-3.png",
    tag: "wa-apps",
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
          <p className="font-SourceSansProBold lg:text-[1.563vw] text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
            Our Tractions
          </p>
          <h2 className="font-SourceSansProBold lg:text-[2.396vw] text-[6.977vw] text-neutral-g lg:leading-[2.8vw] leading-[7.5vw] mt-[0.5vw]">
            Solutions We Deliver
          </h2>
          <p className="font-SourceSansProSemibold lg:text-[1.042vw] text-[3.256vw] text-neutral-e lg:mt-[1vw] mt-[3vw] lg:leading-[1.8vw] leading-[5vw]">
            ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI. Kami dengan bangga mempersembahkan beberapa karya kami sebagai gambaran representatif.
          </p>
        </div>

        <div className="flex flex-col lg:gap-[1.042vw] gap-[3.721vw] w-full">
          {tractions.map((item, i) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="group lg:w-full lg:h-[6.875vw] w-full h-auto flex flex-row lg:p-[1.25vw] p-[3.5vw] gap-x-[1.042vw] rounded-[0.729vw] lg:cursor-pointer z-50 border-[0.129vw] border-border bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-fit h-fit lg:flex hidden">
                <div className="relative w-[2vw] aspect-[21/17]">
                  <img
                    src={item.icon}
                    alt="icon"
                    draggable="false"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:gap-y-[0.469vw] gap-y-[1.5vw] flex-1">
                <div className="w-fit h-fit flex lg:hidden">
                  <div className="relative w-[6vw] aspect-[21/17]">
                    <img
                      src={item.icon}
                      alt="icon"
                      draggable="false"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <p className="lg:group-hover:bg-clip-text lg:group-hover:text-transparent lg:group-hover:bg-gradient-to-r lg:group-hover:from-[#1AB0C8] lg:group-hover:via-[#84D4E1] lg:group-hover:to-[#179FB5] transition-all duration-500 ease-in-out font-SourceSansProBold lg:text-[1.458vw] text-[4.651vw]/[6.977vw] text-neutral-g lg:leading-[1.563vw]">
                  {item.title}
                </p>
                <p className="font-SourceSansProSemibold lg:text-[0.833vw] text-[3.721vw] lg:leading-normal leading-[4.651vw] text-neutral-d">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
