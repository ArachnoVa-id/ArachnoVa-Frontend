import { useSwiper } from "swiper/react";
import Image from "@/components/ui/Img";

const ContentCard = ({ img }) => {
	const swiper = useSwiper();
	return (
		<>
			<div className="relative flex justify-center items-center lg:w-[clamp(5.47rem,34.167vw,49.2rem)] w-[clamp(12.13rem,75.814vw,50rem)] lg:h-[clamp(3.08rem,19.271vw,27.75rem)] h-[clamp(6.77rem,42.326vw,50rem)] lg:rounded-[clamp(0.2rem,0.521vw,0.75rem)] rounded-[clamp(0.3rem,1.86vw,2.68rem)] border-solid lg:border-[0.104vw] object-cover border-[0.233vw] border-border overflow-hidden">
				<Image
					src={img}
					alt="content"
					draggable="false"
					fill
					className="object-cover"
				/>
			</div>
		</>
	);
};

export default ContentCard;
