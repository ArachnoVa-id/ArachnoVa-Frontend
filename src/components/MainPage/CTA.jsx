import { useSettings } from "@/context/DataContext";
import Image from "@/components/ui/Img";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CTA() {
  const settings = useSettings();
  useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
	return (
		<section className="w-full lg:h-[60vh] max-lg:min-h-[40vh] relative bg-transparent flex flex-row justify-center items-center">
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
					className="text-neutral-g font-SourceSansProBold text-[2.4rem]/[2.4rem] flex flex-col justify-center items-center"
				>
					<p>Ready to Transform Your Digital Presence ? </p>
					<p>Let&apos;s Start Crafting Your Website Today</p>
				</div>
				<a
					href={settings?.whatsapp || "https://wa.me/6287882832538"}
					data-aos="fade-up"
					className="bg-black w-[13.6rem] text-white aspect-[262/54] flex justify-center items-center rounded-[0.26rem] font-SourceSansProSemibold mt-[3.0rem] text-[1.04rem] hover:bg-neutral-e duration-500"
				>
					Start Your Project
				</a>
			</div>

			{/* Mobile */}
			<div className="flex flex-col justify-center items-center lg:hidden">
				<div
					data-aos="fade-up"
					className="text-neutral-g font-SourceSansProBold text-[clamp(1.8rem,6.5vw,4.5rem)]/[clamp(2.2rem,7vw,5.0rem)] flex flex-col justify-center items-center"
				>
					<p>Ready to Transform Your Digital Presence ? </p>
					<p>Let&apos;s Start Crafting Your Website Today</p>
				</div>
				<a
					href={settings?.whatsapp || "https://wa.me/6287882832538"}
					data-aos="fade-up"
					className="bg-black w-[clamp(20rem,70vw,53.3rem)] aspect-[229/49] text-white rounded-lg flex justify-center items-center font-SourceSansProSemibold mt-[clamp(2rem,10vw,8.0rem)] text-[clamp(1.6rem,6vw,4.5rem)] hover:bg-neutral-e duration-500"
				>
					Start Your Project
				</a>
			</div>
		</section>
	);
}
