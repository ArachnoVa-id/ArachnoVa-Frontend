const ContentHeaderLeft = ({ Title, Icon }) => {
  return (
    <div className="lg:w-[9.0rem] w-full flex flex-row justify-between items-center lg:mt-[0.44rem]">
      {Icon}
      <p className="font-SourceSansProBold text-neutral-g lg:text-[0.7rem] text-[2.6rem] lg:mr-[1.2rem] mr-[5.0rem]">
        {Title}
      </p>
      <div className="flex flex-row lg:w-[1.76rem] w-[6.5rem] justify-between">
        <div
          className="lg:w-[0.41rem] w-[1.31rem] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
            boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
          }}
        />
        <div
          className="lg:w-[0.41rem] w-[1.31rem] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
            boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
          }}
        />
        <div
          className="lg:w-[0.41rem] w-[1.31rem] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
            boxShadow: "0px 1px 2px -1px #A7F3D0, 0px 1px 3px 0px #A7F3D0",
          }}
        />
      </div>
    </div>
  );
};

export default ContentHeaderLeft;
