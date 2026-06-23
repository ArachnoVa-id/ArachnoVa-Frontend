const Button = ({ Text, href }) => {
	return (
		<a
			href={href}
			className="lg:w-[5.677vw] lg:aspect-[109/40] lg:rounded-[0.417vw] lg:flex hidden cursor-pointer items-center justify-center bg-gradient-to-br from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out"
		>
			<p className="font-InterBold text-[0.729vw] text-neutral-a">{Text}</p>
		</a>
	);
};

export default Button;
