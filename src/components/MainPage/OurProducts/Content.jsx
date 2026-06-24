"use client";

import { useRef, useEffect, useState } from "react";
import ContentSlider from "./ContentSlider";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useSwiper } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

const Content = ({ data, totalSlide, variant, aos }) => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);
	const size = variant ? "4.884vw" : "2.083vw";

	const swiper = useSwiper();
	const [currentSlide, setCurrentSlide] = useState(0);
	const sliderRef = useRef(null);

	const handleNext = () => {
		if (currentSlide < totalSlide) {
			setCurrentSlide(currentSlide + 1);
		} else {
			setCurrentSlide(0);
		}
	};

	const handlePrevious = () => {
		if (currentSlide > 0) {
			setCurrentSlide(currentSlide - 1);
		} else {
			setCurrentSlide(totalSlide);
		}
	};

	useEffect(() => {
		sliderRef.current.swiper.slideTo(currentSlide, 500, true);
	}, [currentSlide]);
	return (
		<>
			<div
				data-aos={aos}
				className="flex justify-around items-center lg:w-[clamp(6.52rem,40.729vw,50rem)] w-[clamp(14.51rem,90.698vw,50rem)] lg:h-[clamp(3.33rem,20.833vw,30.0rem)] h-[clamp(7.29rem,45.581vw,50rem)] z-10"
			>
				<BsFillCaretLeftFill
					size={size}
					className="text-neutral-d cursor-pointer"
					onClick={handlePrevious}
				/>
				<div
					className="flex justify-center items-center lg:w-[clamp(5.72rem,35.729vw,50rem)] w-[clamp(12.65rem,79.07vw,50rem)] lg:h-[clamp(3.33rem,20.833vw,30.0rem)] h-[clamp(7.29rem,45.581vw,50rem)] bg-[#FBFCFD] lg:rounded-[clamp(0.2rem,0.781vw,1.12rem)] rounded-[clamp(0.37rem,2.326vw,3.35rem)] border-solid border-border lg:border-[0.156vw] border-[0.349vw]"
					style={{ boxShadow: "0px 4px 40px -5px rgba(0, 0, 0, 0.15)" }}
				>
					<div className="flex justify-center items-center object-cover lg:w-[clamp(5.47rem,34.167vw,49.2rem)] w-[clamp(12.13rem,75.814vw,50rem)] lg:h-[clamp(3.08rem,19.271vw,27.75rem)] h-[clamp(6.77rem,42.326vw,50rem)] lg:rounded-[clamp(0.2rem,0.521vw,0.75rem)] rounded-[clamp(0.3rem,1.86vw,2.68rem)] overflow-hidden">
						<ContentSlider data={data} sliderRef={sliderRef} />
					</div>
				</div>
				<BsFillCaretRightFill
					size={size}
					className="text-neutral-d cursor-pointer"
					onClick={handleNext}
				/>
			</div>
		</>
	);
};

export default Content;
