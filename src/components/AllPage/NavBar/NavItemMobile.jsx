import NavItem from "./NavItem";

const NavItemMobile = ({ href, isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[105] bg-black/30 lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      {/* Slide-down menu */}
      <div
        className={`fixed top-0 left-0 right-0 z-[110] bg-white lg:hidden shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
      >
        <div className="flex flex-col items-center py-[8vw] px-[5.581vw]">
          {/* Close button */}
          <button onClick={onClose} className="self-end text-neutral-g mb-[3vw]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Logo */}
          <a href="/" className="mb-[5vw]">
            <img src="/image/Logo.png" alt="logo" className="w-[12vw] h-auto" draggable="false" />
          </a>

          {/* Nav links */}
          <ul className="flex flex-col items-center gap-y-[3vw] mb-[6vw]">
            <li><a href="/projects" onClick={onClose} className="font-InterBold text-[5vw] text-neutral-g hover:text-LightBlue-d transition-colors">Projects</a></li>
            <li><a href="/services" onClick={onClose} className="font-InterBold text-[5vw] text-neutral-g hover:text-LightBlue-d transition-colors">Services</a></li>
            <li><a href="/aboutus" onClick={onClose} className="font-InterBold text-[5vw] text-neutral-g hover:text-LightBlue-d transition-colors">About</a></li>
          </ul>

          {/* CTA */}
          <a href={href} onClick={onClose}
            className="w-[60vw] py-[3vw] rounded-[2vw] flex items-center justify-center bg-gradient-to-br from-[#1AB0C8] to-[#179FB5]"
          >
            <p className="font-InterBold text-[4vw] text-white">Contact Us</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavItemMobile;
