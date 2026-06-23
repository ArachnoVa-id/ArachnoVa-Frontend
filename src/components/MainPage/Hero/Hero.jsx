import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "@/components/ui/Typewriter";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section className="w-full min-h-screen relative bg-transparent flex flex-row justify-center items-center bg-white-MainPage ">
      <Image
        alt="Background"
        src="/image/Hero/HeroBG.png"
        className="absolute w-full h-full z-[1] max-lg:hidden"
        fill
        draggable="false"
      />
      <Image
        alt="Background"
        src="/image/Hero/HeroBGMobile.png"
        className="absolute w-full h-full z-[1] lg:hidden"
        fill
        draggable="false"
      />

      {/* Dekstop */}
      <div className="text-black flex gap-x-[8vw] max-lg:hidden z-[2]">
        <div className="flex flex-col justify-center scale-[1.2]">
          <div className="text-[1.6vw] text-neutral-g font-CoolveticaCondReg ">
            ArachnoVa{" "}
          </div>
          <div className="text-neutral-g font-SourceSansProBold text-[2vw]/[2.5vw]">
            <div className="text-[2vw] ">Your Web Design Partner</div>
            <div className="flex items-center h-[3.0vw] gap-[0.5vw] leading-none">
              <div className="text-[2.8vw]">Always</div>
              <Typewriter
                words={["Delivered", "Distinctive", "Dependable"]}
                className="text-[2.8vw] text-LightBlue-c"
              />
            </div>
          </div>
          <div className="text-[1vw] text-[#4E5F66] pt-[1.1vw] font-SourceSansProSemibold ">
            Crafting Digital Presence in Every Strand of Code
          </div>
          <div className="py-[2vh] flex gap-[1vw]">
            <a
              href="https://wa.me/6287882832538"
              className="aspect-[167/46] w-[8.698vw] rounded-[0.4vw] bg-gradient-to-r from-[#2DC0D8] to-[#179FB5] font-InterBold text-white text-[0.8vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out "
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="aspect-[197/48] w-[10.26vw] rounded-[0.4vw] bg-transparent text-[0.8vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] "
            >
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] to-[#159E8D] font-InterBold">
                Discover Our Services
              </div>
            </a>
          </div>
        </div>

        <div className="aspect-[537/366] w-[27.969vw] border-2 border-[#F1F5F9] rounded-[0.625vw]  relative font-ConsolasRegular ">
          <div className="bg-white opacity-60 w-full h-full absolute rounded-[0.625vw] backdrop-blur-3xl"></div>
          <div
            className="absolute aspect-[419/96] w-[21.823vw] bg-white opacity-90 rounded-[0.625vw] -bottom-[3vw] -right-[4vw] text-[1vw]  flex justify-center items-center border-2 border-[#E2E8F0] font-ConsolasBold"
            data-aos="fade-left"
          >
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[3vw] h-[1vw] top-[0.4vw] left-[0.7vw] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex gap-x-[0.1vw] pt-[1vw]">
              <span className="text-[#8131B2]">.\arachnova-</span>
              <span className="text-[#0151EC]">official-site</span>
              <span className="text-[#1CA7BD]"> &gt; </span>
              {" "}npm run dev
            </div>
          </div>
          <div className="px-[1vw] py-[2vw] text-[1.05vw]/[1.15vw] relative">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[3vw] h-[1vw] top-[0.5vw] left-[0.7vw] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <p className="text-[#0151EC]">
              import{" "}
              <span className="text-[#8131B2] ">&#34;./globals.css&#34;;</span>
            </p>
            <p className="text-[#1E293B]">
              <span className="text-[#0151EC]">import</span> &#123;{" "}
              <span className="text-[#1CA7BD]"> ArachnoVa</span> &#125; from{" "}
              <span className="text-[#8131B2]">&#34;./api/provider&#34;</span>;
            </p>
            <p> &nbsp; </p>
            <p className="text-[#0151EC]">export default</p>
            <p className="text-[#1E293B]">
              &lt;div <span className="text-[#0151EC]">className</span>=&#34;
              <span className="text-[#8131B2]">Welcome to ArachnoVa</span>
              &#34;&gt;
            </p>
            <p>
              &nbsp; &lt;div <span className="text-[#0151EC]">className</span>
              =&#34;<span className="text-[#8131B2]">content</span>&#34;&gt;
            </p>
            <p>&nbsp; &#123;</p>
            <p>
              &nbsp; &nbsp;{" "}
              <span className="text-[#8131B2]">
                &#34;Your web design partner&#34;
              </span>
            </p>
            <p>&nbsp; &#125;</p>
            <p>&nbsp; &lt;/div&gt;</p>
            <p>
              &nbsp; &lt;<span className="text-[#0151EC]">img</span> src=&#34;
              <span className="text-[#8131B2]">img/herofix.png</span>&#34;/&gt;
            </p>
            <p>&lt;/div&gt;</p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        data-aos="fade-up"
        className="flex flex-col lg:hidden w-full items-center mb-[40vw] z-[2] mt-[24.372vw]"
      >
        <div className="text-[8.6vw] text-neutral-g font-CoolveticaCondReg ">
          ArachnoVa{" "}
        </div>

        <div className="text-neutral-g items-center justify-center font-SourceSansProBold text-[2vw]/[6vw]">
          <div className="text-[7vw] mx-[5vw]   ">Your Web Design Partner</div>
          <div className="flex items-center justify-center h-[9.8vw] gap-[2vw] leading-none">
            <div className="text-[9.8vw]">Always</div>
            <Typewriter
              words={["Delivered", "Distinctive", "Dependable"]}
              className="text-[9.8vw] text-LightBlue-c"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-[5vw]/[5vw] pt-[4vw] text-[#4E5F66] font-SourceSansProSemibold ">
          <div className="">Crafting Digital Presence in Every</div>
          <div className="">Strand of Code</div>
        </div>

        <a
          href="https://wa.me/6287882832538"
          className="w-[80vw] h-[8vw] mt-[4vw] my-[2.5vw] bg-gradient-to-r from-[#2DC0D8] to-[#179FB5] font-InterBold text-white rounded-md text-[3vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out "
        >
          Start Your Project
        </a>
        <a href="/services" className="w-[80vw] h-[8vw] bg-transparent mb-[2.5vw] rounded-md text-[3vw] flex justify-center items-center hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out hover:bg-[#cae8ee] ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] to-[#159E8D] font-InterBold">
            Discover Our Services
          </div>
        </a>

        <div className="bg-white opacity-90 w-[80vw] h-[60vw] rounded-lg border-2 border-[#F1F5F9]  relative font-ConsolasRegular ">
          <div className="absolute w-[60vw] h-[13vw]  bg-white opacity-90 rounded-md -bottom-[6vw] -right-[4vw] text-[3vw] border-2 border-[#E2E8F0] font-ConsolasBold  ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[10vw] h-[3vw] top-[0.9vw] left-[0.7vw] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <div className="flex justify-center items-center text-[2.6vw] gap-x-[.05vw] pt-[5vw]">
              <div className="text-[#8131B2]">.\arachnova-</div>
              <div className="text-[#0151EC]">official-site</div>
              <div className="text-[#1CA7BD]"> &gt;</div>
              <div className="text-neutral-g">{"  "}npm run dev</div>
            </div>
          </div>
          <div className="px-[1vw] py-[4vw] text-[3vw]/[4vw] relative ">
            <Image
              alt=""
              src="/image/Hero/3ColorButton.png"
              className="w-[8vw] h-[3vw] top-[0.5vw] left-[0.7vw] absolute"
              draggable="false"
              width={100}
              height={100}
            />
            <p className="text-[#0151EC]">
              import{" "}
              <span className="text-[#8131B2] ">&#34;./globals.css&#34;;</span>
            </p>
            <p className="text-[#1E293B]">
              <span className="text-[#0151EC]">import</span> &#123;{" "}
              <span className="text-[#1CA7BD]"> ArachnoVa</span> &#125; from{" "}
              <span className="text-[#8131B2]">&#34;./api/provider&#34;</span>;
            </p>
            <p> &nbsp; </p>
            <p className="text-[#0151EC]">export default</p>
            <p className="text-[#1E293B]">
              &lt;div <span className="text-[#0151EC]">className</span>=&#34;
              <span className="text-[#8131B2]">Welcome to ArachnoVa</span>
              &#34;&gt;
            </p>
            <p className="text-neutral-g">
              &nbsp; &lt;div <span className="text-[#0151EC]">className</span>
              =&#34;<span className="text-[#8131B2]">content</span>&#34;&gt;
            </p>
            <p className="text-neutral-g">&nbsp; &#123;</p>
            <p>
              &nbsp; &nbsp;{" "}
              <span className="text-[#8131B2]">
                &#34;Your web design partner&#34;
              </span>
            </p>
            <p className="text-neutral-g"> &nbsp; &#125;</p>
            <p className="text-neutral-g">&nbsp; &lt;/div&gt;</p>
            <p className="text-neutral-g">
              &nbsp; &lt;<span className="text-[#0151EC]">img</span> src=&#34;
              <span className="text-[#8131B2]">img/herofix.png</span>&#34;/&gt;
            </p>
            <p className="text-neutral-g">&lt;/div&gt;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
