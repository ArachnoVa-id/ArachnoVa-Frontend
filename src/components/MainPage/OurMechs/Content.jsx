import { IoCall } from "react-icons/io5";
import ContentHeader from "./ContentHeader";

const Content = ({ Title, Icon, List, Variant, Position }) => {
  return (
    <div
      className={`${Position} lg:w-[26.32rem] lg:h-[16.65rem] w-[50rem] h-[50rem] flex flex-col items-center border-solid lg:p-0 px-[6.7rem] pt-[5.02rem] lg:rounded-[1.2rem] rounded-[5.36rem] lg:border-[0.024rem] border-[0.11rem] border-white z-[10]`}
      style={{
        background: "rgba(241, 245, 249, 0.50)",
        boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
        backdropFilter: "blur(8px)",
      }}
    >
      <ContentHeader Title={Title} Icon={Icon} Variant={Variant} />
      <div className="lg:w-[21.75rem] w-full font-SourceSansProSemibold lg:text-[1.35rem] text-[4.69rem] lg:ml-[2.25rem] mt-[2.88rem] lg:mt-0 lg:pl-0 pl-[5.78rem]">
        <ul className="list-disc text-neutral-e lg:leading-[1.65rem]">
          {List}
        </ul>
      </div>
    </div>
  );
};

export default Content;
