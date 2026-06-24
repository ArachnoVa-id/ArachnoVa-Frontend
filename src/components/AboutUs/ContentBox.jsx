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
			className={`lg:w-[5.07rem] lg:aspect-[608/316] w-[14.51rem] aspect-[390/234] flex flex-col justify-center items-center lg:rounded-[0.2rem] rounded-[0.6rem] lg:border-[3px] border-[13px] ${Border}`}
			style={{
				background: Background,
				boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.15)",
			}}
		>
			<h1 className="font-SourceSansProBold lg:text-[0.5rem] text-[0.97rem] text-neutral-g">
				Our <span className="text-[#1AB0C8]">{Title}</span>
			</h1>
			<p className="lg:w-[4.15rem] w-[12.73rem] font-SourceSansProSemibold lg:text-[0.5rem] text-[0.67rem] text-neutral-e text-justify">
				{Description}
			</p>
		</div>
	);
};

export default ContentBox;
