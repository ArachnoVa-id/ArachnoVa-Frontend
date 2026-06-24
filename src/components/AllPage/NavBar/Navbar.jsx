"use client";

import { useLocation } from "react-router-dom";
import Image from "@/components/ui/Img";
import NavItem from "./NavItem";
import Button from "../Button/Button";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import NavItemMobile from "./NavItemMobile";

const Navbar = () => {
	const settings = useSettings();
	const path = useLocation().pathname;
	const settings = useSettings();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className="fixed z-[100] lg:py-[0.94rem] lg:px-[15.0rem] px-[5.6rem] py-[2.9rem] w-screen flex items-center justify-between bg-[#FAFDFF]/[0.75] lg:backdrop-blur-[0.21rem] backdrop-blur-[1.16rem] lg:border-b-[0.1rem] border-b-[0.46rem] border-[#E6ECF0]">
				<div className="flex items-center flex-row">
					<ul className="lg:flex items-center gap-x-[3.1rem] hidden">
						<a href="/">
							<div className="relative w-[3.3rem] aspect-[69/53] hover:scale-110 transition-all duration-300 ease-in-out">
								<Image
									src="/image/Logo.png"
									draggable="false"
									alt="logo"
									fill
									className="object-contain"
								/>
							</div>
						</a>

						<NavItem Menu="Projects" href="/projects" path={path} />
						<NavItem Menu="Services" href="/services" path={path} />
						<NavItem Menu="About" href="/aboutus" path={path} />
					</ul>
					<a href="/">
						<div className="relative lg:hidden w-[10.5rem] aspect-[45/33] hover:scale-110 transition-all duration-300 ease-in-out">
							<Image
								src="/image/Logo.png"
								draggable="false"
								alt="logo"
								fill
								className="object-contain"
							/>
						</div>
					</a>
				</div>
				<div className="w-fit h-fit block lg:hidden">
					<Hamburger
						toggled={isOpen}
						toggle={setIsOpen}
						color="#1AB0C8"
						size={22}
					/>
				</div>
				{isOpen ? (
					<>
						<NavItemMobile href="{settings?.whatsapp || "https://wa.me/6287882832538"}" />
					</>
				) : (
					<></>
				)}
				<Button Text="Contact Us" href="{settings?.whatsapp || "https://wa.me/6287882832538"}" />
			</nav>
		</>
	);
};

export default Navbar;
