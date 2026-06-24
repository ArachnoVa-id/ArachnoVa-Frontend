const ServicesOptionButton = ({ href }) => {
  return (
    <a
      href={href}
      className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-2px] hover:scale-[110%] transition-all duration-500 ease-in-out
                 lg:h-[0.38rem] lg:w-[2.53rem] lg:rounded-[0.2rem]
                 h-[1.49rem] w-[3.57rem] rounded-[0.3rem]"
    >
      <p
        className="font-InterBold text-neutral-a
                   lg:text-[0.5rem]
                   text-[0.52rem]"
      >
        Pilih Paket
      </p>
    </a>
  );
};

export default ServicesOptionButton;
