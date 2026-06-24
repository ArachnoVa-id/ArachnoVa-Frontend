const NavItem = ({ Menu, href, path }) => {
  const isActive = path === href || (href !== "/" && path.startsWith(href));
  return (
    <li className="relative">
      <a
        href={href}
        className={`font-InterBold lg:text-[clamp(0.5rem,0.833vw,1.2rem)] text-[clamp(0.6rem,3.721vw,5.36rem)] transition-all duration-300 ease-in-out ${
          isActive ? "text-LightBlue-d" : "text-neutral-g hover:text-LightBlue-d"
        }`}
      >
        {Menu}
      </a>
      {isActive && (
        <div className="absolute -bottom-[clamp(0.2rem,0.3vw,0.43rem)] left-1/2 -translate-x-1/2 w-[60%] h-[clamp(0.2rem,0.156vw,0.22rem)] bg-LightBlue-c rounded-full" />
      )}
    </li>
  );
};

export default NavItem;
