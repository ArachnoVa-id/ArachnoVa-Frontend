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
        className="absolute w-full top-[0] z-[1] lg:hidden mt-[16.1rem]"
        draggable="false"
        width={100000}
        height={100000}
      />
      <div className="aspect-[1349/576] w-[61.5rem] bg-gray-300 absolute z-[1] rounded-[1.75rem] bottom-[7.5rem] shadow-2xl flex items-center justify-center max-lg:hidden ">
        <Image
          src="/image/Footer/FooterLogo.png"
          alt="logo"
          className="aspect-[1/1] w-[8.8rem]"
          draggable="false"
          width={100000}
          height={100000}
        />
      </div>

      <div className="text-black flex flex-col justify-center items-center  text-[2.0rem]/[1.93rem] max-lg:hidden z-[2] mb-[2.3rem] " data-aos="fade-down">
        <div className="text-[1.4rem] font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]" > 
          Unleashing Digital Excellence
        </div>
        <div className="text-[2.0rem] font-SourceSansProBold">
          Dive into Our Web Creations
        </div>
      </div>
      <div className="flex items-center justify-center w-[70.0rem] max-lg:hidden">
        <div className="swiper swiper-backface-hidden w-full mx-auto  overflow-visible ">
          <Slider />
        </div>
      </div>

      {/* Mobile */}
      <div className="text-black flex flex-col justify-center items-center text-[3.5rem]/[5.2rem] mb-[8.8rem] lg:hidden z-[2] mt-[21.3rem]" data-aos="fade-down">
        <div className="text-[3.7rem] font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]" >
          Unleashing Digital Excellence
        </div>
        <div className="text-[6.1rem] font-SourceSansProBold ">
          Dive into Our Web Creations
        </div>
      </div>
      <div className="flex items-center justify-center w-[78.8rem] lg:hidden mb-[43.8rem]">
        <div className="swiper swiper-backface-hidden w-full mx-auto  overflow-visible ">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default HeroProjects;
