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
                  lg:min-w-[13.7rem] lg:h-[4.1rem] lg:p-[0.91rem] lg:gap-[0.91rem] lg:rounded-[0.68rem] lg:border-[0.14rem] lg:shadow-[0px_7px_15px_-2px_rgba(0,0,0,0.15)]
                  min-w-0 h-auto p-[3.1rem] rounded-[2.0rem] border-[0.31rem] shadow-[0px_7px_65px_-10px_rgba(0,0,0,0.15)]`}
    >
      <div
        className="lg:w-[2.3rem]
                   w-[7.9rem]"
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
                   lg:text-[1.28rem] lg:flex
                   hidden"
      >
        {text}
      </div>
    </div>
  );
};

export default OptionButton;
