"use client";

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
		<section className="relative w-full lg:min-h-[91.1rem] flex flex-col justify-around items-center bg-white-MainPage lg:pb-[4.4rem] pb-[13.1rem]">
			<div className="absolute top-[3.7rem] w-full aspect-[1920/458] z-0 lg:flex hidden">
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
				className="w-fit flex flex-col items-center gap-y-[0.36rem] lg:mt-[7.0rem] mt-[13.1rem]"
				data-aos="fade-down"
			>
				<p className="font-SourceSansProBold lg:text-[1.37rem] text-[3.7rem] lg:leading-[1.37rem] leading-[3.7rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
					Who We Are
				</p>
				<h1 className="font-SourceSansProBold lg:text-[2.1rem] text-[6.1rem] lg:leading-[2.1rem] leading-[6.1rem] text-neutral-g">
					About ArachnoVa
				</h1>
			</div>
			<div className="relative w-fit h-fit" data-aos="fade-up">
				<div className="absolute -left-[20.2rem] -bottom-[12.2rem] lg:w-[48.6rem] w-[43.8rem] aspect-[433/235] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-left.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute lg:-right-[9.8rem] -right-[8.8rem] -top-[21.9rem] lg:w-[35.2rem] w-[35.0rem] aspect-[225/321] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-right.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[87.5rem] aspect-[430/576] -left-[4.4rem] -bottom-[42.9rem] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-left-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[57.2rem] aspect-[281/621] -right-[4.4rem] -top-[43.8rem] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-right-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div
					className="relative lg:w-[51.4rem] w-[79.4rem] lg:aspect-[1128/414] aspect-[390/612] justify-center items-center flex flex-col lg:rounded-[0.73rem] rounded-[3.3rem] lg:border-[0.09rem] border-[0.61rem] border-white z-10"
					style={{
						background: "rgba(241, 245, 249, 0.50)",
						boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
					}}
				>
					<div className="absolute lg:top-[0.59rem] top-[2.6rem] lg:left-[0.59rem] left-[2.6rem] flex flex-row lg:w-[2.7rem] w-[10.6rem] justify-between">
						<div
							className="lg:w-[0.64rem] w-[2.4rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
								boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
							}}
						/>
						<div
							className="lg:w-[0.64rem] w-[2.4rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
								boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
							}}
						/>
						<div
							className="lg:w-[0.64rem] w-[2.4rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
								boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0",
							}}
						/>
					</div>
					<div className="w-fit flex flex-col justify-center items-center mb-[1.09rem]">
						<div className="relative lg:w-[4.0rem] w-[16.1rem] lg:aspect-[88/65] aspect-[79/58]">
							<Image
								src="/image/AboutUs/logo.png"
								alt="logo"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<p className="font-CoolveticaReg lg:text-[2.3rem] text-[8.1rem] text-[#1AB0C8]">
							ARACHNOVA
						</p>
					</div>
					<div className="lg:w-[47.8rem] w-[72.4rem] lg:aspect-[1048/3] aspect-[356/3] bg-neutral-d opacity-50" />
					<p className="lg:w-[46.7rem] w-[72.4rem] lg:mt-[0.59rem] mt-[3.7rem] font-SourceSansProSemibold lg:text-[0.91rem] text-[3.7rem] text-neutral-g text-justify">
						{Description}
					</p>
				</div>
			</div>
			<div
				data-aos="fade-down"
				className="flex lg:flex-row flex-col justify-between lg:items-center items-start lg:w-[35.5rem] w-[79.4rem] lg:p-[1.82rem] p-[8.1rem] bg-white lg:rounded-[0.91rem] rounded-[4.1rem] lg:border-[0.14rem] border-[0.61rem] border-border lg:mb-[2.3rem]"
				style={{ boxShadow: "0px 10px 40px -10px rgba(71, 85, 105, 0.25)" }}
			>
				<div className="lg:w-[13.4rem] w-[53.7rem] flex flex-col items-start justify-center">
					<h1 className="font-SourceSansProBold lg:text-[1.82rem] text-[6.1rem] text-neutral-g">
						Get In Touch
					</h1>
					<p className="font-SourceSansProSemibold lg:text-[0.91rem] text-[3.7rem] text-neutral-e">
						Let&apos;s Connect and Create Together Reach Out to Us Today!
					</p>
				</div>
				<div className="w-[15.0rem] lg:flex hidden flex-row justify-between items-center">
					<SocialMediaIcon
						Icon={<IoIosMail size="38px" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="34px" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="34px" className="text-white" />}
						href={whatsapp}
					/>
				</div>
				<div className="w-[46.2rem] flex lg:hidden flex-row justify-between items-center mt-[4.9rem]">
					<SocialMediaIcon
						Icon={<IoIosMail size="111px" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="101px" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="101px" className="text-white" />}
						href={whatsapp}
					/>
				</div>
			</div>

		</section>
	);
};

export default AboutUs;
