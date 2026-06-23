"use client";

import { useLocation } from "react-router-dom";
import Image from "@/components/ui/Img";
import NavItem from "./NavItem";
import Button from "../Button/Button";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import NavItemMobile from "./NavItemMobile";

const Navbar = () => {
	const path = useLocation().pathname;
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className="fixed z-[100] lg:py-[0.938vw] lg:px-[15vw] px-[5.581vw] py-[2.88vw] w-screen flex items-center justify-between bg-[#FAFDFF]/[0.75] lg:backdrop-blur-[0.208vw] backdrop-blur-[1.163vw] lg:border-b-[0.104vw] border-b-[0.465vw] border-[#E6ECF0]">
				<div className="flex items-center flex-row">
					<ul className="lg:flex items-center gap-x-[3.125vw] hidden">
						<a href="/">
							<div className="relative w-[3.281vw] aspect-[69/53] hover:scale-110 transition-all duration-300 ease-in-out">
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
						<div className="relative lg:hidden w-[10.465vw] aspect-[45/33] hover:scale-110 transition-all duration-300 ease-in-out">
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
						color="#7C3AED"
						size={22}
					/>
				</div>
				{isOpen ? (
					<>
						<NavItemMobile href="https://wa.me/6287882832538" />
					</>
				) : (
					<></>
				)}
				<Button Text="Contact Us" href="https://wa.me/6287882832538" />
			</nav>
		</>
	);
};

export default Navbar;
