import FooterItem from "./FooterItem";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiWhatsappLogoFill } from "react-icons/pi";
import Image from "@/components/ui/Img";

const Footer = () => {
	return (
		<>
			<div className="flex lg:flex-row flex-col lg:justify-around justify-between items-center w-full lg:min-h-[12.708vw] min-h-[123.256vw] lg:p-0 pt-[13.953vw] pb-[9.767vw] bg-LightBlue-c">
				<div className="flex lg:flex-row flex-col justify-center items-center lg:w-[28.698vw]">
					<div className="relative lg:w-[7.135vw] w-[26.512vw] lg:aspect-[137/132] aspect-[114/95] lg:mr-[3.385vw]">
						<Image
							src="/image/Footer/FooterLogo.png"
							alt="logo"
							fill
							className="object-contain"
							draggable="false"
						/>
					</div>
					<div className="w-[0.104vw] h-[8.333vw] bg-neutral-a lg:flex hidden" />
					<div className="lg:flex flex-col ml-[1.979vw] gap-y-[0.521vw] hidden">
						<div className="flex items-center">
							<ul className="flex flex-row gap-x-[2.135vw]">
								<FooterItem Items="Projects" href="/projects" />
								<FooterItem Items="Services" href="/services" />
								<FooterItem Items="About" href="/aboutus" />
							</ul>
						</div>
						<div className="flex flex-row items-center justify-center">
							<AiOutlineCopyright size="0.938vw" className="text-surface" />
							<p className="font-InterSemibold text-surface text-[0.833vw]">
								2024 ArachnoVa. All Rights Reserved
							</p>
						</div>
					</div>
				</div>
				<div className="w-[82.326vw] h-[0.465vw] bg-neutral-a lg:hidden" />
				<div className="lg:hidden flex flex-col justify-between items-center">
					<ul className="text-center leading-[10.977vw]">
						<FooterItem Items="Projects" href="/projects" />
						<FooterItem Items="Services" href="/services" />
						<FooterItem Items="About" href="/aboutus" />
					</ul>
				</div>
				<div className="lg:hidden flex flex-row items-center justify-center">
					<AiOutlineCopyright size="4.186vw" className="text-surface" />
					<p className="font-InterSemibold text-surface text-[4.186vw]">
						2024 ArachnoVa. All Rights Reserved
					</p>
				</div>
				<div className="flex flex-col lg:w-[5.781vw] w-[25.814vw] justify-center lg:items-end items-center gap-y-[0.417vw]">
					<p className="font-InterBold lg:text-[0.938vw] text-[4.186vw] text-surface">
						Follow Us!
					</p>
					<div className="w-full lg:flex flex-row justify-between hidden">
						<a href="https://www.linkedin.com/company/arachnova-id/">
							<FaLinkedin
								size="1.563vw"
								className="text-surface hover:text-neutral-gMuted transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://www.instagram.com/arachnova.id/">
							<AiFillInstagram
								size="1.563vw"
								className="text-surface hover:text-neutral-gMuted transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://wa.me/6287882832538">
							<PiWhatsappLogoFill
								size="1.563vw"
								className="text-surface hover:text-neutral-gMuted transition-all duration-500 ease-in-out"
							/>
						</a>
					</div>
					<div className="w-full lg:hidden flex flex-row justify-between items-center">
						<a href="https://www.linkedin.com/company/arachnova-id/">
							<FaLinkedin
								size="6.279vw"
								className="text-surface hover:text-neutral-gMuted transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://www.instagram.com/arachnova.id/">
							<AiFillInstagram
								size="6.279vw"
								className="text-surface hover:text-neutral-gMuted transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://wa.me/6287882832538">
							<PiWhatsappLogoFill
								size="7.209vw"
								className="text-surface hover:text-neutral-gMuted transition-all duration-500 ease-in-out"
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
