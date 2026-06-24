import { FaHandshake } from "react-icons/fa6";

const Container = ({ Icon, Title, Description, State, Clicked }) => {
	const style = State
		? "border-[0.129vw] border-border bg-white"
		: "bg-transparent";
	return (
		<div
			className={`group lg:w-[clamp(5.27rem,32.917vw,47.4rem)] lg:h-[clamp(1.1rem,6.875vw,9.9rem)] w-[clamp(14.51rem,90.698vw,50rem)] h-[clamp(4.65rem,29.07vw,41.86rem)] flex flex-row lg:p-[clamp(0.2rem,1.25vw,1.8rem)] gap-x-[clamp(0.2rem,1.042vw,1.5rem)] rounded-[clamp(0.2rem,0.729vw,1.05rem)] lg:cursor-pointer z-50 ${style}}`}
			onClick={Clicked}
		>
			<div className="w-fit h-fit lg:flex hidden">{Icon}</div>
			<div className="flex flex-col gap-y-[clamp(0.2rem,0.469vw,0.68rem)]">
				<div className="w-fit h-fit flex lg:hidden">{Icon}</div>
				<p className="lg:group-hover:bg-clip-text lg:group-hover:text-transparent lg:group-hover:bg-gradient-to-r lg:group-hover:from-[#1AB0C8] lg:group-hover:via-[#84D4E1] lg:group-hover:to-[#179FB5] transition-all duration-500 ease-in-out font-SourceSansProBold lg:text-[clamp(0.5rem,1.458vw,2.1rem)] text-[clamp(0.74rem,4.651vw,6.7rem)]/[6.977vw] text-neutral-g lg:leading-[clamp(0.25rem,1.563vw,2.25rem)]">
					{Title}
				</p>
				<p className="font-SourceSansProSemibold lg:text-[clamp(0.5rem,0.833vw,1.2rem)] text-[clamp(0.6rem,3.721vw,5.36rem)] lg:leading-normal leading-[clamp(0.74rem,4.651vw,6.7rem)] text-[#64748B]">
					{Description}
				</p>
			</div>
		</div>
	);
};

export default Container;
