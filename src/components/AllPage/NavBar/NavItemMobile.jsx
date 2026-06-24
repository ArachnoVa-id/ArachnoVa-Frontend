import Button from "../Button/Button";
import NavItem from "./NavItem";

const NavItemMobile = ({ href }) => {
	return (
		<div
			className="z-[110] absolute right-[5.4rem] top-[8.4rem] w-[15.4rem] h-[25.0rem] px-[1.7rem] gap-y-[3.1rem] flex flex-col justify-center items-center bg-[#F9FDFE] rounded-[1.31rem] border-border"
			style={{ boxShadow: "0px 4px 20px -7px rgba(71, 85, 105, 0.10)" }}
		>
			<ul className="text-center block leading-[3.9rem]">
				<NavItem Menu="Projects" href="/projects" />
				<NavItem Menu="Services" href="/services" />
				<NavItem Menu="About" href="/aboutus" />
			</ul>
			<a
				href={href}
				className="w-[12.0rem] h-[5.2rem] rounded-[1.05rem] flex items-center justify-center bg-gradient-to-br from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-2px] transition-all duration-500 ease-in-out"
			>
				<p className="font-InterBold text-[1.83rem] text-neutral-a">
					Contact Us
				</p>
			</a>
		</div>
	);
};

export default NavItemMobile;
