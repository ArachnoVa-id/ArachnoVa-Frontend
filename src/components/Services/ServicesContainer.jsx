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
		<div className="relative lg:w-[73.0rem] w-[90.7rem] lg:h-[31.5rem] h-[130.2rem] flex lg:flex-row flex-col justify-between items-center z-10 lg:mt-[2.1rem] lg:mb-0 mb-[30.6rem]">
			<div
				className={`lg:w-[52.5rem] w-[90.7rem] lg:h-[31.5rem] h-[93.0rem] absolute ${Position} bg-[#F1F4F4] lg:rounded-[1.56rem] rounded-[4.7rem] -z-10 lg:flex hidden`}
			/>
			<div
				className={`lg:w-[52.5rem] w-[90.7rem] lg:h-[31.5rem] h-[110.0rem] absolute -bottom-[35.6rem] bg-[#F1F4F4] lg:rounded-[1.56rem] rounded-[4.7rem] -z-10 lg:hidden`}
			/>
			<h1 className="font-SourceSansProBold text-neutral-g text-[5.6rem] lg:hidden flex mb-[5.6rem]">
				{Title}
			</h1>
			{Left}
			{Right}
		</div>
	);
};

export default ServicesContainer;
