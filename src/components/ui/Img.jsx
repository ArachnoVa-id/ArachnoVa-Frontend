const Img = ({ src, alt, fill, width, height, className, style, draggable, ...props }) => {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt ?? ""}
        draggable={draggable}
        className={className}
        style={{
          ...style,
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        {...props}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt ?? ""}
      width={width}
      height={height}
      draggable={draggable}
      className={className}
      style={style}
      {...props}
    />
  );
};

export default Img;
