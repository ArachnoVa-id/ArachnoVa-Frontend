import Button from "../Button/Button";
import NavItem from "./NavItem";

const NavItemMobile = ({ href }) => {
	return (
		<div
			className="z-[110] absolute right-[9.5rem] top-[14.9rem] w-[27.4rem] h-[44.4rem] px-[3.0rem] gap-y-[5.6rem] flex flex-col justify-center items-center bg-[#F9FDFE] rounded-[2.3rem] border-border"
			style={{ boxShadow: "0px 4px 20px -7px rgba(71, 85, 105, 0.10)" }}
		>
			<ul className="text-center block leading-[7.0rem]">
				<NavItem Menu="Projects" href="/projects" />
				<NavItem Menu="Services" href="/services" />
				<NavItem Menu="About" href="/aboutus" />
			</ul>
			<a
				href={href}
				className="w-[21.4rem] h-[9.3rem] rounded-[1.86rem] flex items-center justify-center bg-gradient-to-br from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-3px] transition-all duration-500 ease-in-out"
			>
				<p className="font-InterBold text-[3.3rem] text-neutral-a">
					Contact Us
				</p>
			</a>
		</div>
	);
};

export default NavItemMobile;
