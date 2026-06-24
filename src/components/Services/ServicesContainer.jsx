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
		<div className="relative lg:w-[11.68rem] w-[14.51rem] lg:h-[5.03rem] h-[20.84rem] flex lg:flex-row flex-col justify-between items-center z-10 lg:mt-[0.33rem] lg:mb-0 mb-[4.9rem]">
			<div
				className={`lg:w-[8.4rem] w-[14.51rem] lg:h-[5.03rem] h-[14.88rem] absolute ${Position} bg-[#F1F4F4] lg:rounded-[0.25rem] rounded-[0.74rem] -z-10 lg:flex hidden`}
			/>
			<div
				className={`lg:w-[8.4rem] w-[14.51rem] lg:h-[5.03rem] h-[17.6rem] absolute -bottom-[5.7rem] bg-[#F1F4F4] lg:rounded-[0.25rem] rounded-[0.74rem] -z-10 lg:hidden`}
			/>
			<h1 className="font-SourceSansProBold text-neutral-g text-[0.89rem] lg:hidden flex mb-[0.89rem]">
				{Title}
			</h1>
			{Left}
			{Right}
		</div>
	);
};

export default ServicesContainer;
