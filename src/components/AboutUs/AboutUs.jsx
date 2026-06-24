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
		<section className="relative w-full lg:min-h-[16.67rem] flex flex-col justify-around items-center bg-white-MainPage lg:pb-[2rem] pb-[5rem]">
			<div className="absolute top-[0.68rem] w-full aspect-[1920/458] z-0 lg:flex hidden">
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
				className="w-fit flex flex-col items-center gap-y-[0.2rem] lg:mt-[4rem] mt-[2.4rem]"
				data-aos="fade-down"
			>
				<p className="font-SourceSansProBold lg:text-[0.5rem] text-[0.67rem] lg:leading-[0.25rem] leading-[0.67rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
					Who We Are
				</p>
				<h1 className="font-SourceSansProBold lg:text-[0.5rem] text-[1.12rem] lg:leading-[0.39rem] leading-[1.12rem] text-neutral-g">
					About ArachnoVa
				</h1>
			</div>
			<div className="relative w-fit h-fit" data-aos="fade-up">
				<div className="absolute -left-[3.69rem] -bottom-[2.23rem] lg:w-[8.89rem] w-[8.0rem] aspect-[433/235] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-left.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute lg:-right-[1.79rem] -right-[1.6rem] -top-[4.0rem] lg:w-[6.44rem] w-[6.4rem] aspect-[225/321] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-right.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[16.0rem] aspect-[430/576] -left-[0.8rem] -bottom-[7.84rem] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-left-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[10.46rem] aspect-[281/621] -right-[0.8rem] -top-[8.0rem] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-right-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div
					className="relative lg:w-[9.4rem] w-[14.51rem] lg:aspect-[1128/414] aspect-[390/612] justify-center items-center flex flex-col lg:rounded-[0.2rem] rounded-[0.6rem] lg:border-[2px] border-[13px] border-white z-10"
					style={{
						background: "rgba(241, 245, 249, 0.50)",
						boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
					}}
				>
					<div className="absolute lg:top-[0.2rem] top-[0.48rem] lg:left-[0.2rem] left-[0.48rem] flex flex-row lg:w-[0.5rem] w-[1.93rem] justify-between">
						<div
							className="lg:w-[0.2rem] w-[0.45rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
								boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
							}}
						/>
						<div
							className="lg:w-[0.2rem] w-[0.45rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
								boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
							}}
						/>
						<div
							className="lg:w-[0.2rem] w-[0.45rem] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
								boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0",
							}}
						/>
					</div>
					<div className="w-fit flex flex-col justify-center items-center mb-[0.2rem]">
						<div className="relative lg:w-[0.73rem] w-[2.94rem] lg:aspect-[88/65] aspect-[79/58]">
							<Image
								src="/image/AboutUs/logo.png"
								alt="logo"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<p className="font-CoolveticaReg lg:text-[0.5rem] text-[1.49rem] text-[#1AB0C8]">
							ARACHNOVA
						</p>
					</div>
					<div className="lg:w-[8.73rem] w-[13.25rem] lg:aspect-[1048/3] aspect-[356/3] bg-neutral-d opacity-50" />
					<p className="lg:w-[8.53rem] w-[13.25rem] lg:mt-[0.2rem] mt-[0.67rem] font-SourceSansProSemibold lg:text-[0.5rem] text-[0.67rem] text-neutral-g text-justify">
						{Description}
					</p>
				</div>
			</div>
			<div
				data-aos="fade-down"
				className="flex lg:flex-row flex-col justify-between lg:items-center items-start lg:w-[6.5rem] w-[14.51rem] lg:p-[0.33rem] p-[1.49rem] bg-white lg:rounded-[0.2rem] rounded-[0.74rem] lg:border-[3px] border-[13px] border-border lg:mb-[0.42rem]"
				style={{ boxShadow: "0px 10px 40px -10px rgba(71, 85, 105, 0.25)" }}
			>
				<div className="lg:w-[2.46rem] w-[9.82rem] flex flex-col items-start justify-center">
					<h1 className="font-SourceSansProBold lg:text-[0.5rem] text-[1.12rem] text-neutral-g">
						Get In Touch
					</h1>
					<p className="font-SourceSansProSemibold lg:text-[0.5rem] text-[0.67rem] text-neutral-e">
						Let&apos;s Connect and Create Together Reach Out to Us Today!
					</p>
				</div>
				<div className="w-[2.74rem] lg:flex hidden flex-row justify-between items-center">
					<SocialMediaIcon
						Icon={<IoIosMail size="52px" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="47px" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="47px" className="text-white" />}
						href={whatsapp}
					/>
				</div>
				<div className="w-[8.45rem] flex lg:hidden flex-row justify-between items-center mt-[0.89rem]">
					<SocialMediaIcon
						Icon={<IoIosMail size="152px" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="138px" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="138px" className="text-white" />}
						href={whatsapp}
					/>
				</div>
			</div>

		</section>
	);
};

export default AboutUs;
