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
			? "items-end ml-[1.67rem]"
			: "items-start lg:mr-[1.67rem]";
	const Text = Variant === "left" ? "text-right" : "text-left";
	return (
		<div
			className={`lg:w-[26.6rem] w-[75.6rem] lg:h-fit h-fit flex flex-col lg:justify-between justify-end ${Position} lg:mt-0`}
		>
			<h1 className="font-SourceSansProBold text-neutral-g text-[2.1rem] hidden lg:flex">
				{Title}
			</h1>
			<p
				className={`font-SourceSansProSemibold text-neutral-e lg:text-[1.04rem] text-[4.2rem] lg:pt-[1.09rem] text-justify lg:pb-[1.56rem] pt-[3.5rem] lg:mb-0 mb-[4.2rem] ${Text}`}
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
