const Button = ({ Text, href }) => {
	return (
		<a
			href={href}
			className="lg:w-[5.677vw] lg:aspect-[109/40] lg:rounded-[0.417vw] lg:flex hidden cursor-pointer items-center justify-center bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out"
		>
			<p className="font-InterBold text-[0.729vw] text-surface">{Text}</p>
		</a>
	);
};

export default Button;
