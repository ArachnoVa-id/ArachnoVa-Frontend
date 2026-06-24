import Image from "@/components/ui/Img";

const PointText = ({ Title, Description, Icon, Variant }) => {
	const Left =
		Variant === "left" ? (
			<div className="flex flex-col">
				<h1 className="font-SourceSansProSemibold text-[0.91rem] text-neutral-g">
					{Title}
				</h1>
				<p className="font-SourceSansProSemibold text-[0.82rem] text-neutral-e">
					{Description}
				</p>
			</div>
		) : (
			<>
				<div className="relative lg:w-[3.2rem] w-[11.0rem] aspect-[1/1]">
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
				<div className="relative w-[3.2rem] aspect-[1/1]">
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
				<h1 className="font-SourceSansProSemibold lg:text-[0.91rem] text-[3.7rem] text-neutral-g">
					{Title}
				</h1>
				<p className="font-SourceSansProSemibold lg:text-[0.82rem] text-[3.1rem] text-neutral-e">
					{Description}
				</p>
			</div>
		);
	const Position = Variant === "left" ? "justify-end text-right" : "";
	return (
		<div
			className={`w-full lg:h-[3.2rem] h-fit flex flex-row items-start lg:gap-x-[0.82rem] gap-x-[2.2rem] lg:my-[0] my-[2.0rem] ${Position}`}
		>
			{Left}
			{Right}
		</div>
	);
};

export default PointText;
