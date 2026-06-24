const NavItem = ({ Menu, href, path }) => {
  const isActive = path === href || (href !== "/" && path.startsWith(href));
  return (
    <li className="relative">
      <a
        href={href}
        className={`font-InterBold lg:text-[1.2rem] text-[5.36rem] transition-all duration-300 ease-in-out ${
          isActive ? "text-LightBlue-d" : "text-neutral-g hover:text-LightBlue-d"
        }`}
      >
        {Menu}
      </a>
      {isActive && (
        <div className="absolute -bottom-[0.43rem] left-1/2 -translate-x-1/2 w-[60%] h-[0.22rem] bg-LightBlue-c rounded-full" />
      )}
    </li>
  );
};

export default NavItem;
