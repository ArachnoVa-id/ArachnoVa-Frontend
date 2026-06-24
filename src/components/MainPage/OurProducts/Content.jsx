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
	const size = variant ? "21px" : "9px";

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
				className="flex justify-around items-center lg:w-[6.52rem] w-[14.51rem] lg:h-[3.33rem] h-[7.29rem] z-10"
			>
				<BsFillCaretLeftFill
					size={size}
					className="text-neutral-d cursor-pointer"
					onClick={handlePrevious}
				/>
				<div
					className="flex justify-center items-center lg:w-[5.72rem] w-[12.65rem] lg:h-[3.33rem] h-[7.29rem] bg-[#FBFCFD] lg:rounded-[0.2rem] rounded-[0.37rem] border-solid border-border lg:border-[0.041rem] border-[0.09rem]"
					style={{ boxShadow: "0px 4px 40px -5px rgba(0, 0, 0, 0.15)" }}
				>
					<div className="flex justify-center items-center object-cover lg:w-[5.47rem] w-[12.13rem] lg:h-[3.08rem] h-[6.77rem] lg:rounded-[0.2rem] rounded-[0.3rem] overflow-hidden">
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
