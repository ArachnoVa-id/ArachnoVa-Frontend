import Image from "@/components/ui/Img";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CTA() {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
	return (
		<section className="w-full lg:h-[60vh] max-lg:h-[30vh] relative bg-transparent flex flex-row justify-center items-center">
			<Image
				alt=""
				src="/image/CTA/BGCTA.png"
				className="absolute w-full h-full -z-[1]  "
				draggable="false"
				fill
			/>

			{/* Desktop */}
			<div className="flex flex-col justify-center items-center max-lg:hidden">
				<div
					data-aos="fade-up"
					className="text-neutral-g font-SourceSansProBold text-[3.45rem]/[0.56rem] flex flex-col justify-center items-center"
				>
					<p>Ready to Transform Your Digital Presence ? </p>
					<p>Let&apos;s Start Crafting Your Website Today</p>
				</div>
				<a
					href="https://wa.me/6287882832538"
					data-aos="fade-up"
					className="bg-black w-[19.65rem] text-white aspect-[262/54] flex justify-center items-center rounded-[0.37rem] font-SourceSansProSemibold mt-[4.32rem] text-[1.5rem] hover:bg-neutral-e duration-500"
				>
					Start Your Project
				</a>
			</div>

			{/* Mobile */}
			<div className="flex flex-col justify-center items-center lg:hidden">
				<div
					data-aos="fade-up"
					className="text-neutral-g font-SourceSansProBold text-[6.48rem]/[1.17rem] flex flex-col justify-center items-center"
				>
					<p>Ready to Transform Your Digital Presence ? </p>
					<p>Let&apos;s Start Crafting Your Website Today</p>
				</div>
				<a
					href="https://wa.me/6287882832538"
					data-aos="fade-up"
					className="bg-black w-[50rem] aspect-[229/49] text-white rounded-lg flex justify-center items-center font-SourceSansProSemibold mt-[11.52rem] text-[6.48rem] hover:bg-neutral-e duration-500"
				>
					Start Your Project
				</a>
			</div>
		</section>
	);
}
