import Image from "@/components/ui/Img";

const OptionButton = ({ _key, icon, text, selected }) => {
  const bordercolor = (key, selected) => {
    if (_key === selected) {
      return "border-[#1AB0C8]";
    } else {
      return "border-border";
    }
  };
  return (
    <div
      className={`flex justify-start items-center bg-[#FAFDFF] 
                  ${bordercolor(_key, selected)}
                  lg:min-w-[15.6rem] lg:h-[4.7rem] lg:p-[1.04rem] lg:gap-[1.04rem] lg:rounded-[0.78rem] lg:border-[0.16rem] lg:shadow-[0px_8px_17px_-2px_rgba(0,0,0,0.15)]
                  min-w-0 h-auto p-[3.5rem] rounded-[2.3rem] border-[0.35rem] shadow-[0px_7px_74px_-11px_rgba(0,0,0,0.15)]`}
    >
      <div
        className="lg:w-[2.6rem]
                   w-[9.1rem]"
      >
        <Image
          src={icon}
          draggable="false"
          alt="icon"
          style={{ width: "100%", height: "auto" }}
          width="86"
          height="86"
        />
      </div>
      <div
        className="font-SourceSansProBold text-neutral-g text-nowrap
                   lg:text-[1.46rem] lg:flex
                   hidden"
      >
        {text}
      </div>
    </div>
  );
};

export default OptionButton;
