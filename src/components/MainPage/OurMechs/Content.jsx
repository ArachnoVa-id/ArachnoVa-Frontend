import { IoCall } from "react-icons/io5";
import ContentHeader from "./ContentHeader";

const Content = ({ Title, Icon, List, Variant, Position }) => {
  return (
    <div
      className={`${Position} lg:w-[18.281vw] lg:h-[11.563vw] w-[72.791vw] h-[40.698vw] flex flex-col items-center border-solid lg:p-0 px-[4.651vw] pt-[3.488vw] lg:rounded-[0.833vw] rounded-[3.721vw] lg:border-[0.104vw] border-[0.465vw] border-white z-[10]`}
      style={{
        background: "rgba(241, 245, 249, 0.50)",
        boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
        backdropFilter: "blur(8px)",
      }}
    >
      <ContentHeader Title={Title} Icon={Icon} Variant={Variant} />
      <div className="lg:w-[15.104vw] w-full font-SourceSansProSemibold lg:text-[0.938vw] text-[3.256vw] lg:ml-[1.563vw] mt-[2vw] lg:mt-0 lg:pl-0 pl-[4.014vw]">
        <ul className="list-disc text-neutral-e lg:leading-[1.146vw]">
          {List}
        </ul>
      </div>
    </div>
  );
};

export default Content;
