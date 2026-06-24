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
	const size = variant ? "18px" : "8px";

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
				className="flex justify-around items-center lg:w-[50rem] w-[50rem] lg:h-[30.0rem] h-[50rem] z-10"
			>
				<BsFillCaretLeftFill
					size={size}
					className="text-neutral-d cursor-pointer"
					onClick={handlePrevious}
				/>
				<div
					className="flex justify-center items-center lg:w-[50rem] w-[50rem] lg:h-[30.0rem] h-[50rem] bg-[#FBFCFD] lg:rounded-[1.12rem] rounded-[3.35rem] border-solid border-border lg:border-[0.037rem] border-[0.082rem]"
					style={{ boxShadow: "0px 4px 40px -5px rgba(0, 0, 0, 0.15)" }}
				>
					<div className="flex justify-center items-center object-cover lg:w-[49.2rem] w-[50rem] lg:h-[27.75rem] h-[50rem] lg:rounded-[0.75rem] rounded-[2.68rem] overflow-hidden">
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
