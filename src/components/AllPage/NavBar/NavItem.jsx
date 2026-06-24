const NavItem = ({ Menu, href, path }) => {
  const isActive = path === href || (href !== "/" && path.startsWith(href));
  return (
    <li className="relative">
      <a
        href={href}
        className={`font-InterBold lg:text-[0.5rem] text-[0.6rem] transition-all duration-300 ease-in-out ${
          isActive ? "text-LightBlue-d" : "text-neutral-g hover:text-LightBlue-d"
        }`}
      >
        {Menu}
      </a>
      {isActive && (
        <div className="absolute -bottom-[0.2rem] left-1/2 -translate-x-1/2 w-[60%] h-[0.2rem] bg-LightBlue-c rounded-full" />
      )}
    </li>
  );
};

export default NavItem;
