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
        className="absolute w-full top-[0] z-[1] lg:hidden mt-[clamp(2.94rem,18.372vw,26.46rem)]"
        draggable="false"
        width={100000}
        height={100000}
      />
      <div className="aspect-[1349/576] w-[clamp(11.24rem,70.260vw,50rem)] bg-gray-300 absolute z-[1] rounded-[clamp(0.32rem,2.0vw,2.88rem)] bottom-[clamp(1.38rem,8.6vw,12.38rem)] shadow-2xl flex items-center justify-center max-lg:hidden ">
        <Image
          src="/image/Footer/FooterLogo.png"
          alt="logo"
          className="aspect-[1/1] w-[clamp(1.6rem,10.0vw,14.4rem)]"
          draggable="false"
          width={100000}
          height={100000}
        />
      </div>

      <div className="text-black flex flex-col justify-center items-center  text-[clamp(0.5rem,2.3vw,3.31rem)]/[2.2vw] max-lg:hidden z-[2] mb-[clamp(0.42rem,2.6vw,3.74rem)] " data-aos="fade-down">
        <div className="text-[clamp(0.5rem,1.6vw,2.3rem)] font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]" > 
          Unleashing Digital Excellence
        </div>
        <div className="text-[clamp(0.5rem,2.3vw,3.31rem)] font-SourceSansProBold">
          Dive into Our Web Creations
        </div>
      </div>
      <div className="flex items-center justify-center w-[clamp(12.8rem,80.0vw,50rem)] max-lg:hidden">
        <div className="swiper swiper-backface-hidden w-full mx-auto  overflow-visible ">
          <Slider />
        </div>
      </div>

      {/* Mobile */}
      <div className="text-black flex flex-col justify-center items-center text-[clamp(0.64rem,4.0vw,5.76rem)]/[6vw] mb-[clamp(1.6rem,10.0vw,14.4rem)] lg:hidden z-[2] mt-[clamp(3.9rem,24.372vw,35.1rem)]" data-aos="fade-down">
        <div className="text-[clamp(0.67rem,4.186vw,6.03rem)] font-SourceSansProBold bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] to-[#179FB5]" >
          Unleashing Digital Excellence
        </div>
        <div className="text-[clamp(1.12rem,6.977vw,8rem)] font-SourceSansProBold ">
          Dive into Our Web Creations
        </div>
      </div>
      <div className="flex items-center justify-center w-[clamp(14.4rem,90.0vw,50rem)] lg:hidden mb-[clamp(8.0rem,50.0vw,50rem)]">
        <div className="swiper swiper-backface-hidden w-full mx-auto  overflow-visible ">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default HeroProjects;
