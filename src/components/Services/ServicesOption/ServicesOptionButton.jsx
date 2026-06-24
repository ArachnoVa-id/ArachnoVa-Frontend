const ServicesOptionButton = ({ href }) => {
  return (
    <a
      href={href}
      className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-6px] hover:scale-[110%] transition-all duration-500 ease-in-out
                 lg:h-[2.1rem] lg:w-[13.9rem] lg:rounded-[0.36rem]
                 h-[8.1rem] w-[19.5rem] rounded-[1.63rem]"
    >
      <p
        className="font-InterBold text-neutral-a
                   lg:text-[0.73rem]
                   text-[2.8rem]"
      >
        Pilih Paket
      </p>
    </a>
  );
};

export default ServicesOptionButton;
