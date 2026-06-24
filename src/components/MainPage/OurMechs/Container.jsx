import { FaHandshake } from "react-icons/fa6";

const Container = ({ Icon, Title, Description, State, Clicked }) => {
	const style = State
		? "border-[0.13rem] border-border bg-white"
		: "bg-transparent";
	return (
		<div
			className={`group lg:w-[32.9rem] lg:h-[6.9rem] w-[90.7rem] h-[29.1rem] flex flex-row lg:p-[1.25rem] gap-x-[1.04rem] rounded-[0.73rem] lg:cursor-pointer z-50 ${style}}`}
			onClick={Clicked}
		>
			<div className="w-fit h-fit lg:flex hidden">{Icon}</div>
			<div className="flex flex-col gap-y-[0.47rem]">
				<div className="w-fit h-fit flex lg:hidden">{Icon}</div>
				<p className="lg:group-hover:bg-clip-text lg:group-hover:text-transparent lg:group-hover:bg-gradient-to-r lg:group-hover:from-[#1AB0C8] lg:group-hover:via-[#84D4E1] lg:group-hover:to-[#179FB5] transition-all duration-500 ease-in-out font-SourceSansProBold lg:text-[1.46rem] text-[4.7rem]/[7.0rem] text-neutral-g lg:leading-[1.56rem]">
					{Title}
				</p>
				<p className="font-SourceSansProSemibold lg:text-[0.83rem] text-[3.7rem] lg:leading-normal leading-[4.7rem] text-[#64748B]">
					{Description}
				</p>
			</div>
		</div>
	);
};

export default Container;
