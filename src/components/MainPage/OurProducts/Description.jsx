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
				className="w-[50rem] aspect-[335/40] rounded-[2.68rem] flex lg:hidden items-center justify-center bg-gradient-to-br from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-1px] transition-all duration-500 ease-in-out"
			>
				<p className="font-InterBold text-[4.69rem] text-neutral-a">
					Learn More
				</p>
			</a>
		);
	};
	const mobile_button = Variant ? "" : <ButtonMobile href={href} />;
	return (
		<>
			<div
				className={`flex flex-col lg:w-[40.13rem] w-[50rem] ${VarianStyle} lg:gap-y-[0.75rem] gap-y-[4.69rem]`}
			>
				<h2 className="font-SourceSansProBold lg:text-[2.63rem] text-[8rem] text-neutral-g">
					{Title}
				</h2>
				<p
					className={`font-SourceSansProSemibold lg:text-[1.5rem] text-[4.69rem] text-neutral-e ${paragraph}`}
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
