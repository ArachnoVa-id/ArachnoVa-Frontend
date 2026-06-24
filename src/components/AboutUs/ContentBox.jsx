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
			className={`lg:w-[27.7rem] lg:aspect-[608/316] w-[79.4rem] aspect-[390/234] flex flex-col justify-center items-center lg:rounded-[0.73rem] rounded-[3.3rem] lg:border-[0.14rem] border-[0.61rem] ${Border}`}
			style={{
				background: Background,
				boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.15)",
			}}
		>
			<h1 className="font-SourceSansProBold lg:text-[1.82rem] text-[5.3rem] text-neutral-g">
				Our <span className="text-[#1AB0C8]">{Title}</span>
			</h1>
			<p className="lg:w-[22.7rem] w-[69.6rem] font-SourceSansProSemibold lg:text-[0.91rem] text-[3.7rem] text-neutral-e text-justify">
				{Description}
			</p>
		</div>
	);
};

export default ContentBox;
