import Button from "@/components/AllPage/Button/Button";

const Description = ({ Title, Description, Variant, href }) => {
	const VarianStyle =
		Variant === "Right"
			? "items-end justify-end"
			: Variant === "Left"
			? "items-start justify-start"
			: "justify-center items-center text-justify";
	const paragraph = Variant === "Right" ? "text-right" : "";
	const ButtonMobile = ({ href }) => {
		return (
			<a
				href={href}
				className="w-[clamp(12.47rem,77.907vw,50rem)] aspect-[335/40] rounded-[clamp(0.3rem,1.86vw,2.68rem)] flex lg:hidden items-center justify-center bg-gradient-to-br from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out"
			>
				<p className="font-InterBold text-[clamp(0.52rem,3.256vw,4.69rem)] text-neutral-a">
					Learn More
				</p>
			</a>
		);
	};
	const mobile_button = Variant ? "" : <ButtonMobile href={href} />;
	return (
		<>
			<div
				className={`flex flex-col lg:w-[clamp(4.46rem,27.865vw,40.13rem)] w-[clamp(12.65rem,79.07vw,50rem)] ${VarianStyle} lg:gap-y-[clamp(0.2rem,0.521vw,0.75rem)] gap-y-[clamp(0.52rem,3.256vw,4.69rem)]`}
			>
				<h2 className="font-SourceSansProBold lg:text-[clamp(0.5rem,1.823vw,2.63rem)] text-[clamp(0.89rem,5.581vw,8rem)] text-neutral-g">
					{Title}
				</h2>
				<p
					className={`font-SourceSansProSemibold lg:text-[clamp(0.5rem,1.042vw,1.5rem)] text-[clamp(0.52rem,3.256vw,4.69rem)] text-neutral-e ${paragraph}`}
				>
					{Description}
				</p>
				<Button Text="Learn More" href={href} />
				{mobile_button}
			</div>
		</>
	);
};

export default Description;
