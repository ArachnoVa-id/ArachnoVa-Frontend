import { IoCall } from "react-icons/io5";
import ContentHeader from "./ContentHeader";

const Content = ({ Title, Icon, List, Variant, Position }) => {
  return (
    <div
      className={`${Position} lg:w-[clamp(2.92rem,18.281vw,26.32rem)] lg:h-[clamp(1.85rem,11.563vw,16.65rem)] w-[clamp(11.65rem,72.791vw,50rem)] h-[clamp(6.51rem,40.698vw,50rem)] flex flex-col items-center border-solid lg:p-0 px-[clamp(0.74rem,4.651vw,6.7rem)] pt-[clamp(0.56rem,3.488vw,5.02rem)] lg:rounded-[clamp(0.2rem,0.833vw,1.2rem)] rounded-[clamp(0.6rem,3.721vw,5.36rem)] lg:border-[0.104vw] border-[0.465vw] border-white z-[10]`}
      style={{
        background: "rgba(241, 245, 249, 0.50)",
        boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
        backdropFilter: "blur(8px)",
      }}
    >
      <ContentHeader Title={Title} Icon={Icon} Variant={Variant} />
      <div className="lg:w-[clamp(2.42rem,15.104vw,21.75rem)] w-full font-SourceSansProSemibold lg:text-[clamp(0.5rem,0.938vw,1.35rem)] text-[clamp(0.52rem,3.256vw,4.69rem)] lg:ml-[clamp(0.25rem,1.563vw,2.25rem)] mt-[clamp(0.32rem,2.0vw,2.88rem)] lg:mt-0 lg:pl-0 pl-[clamp(0.64rem,4.014vw,5.78rem)]">
        <ul className="list-disc text-neutral-e lg:leading-[clamp(0.2rem,1.146vw,1.65rem)]">
          {List}
        </ul>
      </div>
    </div>
  );
};

export default Content;
