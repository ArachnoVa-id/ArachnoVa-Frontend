import { FaHandshake } from "react-icons/fa6";

const Container = ({ Icon, Title, Description, State, Clicked }) => {
	const style = State
		? "border-[0.034rem] border-border bg-white"
		: "bg-transparent";
	return (
		<div
			className={`group lg:w-[5.27rem] lg:h-[1.1rem] w-[14.51rem] h-[4.65rem] flex flex-row lg:p-[0.2rem] gap-x-[0.2rem] rounded-[0.2rem] lg:cursor-pointer z-50 ${style}}`}
			onClick={Clicked}
		>
			<div className="w-fit h-fit lg:flex hidden">{Icon}</div>
			<div className="flex flex-col gap-y-[0.2rem]">
				<div className="w-fit h-fit flex lg:hidden">{Icon}</div>
				<p className="lg:group-hover:bg-clip-text lg:group-hover:text-transparent lg:group-hover:bg-gradient-to-r lg:group-hover:from-[#1AB0C8] lg:group-hover:via-[#84D4E1] lg:group-hover:to-[#179FB5] transition-all duration-500 ease-in-out font-SourceSansProBold lg:text-[0.5rem] text-[0.74rem]/[1.83rem] text-neutral-g lg:leading-[0.25rem]">
					{Title}
				</p>
				<p className="font-SourceSansProSemibold lg:text-[0.5rem] text-[0.6rem] lg:leading-normal leading-[0.74rem] text-[#64748B]">
					{Description}
				</p>
			</div>
		</div>
	);
};

export default Container;
