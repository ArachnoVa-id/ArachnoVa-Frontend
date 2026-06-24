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
		<div className="relative lg:w-[41.1rem] w-[51.0rem] lg:h-[17.7rem] h-[73.3rem] flex lg:flex-row flex-col justify-between items-center z-10 lg:mt-[1.17rem] lg:mb-0 mb-[17.2rem]">
			<div
				className={`lg:w-[29.5rem] w-[51.0rem] lg:h-[17.7rem] h-[52.3rem] absolute ${Position} bg-[#F1F4F4] lg:rounded-[0.88rem] rounded-[2.6rem] -z-10 lg:flex hidden`}
			/>
			<div
				className={`lg:w-[29.5rem] w-[51.0rem] lg:h-[17.7rem] h-[61.9rem] absolute -bottom-[20.0rem] bg-[#F1F4F4] lg:rounded-[0.88rem] rounded-[2.6rem] -z-10 lg:hidden`}
			/>
			<h1 className="font-SourceSansProBold text-neutral-g text-[3.1rem] lg:hidden flex mb-[3.1rem]">
				{Title}
			</h1>
			{Left}
			{Right}
		</div>
	);
};

export default ServicesContainer;
