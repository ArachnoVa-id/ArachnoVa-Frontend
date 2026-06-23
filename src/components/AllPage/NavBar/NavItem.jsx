const NavItem = ({ Menu, href, path }) => {
	const style = path === href ? "text-LightBlue-cDark" : "text-neutral-g";
	return (
		<>
			<li>
				<a
					href={href}
					className={`font-InterBold lg:text-[0.833vw] text-[3.721vw] ${style} hover:text-LightBlue-cDark transition-all duration-300 ease-in-out`}
				>
					{Menu}
				</a>
			</li>
		</>
	);
};

export default NavItem;
