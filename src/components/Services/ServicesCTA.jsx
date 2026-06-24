const ServicesCTA = () => {
  return (
    <section
      className="relative w-full flex flex-col justify-center items-center bg-white-MainPage text-black
                 lg:py-[clamp(0.67rem,4.167vw,6.0rem)] lg:pb-[clamp(0.67rem,4.167vw,6.0rem)]
                 pt-[clamp(2.16rem,13.488vw,19.42rem)] pb-[clamp(3.39rem,21.163vw,30.47rem)]"
    >
      <div
        className="flex justify-center items-center bg-gradient-to-t from-[#1AA2B8] to-[#2CBFD6]
                   lg:flex-row lg:w-[clamp(10.43rem,65.208vw,50rem)] lg:h-[clamp(2.0rem,12.5vw,18.0rem)] lg:rounded-[clamp(0.2rem,1.042vw,1.5rem)] lg:px-[clamp(0.67rem,4.167vw,6.0rem)] lg:gap-[clamp(0.67rem,4.167vw,6.0rem)]
                   flex-col w-[clamp(14.51rem,90.698vw,50rem)] h-[clamp(8.74rem,54.651vw,50rem)] rounded-[clamp(1.12rem,6.977vw,10.05rem)] px-0 gap-[clamp(0.89rem,5.581vw,8.04rem)]"
      >
        <div
          className="flex flex-col justify-center text-white
                     lg:gap-[clamp(0.2rem,0.625vw,0.9rem)] lg:w-[clamp(6.25rem,39.063vw,50rem)]
                     gap-[clamp(0.3rem,1.86vw,2.68rem)] w-full"
        >
          <div
            className="font-SourceSansProBold leading-[110%]
                       lg:text-[clamp(0.5rem,2.083vw,3.0rem)] lg:text-start
                       text-[clamp(0.89rem,5.581vw,8rem)] text-center"
          >
            Get Started Today
          </div>
          <div
            className="font-SourceSansProSemibold leading-[160%]
                       lg:text-[clamp(0.5rem,1.042vw,1.5rem)] lg:text-start
                       text-[clamp(0.52rem,3.256vw,4.69rem)] text-center"
          >
            Kami siap membantu Anda mewujudkan visi online Anda. <br />
            Hubungi kami untuk memulai perjalanan Anda
          </div>
        </div>
        <a
          href="https://wa.me/6287882832538"
          className="flex justify-center items-center bg-black hover:scale-[110%] transition-all duration-500 ease-in-out
                     lg:w-[clamp(2.18rem,13.646vw,19.65rem)] lg:h-[clamp(0.45rem,2.813vw,4.05rem)] lg:rounded-[clamp(0.2rem,0.26vw,0.37rem)] lg:hover:translate-y-[-0.282vw]
                     w-[clamp(8.52rem,53.256vw,50rem)] h-[clamp(1.82rem,11.395vw,16.41rem)] rounded-[clamp(0.2rem,1.163vw,1.67rem)] hover:translate-y-[-1.1395vw]"
        >
          <p
            className="font-SourceSansProSemibold text-white
                       lg:text-[clamp(0.5rem,1.042vw,1.5rem)]
                       text-[clamp(0.6rem,3.721vw,5.36rem)]"
          >
            Start Your Project
          </p>
        </a>
      </div>
    </section>
  );
};

export default ServicesCTA;
