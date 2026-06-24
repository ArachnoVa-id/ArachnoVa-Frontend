const ContentHeaderRight = ({ Title, Icon }) => {
  return (
    <div className="lg:w-[23.1rem] w-full flex flex-row justify-between items-center lg:mt-[1.12rem]">
      <div className="flex flex-row lg:w-[4.5rem] w-[16.74rem] justify-between">
        <div
          className="lg:w-[1.05rem] w-[3.35rem] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
            boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
          }}
        />
        <div
          className="lg:w-[1.05rem] w-[3.35rem] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
            boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
          }}
        />
        <div
          className="lg:w-[1.05rem] w-[3.35rem] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
            boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0",
          }}
        />
      </div>
      <p className="font-SourceSansProBold text-neutral-g lg:text-[1.8rem] text-[6.7rem] lg:ml-[3.06rem] ml-[12.85rem]">
        {Title}
      </p>
      {Icon}
    </div>
  );
};

export default ContentHeaderRight;
