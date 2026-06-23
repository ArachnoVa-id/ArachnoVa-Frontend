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
			<section className="relative w-full lg:min-h-[33.125vw] min-h-[158.14vw] flex flex-col justify-center items-center bg-white-MainPage lg:gap-y-[2.083vw] gap-y-[5.581vw] overflow-hidden">
				<div className="w-fit flex lg:flex-row flex-col justify-center items-center lg:gap-x-[3.333vw] gap-y-[5.581vw]">
					<div
						data-aos="fade-right"
						className={
							"flex flex-col justify-center items-center lg:w-[31.667vw] w-[90.698vw] aspect-[390/224] lg:aspect-[608/316] lg:rounded-[0.833vw] rounded-[3.721vw] border-solid lg:border-[0.156vw] border-[0.698vw] border-[#76BDE4] gap-y-[1.823vw] " +
							styles.BoxLeft
						}
					>
						<h1 className="font-SourceSansProBold lg:text-[2.083vw] text-[6.047vw] text-neutral-g">
							What is
							<span className="text-[#1AB0C8]"> ArachnoVa?</span>
						</h1>
						<p className="lg:w-[25.938vw] w-[79.535vw] font-SourceSansProSemibold lg:text-[1.042vw] text-[4.186vw] text-[#606D7F] text-justify">
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
							"flex flex-col justify-center items-center lg:w-[31.667vw] w-[90.698vw] aspect-[390/224] lg:aspect-[608/316] lg:rounded-[0.833vw] rounded-[3.721vw] lg:border-[0.156vw] border-[0.698vw] border-solid border-[#52CEE0] gap-y-[1.146vw] " +
							styles.BoxRight
						}
					>
						<h1 className="font-SourceSansProBold lg:text-[2.083vw] text-[6.047vw] text-neutral-g">
							What Are We <span className="text-[#1AB0C8]"> Capable</span> Of?
						</h1>
						<p className="lg:w-[25.938vw] w-[79.535vw] font-SourceSansProSemibold lg:text-[1.042vw] text-[4.186vw] text-[#606D7F] text-justify">
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
						"flex flex-row justify-center items-center lg:w-[9.792vw] w-[47.209vw] aspect-[204/40] gap-x-[0.26vw] lg:aspect-[188/48] bg-transparent cursor-pointer lg:rounded-[0.417vw] rounded-[1.86vw] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out " +
						styles.ButtonShadow
					}
				>
					<p className="font-InterBold lg:text-[0.833vw] text-[3.256vw] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
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
