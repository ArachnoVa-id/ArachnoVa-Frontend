import FooterItem from "./FooterItem";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiWhatsappLogoFill } from "react-icons/pi";
import Image from "@/components/ui/Img";

const Footer = () => {
	return (
		<>
			<div className="flex lg:flex-row flex-col lg:justify-around justify-between items-center w-full lg:min-h-[2.03rem] min-h-[19.72rem] lg:p-0 pt-[2.23rem] pb-[1.56rem] bg-LightBlue-c">
				<div className="flex lg:flex-row flex-col justify-center items-center lg:w-[4.59rem]">
					<div className="relative lg:w-[1.14rem] w-[4.24rem] lg:aspect-[137/132] aspect-[114/95] lg:mr-[0.54rem]">
						<Image
							src="/image/Footer/FooterLogo.png"
							alt="logo"
							fill
							className="object-contain"
							draggable="false"
						/>
					</div>
					<div className="w-[0.2rem] h-[1.33rem] bg-neutral-a lg:flex hidden" />
					<div className="lg:flex flex-col ml-[0.32rem] gap-y-[0.2rem] hidden">
						<div className="flex items-center">
							<ul className="flex flex-row gap-x-[0.34rem]">
								<FooterItem Items="Projects" href="/projects" />
								<FooterItem Items="Services" href="/services" />
								<FooterItem Items="About" href="/aboutus" />
							</ul>
						</div>
						<div className="flex flex-row items-center justify-center">
							<AiOutlineCopyright size="13px" className="text-neutral-a" />
							<p className="font-InterSemibold text-neutral-a text-[0.5rem]">
								2024 ArachnoVa. All Rights Reserved
							</p>
						</div>
					</div>
				</div>
				<div className="w-[13.17rem] h-[0.2rem] bg-neutral-a lg:hidden" />
				<div className="lg:hidden flex flex-col justify-between items-center">
					<ul className="text-center leading-[1.76rem]">
						<FooterItem Items="Projects" href="/projects" />
						<FooterItem Items="Services" href="/services" />
						<FooterItem Items="About" href="/aboutus" />
					</ul>
				</div>
				<div className="lg:hidden flex flex-row items-center justify-center">
					<AiOutlineCopyright size="59px" className="text-neutral-a" />
					<p className="font-InterSemibold text-neutral-a text-[0.67rem]">
						2024 ArachnoVa. All Rights Reserved
					</p>
				</div>
				<div className="flex flex-col lg:w-[0.92rem] w-[4.13rem] justify-center lg:items-end items-center gap-y-[0.2rem]">
					<p className="font-InterBold lg:text-[0.5rem] text-[0.67rem] text-neutral-a">
						Follow Us!
					</p>
					<div className="w-full lg:flex flex-row justify-between hidden">
						<a href="https://www.linkedin.com/company/arachnova-id/">
							<FaLinkedin
								size="23px"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://www.instagram.com/arachnova.id/">
							<AiFillInstagram
								size="23px"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://wa.me/6287882832538">
							<PiWhatsappLogoFill
								size="23px"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
					</div>
					<div className="w-full lg:hidden flex flex-row justify-between items-center">
						<a href="https://www.linkedin.com/company/arachnova-id/">
							<FaLinkedin
								size="88px"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://www.instagram.com/arachnova.id/">
							<AiFillInstagram
								size="88px"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://wa.me/6287882832538">
							<PiWhatsappLogoFill
								size="101px"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
