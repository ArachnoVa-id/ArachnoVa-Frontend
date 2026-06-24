import Image from "@/components/ui/Img";

const PointText = ({ Title, Description, Icon, Variant }) => {
	const Left =
		Variant === "left" ? (
			<div className="flex flex-col">
				<h1 className="font-SourceSansProSemibold text-[clamp(0.5rem,1.042vw,1.5rem)] text-neutral-g">
					{Title}
				</h1>
				<p className="font-SourceSansProSemibold text-[clamp(0.5rem,0.938vw,1.35rem)] text-neutral-e">
					{Description}
				</p>
			</div>
		) : (
			<>
				<div className="relative lg:w-[clamp(0.58rem,3.646vw,5.25rem)] w-[clamp(2.01rem,12.558vw,18.08rem)] aspect-[1/1]">
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
				<div className="relative w-[clamp(0.58rem,3.646vw,5.25rem)] aspect-[1/1]">
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
				<h1 className="font-SourceSansProSemibold lg:text-[clamp(0.5rem,1.042vw,1.5rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] text-neutral-g">
					{Title}
				</h1>
				<p className="font-SourceSansProSemibold lg:text-[clamp(0.5rem,0.938vw,1.35rem)] text-[clamp(0.56rem,3.488vw,5.02rem)] text-neutral-e">
					{Description}
				</p>
			</div>
		);
	const Position = Variant === "left" ? "justify-end text-right" : "";
	return (
		<div
			className={`w-full lg:h-[clamp(0.58rem,3.646vw,5.25rem)] h-fit flex flex-row items-start lg:gap-x-[clamp(0.2rem,0.938vw,1.35rem)] gap-x-[clamp(0.41rem,2.558vw,3.68rem)] lg:my-[0] my-[clamp(0.37rem,2.326vw,3.35rem)] ${Position}`}
		>
			{Left}
			{Right}
		</div>
	);
};

export default PointText;
