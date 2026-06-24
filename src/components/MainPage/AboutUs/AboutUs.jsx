import BorderSeparator from "../BorderSeparator/BorderSeparator";
import styles from "./AboutUs.module.css";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);

	const href = "/aboutus";
	return (
		<>
			<section className="relative w-full lg:min-h-[clamp(5.3rem,33.125vw,47.7rem)] min-h-[clamp(25.3rem,158.14vw,50rem)] flex flex-col justify-center items-center bg-white-MainPage lg:gap-y-[clamp(0.33rem,2.083vw,3.0rem)] gap-y-[clamp(0.89rem,5.581vw,8.04rem)] overflow-hidden">
				<div className="w-fit flex lg:flex-row flex-col justify-center items-center lg:gap-x-[clamp(0.53rem,3.333vw,4.8rem)] gap-y-[clamp(0.89rem,5.581vw,8.04rem)]">
					<div
						data-aos="fade-right"
						className={
							"flex flex-col justify-center items-center lg:w-[clamp(5.07rem,31.667vw,45.6rem)] w-[clamp(14.51rem,90.698vw,50rem)] aspect-[390/224] lg:aspect-[608/316] lg:rounded-[clamp(0.2rem,0.833vw,1.2rem)] rounded-[clamp(0.6rem,3.721vw,5.36rem)] border-solid lg:border-[0.156vw] border-[0.698vw] border-[#76BDE4] gap-y-[clamp(0.29rem,1.823vw,2.63rem)] " +
							styles.BoxLeft
						}
					>
						<h1 className="font-SourceSansProBold lg:text-[clamp(0.5rem,2.083vw,3.0rem)] text-[clamp(0.97rem,6.047vw,8rem)] text-neutral-g">
							What is
							<span className="text-[#1AB0C8]"> ArachnoVa?</span>
						</h1>
						<p className="lg:w-[clamp(4.15rem,25.938vw,37.35rem)] w-[clamp(12.73rem,79.535vw,50rem)] font-SourceSansProSemibold lg:text-[clamp(0.5rem,1.042vw,1.5rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] text-[#606D7F] text-justify">
							Community-based business mahasiswa DTETI UGM (Departemen Teknik
							Elektro dan Teknologi Informasi) yang
							<span className="text-[#1E293B]">
								{" "}
								menawarkan jasa web design dan development.
							</span>
						</p>
					</div>
					<div
						data-aos="fade-left"
						className={
							"flex flex-col justify-center items-center lg:w-[clamp(5.07rem,31.667vw,45.6rem)] w-[clamp(14.51rem,90.698vw,50rem)] aspect-[390/224] lg:aspect-[608/316] lg:rounded-[clamp(0.2rem,0.833vw,1.2rem)] rounded-[clamp(0.6rem,3.721vw,5.36rem)] lg:border-[0.156vw] border-[0.698vw] border-solid border-[#52CEE0] gap-y-[clamp(0.2rem,1.146vw,1.65rem)] " +
							styles.BoxRight
						}
					>
						<h1 className="font-SourceSansProBold lg:text-[clamp(0.5rem,2.083vw,3.0rem)] text-[clamp(0.97rem,6.047vw,8rem)] text-neutral-g">
							What Are We <span className="text-[#1AB0C8]"> Capable</span> Of?
						</h1>
						<p className="lg:w-[clamp(4.15rem,25.938vw,37.35rem)] w-[clamp(12.73rem,79.535vw,50rem)] font-SourceSansProSemibold lg:text-[clamp(0.5rem,1.042vw,1.5rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] text-[#606D7F] text-justify">
							Menargetkan pembuatan berbagai jenis website seperti
							<span className="text-[#1E293B]">
								{" "}
								Landing Page, Profiling, dan Custom{" "}
							</span>{" "}
							termasuk website administrasi dan dashboard, dengan tujuan
							meningkatkan esensi kesan profesional bagi setiap klien.
						</p>
					</div>
				</div>
				<a
					data-aos="fade-up"
					href={href}
					className={
						"flex flex-row justify-center items-center lg:w-[clamp(1.57rem,9.792vw,14.1rem)] w-[clamp(7.55rem,47.209vw,50rem)] aspect-[204/40] gap-x-[clamp(0.2rem,0.26vw,0.37rem)] lg:aspect-[188/48] bg-transparent cursor-pointer lg:rounded-[clamp(0.2rem,0.417vw,0.6rem)] rounded-[clamp(0.3rem,1.86vw,2.68rem)] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out " +
						styles.ButtonShadow
					}
				>
					<p className="font-InterBold lg:text-[clamp(0.5rem,0.833vw,1.2rem)] text-[clamp(0.52rem,3.256vw,4.69rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
						Get to know more
					</p>
					<FaArrowRight
						className="text-[#24AAA7] hidden lg:block"
						size="1.25vw"
					/>
					<FaArrowRight
						className="text-[#24AAA7] lg:hidden block"
						size="3.953vw"
					/>
				</a>
				<BorderSeparator />
			</section>
		</>
	);
};

export default AboutUs;
