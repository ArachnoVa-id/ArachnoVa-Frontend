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
				className="w-[12.47rem] aspect-[335/40] rounded-[0.3rem] flex lg:hidden items-center justify-center bg-gradient-to-br from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-1px] transition-all duration-500 ease-in-out"
			>
				<p className="font-InterBold text-[0.52rem] text-neutral-a">
					Learn More
				</p>
			</a>
		);
	};
	const mobile_button = Variant ? "" : <ButtonMobile href={href} />;
	return (
		<>
			<div
				className={`flex flex-col lg:w-[4.46rem] w-[12.65rem] ${VarianStyle} lg:gap-y-[0.2rem] gap-y-[0.52rem]`}
			>
				<h2 className="font-SourceSansProBold lg:text-[0.5rem] text-[0.89rem] text-neutral-g">
					{Title}
				</h2>
				<p
					className={`font-SourceSansProSemibold lg:text-[0.5rem] text-[0.52rem] text-neutral-e ${paragraph}`}
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
