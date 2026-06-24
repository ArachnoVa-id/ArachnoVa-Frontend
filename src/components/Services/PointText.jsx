import Image from "@/components/ui/Img";

const PointText = ({ Title, Description, Icon, Variant }) => {
	const Left =
		Variant === "left" ? (
			<div className="flex flex-col">
				<h1 className="font-SourceSansProSemibold text-[1.5rem] text-neutral-g">
					{Title}
				</h1>
				<p className="font-SourceSansProSemibold text-[1.35rem] text-neutral-e">
					{Description}
				</p>
			</div>
		) : (
			<>
				<div className="relative lg:w-[5.25rem] w-[18.08rem] aspect-[1/1]">
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
				<div className="relative w-[5.25rem] aspect-[1/1]">
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
				<h1 className="font-SourceSansProSemibold lg:text-[1.5rem] text-[6.03rem] text-neutral-g">
					{Title}
				</h1>
				<p className="font-SourceSansProSemibold lg:text-[1.35rem] text-[5.02rem] text-neutral-e">
					{Description}
				</p>
			</div>
		);
	const Position = Variant === "left" ? "justify-end text-right" : "";
	return (
		<div
			className={`w-full lg:h-[5.25rem] h-fit flex flex-row items-start lg:gap-x-[1.35rem] gap-x-[3.68rem] lg:my-[0] my-[3.35rem] ${Position}`}
		>
			{Left}
			{Right}
		</div>
	);
};

export default PointText;
