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
			? "items-end ml-[0.27rem]"
			: "items-start lg:mr-[0.27rem]";
	const Text = Variant === "left" ? "text-right" : "text-left";
	return (
		<div
			className={`lg:w-[4.26rem] w-[12.09rem] lg:h-fit h-fit flex flex-col lg:justify-between justify-end ${Position} lg:mt-0`}
		>
			<h1 className="font-SourceSansProBold text-neutral-g text-[0.5rem] hidden lg:flex">
				{Title}
			</h1>
			<p
				className={`font-SourceSansProSemibold text-neutral-e lg:text-[0.5rem] text-[0.67rem] lg:pt-[0.2rem] text-justify lg:pb-[0.25rem] pt-[0.56rem] lg:mb-0 mb-[0.67rem] ${Text}`}
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
