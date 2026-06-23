const NavItem = ({ Menu, href, path }) => {
  const isActive = path === href || (href !== "/" && path.startsWith(href));
  return (
    <li className="relative">
      <a
        href={href}
        className={`font-InterBold lg:text-[0.833vw] text-[3.721vw] transition-all duration-300 ease-in-out ${
          isActive ? "text-LightBlue-d" : "text-neutral-g hover:text-LightBlue-d"
        }`}
      >
        {Menu}
      </a>
      {isActive && (
        <div className="absolute -bottom-[0.3vw] left-1/2 -translate-x-1/2 w-[60%] h-[0.156vw] bg-LightBlue-c rounded-full" />
      )}
    </li>
  );
};

export default NavItem;
