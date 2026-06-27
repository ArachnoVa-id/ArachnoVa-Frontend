import { useSettings } from "@/context/DataContext";

const ServicesCTA = () => {
  const settings = useSettings();
  return (
    <section
      className="relative w-full flex flex-col justify-center items-center bg-white-MainPage text-black
                 lg:py-[4.2rem] lg:pb-[4.2rem]
                 pt-[clamp(4rem,13.5rem,13.5rem)] pb-[clamp(6rem,21.2rem,21.2rem)]"
    >
      <div
        className="flex justify-center items-center bg-gradient-to-t from-[#1AA2B8] to-[#2CBFD6]
                   lg:flex-row lg:w-[65.2rem] lg:h-[12.5rem] lg:rounded-[1.04rem] lg:px-[4.2rem] lg:gap-[4.2rem]
                   flex-col w-[clamp(32rem,90.7rem,90.7rem)] h-[clamp(20rem,54.7rem,54.7rem)] rounded-[clamp(2rem,7.0rem,7.0rem)] px-0 gap-[clamp(2rem,5.6rem,5.6rem)]"
      >
        <div
          className="flex flex-col justify-center text-white
                      lg:gap-[0.62rem] lg:w-[39.1rem]
                     gap-[clamp(0.8rem,1.86rem,1.86rem)] w-full"
        >
          <div
            className="font-SourceSansProBold leading-[110%]
                        lg:text-[2.1rem] lg:text-start
                       text-[clamp(2.4rem,5.6rem,5.6rem)] text-center"
          >
            Get Started Today
          </div>
          <div
            className="font-SourceSansProSemibold leading-[160%]
                        lg:text-[1.04rem] lg:text-start
                       text-[clamp(1.4rem,3.3rem,3.3rem)] text-center"
          >
            Kami siap membantu Anda mewujudkan visi online Anda. <br />
            Hubungi kami untuk memulai perjalanan Anda
          </div>
        </div>
        <a
          href={settings?.whatsapp || "https://wa.me/6287882832538"}
          className="flex justify-center items-center bg-black hover:scale-[110%] transition-all duration-500 ease-in-out
                     lg:w-[13.6rem] lg:h-[2.8rem] lg:rounded-[0.26rem] lg:hover:translate-y-[-5px]
                     w-[clamp(20rem,53.3rem,53.3rem)] h-[clamp(4rem,11.4rem,11.4rem)] rounded-[clamp(0.5rem,1.16rem,1.16rem)] hover:translate-y-[-8px]"
        >
          <p
            className="font-SourceSansProSemibold text-white
                        lg:text-[1.04rem]
                       text-[clamp(1.6rem,3.7rem,3.7rem)]"
          >
            Start Your Project
          </p>
        </a>
      </div>
    </section>
  );
};

export default ServicesCTA;
