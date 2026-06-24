import Button from "../Button/Button";
import NavItem from "./NavItem";

const NavItemMobile = ({ href }) => {
	return (
		<div
			className="z-[110] absolute right-[13.73rem] top-[21.43rem] w-[39.45rem] h-[50rem] px-[4.35rem] gap-y-[8.04rem] flex flex-col justify-center items-center bg-[#F9FDFE] rounded-[3.35rem] border-border"
			style={{ boxShadow: "0px 4px 20px -7px rgba(71, 85, 105, 0.10)" }}
		>
			<ul className="text-center block leading-[10.08rem]">
				<NavItem Menu="Projects" href="/projects" />
				<NavItem Menu="Services" href="/services" />
				<NavItem Menu="About" href="/aboutus" />
			</ul>
			<a
				href={href}
				className="w-[30.81rem] h-[13.39rem] rounded-[2.68rem] flex items-center justify-center bg-gradient-to-br from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-1px] transition-all duration-500 ease-in-out"
			>
				<p className="font-InterBold text-[4.69rem] text-neutral-a">
					Contact Us
				</p>
			</a>
		</div>
	);
};

export default NavItemMobile;
