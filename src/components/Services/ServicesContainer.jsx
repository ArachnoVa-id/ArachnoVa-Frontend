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
		<div className="relative lg:w-[50rem] w-[50rem] lg:h-[45.3rem] h-[50rem] flex lg:flex-row flex-col justify-between items-center z-10 lg:mt-[3.0rem] lg:mb-0 mb-[44.07rem]">
			<div
				className={`lg:w-[50rem] w-[50rem] lg:h-[45.3rem] h-[50rem] absolute ${Position} bg-[#F1F4F4] lg:rounded-[2.25rem] rounded-[6.7rem] -z-10 lg:flex hidden`}
			/>
			<div
				className={`lg:w-[50rem] w-[50rem] lg:h-[45.3rem] h-[50rem] absolute -bottom-[50rem] bg-[#F1F4F4] lg:rounded-[2.25rem] rounded-[6.7rem] -z-10 lg:hidden`}
			/>
			<h1 className="font-SourceSansProBold text-neutral-g text-[8rem] lg:hidden flex mb-[8.04rem]">
				{Title}
			</h1>
			{Left}
			{Right}
		</div>
	);
};

export default ServicesContainer;
