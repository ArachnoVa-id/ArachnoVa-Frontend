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
	const size = variant ? "44px" : "19px";

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
				className="flex justify-around items-center lg:w-[22.9rem] w-[51.0rem] lg:h-[11.7rem] h-[25.6rem] z-10"
			>
				<BsFillCaretLeftFill
					size={size}
					className="text-neutral-d cursor-pointer"
					onClick={handlePrevious}
				/>
				<div
					className="flex justify-center items-center lg:w-[20.1rem] w-[44.5rem] lg:h-[11.7rem] h-[25.6rem] bg-[#FBFCFD] lg:rounded-[0.44rem] rounded-[1.31rem] border-solid border-border lg:border-[0.09rem] border-[0.2rem]"
					style={{ boxShadow: "0px 4px 40px -5px rgba(0, 0, 0, 0.15)" }}
				>
					<div className="flex justify-center items-center object-cover lg:w-[19.2rem] w-[42.6rem] lg:h-[10.8rem] h-[23.8rem] lg:rounded-[0.29rem] rounded-[1.05rem] overflow-hidden">
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
