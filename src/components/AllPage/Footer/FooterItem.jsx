const FooterItem = ({ Items, href }) => {
  return (
    <li className="">
      <a
        className="font-InterBold lg:text-[clamp(0.5rem,0.938vw,1.35rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] text-neutral-a hover:text-neutral-d transition-all duration-500 ease-in-out"
        href={href}
      >
        {Items}
      </a>
    </li>
  );
};

export default FooterItem;
