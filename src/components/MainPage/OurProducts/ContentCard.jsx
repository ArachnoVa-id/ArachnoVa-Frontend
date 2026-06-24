import { useSwiper } from "swiper/react";
import Image from "@/components/ui/Img";

const ContentCard = ({ img }) => {
	const swiper = useSwiper();
	return (
		<>
			<div className="relative flex justify-center items-center lg:w-[19.2rem] w-[42.6rem] lg:h-[10.8rem] h-[23.8rem] lg:rounded-[0.29rem] rounded-[1.05rem] border-solid lg:border-[0.06rem] object-cover border-[0.13rem] border-border overflow-hidden">
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
