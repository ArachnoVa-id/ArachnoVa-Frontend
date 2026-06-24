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
			className={`lg:w-[31.7rem] lg:aspect-[608/316] w-[90.7rem] aspect-[390/234] flex flex-col justify-center items-center lg:rounded-[0.83rem] rounded-[3.7rem] lg:border-[0.16rem] border-[0.7rem] ${Border}`}
			style={{
				background: Background,
				boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.15)",
			}}
		>
			<h1 className="font-SourceSansProBold lg:text-[2.1rem] text-[6.0rem] text-neutral-g">
				Our <span className="text-[#1AB0C8]">{Title}</span>
			</h1>
			<p className="lg:w-[25.9rem] w-[79.5rem] font-SourceSansProSemibold lg:text-[1.04rem] text-[4.2rem] text-neutral-e text-justify">
				{Description}
			</p>
		</div>
	);
};

export default ContentBox;
