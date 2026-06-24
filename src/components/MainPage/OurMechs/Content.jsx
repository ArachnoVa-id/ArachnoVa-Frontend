import { IoCall } from "react-icons/io5";
import ContentHeader from "./ContentHeader";

const Content = ({ Title, Icon, List, Variant, Position }) => {
  return (
    <div
      className={`${Position} lg:w-[18.3rem] lg:h-[11.6rem] w-[72.8rem] h-[40.7rem] flex flex-col items-center border-solid lg:p-0 px-[4.7rem] pt-[3.5rem] lg:rounded-[0.83rem] rounded-[3.7rem] lg:border-[0.1rem] border-[0.46rem] border-white z-[10]`}
      style={{
        background: "rgba(241, 245, 249, 0.50)",
        boxShadow: "0px 25px 50px -12px rgba(71, 85, 105, 0.25)",
        backdropFilter: "blur(8px)",
      }}
    >
      <ContentHeader Title={Title} Icon={Icon} Variant={Variant} />
      <div className="lg:w-[15.1rem] w-full font-SourceSansProSemibold lg:text-[0.94rem] text-[3.3rem] lg:ml-[1.56rem] mt-[2.0rem] lg:mt-0 lg:pl-0 pl-[4.0rem]">
        <ul className="list-disc text-neutral-e lg:leading-[1.15rem]">
          {List}
        </ul>
      </div>
    </div>
  );
};

export default Content;
