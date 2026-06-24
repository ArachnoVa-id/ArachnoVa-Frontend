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
			<section className="relative w-full lg:min-h-[29.0rem] min-h-[138.4rem] flex flex-col justify-center items-center bg-white-MainPage lg:gap-y-[1.82rem] gap-y-[4.9rem] overflow-hidden">
				<div className="w-fit flex lg:flex-row flex-col justify-center items-center lg:gap-x-[2.9rem] gap-y-[4.9rem]">
					<div
						data-aos="fade-right"
						className={
							"flex flex-col justify-center items-center lg:w-[27.7rem] w-[79.4rem] aspect-[390/224] lg:aspect-[608/316] lg:rounded-[0.73rem] rounded-[3.3rem] border-solid lg:border-[0.14rem] border-[0.61rem] border-[#76BDE4] gap-y-[1.6rem] " +
							styles.BoxLeft
						}
					>
						<h1 className="font-SourceSansProBold lg:text-[1.82rem] text-[5.3rem] text-neutral-g">
							What is
							<span className="text-[#1AB0C8]"> ArachnoVa?</span>
						</h1>
						<p className="lg:w-[22.7rem] w-[69.6rem] font-SourceSansProSemibold lg:text-[0.91rem] text-[3.7rem] text-[#606D7F] text-justify">
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
							"flex flex-col justify-center items-center lg:w-[27.7rem] w-[79.4rem] aspect-[390/224] lg:aspect-[608/316] lg:rounded-[0.73rem] rounded-[3.3rem] lg:border-[0.14rem] border-[0.61rem] border-solid border-[#52CEE0] gap-y-[1.0rem] " +
							styles.BoxRight
						}
					>
						<h1 className="font-SourceSansProBold lg:text-[1.82rem] text-[5.3rem] text-neutral-g">
							What Are We <span className="text-[#1AB0C8]"> Capable</span> Of?
						</h1>
						<p className="lg:w-[22.7rem] w-[69.6rem] font-SourceSansProSemibold lg:text-[0.91rem] text-[3.7rem] text-[#606D7F] text-justify">
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
						"flex flex-row justify-center items-center lg:w-[8.6rem] w-[41.3rem] aspect-[204/40] gap-x-[0.23rem] lg:aspect-[188/48] bg-transparent cursor-pointer lg:rounded-[0.36rem] rounded-[1.63rem] hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out " +
						styles.ButtonShadow
					}
				>
					<p className="font-InterBold lg:text-[0.73rem] text-[2.8rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
						Get to know more
					</p>
					<FaArrowRight
						className="text-[#24AAA7] hidden lg:block"
						size="18px"
					/>
					<FaArrowRight
						className="text-[#24AAA7] lg:hidden block"
						size="55px"
					/>
				</a>
				<BorderSeparator />
			</section>
		</>
	);
};

export default AboutUs;
