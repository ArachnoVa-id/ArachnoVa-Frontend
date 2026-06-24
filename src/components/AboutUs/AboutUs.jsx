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
		<section className="relative w-full lg:min-h-[clamp(16.67rem,104.167vw,50rem)] min-h-[clamp(66.12rem,413.256vw,50rem)] flex flex-col justify-around items-center bg-white-MainPage">
			<div className="absolute top-[clamp(0.68rem,4.271vw,6.15rem)] w-full aspect-[1920/458] z-0 lg:flex hidden">
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
				className="w-fit flex flex-col items-center gap-y-[clamp(0.2rem,0.417vw,0.6rem)] lg:mt-[clamp(0.68rem,4.271vw,6.15rem)] mt-[clamp(2.4rem,15.0vw,21.6rem)]"
				data-aos="fade-down"
			>
				<p className="font-SourceSansProBold lg:text-[clamp(0.5rem,1.563vw,2.25rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] lg:leading-[clamp(0.25rem,1.563vw,2.25rem)] leading-[clamp(0.67rem,4.186vw,6.03rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
					Who We Are
				</p>
				<h1 className="font-SourceSansProBold lg:text-[clamp(0.5rem,2.396vw,3.45rem)] text-[clamp(1.12rem,6.977vw,8rem)] lg:leading-[clamp(0.39rem,2.448vw,3.53rem)] leading-[clamp(1.12rem,6.977vw,10.05rem)] text-neutral-g">
					About ArachnoVa
				</h1>
			</div>
			<div className="relative w-fit h-fit" data-aos="fade-up">
				<div className="absolute -left-[clamp(3.69rem,23.083vw,33.24rem)] -bottom-[clamp(2.23rem,13.917vw,20.04rem)] lg:w-[clamp(8.89rem,55.552vw,50rem)] w-[clamp(8.0rem,50.0vw,50rem)] aspect-[433/235] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-left.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute lg:-right-[clamp(1.79rem,11.208vw,16.14rem)] -right-[clamp(1.6rem,10.0vw,14.4rem)] -top-[clamp(4.0rem,25.0vw,36.0rem)] lg:w-[clamp(6.44rem,40.24vw,50rem)] w-[clamp(6.4rem,40.0vw,50rem)] aspect-[225/321] z-0 lg:flex hidden">
					<Image
						src="/image/AboutUs/blur-right.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[clamp(16.0rem,100.0vw,50rem)] aspect-[430/576] -left-[clamp(0.8rem,5.0vw,7.2rem)] -bottom-[clamp(7.84rem,49.0vw,50rem)] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-left-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute z-0 w-[clamp(10.46rem,65.349vw,50rem)] aspect-[281/621] -right-[clamp(0.8rem,5.0vw,7.2rem)] -top-[clamp(8.0rem,50.0vw,50rem)] lg:hidden flex">
					<Image
						src="/image/AboutUs/blur-right-mobile.png"
						alt="blur"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
				<div
					className="relative lg:w-[clamp(9.4rem,58.75vw,50rem)] w-[clamp(14.51rem,90.698vw,50rem)] lg:aspect-[1128/414] aspect-[390/612] justify-center items-center flex flex-col lg:rounded-[clamp(0.2rem,0.833vw,1.2rem)] rounded-[clamp(0.6rem,3.721vw,5.36rem)] lg:border-[0.104vw] border-[0.698vw] border-white z-10"
					style={{
						background: "rgba(241, 245, 249, 0.50)",
						boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
					}}
				>
					<div className="absolute lg:top-[clamp(0.2rem,0.677vw,0.97rem)] top-[clamp(0.48rem,3.023vw,4.35rem)] lg:left-[clamp(0.2rem,0.677vw,0.97rem)] left-[clamp(0.48rem,3.023vw,4.35rem)] flex flex-row lg:w-[clamp(0.5rem,3.125vw,4.5rem)] w-[clamp(1.93rem,12.093vw,17.41rem)] justify-between">
						<div
							className="lg:w-[clamp(0.2rem,0.729vw,1.05rem)] w-[clamp(0.45rem,2.791vw,4.02rem)] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
								boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
							}}
						/>
						<div
							className="lg:w-[clamp(0.2rem,0.729vw,1.05rem)] w-[clamp(0.45rem,2.791vw,4.02rem)] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
								boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
							}}
						/>
						<div
							className="lg:w-[clamp(0.2rem,0.729vw,1.05rem)] w-[clamp(0.45rem,2.791vw,4.02rem)] aspect-[1/1] rounded-full"
							style={{
								background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
								boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0",
							}}
						/>
					</div>
					<div className="w-fit flex flex-col justify-center items-center mb-[clamp(0.2rem,1.25vw,1.8rem)]">
						<div className="relative lg:w-[clamp(0.73rem,4.583vw,6.6rem)] w-[clamp(2.94rem,18.372vw,26.46rem)] lg:aspect-[88/65] aspect-[79/58]">
							<Image
								src="/image/AboutUs/logo.png"
								alt="logo"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<p className="font-CoolveticaReg lg:text-[clamp(0.5rem,2.604vw,3.75rem)] text-[clamp(1.49rem,9.302vw,8rem)] text-[#1AB0C8]">
							ARACHNOVA
						</p>
					</div>
					<div className="lg:w-[clamp(8.73rem,54.583vw,50rem)] w-[clamp(13.25rem,82.791vw,50rem)] lg:aspect-[1048/3] aspect-[356/3] bg-neutral-d opacity-50" />
					<p className="lg:w-[clamp(8.53rem,53.333vw,50rem)] w-[clamp(13.25rem,82.791vw,50rem)] lg:mt-[clamp(0.2rem,0.677vw,0.97rem)] mt-[clamp(0.67rem,4.186vw,6.03rem)] font-SourceSansProSemibold lg:text-[clamp(0.5rem,1.042vw,1.5rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] text-neutral-g text-justify">
						{Description}
					</p>
				</div>
			</div>
			<div
				data-aos="fade-down"
				className="flex lg:flex-row flex-col justify-between lg:items-center items-start lg:w-[clamp(6.5rem,40.625vw,50rem)] w-[clamp(14.51rem,90.698vw,50rem)] lg:aspect-[702/111] aspect-[390/253] lg:p-[clamp(0.33rem,2.083vw,3.0rem)] p-[clamp(1.49rem,9.302vw,13.39rem)] bg-white lg:rounded-[clamp(0.2rem,1.042vw,1.5rem)] rounded-[clamp(0.74rem,4.651vw,6.7rem)] lg:border-[0.156vw] border-[0.698vw] border-border lg:mb-[clamp(0.42rem,2.604vw,3.75rem)]"
				style={{ boxShadow: "0px 10px 40px -10px rgba(71, 85, 105, 0.25)" }}
			>
				<div className="lg:w-[clamp(2.46rem,15.35vw,22.1rem)] w-[clamp(9.82rem,61.395vw,50rem)] flex flex-col items-start justify-center">
					<h1 className="font-SourceSansProBold lg:text-[clamp(0.5rem,2.083vw,3.0rem)] text-[clamp(1.12rem,6.977vw,8rem)] text-neutral-g">
						Get In Touch
					</h1>
					<p className="font-SourceSansProSemibold lg:text-[clamp(0.5rem,1.042vw,1.5rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] text-neutral-e">
						Let&apos;s Connect and Create Together Reach Out to Us Today!
					</p>
				</div>
				<div className="w-[clamp(2.74rem,17.135vw,24.67rem)] lg:flex hidden flex-row justify-between items-center">
					<SocialMediaIcon
						Icon={<IoIosMail size="2.708vw" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="2.448vw" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="2.448vw" className="text-white" />}
						href={whatsapp}
					/>
				</div>
				<div className="w-[clamp(8.45rem,52.791vw,50rem)] flex lg:hidden flex-row justify-between items-center mt-[clamp(0.89rem,5.581vw,8.04rem)]">
					<SocialMediaIcon
						Icon={<IoIosMail size="7.907vw" className="text-white" />}
						href={email}
					/>
					<SocialMediaIcon
						Icon={<FaInstagram size="7.209vw" className="text-white" />}
						href={instagram}
					/>
					<SocialMediaIcon
						Icon={<FaWhatsapp size="7.209vw" className="text-white" />}
						href={whatsapp}
					/>
				</div>
			</div>

		</section>
	);
};

export default AboutUs;
