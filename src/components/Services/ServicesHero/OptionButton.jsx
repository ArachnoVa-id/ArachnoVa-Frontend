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
                  lg:min-w-[8.8rem] lg:h-[2.6rem] lg:p-[0.59rem] lg:gap-[0.59rem] lg:rounded-[0.44rem] lg:border-[0.09rem] lg:shadow-[0px_4px_9px_-1px_rgba(0,0,0,0.15)]
                  min-w-0 h-auto p-[1.96rem] rounded-[1.31rem] border-[0.2rem] shadow-[0px_4px_42px_-6px_rgba(0,0,0,0.15)]`}
    >
      <div
        className="lg:w-[1.46rem]
                   w-[5.1rem]"
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
                   lg:text-[0.82rem] lg:flex
                   hidden"
      >
        {text}
      </div>
    </div>
  );
};

export default OptionButton;
