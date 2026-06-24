import RightContent from "./RightContent";

const ServicesContainer = ({
	SlideContent,
	Title,
	Description,
	Function,
	Duration,
	Pages,
	Variant,
}) => {
	const Position =
		Variant === "left"
			? "left-0"
				? Variant === "mobile"
				: "bottom-0"
			: "right-0";
	const Left =
		Variant === "left" ? (
			<RightContent
				Title={Title}
				Description={Description}
				Function={Function}
				Duration={Duration}
				Pages={Pages}
				Variant="left"
			/>
		) : (
			SlideContent
		);
	const Right =
		Variant === "left" ? (
			SlideContent
		) : (
			<RightContent
				Title={Title}
				Description={Description}
				Function={Function}
				Duration={Duration}
				Pages={Pages}
			/>
		);
	return (
		<div className="relative lg:w-[clamp(11.68rem,73.021vw,50rem)] w-[clamp(14.51rem,90.698vw,50rem)] lg:h-[clamp(5.03rem,31.458vw,45.3rem)] h-[clamp(20.84rem,130.233vw,50rem)] flex lg:flex-row flex-col justify-between items-center z-10 lg:mt-[clamp(0.33rem,2.083vw,3.0rem)] lg:mb-0 mb-[clamp(4.9rem,30.604vw,44.07rem)]">
			<div
				className={`lg:w-[clamp(8.4rem,52.5vw,50rem)] w-[clamp(14.51rem,90.698vw,50rem)] lg:h-[clamp(5.03rem,31.458vw,45.3rem)] h-[clamp(14.88rem,93.023vw,50rem)] absolute ${Position} bg-[#F1F4F4] lg:rounded-[clamp(0.25rem,1.563vw,2.25rem)] rounded-[clamp(0.74rem,4.651vw,6.7rem)] -z-10 lg:flex hidden`}
			/>
			<div
				className={`lg:w-[clamp(8.4rem,52.5vw,50rem)] w-[clamp(14.51rem,90.698vw,50rem)] lg:h-[clamp(5.03rem,31.458vw,45.3rem)] h-[clamp(17.6rem,110.023vw,50rem)] absolute -bottom-[clamp(5.7rem,35.628vw,50rem)] bg-[#F1F4F4] lg:rounded-[clamp(0.25rem,1.563vw,2.25rem)] rounded-[clamp(0.74rem,4.651vw,6.7rem)] -z-10 lg:hidden`}
			/>
			<h1 className="font-SourceSansProBold text-neutral-g text-[clamp(0.89rem,5.581vw,8rem)] lg:hidden flex mb-[clamp(0.89rem,5.581vw,8.04rem)]">
				{Title}
			</h1>
			{Left}
			{Right}
		</div>
	);
};

export default ServicesContainer;
