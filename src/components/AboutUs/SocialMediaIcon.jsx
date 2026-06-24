const SocialMediaIcon = ({ Icon, href }) => {
	return (
		<a
			href={href}
			className="lg:w-[7.42rem] w-[21.77rem] aspect-[1/1] rounded-full bg-[#1AB0C8] hover:bg-LightBlue-a flex justify-center items-center cursor-pointer"
		>
			{Icon}
		</a>
	);
};

export default SocialMediaIcon;
