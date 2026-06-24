import Button from "../Button/Button";
import NavItem from "./NavItem";

const NavItemMobile = ({ href }) => {
	return (
		<div
			className="z-[110] absolute right-[1.53rem] top-[2.38rem] w-[4.38rem] h-[7.1rem] px-[0.48rem] gap-y-[0.89rem] flex flex-col justify-center items-center bg-[#F9FDFE] rounded-[0.37rem] border-border"
			style={{ boxShadow: "0px 4px 20px -7px rgba(71, 85, 105, 0.10)" }}
		>
			<ul className="text-center block leading-[1.12rem]">
				<NavItem Menu="Projects" href="/projects" />
				<NavItem Menu="Services" href="/services" />
				<NavItem Menu="About" href="/aboutus" />
			</ul>
			<a
				href={href}
				className="w-[3.42rem] h-[1.49rem] rounded-[0.3rem] flex items-center justify-center bg-gradient-to-br from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-4px] transition-all duration-500 ease-in-out"
			>
				<p className="font-InterBold text-[0.52rem] text-neutral-a">
					Contact Us
				</p>
			</a>
		</div>
	);
};

export default NavItemMobile;
