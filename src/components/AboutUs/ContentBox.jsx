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
			className={`lg:w-[31.667vw] lg:aspect-[608/316] w-[90.698vw] aspect-[390/234] flex flex-col justify-center items-center lg:rounded-[0.833vw] rounded-[3.721vw] lg:border-[0.156vw] border-[0.698vw] ${Border}`}
			style={{
				background: Background,
				boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.15)",
			}}
		>
			<h1 className="font-SourceSansProBold lg:text-[2.083vw] text-[6.047vw] text-neutral-g">
				Our <span className="text-[#1AB0C8]">{Title}</span>
			</h1>
			<p className="lg:w-[25.938vw] w-[79.535vw] font-SourceSansProSemibold lg:text-[1.042vw] text-[4.186vw] text-neutral-e text-justify">
				{Description}
			</p>
		</div>
	);
};

export default ContentBox;
