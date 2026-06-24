const ServicesCTA = () => {
  return (
    <section
      className="relative w-full flex flex-col justify-center items-center bg-white-MainPage text-black
                 lg:py-[6.0rem] lg:pb-[6.0rem]
                 pt-[19.42rem] pb-[30.47rem]"
    >
      <div
        className="flex justify-center items-center bg-gradient-to-t from-[#1AA2B8] to-[#2CBFD6]
                   lg:flex-row lg:w-[50rem] lg:h-[18.0rem] lg:rounded-[1.5rem] lg:px-[6.0rem] lg:gap-[6.0rem]
                   flex-col w-[50rem] h-[50rem] rounded-[10.05rem] px-0 gap-[8.04rem]"
      >
        <div
          className="flex flex-col justify-center text-white
                     lg:gap-[0.9rem] lg:w-[50rem]
                     gap-[2.68rem] w-full"
        >
          <div
            className="font-SourceSansProBold leading-[110%]
                       lg:text-[3.0rem] lg:text-start
                       text-[8rem] text-center"
          >
            Get Started Today
          </div>
          <div
            className="font-SourceSansProSemibold leading-[160%]
                       lg:text-[1.5rem] lg:text-start
                       text-[4.69rem] text-center"
          >
            Kami siap membantu Anda mewujudkan visi online Anda. <br />
            Hubungi kami untuk memulai perjalanan Anda
          </div>
        </div>
        <a
          href="https://wa.me/6287882832538"
          className="flex justify-center items-center bg-black hover:scale-[110%] transition-all duration-500 ease-in-out
                     lg:w-[19.65rem] lg:h-[4.05rem] lg:rounded-[0.37rem] lg:hover:translate-y-[-1px]
                     w-[50rem] h-[16.41rem] rounded-[1.67rem] hover:translate-y-[-4px]"
        >
          <p
            className="font-SourceSansProSemibold text-white
                       lg:text-[1.5rem]
                       text-[5.36rem]"
          >
            Start Your Project
          </p>
        </a>
      </div>
    </section>
  );
};

export default ServicesCTA;
