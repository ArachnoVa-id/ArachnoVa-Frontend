const ContentHeaderRight = ({ Title, Icon }) => {
  return (
    <div className="lg:w-[14.0rem] w-full flex flex-row justify-between items-center lg:mt-[0.68rem]">
      <div className="flex flex-row lg:w-[2.7rem] w-[10.2rem] justify-between">
        <div
          className="lg:w-[0.64rem] w-[2.0rem] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
            boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
          }}
        />
        <div
          className="lg:w-[0.64rem] w-[2.0rem] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
            boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
          }}
        />
        <div
          className="lg:w-[0.64rem] w-[2.0rem] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
            boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0",
          }}
        />
      </div>
      <p className="font-SourceSansProBold text-neutral-g lg:text-[1.09rem] text-[4.1rem] lg:ml-[1.86rem] ml-[7.8rem]">
        {Title}
      </p>
      {Icon}
    </div>
  );
};

export default ContentHeaderRight;
