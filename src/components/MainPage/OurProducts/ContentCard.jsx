import { useSwiper } from "swiper/react";
import Image from "@/components/ui/Img";

const ContentCard = ({ img }) => {
	const swiper = useSwiper();
	return (
		<>
			<div className="relative flex justify-center items-center lg:w-[29.9rem] w-[66.3rem] lg:h-[16.9rem] h-[37.0rem] lg:rounded-[0.46rem] rounded-[1.63rem] border-solid lg:border-[0.09rem] object-cover border-[0.2rem] border-border overflow-hidden">
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
