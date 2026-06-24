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
					className="text-neutral-g font-SourceSansProBold text-[0.5rem]/[46px] flex flex-col justify-center items-center"
				>
					<p>Ready to Transform Your Digital Presence ? </p>
					<p>Let&apos;s Start Crafting Your Website Today</p>
				</div>
				<a
					href="https://wa.me/6287882832538"
					data-aos="fade-up"
					className="bg-black w-[2.18rem] text-white aspect-[262/54] flex justify-center items-center rounded-[0.2rem] font-SourceSansProSemibold mt-[0.48rem] text-[0.5rem] hover:bg-neutral-e duration-500"
				>
					Start Your Project
				</a>
			</div>

			{/* Mobile */}
			<div className="flex flex-col justify-center items-center lg:hidden">
				<div
					data-aos="fade-up"
					className="text-neutral-g font-SourceSansProBold text-[0.72rem]/[96px] flex flex-col justify-center items-center"
				>
					<p>Ready to Transform Your Digital Presence ? </p>
					<p>Let&apos;s Start Crafting Your Website Today</p>
				</div>
				<a
					href="https://wa.me/6287882832538"
					data-aos="fade-up"
					className="bg-black w-[8.52rem] aspect-[229/49] text-white rounded-lg flex justify-center items-center font-SourceSansProSemibold mt-[1.28rem] text-[0.72rem] hover:bg-neutral-e duration-500"
				>
					Start Your Project
				</a>
			</div>
		</section>
	);
}
