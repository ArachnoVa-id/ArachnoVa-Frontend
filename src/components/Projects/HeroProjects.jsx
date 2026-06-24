import Slider from "./Slider";
import Image from "@/components/ui/Img";

const HeroProjects = () => {
  return (
    <section className="w-full lg:aspect-[1920/1312] max-lg:aspect-[430/825] flex flex-col items-center relative justify-center aspect-[1920/1312] bg-neutral-a overflow-hidden ">
      <Image
        alt="Background"
        src="/image/Projects/BGHeroProjects.png"
        className="absolute w-full h-full z-[1] max-lg:hidden"
        draggable="false"
        width={100000}
        height={100000}
      />
      <Image
        alt="Background"
        src="/image/Projects/BGHeroProjectsMobile.svg"
        className="absolute w-full top-[0] z-[1] lg:hidden mt-[2.94rem]"
        draggable="false"
        width={100000}
        height={100000}
      />
      <div className="aspect-[1349/576] w-[11.24rem] bg-gray-300 absolute z-[1] rounded-[0.32rem] bottom-[1.38rem] shadow-2xl flex items-center justify-center max-lg:hidden ">
        <Image
          src="/image/Footer/FooterLogo.png"
          alt="logo"
          className="aspect-[1/1] w-[1.6rem]"
          draggable="false"
          width={100000}
          height={100000}
        />
      </div>

      <div className="text-black flex flex-col justify-center items-center  text-[0.5rem]/[0.58rem] max-lg:hidden z-[2] mb-[0.42rem] " data-aos="fade-down">
        <div className="text-[0.5rem] font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]" > 
          Unleashing Digital Excellence
        </div>
        <div className="text-[0.5rem] font-SourceSansProBold">
          Dive into Our Web Creations
        </div>
      </div>
      <div className="flex items-center justify-center w-[12.8rem] max-lg:hidden">
        <div className="swiper swiper-backface-hidden w-full mx-auto  overflow-visible ">
          <Slider />
        </div>
      </div>

      {/* Mobile */}
      <div className="text-black flex flex-col justify-center items-center text-[0.64rem]/[1.58rem] mb-[1.6rem] lg:hidden z-[2] mt-[3.9rem]" data-aos="fade-down">
        <div className="text-[0.67rem] font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]" >
          Unleashing Digital Excellence
        </div>
        <div className="text-[1.12rem] font-SourceSansProBold ">
          Dive into Our Web Creations
        </div>
      </div>
      <div className="flex items-center justify-center w-[14.4rem] lg:hidden mb-[8.0rem]">
        <div className="swiper swiper-backface-hidden w-full mx-auto  overflow-visible ">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default HeroProjects;
