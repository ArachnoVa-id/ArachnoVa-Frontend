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
                  lg:min-w-[clamp(2.5rem,15.625vw,22.5rem)] lg:h-[clamp(0.75rem,4.688vw,6.75rem)] lg:p-[clamp(0.2rem,1.042vw,1.5rem)] lg:gap-[clamp(0.2rem,1.042vw,1.5rem)] lg:rounded-[clamp(0.2rem,0.781vw,1.12rem)] lg:border-[0.156vw] lg:shadow-[0px_0.469vw_1.042vw_-0.156vw_rgba(0,0,0,0.15)]
                  min-w-0 h-auto p-[clamp(0.56rem,3.488vw,5.02rem)] rounded-[clamp(0.37rem,2.326vw,3.35rem)] border-[0.349vw] shadow-[0px_0.465vw_4.651vw_-0.698vw_rgba(0,0,0,0.15)]`}
    >
      <div
        className="lg:w-[clamp(0.42rem,2.604vw,3.75rem)]
                   w-[clamp(1.45rem,9.07vw,13.06rem)]"
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
                   lg:text-[clamp(0.5rem,1.458vw,2.1rem)] lg:flex
                   hidden"
      >
        {text}
      </div>
    </div>
  );
};

export default OptionButton;
