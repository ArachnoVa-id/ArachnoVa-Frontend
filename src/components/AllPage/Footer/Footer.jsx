import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import Image from "@/components/ui/Img";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-LightBlue-c">
      <div className="max-w-[70rem] mx-auto lg:px-[2rem] px-[5.581vw] lg:py-[2.5rem] py-[8vw]">
        {/* Main content row */}
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-x-[4rem]">
          {/* Logo + brand */}
          <div className="flex flex-col items-center lg:items-start lg:mb-0 mb-[5vw]">
            <div className="relative lg:w-[4rem] w-[15vw] lg:aspect-[137/132] aspect-[1/1] mb-[0.5rem]">
              <Image src="/image/Footer/FooterLogo.png" alt="logo" fill className="object-contain" draggable="false" />
            </div>
            <p className="font-CoolveticaReg lg:text-[1.2rem] text-[5vw] text-neutral-a tracking-wide">ArachnoVa</p>
          </div>

          {/* Navigation */}
          <div className="text-center lg:text-left lg:mb-0 mb-[5vw]">
            <h4 className="font-InterBold lg:text-[0.8rem] text-[3.5vw] text-neutral-a/70 uppercase tracking-wider mb-[0.8rem]">Navigation</h4>
            <ul className="space-y-[0.4rem]">
              <li><a href="/projects" className="font-InterSemibold lg:text-[0.85rem] text-[3.5vw] text-neutral-a hover:text-white/70 transition-colors">Projects</a></li>
              <li><a href="/services" className="font-InterSemibold lg:text-[0.85rem] text-[3.5vw] text-neutral-a hover:text-white/70 transition-colors">Services</a></li>
              <li><a href="/aboutus" className="font-InterSemibold lg:text-[0.85rem] text-[3.5vw] text-neutral-a hover:text-white/70 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left lg:mb-0 mb-[5vw]">
            <h4 className="font-InterBold lg:text-[0.8rem] text-[3.5vw] text-neutral-a/70 uppercase tracking-wider mb-[0.8rem]">Contact</h4>
            <div className="space-y-[0.4rem]">
              <a href="mailto:arachnova.id@gmail.com" className="block font-InterSemibold lg:text-[0.85rem] text-[3.5vw] text-neutral-a hover:text-white/70 transition-colors">
                arach nova.id@gmail.com
              </a>
              <a href="https://wa.me/6287882832538" className="block font-InterSemibold lg:text-[0.85rem] text-[3.5vw] text-neutral-a hover:text-white/70 transition-colors">
                +62 878-8283-2538
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-center lg:text-left">
            <h4 className="font-InterBold lg:text-[0.8rem] text-[3.5vw] text-neutral-a/70 uppercase tracking-wider mb-[0.8rem]">Follow Us</h4>
            <div className="flex justify-center lg:justify-start gap-x-[0.8rem]">
              <a href="https://www.linkedin.com/company/arachnova-id/" className="w-[2.2rem] h-[2.2rem] rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all duration-300">
                <FaLinkedin size="1rem" className="text-neutral-a" />
              </a>
              <a href="https://www.instagram.com/arachnova.id/" className="w-[2.2rem] h-[2.2rem] rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all duration-300">
                <AiFillInstagram size="1rem" className="text-neutral-a" />
              </a>
              <a href="https://wa.me/6287882832538" className="w-[2.2rem] h-[2.2rem] rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all duration-300">
                <PiWhatsappLogoFill size="1rem" className="text-neutral-a" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.05rem] bg-white/20 lg:my-[2rem] my-[5vw]" />

        {/* Bottom bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-[1vw]">
          <p className="font-InterSemibold lg:text-[0.75rem] text-[3vw] text-neutral-a/60">
            &copy; {year} ArachnoVa. All rights reserved.
          </p>
          <div className="flex gap-x-[1.2rem]">
            <a href="/projects" className="font-InterSemibold lg:text-[0.7rem] text-[2.5vw] text-neutral-a/50 hover:text-neutral-a/80 transition-colors">Projects</a>
            <a href="/services" className="font-InterSemibold lg:text-[0.7rem] text-[2.5vw] text-neutral-a/50 hover:text-neutral-a/80 transition-colors">Services</a>
            <a href="/aboutus" className="font-InterSemibold lg:text-[0.7rem] text-[2.5vw] text-neutral-a/50 hover:text-neutral-a/80 transition-colors">About</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
