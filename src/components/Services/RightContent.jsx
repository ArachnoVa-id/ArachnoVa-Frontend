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
			? "items-end ml-[2.4rem]"
			: "items-start lg:mr-[2.4rem]";
	const Text = Variant === "left" ? "text-right" : "text-left";
	return (
		<div
			className={`lg:w-[38.33rem] w-[50rem] lg:h-fit h-fit flex flex-col lg:justify-between justify-end ${Position} lg:mt-0`}
		>
			<h1 className="font-SourceSansProBold text-neutral-g text-[3.0rem] hidden lg:flex">
				{Title}
			</h1>
			<p
				className={`font-SourceSansProSemibold text-neutral-e lg:text-[1.5rem] text-[6.03rem] lg:pt-[1.58rem] text-justify lg:pb-[2.25rem] pt-[5.02rem] lg:mb-0 mb-[6.03rem] ${Text}`}
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
