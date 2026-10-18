const Button = ({ Text, href }) => {
	return (
		<a
			href={href}
			className="lg:px-[1.0rem] lg:h-[2.1rem] whitespace-nowrap lg:rounded-[0.42rem] lg:flex hidden cursor-pointer items-center justify-center bg-gradient-to-br from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-3px] transition-all duration-500 ease-in-out"
		>
			<p className="font-InterBold text-[0.73rem] text-neutral-a">{Text}</p>
		</a>
	);
};

export default Button;
