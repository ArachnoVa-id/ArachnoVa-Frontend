const ServicesOptionButton = ({ href }) => {
  return (
    <a
      href={href}
      className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-0.417vw] hover:scale-[110%] transition-all duration-500 ease-in-out
                 lg:h-[2.396vw] lg:w-[15.833vw] lg:rounded-[0.417vw]
                 h-[9.302vw] w-[22.326vw] rounded-[1.86vw]"
    >
      <p
        className="font-InterBold text-neutral-a
                   lg:text-[0.833vw]
                   text-[3.256vw]"
      >
        Pilih Paket
      </p>
    </a>
  );
};

export default ServicesOptionButton;
