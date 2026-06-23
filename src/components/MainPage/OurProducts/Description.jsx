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
				className="w-[77.907vw] aspect-[335/40] rounded-[1.86vw] flex lg:hidden items-center justify-center bg-gradient-to-br from-teal to-tealDark hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out"
			>
				<p className="font-InterBold text-[3.256vw] text-surface">
					Learn More
				</p>
			</a>
		);
	};
	const mobile_button = Variant ? "" : <ButtonMobile href={href} />;
	return (
		<>
			<div
				className={`flex flex-col lg:w-[27.865vw] w-[79.07vw] ${VarianStyle} lg:gap-y-[0.521vw] gap-y-[3.256vw]`}
			>
				<h2 className="font-SourceSansProBold lg:text-[1.823vw] text-[5.581vw] text-ink">
					{Title}
				</h2>
				<p
					className={`font-SourceSansProSemibold lg:text-[1.042vw] text-[3.256vw] text-inkLight ${paragraph}`}
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
