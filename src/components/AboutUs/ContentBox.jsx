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
			className={`lg:w-[45.6rem] lg:aspect-[608/316] w-[50rem] aspect-[390/234] flex flex-col justify-center items-center lg:rounded-[1.2rem] rounded-[5.36rem] lg:border-[0.037rem] border-[0.16rem] ${Border}`}
			style={{
				background: Background,
				boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.15)",
			}}
		>
			<h1 className="font-SourceSansProBold lg:text-[3.0rem] text-[8rem] text-neutral-g">
				Our <span className="text-[#1AB0C8]">{Title}</span>
			</h1>
			<p className="lg:w-[37.35rem] w-[50rem] font-SourceSansProSemibold lg:text-[1.5rem] text-[6.03rem] text-neutral-e text-justify">
				{Description}
			</p>
		</div>
	);
};

export default ContentBox;
