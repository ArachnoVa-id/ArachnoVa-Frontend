import PointText from "./PointText";

const RightContent = ({
	Title,
	Description,
	Function,
	Duration,
	Pages,
	Variant,
}) => {
	const Position =
		Variant === "left"
			? "items-end ml-[clamp(0.27rem,1.667vw,2.4rem)]"
			: "items-start lg:mr-[clamp(0.27rem,1.667vw,2.4rem)]";
	const Text = Variant === "left" ? "text-right" : "text-left";
	return (
		<div
			className={`lg:w-[clamp(4.26rem,26.615vw,38.33rem)] w-[clamp(12.09rem,75.581vw,50rem)] lg:h-fit h-fit flex flex-col lg:justify-between justify-end ${Position} lg:mt-0`}
		>
			<h1 className="font-SourceSansProBold text-neutral-g text-[clamp(0.5rem,2.083vw,3.0rem)] hidden lg:flex">
				{Title}
			</h1>
			<p
				className={`font-SourceSansProSemibold text-neutral-e lg:text-[clamp(0.5rem,1.042vw,1.5rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] lg:pt-[clamp(0.2rem,1.094vw,1.58rem)] text-justify lg:pb-[clamp(0.25rem,1.563vw,2.25rem)] pt-[clamp(0.56rem,3.488vw,5.02rem)] lg:mb-0 mb-[clamp(0.67rem,4.186vw,6.03rem)] ${Text}`}
			>
				{Description}
			</p>
			<PointText
				Title="Function"
				Description={Function}
				Icon="/image/OurServices/icon-function.png"
				Variant={Variant}
			/>
			<PointText
				Title="Duration"
				Description={Duration}
				Icon="/image/OurServices/icon-duration.png"
				Variant={Variant}
			/>
			<PointText
				Title="Pages"
				Description={Pages}
				Icon="/image/OurServices/icon-pages.png"
				Variant={Variant}
			/>
		</div>
	);
};

export default RightContent;
