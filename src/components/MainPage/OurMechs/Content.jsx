import { IoCall } from "react-icons/io5";
import ContentHeader from "./ContentHeader";

const Content = ({ Title, Icon, List, Variant, Position }) => {
  return (
    <div
      className={`${Position} lg:w-[16.0rem] lg:h-[10.1rem] w-[63.7rem] h-[35.6rem] flex flex-col items-center border-solid lg:p-0 px-[4.1rem] pt-[3.1rem] lg:rounded-[0.73rem] rounded-[3.3rem] lg:border-[0.09rem] border-[0.41rem] border-white z-[10]`}
      style={{
        background: "rgba(241, 245, 249, 0.50)",
        boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
        backdropFilter: "blur(8px)",
      }}
    >
      <ContentHeader Title={Title} Icon={Icon} Variant={Variant} />
      <div className="lg:w-[13.2rem] w-full font-SourceSansProSemibold lg:text-[0.82rem] text-[2.8rem] lg:ml-[1.37rem] mt-[1.75rem] lg:mt-0 lg:pl-0 pl-[3.5rem]">
        <ul className="list-disc text-neutral-e lg:leading-[1.0rem]">
          {List}
        </ul>
      </div>
    </div>
  );
};

export default Content;
