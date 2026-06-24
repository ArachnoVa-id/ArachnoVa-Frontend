const ServicesCTA = () => {
  return (
    <section
      className="relative w-full flex flex-col justify-center items-center bg-white-MainPage text-black
                 lg:py-[2.3rem] lg:pb-[2.3rem]
                 pt-[7.6rem] pb-[11.9rem]"
    >
      <div
        className="flex justify-center items-center bg-gradient-to-t from-[#1AA2B8] to-[#2CBFD6]
                   lg:flex-row lg:w-[36.7rem] lg:h-[7.0rem] lg:rounded-[0.59rem] lg:px-[2.3rem] lg:gap-[2.3rem]
                   flex-col w-[51.0rem] h-[30.7rem] rounded-[3.9rem] px-0 gap-[3.1rem]"
      >
        <div
          className="flex flex-col justify-center text-white
                     lg:gap-[0.35rem] lg:w-[22.0rem]
                     gap-[1.05rem] w-full"
        >
          <div
            className="font-SourceSansProBold leading-[110%]
                       lg:text-[1.17rem] lg:text-start
                       text-[3.1rem] text-center"
          >
            Get Started Today
          </div>
          <div
            className="font-SourceSansProSemibold leading-[160%]
                       lg:text-[0.59rem] lg:text-start
                       text-[1.83rem] text-center"
          >
            Kami siap membantu Anda mewujudkan visi online Anda. <br />
            Hubungi kami untuk memulai perjalanan Anda
          </div>
        </div>
        <a
          href="https://wa.me/6287882832538"
          className="flex justify-center items-center bg-black hover:scale-[110%] transition-all duration-500 ease-in-out
                     lg:w-[7.7rem] lg:h-[1.58rem] lg:rounded-[0.15rem] lg:hover:translate-y-[-3px]
                     w-[30.0rem] h-[6.4rem] rounded-[0.65rem] hover:translate-y-[-10px]"
        >
          <p
            className="font-SourceSansProSemibold text-white
                       lg:text-[0.59rem]
                       text-[2.1rem]"
          >
            Start Your Project
          </p>
        </a>
      </div>
    </section>
  );
};

export default ServicesCTA;
