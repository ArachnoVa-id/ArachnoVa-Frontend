import { useSwiper } from "swiper/react";
import Image from "@/components/ui/Img";

const ContentCard = ({ img }) => {
	const swiper = useSwiper();
	return (
		<>
			<div className="relative flex justify-center items-center lg:w-[49.2rem] w-[50rem] lg:h-[27.75rem] h-[50rem] lg:rounded-[0.75rem] rounded-[2.68rem] border-solid lg:border-[0.024rem] object-cover border-[0.055rem] border-border overflow-hidden">
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
