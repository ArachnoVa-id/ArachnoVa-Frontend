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
		<div className="relative lg:w-[73.021vw] w-[90.698vw] lg:h-[31.458vw] h-[130.233vw] flex lg:flex-row flex-col justify-between items-center z-10 lg:mt-[2.083vw] lg:mb-0 mb-[30.604vw]">
			<div
				className={`lg:w-[52.5vw] w-[90.698vw] lg:h-[31.458vw] h-[93.023vw] absolute ${Position} bg-[#F1F4F4] lg:rounded-[1.563vw] rounded-[4.651vw] -z-10 lg:flex hidden`}
			/>
			<div
				className={`lg:w-[52.5vw] w-[90.698vw] lg:h-[31.458vw] h-[110.023vw] absolute -bottom-[35.628vw] bg-[#F1F4F4] lg:rounded-[1.563vw] rounded-[4.651vw] -z-10 lg:hidden`}
			/>
			<h1 className="font-SourceSansProBold text-neutral-g text-[5.581vw] lg:hidden flex mb-[5.581vw]">
				{Title}
			</h1>
			{Left}
			{Right}
		</div>
	);
};

export default ServicesContainer;
