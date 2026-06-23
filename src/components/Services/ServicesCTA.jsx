const ServicesCTA = () => {
  return (
    <section
      className="relative w-full flex flex-col justify-center items-center bg-white-MainPage text-black
                 lg:py-[4.167vw] lg:pb-[4.167vw]
                 pt-[13.488vw] pb-[21.163vw]"
    >
      <div
        className="flex justify-center items-center bg-gradient-to-t from-[#1AA2B8] to-[#2CBFD6]
                   lg:flex-row lg:w-[65.208vw] lg:h-[12.5vw] lg:rounded-[1.042vw] lg:px-[4.167vw] lg:gap-[4.167vw]
                   flex-col w-[90.698vw] h-[54.651vw] rounded-[6.977vw] px-0 gap-[5.581vw]"
      >
        <div
          className="flex flex-col justify-center text-white
                     lg:gap-[0.625vw] lg:w-[39.063vw]
                     gap-[1.86vw] w-full"
        >
          <div
            className="font-SourceSansProBold leading-[110%]
                       lg:text-[2.083vw] lg:text-start
                       text-[5.581vw] text-center"
          >
            Get Started Today
          </div>
          <div
            className="font-SourceSansProSemibold leading-[160%]
                       lg:text-[1.042vw] lg:text-start
                       text-[3.256vw] text-center"
          >
            Kami siap membantu Anda mewujudkan visi online Anda. <br />
            Hubungi kami untuk memulai perjalanan Anda
          </div>
        </div>
        <a
          href="https://wa.me/6287882832538"
          className="flex justify-center items-center bg-black hover:scale-[110%] transition-all duration-500 ease-in-out
                     lg:w-[13.646vw] lg:h-[2.813vw] lg:rounded-[0.26vw] lg:hover:translate-y-[-0.282vw]
                     w-[53.256vw] h-[11.395vw] rounded-[1.163vw] hover:translate-y-[-1.1395vw]"
        >
          <p
            className="font-SourceSansProSemibold text-white
                       lg:text-[1.042vw]
                       text-[3.721vw]"
          >
            Start Your Project
          </p>
        </a>
      </div>
    </section>
  );
};

export default ServicesCTA;
