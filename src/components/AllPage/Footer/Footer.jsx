import FooterItem from "./FooterItem";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiWhatsappLogoFill } from "react-icons/pi";
import Image from "@/components/ui/Img";

const Footer = () => {
	return (
		<>
			<div className="flex lg:flex-row flex-col lg:justify-around justify-between items-center w-full lg:min-h-[clamp(2.03rem,12.708vw,18.3rem)] min-h-[clamp(19.72rem,123.256vw,50rem)] lg:p-0 pt-[clamp(2.23rem,13.953vw,20.09rem)] pb-[clamp(1.56rem,9.767vw,14.06rem)] bg-LightBlue-c">
				<div className="flex lg:flex-row flex-col justify-center items-center lg:w-[clamp(4.59rem,28.698vw,41.33rem)]">
					<div className="relative lg:w-[clamp(1.14rem,7.135vw,10.27rem)] w-[clamp(4.24rem,26.512vw,38.18rem)] lg:aspect-[137/132] aspect-[114/95] lg:mr-[clamp(0.54rem,3.385vw,4.87rem)]">
						<Image
							src="/image/Footer/FooterLogo.png"
							alt="logo"
							fill
							className="object-contain"
							draggable="false"
						/>
					</div>
					<div className="w-[clamp(0.2rem,0.104vw,0.15rem)] h-[clamp(1.33rem,8.333vw,12.0rem)] bg-neutral-a lg:flex hidden" />
					<div className="lg:flex flex-col ml-[clamp(0.32rem,1.979vw,2.85rem)] gap-y-[clamp(0.2rem,0.521vw,0.75rem)] hidden">
						<div className="flex items-center">
							<ul className="flex flex-row gap-x-[clamp(0.34rem,2.135vw,3.07rem)]">
								<FooterItem Items="Projects" href="/projects" />
								<FooterItem Items="Services" href="/services" />
								<FooterItem Items="About" href="/aboutus" />
							</ul>
						</div>
						<div className="flex flex-row items-center justify-center">
							<AiOutlineCopyright size="0.938vw" className="text-neutral-a" />
							<p className="font-InterSemibold text-neutral-a text-[clamp(0.5rem,0.833vw,1.2rem)]">
								2024 ArachnoVa. All Rights Reserved
							</p>
						</div>
					</div>
				</div>
				<div className="w-[clamp(13.17rem,82.326vw,50rem)] h-[clamp(0.2rem,0.465vw,0.67rem)] bg-neutral-a lg:hidden" />
				<div className="lg:hidden flex flex-col justify-between items-center">
					<ul className="text-center leading-[clamp(1.76rem,10.977vw,15.81rem)]">
						<FooterItem Items="Projects" href="/projects" />
						<FooterItem Items="Services" href="/services" />
						<FooterItem Items="About" href="/aboutus" />
					</ul>
				</div>
				<div className="lg:hidden flex flex-row items-center justify-center">
					<AiOutlineCopyright size="4.186vw" className="text-neutral-a" />
					<p className="font-InterSemibold text-neutral-a text-[clamp(0.67rem,4.186vw,6.03rem)]">
						2024 ArachnoVa. All Rights Reserved
					</p>
				</div>
				<div className="flex flex-col lg:w-[clamp(0.92rem,5.781vw,8.32rem)] w-[clamp(4.13rem,25.814vw,37.17rem)] justify-center lg:items-end items-center gap-y-[clamp(0.2rem,0.417vw,0.6rem)]">
					<p className="font-InterBold lg:text-[clamp(0.5rem,0.938vw,1.35rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] text-neutral-a">
						Follow Us!
					</p>
					<div className="w-full lg:flex flex-row justify-between hidden">
						<a href="https://www.linkedin.com/company/arachnova-id/">
							<FaLinkedin
								size="1.563vw"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://www.instagram.com/arachnova.id/">
							<AiFillInstagram
								size="1.563vw"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://wa.me/6287882832538">
							<PiWhatsappLogoFill
								size="1.563vw"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
					</div>
					<div className="w-full lg:hidden flex flex-row justify-between items-center">
						<a href="https://www.linkedin.com/company/arachnova-id/">
							<FaLinkedin
								size="6.279vw"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://www.instagram.com/arachnova.id/">
							<AiFillInstagram
								size="6.279vw"
								className="text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
							/>
						</a>
						<a href="https://wa.me/6287882832538">
							<PiWhatsappLogoFill
								size="7.209vw"
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
