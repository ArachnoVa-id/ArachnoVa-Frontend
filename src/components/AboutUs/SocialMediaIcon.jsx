const SocialMediaIcon = ({ Icon, href }) => {
	return (
		<a
			href={href}
			className="lg:w-[2.9rem] w-[8.5rem] aspect-[1/1] rounded-full bg-[#1AB0C8] hover:bg-LightBlue-a flex justify-center items-center cursor-pointer"
		>
			{Icon}
		</a>
	);
};

export default SocialMediaIcon;
