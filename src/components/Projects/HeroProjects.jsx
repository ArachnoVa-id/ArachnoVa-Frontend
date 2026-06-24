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
        className="absolute w-full top-[0] z-[1] lg:hidden mt-[10.3rem]"
        draggable="false"
        width={100000}
        height={100000}
      />
      <div className="aspect-[1349/576] w-[39.5rem] bg-gray-300 absolute z-[1] rounded-[1.12rem] bottom-[4.8rem] shadow-2xl flex items-center justify-center max-lg:hidden ">
        <Image
          src="/image/Footer/FooterLogo.png"
          alt="logo"
          className="aspect-[1/1] w-[5.6rem]"
          draggable="false"
          width={100000}
          height={100000}
        />
      </div>

      <div className="text-black flex flex-col justify-center items-center  text-[1.29rem]/[1.24rem] max-lg:hidden z-[2] mb-[1.46rem] " data-aos="fade-down">
        <div className="text-[0.9rem] font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]" > 
          Unleashing Digital Excellence
        </div>
        <div className="text-[1.29rem] font-SourceSansProBold">
          Dive into Our Web Creations
        </div>
      </div>
      <div className="flex items-center justify-center w-[45.0rem] max-lg:hidden">
        <div className="swiper swiper-backface-hidden w-full mx-auto  overflow-visible ">
          <Slider />
        </div>
      </div>

      {/* Mobile */}
      <div className="text-black flex flex-col justify-center items-center text-[2.2rem]/[3.4rem] mb-[5.6rem] lg:hidden z-[2] mt-[13.7rem]" data-aos="fade-down">
        <div className="text-[2.4rem] font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]" >
          Unleashing Digital Excellence
        </div>
        <div className="text-[3.9rem] font-SourceSansProBold ">
          Dive into Our Web Creations
        </div>
      </div>
      <div className="flex items-center justify-center w-[50.6rem] lg:hidden mb-[28.1rem]">
        <div className="swiper swiper-backface-hidden w-full mx-auto  overflow-visible ">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default HeroProjects;
