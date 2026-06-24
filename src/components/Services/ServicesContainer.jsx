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
		<div className="relative lg:w-[63.9rem] w-[79.4rem] lg:h-[27.5rem] h-[114.0rem] flex lg:flex-row flex-col justify-between items-center z-10 lg:mt-[1.82rem] lg:mb-0 mb-[26.8rem]">
			<div
				className={`lg:w-[45.9rem] w-[79.4rem] lg:h-[27.5rem] h-[81.4rem] absolute ${Position} bg-[#F1F4F4] lg:rounded-[1.37rem] rounded-[4.1rem] -z-10 lg:flex hidden`}
			/>
			<div
				className={`lg:w-[45.9rem] w-[79.4rem] lg:h-[27.5rem] h-[96.3rem] absolute -bottom-[31.2rem] bg-[#F1F4F4] lg:rounded-[1.37rem] rounded-[4.1rem] -z-10 lg:hidden`}
			/>
			<h1 className="font-SourceSansProBold text-neutral-g text-[4.9rem] lg:hidden flex mb-[4.9rem]">
				{Title}
			</h1>
			{Left}
			{Right}
		</div>
	);
};

export default ServicesContainer;
