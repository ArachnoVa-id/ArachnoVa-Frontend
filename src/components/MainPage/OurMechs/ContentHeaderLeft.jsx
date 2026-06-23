const ContentHeaderLeft = ({ Title, Icon }) => {
  return (
    <div className="lg:w-[16.042vw] w-full flex flex-row justify-between items-center lg:mt-[0.781vw]">
      {Icon}
      <p className="font-SourceSansProBold text-neutral-g lg:text-[1.25vw] text-[4.651vw] lg:mr-[2.125vw] mr-[8.926vw]">
        {Title}
      </p>
      <div className="flex flex-row lg:w-[3.125vw] w-[11.628vw] justify-between">
        <div
          className="lg:w-[0.729vw] w-[2.326vw] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
            boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
          }}
        />
        <div
          className="lg:w-[0.729vw] w-[2.326vw] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
            boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
          }}
        />
        <div
          className="lg:w-[0.729vw] w-[2.326vw] aspect-[1/1] rounded-full"
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
