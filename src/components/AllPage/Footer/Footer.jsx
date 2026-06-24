import FooterItem from "./FooterItem";
import { AiOutlineCopyright } import { useSettings } from "@/context/DataContext";
from "react-icons/ai";
import { FaLinkedin } import { useSettings } from "@/context/DataContext";
from "react-icons/fa";
import { AiFillInstagram } import { useSettings } from "@/context/DataContext";
from "react-icons/ai";
import { PiWhatsappLogoFill } import { useSettings } from "@/context/DataContext";
from "react-icons/pi";
import Image from "@/components/ui/Img";

const settings = useSettings();
	const Footer = () => {
	const settings = useSettings();
	const year = new Date().getFullYear();
	return (
		<>
			<div className="flex lg:flex-row flex-col lg:justify-around justify-between items-center w-full lg:min-h-[12.7rem] min-h-[123.3rem] lg:p-0 pt-[14.0rem] pb-[9.8rem] bg-LightBlue-c">
				<div className="flex lg:flex-row flex-col justify-center items-center lg:w-[28.7rem]">
					<div className="relative lg:w-[7.1rem] w-[26.5rem] lg:aspect-[137/132] aspect-[114/95] lg:mr-[3.4rem]">
						<Image
							src="/image/Footer/FooterLogo.png"
							alt="logo"
							fill
							className="object-contain"
							draggable="false"
						/>
					</div>
					<div className="w-[0.1rem] h-[8.3rem] bg-neutral-a lg:flex hidden" />
					<div className="lg:flex flex-col ml-[1.98rem] gap-y-[0.52rem] hidden">
						<div className="flex items-center">
							<ul className="flex flex-row gap-x-[2.1rem]">
								<FooterItem Items="Projects" href="/projects" />
								<FooterItem Items="Services" href="/services" />
								<FooterItem Items="About" href="/aboutus" />
							</ul>
						</div>
						<div className="flex flex-row items-center justify-center">
							<AiOutlineCopyright size="15px" className="text-neutral-a" />
							<p className="font-InterSemibold text-neutral-a text-[0.83rem]">
								{year} ArachnoVa. All Rights Reserved
							</p>
						</div>
					</div>
				</div>
				<div className="w-[82.3rem] h-[0.46rem] bg-neutral-a lg:hidden" />
				<div className="lg:hidden flex flex-col justify-between items-center">
					<ul className="text-center leading-[11.0rem]">
						<FooterItem Items="Projects" href="/projects" />
						<FooterItem Items="Services" href="/services" />
						<FooterItem Items="About" href="/aboutus" />
					</ul>
				</div>
				<div className="lg:hidden flex flex-row items-center justify-center">
					<AiOutlineCopyright size="67px" className="text-neutral-a" />
					<p className="font-InterSemibold text-neutral-a text-[4.2rem]">
						{year} ArachnoVa. All Rights Reserved
					</p>
				</div>
				<div className="flex flex-col lg:w-[5.8rem] w-[25.8rem] justify-center lg:items-end items-center gap-y-[0.42rem]">
					<p className="font-InterBold lg:text-[0.94rem] text-[4.2rem] text-neutral-a">
						Follow Us!
					</p>
					<div className="w-full lg:flex flex-row justify-between hidden">
						<a href="https://www.linkedin.com/company/arachnova-id/">
							<FaLinkedin
								size="25px"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://www.instagram.com/arachnova.id/">
							<AiFillInstagram
								size="25px"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="{settings?.whatsapp || "https://wa.me/6287882832538"}">
							<PiWhatsappLogoFill
								size="25px"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
					</div>
					<div className="w-full lg:hidden flex flex-row justify-between items-center">
						<a href="https://www.linkedin.com/company/arachnova-id/">
							<FaLinkedin
								size="100px"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://www.instagram.com/arachnova.id/">
							<AiFillInstagram
								size="100px"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="{settings?.whatsapp || "https://wa.me/6287882832538"}">
							<PiWhatsappLogoFill
								size="115px"
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
