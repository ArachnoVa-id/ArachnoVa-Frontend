const SocialMediaIcon = ({ Icon, href }) => {
  return (
    <a
      href={href}
      className="lg:w-[2.8rem] w-[12rem] aspect-[1/1] rounded-full bg-[#1AB0C8] hover:bg-LightBlue-d flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md"
    >
      {Icon}
    </a>
  );
};

export default SocialMediaIcon;
