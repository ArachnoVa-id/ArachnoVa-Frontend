import Button from "../Button/Button";
import NavItem from "./NavItem";

const NavItemMobile = ({ href }) => {
	return (
		<div
			className="z-[110] absolute right-[clamp(1.53rem,9.535vw,13.73rem)] top-[clamp(2.38rem,14.884vw,21.43rem)] w-[clamp(4.38rem,27.395vw,39.45rem)] h-[clamp(7.1rem,44.372vw,50rem)] px-[clamp(0.48rem,3.023vw,4.35rem)] gap-y-[clamp(0.89rem,5.581vw,8.04rem)] flex flex-col justify-center items-center bg-[#F9FDFE] rounded-[clamp(0.37rem,2.326vw,3.35rem)] border-border"
			style={{ boxShadow: "0px 4px 20px -7px rgba(71, 85, 105, 0.10)" }}
		>
			<ul className="text-center block leading-[clamp(1.12rem,7.0vw,10.08rem)]">
				<NavItem Menu="Projects" href="/projects" />
				<NavItem Menu="Services" href="/services" />
				<NavItem Menu="About" href="/aboutus" />
			</ul>
			<a
				href={href}
				className="w-[clamp(3.42rem,21.395vw,30.81rem)] h-[clamp(1.49rem,9.302vw,13.39rem)] rounded-[clamp(0.3rem,1.86vw,2.68rem)] flex items-center justify-center bg-gradient-to-br from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out"
			>
				<p className="font-InterBold text-[clamp(0.52rem,3.256vw,4.69rem)] text-neutral-a">
					Contact Us
				</p>
			</a>
		</div>
	);
};

export default NavItemMobile;
