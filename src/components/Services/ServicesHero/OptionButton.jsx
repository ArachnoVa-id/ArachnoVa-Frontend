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
                  lg:min-w-[2.5rem] lg:h-[0.75rem] lg:p-[0.2rem] lg:gap-[0.2rem] lg:rounded-[0.2rem] lg:border-[3px] lg:shadow-[0px_9px_20px_-3px_rgba(0,0,0,0.15)]
                  min-w-0 h-auto p-[0.56rem] rounded-[0.37rem] border-[7px] shadow-[0px_9px_89px_-13px_rgba(0,0,0,0.15)]`}
    >
      <div
        className="lg:w-[0.42rem]
                   w-[1.45rem]"
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
                   lg:text-[0.5rem] lg:flex
                   hidden"
      >
        {text}
      </div>
    </div>
  );
};

export default OptionButton;
