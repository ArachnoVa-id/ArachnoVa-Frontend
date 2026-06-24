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
			? "items-end ml-[1.46rem]"
			: "items-start lg:mr-[1.46rem]";
	const Text = Variant === "left" ? "text-right" : "text-left";
	return (
		<div
			className={`lg:w-[23.3rem] w-[66.1rem] lg:h-fit h-fit flex flex-col lg:justify-between justify-end ${Position} lg:mt-0`}
		>
			<h1 className="font-SourceSansProBold text-neutral-g text-[1.82rem] hidden lg:flex">
				{Title}
			</h1>
			<p
				className={`font-SourceSansProSemibold text-neutral-e lg:text-[0.91rem] text-[3.7rem] lg:pt-[0.96rem] text-justify lg:pb-[1.37rem] pt-[3.1rem] lg:mb-0 mb-[3.7rem] ${Text}`}
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
