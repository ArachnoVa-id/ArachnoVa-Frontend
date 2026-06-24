const ContentHeaderLeft = ({ Title, Icon }) => {
  return (
    <div className="lg:w-[clamp(2.57rem,16.042vw,23.1rem)] w-full flex flex-row justify-between items-center lg:mt-[clamp(0.2rem,0.781vw,1.12rem)]">
      {Icon}
      <p className="font-SourceSansProBold text-neutral-g lg:text-[clamp(0.5rem,1.25vw,1.8rem)] text-[clamp(0.74rem,4.651vw,6.7rem)] lg:mr-[clamp(0.34rem,2.125vw,3.06rem)] mr-[clamp(1.43rem,8.926vw,12.85rem)]">
        {Title}
      </p>
      <div className="flex flex-row lg:w-[clamp(0.5rem,3.125vw,4.5rem)] w-[clamp(1.86rem,11.628vw,16.74rem)] justify-between">
        <div
          className="lg:w-[clamp(0.2rem,0.729vw,1.05rem)] w-[clamp(0.37rem,2.326vw,3.35rem)] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)",
            boxShadow: "0px 1px 2px -1px #FECDD3, 0px 1px 3px 0px #FECDD3",
          }}
        />
        <div
          className="lg:w-[clamp(0.2rem,0.729vw,1.05rem)] w-[clamp(0.37rem,2.326vw,3.35rem)] aspect-[1/1] rounded-full"
          style={{
            background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
            boxShadow: "0px 1px 2px -1px #FDE68A, 0px 1px 3px 0px #FDE68A",
          }}
        />
        <div
          className="lg:w-[clamp(0.2rem,0.729vw,1.05rem)] w-[clamp(0.37rem,2.326vw,3.35rem)] aspect-[1/1] rounded-full"
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
