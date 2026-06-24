import Image from "@/components/ui/Img";

const PointText = ({ Title, Description, Icon, Variant }) => {
	const Left =
		Variant === "left" ? (
			<div className="flex flex-col">
				<h1 className="font-SourceSansProSemibold text-[0.59rem] text-neutral-g">
					{Title}
				</h1>
				<p className="font-SourceSansProSemibold text-[0.53rem] text-neutral-e">
					{Description}
				</p>
			</div>
		) : (
			<>
				<div className="relative lg:w-[2.1rem] w-[7.1rem] aspect-[1/1]">
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
				<div className="relative w-[2.1rem] aspect-[1/1]">
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
				<h1 className="font-SourceSansProSemibold lg:text-[0.59rem] text-[2.4rem] text-neutral-g">
					{Title}
				</h1>
				<p className="font-SourceSansProSemibold lg:text-[0.53rem] text-[1.96rem] text-neutral-e">
					{Description}
				</p>
			</div>
		);
	const Position = Variant === "left" ? "justify-end text-right" : "";
	return (
		<div
			className={`w-full lg:h-[2.1rem] h-fit flex flex-row items-start lg:gap-x-[0.53rem] gap-x-[1.44rem] lg:my-[0] my-[1.31rem] ${Position}`}
		>
			{Left}
			{Right}
		</div>
	);
};

export default PointText;
