import Image from "@/components/ui/Img";

const OptionButton = ({ _key, icon, text, selected }) => {
  const bordercolor = (key, selected) => {
    if (_key === selected) {
      return "border-[#0891B2]";
    } else {
      return "border-border";
    }
  };
  return (
    <div
      className={`flex justify-start items-center bg-[#FAFDFF] 
                  ${bordercolor(_key, selected)}
                  lg:min-w-[15.625vw] lg:h-[4.688vw] lg:p-[1.042vw] lg:gap-[1.042vw] lg:rounded-[0.781vw] lg:border-[0.156vw] lg:shadow-[0px_0.469vw_1.042vw_-0.156vw_rgba(0,0,0,0.15)]
                  min-w-0 h-auto p-[3.488vw] rounded-[2.326vw] border-[0.349vw] shadow-[0px_0.465vw_4.651vw_-0.698vw_rgba(0,0,0,0.15)]`}
    >
      <div
        className="lg:w-[2.604vw]
                   w-[9.07vw]"
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
        className="font-SourceSansProBold text-ink text-nowrap
                   lg:text-[1.458vw] lg:flex
                   hidden"
      >
        {text}
      </div>
    </div>
  );
};

export default OptionButton;
