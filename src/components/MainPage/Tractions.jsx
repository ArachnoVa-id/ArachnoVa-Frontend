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
    <section className="w-full bg-white-MainPage lg:py-[7.5rem] py-[20.09rem] overflow-hidden">
      <div className="flex flex-col items-center lg:gap-[4.5rem] gap-[8.04rem] lg:px-[14.4rem] px-[8.04rem]">
        <div data-aos="fade-down" className="text-center lg:max-w-[50rem]">
          <p className="font-SourceSansProBold lg:text-[2.25rem] text-[6.03rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
            Our Tractions
          </p>
          <h2 className="font-SourceSansProBold lg:text-[3.45rem] text-[8rem] text-neutral-g lg:leading-[4.03rem] leading-[10.8rem] mt-[0.72rem]">
            Solutions We Deliver
          </h2>
          <p className="font-SourceSansProSemibold lg:text-[1.5rem] text-[4.69rem] text-neutral-e lg:mt-[1.44rem] mt-[4.32rem] lg:leading-[2.59rem] leading-[7.2rem]">
            ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI. Kami dengan bangga mempersembahkan beberapa karya kami sebagai gambaran representatif.
          </p>
        </div>

        <div className="flex flex-col lg:gap-[1.5rem] gap-[5.36rem] w-full">
          {tractions.map((item, i) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="group lg:w-full lg:h-[9.9rem] w-full h-auto flex flex-row lg:p-[1.8rem] p-[5.04rem] gap-x-[1.5rem] rounded-[1.05rem] lg:cursor-pointer z-50 border-[0.030rem] border-border bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-fit h-fit lg:flex hidden">
                <div className="relative w-[2.88rem] aspect-[21/17]">
                  <img
                    src={item.icon}
                    alt="icon"
                    draggable="false"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:gap-y-[0.68rem] gap-y-[2.16rem] flex-1">
                <div className="w-fit h-fit flex lg:hidden">
                  <div className="relative w-[8.64rem] aspect-[21/17]">
                    <img
                      src={item.icon}
                      alt="icon"
                      draggable="false"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <p className="lg:group-hover:bg-clip-text lg:group-hover:text-transparent lg:group-hover:bg-gradient-to-r lg:group-hover:from-[#1AB0C8] lg:group-hover:via-[#84D4E1] lg:group-hover:to-[#179FB5] transition-all duration-500 ease-in-out font-SourceSansProBold lg:text-[2.1rem] text-[6.7rem]/[1.64rem] text-neutral-g lg:leading-[2.25rem]">
                  {item.title}
                </p>
                <p className="font-SourceSansProSemibold lg:text-[1.2rem] text-[5.36rem] lg:leading-normal leading-[6.7rem] text-neutral-d">
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
