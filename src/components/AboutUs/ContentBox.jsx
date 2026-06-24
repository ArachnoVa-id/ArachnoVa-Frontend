import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContentBox = ({ Title, Description, Background, Border, aos }) => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
	return (
		<div
			data-aos={aos}
			className={`lg:w-[17.8rem] lg:aspect-[608/316] w-[51.0rem] aspect-[390/234] flex flex-col justify-center items-center lg:rounded-[0.47rem] rounded-[2.1rem] lg:border-[0.09rem] border-[0.39rem] ${Border}`}
			style={{
				background: Background,
				boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.15)",
			}}
		>
			<h1 className="font-SourceSansProBold lg:text-[1.17rem] text-[3.4rem] text-neutral-g">
				Our <span className="text-[#1AB0C8]">{Title}</span>
			</h1>
			<p className="lg:w-[14.6rem] w-[44.7rem] font-SourceSansProSemibold lg:text-[0.59rem] text-[2.4rem] text-neutral-e text-justify">
				{Description}
			</p>
		</div>
	);
};

export default ContentBox;
