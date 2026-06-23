const Img = ({ src, alt, fill, width, height, className, style, draggable, priority, ...props }) => {
  const shouldLazy = !priority && !fill;
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
      loading={shouldLazy ? "lazy" : undefined}
      decoding={shouldLazy ? "async" : undefined}
      {...props}
    />
  );
};

export default Img;
