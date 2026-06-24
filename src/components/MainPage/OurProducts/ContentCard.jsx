import { useSwiper } from "swiper/react";
import Image from "@/components/ui/Img";

const ContentCard = ({ img }) => {
	const swiper = useSwiper();
	return (
		<>
			<div className="relative flex justify-center items-center lg:w-[5.47rem] w-[12.13rem] lg:h-[3.08rem] h-[6.77rem] lg:rounded-[0.2rem] rounded-[0.3rem] border-solid lg:border-[0.027rem] object-cover border-[0.06rem] border-border overflow-hidden">
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
