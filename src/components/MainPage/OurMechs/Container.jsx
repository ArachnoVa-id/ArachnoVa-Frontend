import { FaHandshake } from "react-icons/fa6";

const Container = ({ Icon, Title, Description, State, Clicked }) => {
	const style = State
		? "border-[0.11rem] border-border bg-white"
		: "bg-transparent";
	return (
		<div
			className={`group lg:w-[28.8rem] lg:h-[6.0rem] w-[79.4rem] h-[25.4rem] flex flex-row lg:p-[1.09rem] gap-x-[0.91rem] rounded-[0.64rem] lg:cursor-pointer z-50 ${style}}`}
			onClick={Clicked}
		>
			<div className="w-fit h-fit lg:flex hidden">{Icon}</div>
			<div className="flex flex-col gap-y-[0.41rem]">
				<div className="w-fit h-fit flex lg:hidden">{Icon}</div>
				<p className="lg:group-hover:bg-clip-text lg:group-hover:text-transparent lg:group-hover:bg-gradient-to-r lg:group-hover:from-[#1AB0C8] lg:group-hover:via-[#84D4E1] lg:group-hover:to-[#179FB5] transition-all duration-500 ease-in-out font-SourceSansProBold lg:text-[1.28rem] text-[4.1rem]/[6.1rem] text-neutral-g lg:leading-[1.37rem]">
					{Title}
				</p>
				<p className="font-SourceSansProSemibold lg:text-[0.73rem] text-[3.3rem] lg:leading-normal leading-[4.1rem] text-[#64748B]">
					{Description}
				</p>
			</div>
		</div>
	);
};

export default Container;
