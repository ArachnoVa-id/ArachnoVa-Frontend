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
		<section className="relative w-full lg:min-h-[50rem] flex flex-col justify-around items-center bg-white-MainPage lg:pb-[4rem] pb-[10rem]">
			<div className="absolute top-[6.15rem] w-full aspect-[1920/458] z-0 lg:flex hidden">
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
				className="w-fit flex flex-col items-center gap-y-[0.6rem] lg:mt-[6rem] mt-[21.6rem]"
				data-aos="fade-down"
			>
				<p className="font-SourceSansProBold lg:text-[2.25rem] text-[6.03rem] lg:leading-[2.25rem] leading-[6.03rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
					Who We Are
				</p>
				<h1 className="font-SourceSansProBold lg:text-[3.45rem] text-[8rem] lg:leading-[3.53rem] leading-[10.05rem] text-neutral-g">
					About ArachnoVa
				</h1>
			</div>
			<div className="relative w-fit h-fit" data-aos="fade-up">
				<div className="absolute -left-[33.24rem] -bottom-[20.04rem] lg:w-[50rem] w-[50rem] aspect-[433/235] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-left.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute lg:-right-[16.14rem] -right-[14.4rem] -top-[36.0rem] lg:w-[50rem] w-[50rem] aspect-[225/321] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-right.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[50rem] aspect-[430/576] -left-[7.2rem] -bottom-[50rem] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-left-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[50rem] aspect-[281/621] -right-[7.2rem] -top-[50rem] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-right-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div
					className="relative lg:w-[50rem] w-[50rem] lg:aspect-[1128/414] aspect-[390/612] justify-center items-center flex flex-col lg:rounded-[1.2rem] rounded-[5.36rem] lg:border-[0.024rem] border-[0.16rem] border-white z-10"
					style={{
						background: "rgba(241, 245, 249, 0.50)",
						boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
					}}
				>
					<div className="absolute lg:top-[0.97rem] top-[4.35rem] lg:left-[0.97rem] left-[4.35rem] flex flex-row lg:w-[4.5rem] w-[17.41rem] justify-between">
						<div
							className="lg:w-[1.05rem] w-[4.02rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
								boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
							}}
						/>
						<div
							className="lg:w-[1.05rem] w-[4.02rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
								boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
							}}
						/>
						<div
							className="lg:w-[1.05rem] w-[4.02rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
								boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0",
							}}
						/>
					</div>
					<div className="w-fit flex flex-col justify-center items-center mb-[1.8rem]">
						<div className="relative lg:w-[6.6rem] w-[26.46rem] lg:aspect-[88/65] aspect-[79/58]">
							<Image
								src="/image/AboutUs/logo.png"
								alt="logo"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<p className="font-CoolveticaReg lg:text-[3.75rem] text-[8rem] text-[#1AB0C8]">
							ARACHNOVA
						</p>
					</div>
					<div className="lg:w-[50rem] w-[50rem] lg:aspect-[1048/3] aspect-[356/3] bg-neutral-d opacity-50" />
					<p className="lg:w-[50rem] w-[50rem] lg:mt-[0.97rem] mt-[6.03rem] font-SourceSansProSemibold lg:text-[1.5rem] text-[6.03rem] text-neutral-g text-justify">
						{Description}
					</p>
				</div>
			</div>
			<div
				data-aos="fade-down"
				className="flex lg:flex-row flex-col justify-between lg:items-center items-start lg:w-[50rem] w-[50rem] lg:p-[3.0rem] p-[13.39rem] bg-white lg:rounded-[1.5rem] rounded-[6.7rem] lg:border-[0.037rem] border-[0.16rem] border-border lg:mb-[3.75rem]"
				style={{ boxShadow: "0px 10px 40px -10px rgba(71, 85, 105, 0.25)" }}
			>
				<div className="lg:w-[22.1rem] w-[50rem] flex flex-col items-start justify-center">
					<h1 className="font-SourceSansProBold lg:text-[3.0rem] text-[8rem] text-neutral-g">
						Get In Touch
					</h1>
					<p className="font-SourceSansProSemibold lg:text-[1.5rem] text-[6.03rem] text-neutral-e">
						Let&apos;s Connect and Create Together Reach Out to Us Today!
					</p>
				</div>
				<div className="w-[24.67rem] lg:flex hidden flex-row justify-between items-center">
					<SocialMediaIcon
						Icon={<IoIosMail size="10px" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="9px" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="9px" className="text-white" />}
						href={whatsapp}
					/>
				</div>
				<div className="w-[50rem] flex lg:hidden flex-row justify-between items-center mt-[8.04rem]">
					<SocialMediaIcon
						Icon={<IoIosMail size="30px" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="27px" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="27px" className="text-white" />}
						href={whatsapp}
					/>
				</div>
			</div>

		</section>
	);
};

export default AboutUs;
