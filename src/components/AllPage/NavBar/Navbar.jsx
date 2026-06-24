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
			<nav className="fixed z-[100] lg:py-[clamp(0.2rem,0.938vw,1.35rem)] lg:px-[clamp(2.4rem,15.0vw,21.6rem)] px-[clamp(0.89rem,5.581vw,8.04rem)] py-[clamp(0.46rem,2.88vw,4.15rem)] w-screen flex items-center justify-between bg-[#FAFDFF]/[0.75] lg:backdrop-blur-[0.208vw] backdrop-blur-[1.163vw] lg:border-b-[0.104vw] border-b-[0.465vw] border-[#E6ECF0]">
				<div className="flex items-center flex-row">
					<ul className="lg:flex items-center gap-x-[clamp(0.5rem,3.125vw,4.5rem)] hidden">
						<a href="/">
							<div className="relative w-[clamp(0.52rem,3.281vw,4.72rem)] aspect-[69/53] hover:scale-110 transition-all duration-300 ease-in-out">
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
						<div className="relative lg:hidden w-[clamp(1.67rem,10.465vw,15.07rem)] aspect-[45/33] hover:scale-110 transition-all duration-300 ease-in-out">
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
