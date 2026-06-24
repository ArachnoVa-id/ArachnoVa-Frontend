import { IoCall } from "react-icons/io5";
import ContentHeader from "./ContentHeader";

const Content = ({ Title, Icon, List, Variant, Position }) => {
  return (
    <div
      className={`${Position} lg:w-[10.3rem] lg:h-[6.5rem] w-[40.9rem] h-[22.9rem] flex flex-col items-center border-solid lg:p-0 px-[2.6rem] pt-[1.96rem] lg:rounded-[0.47rem] rounded-[2.1rem] lg:border-[0.06rem] border-[0.26rem] border-white z-[10]`}
      style={{
        background: "rgba(241, 245, 249, 0.50)",
        boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
        backdropFilter: "blur(8px)",
      }}
    >
      <ContentHeader Title={Title} Icon={Icon} Variant={Variant} />
      <div className="lg:w-[8.5rem] w-full font-SourceSansProSemibold lg:text-[0.53rem] text-[1.83rem] lg:ml-[0.88rem] mt-[1.12rem] lg:mt-0 lg:pl-0 pl-[2.3rem]">
        <ul className="list-disc text-neutral-e lg:leading-[0.64rem]">
          {List}
        </ul>
      </div>
    </div>
  );
};

export default Content;
