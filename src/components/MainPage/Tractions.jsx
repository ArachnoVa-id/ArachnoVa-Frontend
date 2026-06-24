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
    <section className="w-full bg-white-MainPage lg:py-[clamp(0.83rem,5.208vw,7.5rem)] py-[clamp(2.23rem,13.953vw,20.09rem)] overflow-hidden">
      <div className="flex flex-col items-center lg:gap-[clamp(0.5rem,3.125vw,4.5rem)] gap-[clamp(0.89rem,5.581vw,8.04rem)] lg:px-[clamp(1.6rem,10.0vw,14.4rem)] px-[clamp(0.89rem,5.581vw,8.04rem)]">
        <div data-aos="fade-down" className="text-center lg:max-w-[clamp(8.0rem,50.0vw,50rem)]">
          <p className="font-SourceSansProBold lg:text-[clamp(0.5rem,1.563vw,2.25rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
            Our Tractions
          </p>
          <h2 className="font-SourceSansProBold lg:text-[clamp(0.5rem,2.396vw,3.45rem)] text-[clamp(1.12rem,6.977vw,8rem)] text-neutral-g lg:leading-[clamp(0.45rem,2.8vw,4.03rem)] leading-[clamp(1.2rem,7.5vw,10.8rem)] mt-[clamp(0.2rem,0.5vw,0.72rem)]">
            Solutions We Deliver
          </h2>
          <p className="font-SourceSansProSemibold lg:text-[clamp(0.5rem,1.042vw,1.5rem)] text-[clamp(0.52rem,3.256vw,4.69rem)] text-neutral-e lg:mt-[clamp(0.2rem,1.0vw,1.44rem)] mt-[clamp(0.48rem,3.0vw,4.32rem)] lg:leading-[clamp(0.29rem,1.8vw,2.59rem)] leading-[clamp(0.8rem,5.0vw,7.2rem)]">
            ArachnoVa telah berpengalaman dalam pembuatan website mencakup aspek Frontend, Backend, dan desain UI. Kami dengan bangga mempersembahkan beberapa karya kami sebagai gambaran representatif.
          </p>
        </div>

        <div className="flex flex-col lg:gap-[clamp(0.2rem,1.042vw,1.5rem)] gap-[clamp(0.6rem,3.721vw,5.36rem)] w-full">
          {tractions.map((item, i) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="group lg:w-full lg:h-[clamp(1.1rem,6.875vw,9.9rem)] w-full h-auto flex flex-row lg:p-[clamp(0.2rem,1.25vw,1.8rem)] p-[clamp(0.56rem,3.5vw,5.04rem)] gap-x-[clamp(0.2rem,1.042vw,1.5rem)] rounded-[clamp(0.2rem,0.729vw,1.05rem)] lg:cursor-pointer z-50 border-[0.129vw] border-border bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-fit h-fit lg:flex hidden">
                <div className="relative w-[clamp(0.32rem,2.0vw,2.88rem)] aspect-[21/17]">
                  <img
                    src={item.icon}
                    alt="icon"
                    draggable="false"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:gap-y-[clamp(0.2rem,0.469vw,0.68rem)] gap-y-[clamp(0.24rem,1.5vw,2.16rem)] flex-1">
                <div className="w-fit h-fit flex lg:hidden">
                  <div className="relative w-[clamp(0.96rem,6.0vw,8.64rem)] aspect-[21/17]">
                    <img
                      src={item.icon}
                      alt="icon"
                      draggable="false"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <p className="lg:group-hover:bg-clip-text lg:group-hover:text-transparent lg:group-hover:bg-gradient-to-r lg:group-hover:from-[#1AB0C8] lg:group-hover:via-[#84D4E1] lg:group-hover:to-[#179FB5] transition-all duration-500 ease-in-out font-SourceSansProBold lg:text-[clamp(0.5rem,1.458vw,2.1rem)] text-[clamp(0.74rem,4.651vw,6.7rem)]/[6.977vw] text-neutral-g lg:leading-[clamp(0.25rem,1.563vw,2.25rem)]">
                  {item.title}
                </p>
                <p className="font-SourceSansProSemibold lg:text-[clamp(0.5rem,0.833vw,1.2rem)] text-[clamp(0.6rem,3.721vw,5.36rem)] lg:leading-normal leading-[clamp(0.74rem,4.651vw,6.7rem)] text-neutral-d">
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
