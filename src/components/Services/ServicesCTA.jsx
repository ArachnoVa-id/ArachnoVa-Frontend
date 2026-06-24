const ServicesCTA = () => {
  return (
    <section
      className="relative w-full flex flex-col justify-center items-center bg-white-MainPage text-black
                 lg:py-[3.6rem] lg:pb-[3.6rem]
                 pt-[11.8rem] pb-[18.5rem]"
    >
      <div
        className="flex justify-center items-center bg-gradient-to-t from-[#1AA2B8] to-[#2CBFD6]
                   lg:flex-row lg:w-[57.1rem] lg:h-[10.9rem] lg:rounded-[0.91rem] lg:px-[3.6rem] lg:gap-[3.6rem]
                   flex-col w-[79.4rem] h-[47.8rem] rounded-[6.1rem] px-0 gap-[4.9rem]"
      >
        <div
          className="flex flex-col justify-center text-white
                     lg:gap-[0.55rem] lg:w-[34.2rem]
                     gap-[1.63rem] w-full"
        >
          <div
            className="font-SourceSansProBold leading-[110%]
                       lg:text-[1.82rem] lg:text-start
                       text-[4.9rem] text-center"
          >
            Get Started Today
          </div>
          <div
            className="font-SourceSansProSemibold leading-[160%]
                       lg:text-[0.91rem] lg:text-start
                       text-[2.8rem] text-center"
          >
            Kami siap membantu Anda mewujudkan visi online Anda. <br />
            Hubungi kami untuk memulai perjalanan Anda
          </div>
        </div>
        <a
          href="https://wa.me/6287882832538"
          className="flex justify-center items-center bg-black hover:scale-[110%] transition-all duration-500 ease-in-out
                     lg:w-[11.9rem] lg:h-[2.5rem] lg:rounded-[0.23rem] lg:hover:translate-y-[-4px]
                     w-[46.6rem] h-[10.0rem] rounded-[1.02rem] hover:translate-y-[-16px]"
        >
          <p
            className="font-SourceSansProSemibold text-white
                       lg:text-[0.91rem]
                       text-[3.3rem]"
          >
            Start Your Project
          </p>
        </a>
      </div>
    </section>
  );
};

export default ServicesCTA;
