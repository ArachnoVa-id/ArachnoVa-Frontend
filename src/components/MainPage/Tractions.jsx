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
    <section className="w-full bg-white-MainPage lg:py-[2.9rem] py-[7.8rem] overflow-hidden">
      <div className="flex flex-col items-center lg:gap-[1.76rem] gap-[3.1rem] lg:px-[5.6rem] px-[3.1rem]">
        <div data-aos="fade-down" className="text-center lg:max-w-[28.1rem]">
          <p className="font-SourceSansProBold lg:text-[0.88rem] text-[2.4rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
            Our Tractions
          </p>
          <h2 className="font-SourceSansProBold lg:text-[1.35rem] text-[3.9rem] text-neutral-g lg:leading-[1.58rem] leading-[4.2rem] mt-[0.28rem]">
            Solutions We Deliver
          </h2>
          <p className="font-SourceSansProSemibold lg:text-[0.59rem] text-[1.83rem] text-neutral-e lg:mt-[0.56rem] mt-[1.69rem] lg:leading-[1.01rem] leading-[2.8rem]">
            ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI. Kami dengan bangga mempersembahkan beberapa karya kami sebagai gambaran representatif.
          </p>
        </div>

        <div className="flex flex-col lg:gap-[0.59rem] gap-[2.1rem] w-full">
          {tractions.map((item, i) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="group lg:w-full lg:h-[3.9rem] w-full h-auto flex flex-row lg:p-[0.7rem] p-[1.97rem] gap-x-[0.59rem] rounded-[0.41rem] lg:cursor-pointer z-50 border-[0.07rem] border-border bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-fit h-fit lg:flex hidden">
                <div className="relative w-[1.12rem] aspect-[21/17]">
                  <img
                    src={item.icon}
                    alt="icon"
                    draggable="false"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:gap-y-[0.26rem] gap-y-[0.84rem] flex-1">
                <div className="w-fit h-fit flex lg:hidden">
                  <div className="relative w-[3.4rem] aspect-[21/17]">
                    <img
                      src={item.icon}
                      alt="icon"
                      draggable="false"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <p className="lg:group-hover:bg-clip-text lg:group-hover:text-transparent lg:group-hover:bg-gradient-to-r lg:group-hover:from-[#1AB0C8] lg:group-hover:via-[#84D4E1] lg:group-hover:to-[#179FB5] transition-all duration-500 ease-in-out font-SourceSansProBold lg:text-[0.82rem] text-[2.6rem]/[3.9rem] text-neutral-g lg:leading-[0.88rem]">
                  {item.title}
                </p>
                <p className="font-SourceSansProSemibold lg:text-[0.47rem] text-[2.1rem] lg:leading-normal leading-[2.6rem] text-neutral-d">
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
