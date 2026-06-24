const ContentHeaderLeft = ({ Title, Icon }) => {
  return (
    <div className="lg:w-[16.0rem] w-full flex flex-row justify-between items-center lg:mt-[0.78rem]">
      {Icon}
      <p className="font-SourceSansProBold text-neutral-g lg:text-[1.25rem] text-[4.7rem] lg:mr-[2.1rem] mr-[8.9rem]">
        {Title}
      </p>
      <div className="flex flex-row lg:w-[3.1rem] w-[11.6rem] justify-between">
        <div
          className="lg:w-[0.73rem] w-[2.3rem] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
            boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
          }}
        />
        <div
          className="lg:w-[0.73rem] w-[2.3rem] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
            boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
          }}
        />
        <div
          className="lg:w-[0.73rem] w-[2.3rem] aspect-[1/1] rounded-full"
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
