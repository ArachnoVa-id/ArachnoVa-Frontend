const FooterItem = ({ Items, href }) => {
  return (
    <li className="">
      <a
        className="font-InterBold lg:text-[0.938vw] text-[4.186vw] text-surface hover:text-inkMuted transition-all duration-500 ease-in-out"
        href={href}
      >
        {Items}
      </a>
    </li>
  );
};

export default FooterItem;
