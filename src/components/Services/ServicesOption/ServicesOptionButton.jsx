const ServicesOptionButton = ({ href }) => {
  return (
    <a
      href={href}
      className="flex justify-center items-center bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] hover:translate-y-[-0.417vw] hover:scale-[110%] transition-all duration-500 ease-in-out
                 lg:h-[clamp(0.38rem,2.396vw,3.45rem)] lg:w-[clamp(2.53rem,15.833vw,22.8rem)] lg:rounded-[clamp(0.2rem,0.417vw,0.6rem)]
                 h-[clamp(1.49rem,9.302vw,13.39rem)] w-[clamp(3.57rem,22.326vw,32.15rem)] rounded-[clamp(0.3rem,1.86vw,2.68rem)]"
    >
      <p
        className="font-InterBold text-neutral-a
                   lg:text-[clamp(0.5rem,0.833vw,1.2rem)]
                   text-[clamp(0.52rem,3.256vw,4.69rem)]"
      >
        Pilih Paket
      </p>
    </a>
  );
};

export default ServicesOptionButton;
