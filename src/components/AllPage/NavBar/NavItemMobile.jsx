import Button from "../Button/Button";
import NavItem from "./NavItem";

const NavItemMobile = ({ href }) => {
	return (
		<div
			className="z-[110] absolute right-[9.535vw] top-[14.884vw] w-[27.395vw] h-[44.372vw] px-[3.023vw] gap-y-[5.581vw] flex flex-col justify-center items-center bg-[#F9FDFE] rounded-[2.326vw] border-border"
			style={{ boxShadow: "0px 4px 20px -7px rgba(71, 85, 105, 0.10)" }}
		>
			<ul className="text-center block leading-[7vw]">
				<NavItem Menu="Projects" href="/projects" />
				<NavItem Menu="Services" href="/services" />
				<NavItem Menu="About" href="/aboutus" />
			</ul>
			<a
				href={href}
				className="w-[21.395vw] h-[9.302vw] rounded-[1.86vw] flex items-center justify-center bg-gradient-to-br from-teal to-tealDark hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out"
			>
				<p className="font-InterBold text-[3.256vw] text-surface">
					Contact Us
				</p>
			</a>
		</div>
	);
};

export default NavItemMobile;
