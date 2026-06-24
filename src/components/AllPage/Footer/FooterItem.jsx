const FooterItem = ({ Items, href }) => {
  return (
    <li className="">
      <a
        className="font-InterBold lg:text-[0.94rem] text-[4.2rem] text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
        href={href}
      >
        {Items}
      </a>
    </li>
  );
};

export default FooterItem;
