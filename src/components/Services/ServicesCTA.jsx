const ServicesCTA = () => {
  return (
    <section
      className="relative w-full flex flex-col justify-center items-center bg-white-MainPage text-black
                 lg:py-[4.2rem] lg:pb-[4.2rem]
                 pt-[13.5rem] pb-[21.2rem]"
    >
      <div
        className="flex justify-center items-center bg-gradient-to-t from-[#1AA2B8] to-[#2CBFD6]
                   lg:flex-row lg:w-[65.2rem] lg:h-[12.5rem] lg:rounded-[1.04rem] lg:px-[4.2rem] lg:gap-[4.2rem]
                   flex-col w-[90.7rem] h-[54.7rem] rounded-[7.0rem] px-0 gap-[5.6rem]"
      >
        <div
          className="flex flex-col justify-center text-white
                     lg:gap-[0.62rem] lg:w-[39.1rem]
                     gap-[1.86rem] w-full"
        >
          <div
            className="font-SourceSansProBold leading-[110%]
                       lg:text-[2.1rem] lg:text-start
                       text-[5.6rem] text-center"
          >
            Get Started Today
          </div>
          <div
            className="font-SourceSansProSemibold leading-[160%]
                       lg:text-[1.04rem] lg:text-start
                       text-[3.3rem] text-center"
          >
            Kami siap membantu Anda mewujudkan visi online Anda. <br />
            Hubungi kami untuk memulai perjalanan Anda
          </div>
        </div>
        <a
          href={settings?.whatsapp || "https://wa.me/6287882832538"}
          className="flex justify-center items-center bg-black hover:scale-[110%] transition-all duration-500 ease-in-out
                     lg:w-[13.6rem] lg:h-[2.8rem] lg:rounded-[0.26rem] lg:hover:translate-y-[-5px]
                     w-[53.3rem] h-[11.4rem] rounded-[1.16rem] hover:translate-y-[-18px]"
        >
          <p
            className="font-SourceSansProSemibold text-white
                       lg:text-[1.04rem]
                       text-[3.7rem]"
          >
            Start Your Project
          </p>
        </a>
      </div>
    </section>
  );
};

export default ServicesCTA;
