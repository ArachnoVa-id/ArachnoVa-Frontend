import Button from "../Button/Button";
import NavItem from "./NavItem";

const NavItemMobile = ({ href }) => {
	return (
		<div
			className="z-[110] absolute right-[8.3rem] top-[13.0rem] w-[24.0rem] h-[38.8rem] px-[2.6rem] gap-y-[4.9rem] flex flex-col justify-center items-center bg-[#F9FDFE] rounded-[2.0rem] border-border"
			style={{ boxShadow: "0px 4px 20px -7px rgba(71, 85, 105, 0.10)" }}
		>
			<ul className="text-center block leading-[6.1rem]">
				<NavItem Menu="Projects" href="/projects" />
				<NavItem Menu="Services" href="/services" />
				<NavItem Menu="About" href="/aboutus" />
			</ul>
			<a
				href={href}
				className="w-[18.7rem] h-[8.1rem] rounded-[1.63rem] flex items-center justify-center bg-gradient-to-br from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-3px] transition-all duration-500 ease-in-out"
			>
				<p className="font-InterBold text-[2.8rem] text-neutral-a">
					Contact Us
				</p>
			</a>
		</div>
	);
};

export default NavItemMobile;
