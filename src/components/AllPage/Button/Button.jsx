const Button = ({ Text, href }) => {
	return (
		<a
			href={href}
			className="lg:w-[clamp(0.91rem,5.677vw,8.17rem)] lg:aspect-[109/40] lg:rounded-[clamp(0.2rem,0.417vw,0.6rem)] lg:flex hidden cursor-pointer items-center justify-center bg-gradient-to-br from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out"
		>
			<p className="font-InterBold text-[clamp(0.5rem,0.729vw,1.05rem)] text-neutral-a">{Text}</p>
		</a>
	);
};

export default Button;
