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
                  lg:min-w-[22.5rem] lg:h-[6.75rem] lg:p-[1.5rem] lg:gap-[1.5rem] lg:rounded-[1.12rem] lg:border-[0.037rem] lg:shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.15)]
                  min-w-0 h-auto p-[5.02rem] rounded-[3.35rem] border-[0.082rem] shadow-[0px_2px_17px_-3px_rgba(0,0,0,0.15)]`}
    >
      <div
        className="lg:w-[3.75rem]
                   w-[13.06rem]"
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
                   lg:text-[2.1rem] lg:flex
                   hidden"
      >
        {text}
      </div>
    </div>
  );
};

export default OptionButton;
