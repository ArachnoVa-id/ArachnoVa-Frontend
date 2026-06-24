"use client";

import { useSettings } from "@/context/DataContext";
import { IoIosMail } from "react-icons/io";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
	const email = "mailto:arachnova.id@gmail.com";
	const instagram = "https://www.instagram.com/arachnova.id/";
	const whatsapp = "https://wa.me/6287882832538";
	const Description =
		"ArachnoVa adalah perusahaan yang berfokus pada penyediaan layanan desain dan pengembangan website profesional. Dengan tim yang memiliki kompetensi teknis mendalam di bidang teknologi informasi, kami berkomitmen untuk menghadirkan solusi web inovatif yang kreatif, responsif, dan sesuai dengan kebutuhan setiap klien.";
	return (
		<section className="relative w-full lg:min-h-[104.2rem] flex flex-col justify-around items-center bg-white-MainPage lg:pb-[5.0rem] pb-[15.0rem]">
			<div className="absolute top-[4.3rem] w-full aspect-[1920/458] z-0 lg:flex hidden">
				<Image
					src="/image/OurServices/ServicesHero/bg.png"
					alt="bg"
					draggable="false"
					fill
					className="object-contain"
				/>
			</div>
			<div className="absolute top-[0] w-full aspect-[430/195] z-0 lg:hidden">
				<Image
					src="/image/OurServices/ServicesHero/bg-mobile.png"
					alt="bg"
					draggable="false"
					fill
					className="object-contain"
				/>
			</div>
			<div
				className="w-fit flex flex-col items-center gap-y-[0.42rem] lg:mt-[8.0rem] mt-[15.0rem]"
				data-aos="fade-down"
			>
				<p className="font-SourceSansProBold lg:text-[1.56rem] text-[4.2rem] lg:leading-[1.56rem] leading-[4.2rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
					Who We Are
				</p>
				<h1 className="font-SourceSansProBold lg:text-[2.4rem] text-[7.0rem] lg:leading-[2.4rem] leading-[7.0rem] text-neutral-g">
					About ArachnoVa
				</h1>
			</div>
			<div className="relative w-fit h-fit" data-aos="fade-up">
				<div className="absolute -left-[23.1rem] -bottom-[13.9rem] lg:w-[55.6rem] w-[50.0rem] aspect-[433/235] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-left.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute lg:-right-[11.2rem] -right-[10.0rem] -top-[25.0rem] lg:w-[40.2rem] w-[40.0rem] aspect-[225/321] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-right.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[100.0rem] aspect-[430/576] -left-[5.0rem] -bottom-[49.0rem] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-left-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[65.3rem] aspect-[281/621] -right-[5.0rem] -top-[50.0rem] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-right-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div
					className="relative lg:w-[58.8rem] w-[90.7rem] lg:aspect-[1128/414] aspect-[390/612] justify-center items-center flex flex-col lg:rounded-[0.83rem] rounded-[3.7rem] lg:border-[0.1rem] border-[0.7rem] border-white z-10"
					style={{
						background: "rgba(241, 245, 249, 0.50)",
						boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
					}}
				>
					<div className="absolute lg:top-[0.68rem] top-[3.0rem] lg:left-[0.68rem] left-[3.0rem] flex flex-row lg:w-[3.1rem] w-[12.1rem] justify-between">
						<div
							className="lg:w-[0.73rem] w-[2.8rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
								boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
							}}
						/>
						<div
							className="lg:w-[0.73rem] w-[2.8rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
								boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
							}}
						/>
						<div
							className="lg:w-[0.73rem] w-[2.8rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
								boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0",
							}}
						/>
					</div>
					<div className="w-fit flex flex-col justify-center items-center mb-[1.25rem]">
						<div className="relative lg:w-[4.6rem] w-[18.4rem] lg:aspect-[88/65] aspect-[79/58]">
							<Image
								src="/image/AboutUs/logo.png"
								alt="logo"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<p className="font-CoolveticaReg lg:text-[2.6rem] text-[9.3rem] text-[#1AB0C8]">
							ARACHNOVA
						</p>
					</div>
					<div className="lg:w-[54.6rem] w-[82.8rem] lg:aspect-[1048/3] aspect-[356/3] bg-neutral-d opacity-50" />
					<p className="lg:w-[53.3rem] w-[82.8rem] lg:mt-[0.68rem] mt-[4.2rem] font-SourceSansProSemibold lg:text-[1.04rem] text-[4.2rem] text-neutral-g text-justify">
						{Description}
					</p>
				</div>
			</div>
			<div
				data-aos="fade-down"
				className="flex lg:flex-row flex-col justify-between lg:items-center items-start lg:w-[40.6rem] w-[90.7rem] lg:p-[2.1rem] p-[9.3rem] bg-white lg:rounded-[1.04rem] rounded-[4.7rem] lg:border-[0.16rem] border-[0.7rem] border-border lg:mb-[2.6rem]"
				style={{ boxShadow: "0px 10px 40px -10px rgba(71, 85, 105, 0.25)" }}
			>
				<div className="lg:w-[15.4rem] w-[61.4rem] flex flex-col items-start justify-center">
					<h1 className="font-SourceSansProBold lg:text-[2.1rem] text-[7.0rem] text-neutral-g">
						Get In Touch
					</h1>
					<p className="font-SourceSansProSemibold lg:text-[1.04rem] text-[4.2rem] text-neutral-e">
						Let&apos;s Connect and Create Together Reach Out to Us Today!
					</p>
				</div>
				<div className="w-[17.1rem] lg:flex hidden flex-row justify-between items-center">
					<SocialMediaIcon
						Icon={<IoIosMail size="43px" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="39px" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="39px" className="text-white" />}
						href={whatsapp}
					/>
				</div>
				<div className="w-[52.8rem] flex lg:hidden flex-row justify-between items-center mt-[5.6rem]">
					<SocialMediaIcon
						Icon={<IoIosMail size="127px" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="115px" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="115px" className="text-white" />}
						href={whatsapp}
					/>
				</div>
			</div>

		</section>
	);
};

export default AboutUs;
