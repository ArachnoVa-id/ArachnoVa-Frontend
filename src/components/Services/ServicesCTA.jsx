import { useSettings } from "@/context/DataContext";

const ServicesCTA = () => {
  const settings = useSettings();
  return (
    <section
      className="relative w-full flex flex-col justify-center items-center bg-white-MainPage text-black
                 lg:py-[4.2rem] lg:pb-[4.2rem]
                 pt-12 pb-16"
    >
      <div
        className="flex justify-center items-center bg-gradient-to-t from-[#1AA2B8] to-[#2CBFD6]
                   lg:flex-row lg:w-[65.2rem] lg:h-[12.5rem] lg:rounded-[1.04rem] lg:px-[4.2rem] lg:gap-[4.2rem]
                   flex-col w-[calc(100%-2rem)] max-w-2xl rounded-2xl px-6 py-10 sm:py-12 gap-6 lg:max-w-[calc(100%-2rem)] lg:py-0"
      >
        <div
          className="flex flex-col justify-center text-white
                      lg:gap-[0.62rem] lg:w-[39.1rem]
                     gap-2 w-full"
        >
          <div
            className="font-SourceSansProBold leading-[110%]
                        lg:text-[2.1rem] lg:text-start
                       text-[28px] sm:text-[34px] text-center"
          >
            Get Started Today
          </div>
          <div
            className="font-SourceSansProSemibold leading-[160%]
                        lg:text-[1.04rem] lg:text-start
                       text-[15px] sm:text-[17px] text-center"
          >
            Kami siap membantu Anda mewujudkan visi online Anda. <br />
            Hubungi kami untuk memulai perjalanan Anda
          </div>
        </div>
        <a
          href={settings?.whatsapp || "https://wa.me/6287882832538"}
          className="flex justify-center items-center bg-black hover:scale-[110%] transition-all duration-500 ease-in-out
                     lg:w-[13.6rem] lg:h-[2.8rem] lg:rounded-[0.26rem] lg:hover:translate-y-[-5px]
                     w-full max-w-xs h-12 rounded-lg hover:translate-y-[-8px] lg:max-w-none"
        >
          <p
            className="font-SourceSansProSemibold text-white
                        lg:text-[1.04rem]
                       text-[16px]"
          >
            Start Your Project
          </p>
        </a>
      </div>
    </section>
  );
};

export default ServicesCTA;
