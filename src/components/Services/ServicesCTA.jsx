const ServicesCTA = () => {
  return (
    <section
      className="relative w-full flex flex-col justify-center items-center bg-white-MainPage text-black
                 lg:py-[0.67rem] lg:pb-[0.67rem]
                 pt-[2.16rem] pb-[3.39rem]"
    >
      <div
        className="flex justify-center items-center bg-gradient-to-t from-[#1AA2B8] to-[#2CBFD6]
                   lg:flex-row lg:w-[10.43rem] lg:h-[2.0rem] lg:rounded-[0.2rem] lg:px-[0.67rem] lg:gap-[0.67rem]
                   flex-col w-[14.51rem] h-[8.74rem] rounded-[1.12rem] px-0 gap-[0.89rem]"
      >
        <div
          className="flex flex-col justify-center text-white
                     lg:gap-[0.2rem] lg:w-[6.25rem]
                     gap-[0.3rem] w-full"
        >
          <div
            className="font-SourceSansProBold leading-[110%]
                       lg:text-[0.5rem] lg:text-start
                       text-[0.89rem] text-center"
          >
            Get Started Today
          </div>
          <div
            className="font-SourceSansProSemibold leading-[160%]
                       lg:text-[0.5rem] lg:text-start
                       text-[0.52rem] text-center"
          >
            Kami siap membantu Anda mewujudkan visi online Anda. <br />
            Hubungi kami untuk memulai perjalanan Anda
          </div>
        </div>
        <a
          href="https://wa.me/6287882832538"
          className="flex justify-center items-center bg-black hover:scale-[110%] transition-all duration-500 ease-in-out
                     lg:w-[2.18rem] lg:h-[0.45rem] lg:rounded-[0.2rem] lg:hover:translate-y-[-1px]
                     w-[8.52rem] h-[1.82rem] rounded-[0.2rem] hover:translate-y-[-5px]"
        >
          <p
            className="font-SourceSansProSemibold text-white
                       lg:text-[0.5rem]
                       text-[0.6rem]"
          >
            Start Your Project
          </p>
        </a>
      </div>
    </section>
  );
};

export default ServicesCTA;
