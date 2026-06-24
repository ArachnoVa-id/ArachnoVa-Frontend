const ServicesOptionButton = ({ href }) => {
  return (
    <a
      href={href}
      className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-4px] hover:scale-[110%] transition-all duration-500 ease-in-out
                 lg:h-[1.35rem] lg:w-[8.9rem] lg:rounded-[0.23rem]
                 h-[5.2rem] w-[12.6rem] rounded-[1.05rem]"
    >
      <p
        className="font-InterBold text-neutral-a
                   lg:text-[0.47rem]
                   text-[1.83rem]"
      >
        Pilih Paket
      </p>
    </a>
  );
};

export default ServicesOptionButton;
