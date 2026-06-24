const ServicesOptionButton = ({ href }) => {
  return (
    <a
      href={href}
      className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-2px] hover:scale-[110%] transition-all duration-500 ease-in-out
                 lg:h-[3.45rem] lg:w-[22.8rem] lg:rounded-[0.6rem]
                 h-[13.39rem] w-[32.15rem] rounded-[2.68rem]"
    >
      <p
        className="font-InterBold text-neutral-a
                   lg:text-[1.2rem]
                   text-[4.69rem]"
      >
        Pilih Paket
      </p>
    </a>
  );
};

export default ServicesOptionButton;
