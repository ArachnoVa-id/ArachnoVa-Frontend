import { FaHandshake } from "react-icons/fa6";

const Container = ({ Icon, Title, Description, State, Clicked }) => {
	const style = State
		? "border-[0.07rem] border-border bg-white"
		: "bg-transparent";
	return (
		<div
			className={`group lg:w-[18.5rem] lg:h-[3.9rem] w-[51.0rem] h-[16.4rem] flex flex-row lg:p-[0.7rem] gap-x-[0.59rem] rounded-[0.41rem] lg:cursor-pointer z-50 ${style}}`}
			onClick={Clicked}
		>
			<div className="w-fit h-fit lg:flex hidden">{Icon}</div>
			<div className="flex flex-col gap-y-[0.26rem]">
				<div className="w-fit h-fit flex lg:hidden">{Icon}</div>
				<p className="lg:group-hover:bg-clip-text lg:group-hover:text-transparent lg:group-hover:bg-gradient-to-r lg:group-hover:from-[#1AB0C8] lg:group-hover:via-[#84D4E1] lg:group-hover:to-[#179FB5] transition-all duration-500 ease-in-out font-SourceSansProBold lg:text-[0.82rem] text-[2.6rem]/[3.9rem] text-neutral-g lg:leading-[0.88rem]">
					{Title}
				</p>
				<p className="font-SourceSansProSemibold lg:text-[0.47rem] text-[2.1rem] lg:leading-normal leading-[2.6rem] text-[#64748B]">
					{Description}
				</p>
			</div>
		</div>
	);
};

export default Container;
