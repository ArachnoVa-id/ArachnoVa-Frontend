import Image from "@/components/ui/Img";

const PointText = ({ Title, Description, Icon, Variant }) => {
	const Left =
		Variant === "left" ? (
			<div className="flex flex-col">
				<h1 className="font-SourceSansProSemibold text-[0.5rem] text-neutral-g">
					{Title}
				</h1>
				<p className="font-SourceSansProSemibold text-[0.5rem] text-neutral-e">
					{Description}
				</p>
			</div>
		) : (
			<>
				<div className="relative lg:w-[0.58rem] w-[2.01rem] aspect-[1/1]">
					<Image
						src={Icon}
						alt="icon"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
			</>
		);
	const Right =
		Variant === "left" ? (
			<>
				<div className="relative w-[0.58rem] aspect-[1/1]">
					<Image
						src={Icon}
						alt="icon"
						draggable="false"
						fill
						className="object-contain"
					/>
				</div>
			</>
		) : (
			<div className="flex flex-col">
				<h1 className="font-SourceSansProSemibold lg:text-[0.5rem] text-[0.67rem] text-neutral-g">
					{Title}
				</h1>
				<p className="font-SourceSansProSemibold lg:text-[0.5rem] text-[0.56rem] text-neutral-e">
					{Description}
				</p>
			</div>
		);
	const Position = Variant === "left" ? "justify-end text-right" : "";
	return (
		<div
			className={`w-full lg:h-[0.58rem] h-fit flex flex-row items-start lg:gap-x-[0.2rem] gap-x-[0.41rem] lg:my-[0] my-[0.37rem] ${Position}`}
		>
			{Left}
			{Right}
		</div>
	);
};

export default PointText;
