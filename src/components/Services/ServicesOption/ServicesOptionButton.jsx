const ServicesOptionButton = ({ href }) => {
  return (
    <a
      href={href}
      className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-7px] hover:scale-[110%] transition-all duration-500 ease-in-out
                 lg:h-[2.4rem] lg:w-[15.8rem] lg:rounded-[0.42rem]
                 h-[9.3rem] w-[22.3rem] rounded-[1.86rem]"
    >
      <p
        className="font-InterBold text-neutral-a
                   lg:text-[0.83rem]
                   text-[3.3rem]"
      >
        Pilih Paket
      </p>
    </a>
  );
};

export default ServicesOptionButton;
