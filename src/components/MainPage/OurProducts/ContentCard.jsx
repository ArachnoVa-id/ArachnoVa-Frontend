import { useSwiper } from "swiper/react";
import Image from "@/components/ui/Img";

const ContentCard = ({ img }) => {
	const swiper = useSwiper();
	return (
		<>
			<div className="relative flex justify-center items-center lg:w-[34.2rem] w-[75.8rem] lg:h-[19.3rem] h-[42.3rem] lg:rounded-[0.52rem] rounded-[1.86rem] border-solid lg:border-[0.1rem] object-cover border-[0.23rem] border-border overflow-hidden">
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
