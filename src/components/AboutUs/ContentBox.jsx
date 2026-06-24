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
			className={`lg:w-[clamp(5.07rem,31.667vw,45.6rem)] lg:aspect-[608/316] w-[clamp(14.51rem,90.698vw,50rem)] aspect-[390/234] flex flex-col justify-center items-center lg:rounded-[clamp(0.2rem,0.833vw,1.2rem)] rounded-[clamp(0.6rem,3.721vw,5.36rem)] lg:border-[0.156vw] border-[0.698vw] ${Border}`}
			style={{
				background: Background,
				boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.15)",
			}}
		>
			<h1 className="font-SourceSansProBold lg:text-[clamp(0.5rem,2.083vw,3.0rem)] text-[clamp(0.97rem,6.047vw,8rem)] text-neutral-g">
				Our <span className="text-[#1AB0C8]">{Title}</span>
			</h1>
			<p className="lg:w-[clamp(4.15rem,25.938vw,37.35rem)] w-[clamp(12.73rem,79.535vw,50rem)] font-SourceSansProSemibold lg:text-[clamp(0.5rem,1.042vw,1.5rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] text-neutral-e text-justify">
				{Description}
			</p>
		</div>
	);
};

export default ContentBox;
