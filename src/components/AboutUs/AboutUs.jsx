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
		<section className="relative w-full lg:min-h-[58.6rem] flex flex-col justify-around items-center bg-white-MainPage lg:pb-[2.8rem] pb-[8.4rem]">
			<div className="absolute top-[2.4rem] w-full aspect-[1920/458] z-0 lg:flex hidden">
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
				className="w-fit flex flex-col items-center gap-y-[0.23rem] lg:mt-[4.5rem] mt-[8.4rem]"
				data-aos="fade-down"
			>
				<p className="font-SourceSansProBold lg:text-[0.88rem] text-[2.4rem] lg:leading-[0.88rem] leading-[2.4rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
					Who We Are
				</p>
				<h1 className="font-SourceSansProBold lg:text-[1.35rem] text-[3.9rem] lg:leading-[1.38rem] leading-[3.9rem] text-neutral-g">
					About ArachnoVa
				</h1>
			</div>
			<div className="relative w-fit h-fit" data-aos="fade-up">
				<div className="absolute -left-[13.0rem] -bottom-[7.8rem] lg:w-[31.2rem] w-[28.1rem] aspect-[433/235] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-left.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute lg:-right-[6.3rem] -right-[5.6rem] -top-[14.1rem] lg:w-[22.6rem] w-[22.5rem] aspect-[225/321] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-right.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[56.2rem] aspect-[430/576] -left-[2.8rem] -bottom-[27.6rem] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-left-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[36.8rem] aspect-[281/621] -right-[2.8rem] -top-[28.1rem] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-right-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div
					className="relative lg:w-[33.0rem] w-[51.0rem] lg:aspect-[1128/414] aspect-[390/612] justify-center items-center flex flex-col lg:rounded-[0.47rem] rounded-[2.1rem] lg:border-[0.06rem] border-[0.39rem] border-white z-10"
					style={{
						background: "rgba(241, 245, 249, 0.50)",
						boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
					}}
				>
					<div className="absolute lg:top-[0.38rem] top-[1.7rem] lg:left-[0.38rem] left-[1.7rem] flex flex-row lg:w-[1.76rem] w-[6.8rem] justify-between">
						<div
							className="lg:w-[0.41rem] w-[1.57rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
								boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
							}}
						/>
						<div
							className="lg:w-[0.41rem] w-[1.57rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
								boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
							}}
						/>
						<div
							className="lg:w-[0.41rem] w-[1.57rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
								boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0",
							}}
						/>
					</div>
					<div className="w-fit flex flex-col justify-center items-center mb-[0.7rem]">
						<div className="relative lg:w-[2.6rem] w-[10.3rem] lg:aspect-[88/65] aspect-[79/58]">
							<Image
								src="/image/AboutUs/logo.png"
								alt="logo"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<p className="font-CoolveticaReg lg:text-[1.46rem] text-[5.2rem] text-[#1AB0C8]">
							ARACHNOVA
						</p>
					</div>
					<div className="lg:w-[30.7rem] w-[46.6rem] lg:aspect-[1048/3] aspect-[356/3] bg-neutral-d opacity-50" />
					<p className="lg:w-[30.0rem] w-[46.6rem] lg:mt-[0.38rem] mt-[2.4rem] font-SourceSansProSemibold lg:text-[0.59rem] text-[2.4rem] text-neutral-g text-justify">
						{Description}
					</p>
				</div>
			</div>
			<div
				data-aos="fade-down"
				className="flex lg:flex-row flex-col justify-between lg:items-center items-start lg:w-[22.9rem] w-[51.0rem] lg:p-[1.17rem] p-[5.2rem] bg-white lg:rounded-[0.59rem] rounded-[2.6rem] lg:border-[0.09rem] border-[0.39rem] border-border lg:mb-[1.46rem]"
				style={{ boxShadow: "0px 10px 40px -10px rgba(71, 85, 105, 0.25)" }}
			>
				<div className="lg:w-[8.6rem] w-[34.5rem] flex flex-col items-start justify-center">
					<h1 className="font-SourceSansProBold lg:text-[1.17rem] text-[3.9rem] text-neutral-g">
						Get In Touch
					</h1>
					<p className="font-SourceSansProSemibold lg:text-[0.59rem] text-[2.4rem] text-neutral-e">
						Let&apos;s Connect and Create Together Reach Out to Us Today!
					</p>
				</div>
				<div className="w-[9.6rem] lg:flex hidden flex-row justify-between items-center">
					<SocialMediaIcon
						Icon={<IoIosMail size="24px" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="22px" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="22px" className="text-white" />}
						href={whatsapp}
					/>
				</div>
				<div className="w-[29.7rem] flex lg:hidden flex-row justify-between items-center mt-[3.1rem]">
					<SocialMediaIcon
						Icon={<IoIosMail size="71px" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="65px" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="65px" className="text-white" />}
						href={whatsapp}
					/>
				</div>
			</div>

		</section>
	);
};

export default AboutUs;
