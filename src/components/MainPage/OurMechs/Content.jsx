import { IoCall } from "react-icons/io5";
import ContentHeader from "./ContentHeader";

const Content = ({ Title, Icon, List, Variant, Position }) => {
  return (
    <div
      className={`${Position} lg:w-[2.92rem] lg:h-[1.85rem] w-[11.65rem] h-[6.51rem] flex flex-col items-center border-solid lg:p-0 px-[0.74rem] pt-[0.56rem] lg:rounded-[0.2rem] rounded-[0.6rem] lg:border-[0.027rem] border-[0.12rem] border-white z-[10]`}
      style={{
        background: "rgba(241, 245, 249, 0.50)",
        boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
        backdropFilter: "blur(8px)",
      }}
    >
      <ContentHeader Title={Title} Icon={Icon} Variant={Variant} />
      <div className="lg:w-[2.42rem] w-full font-SourceSansProSemibold lg:text-[0.5rem] text-[0.52rem] lg:ml-[0.25rem] mt-[0.32rem] lg:mt-0 lg:pl-0 pl-[0.64rem]">
        <ul className="list-disc text-neutral-e lg:leading-[0.2rem]">
          {List}
        </ul>
      </div>
    </div>
  );
};

export default Content;
