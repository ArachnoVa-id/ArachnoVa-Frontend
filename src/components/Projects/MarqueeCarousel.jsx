import { useEffect, useRef } from "react";

export default function MarqueeCarousel({ images, direction = "left" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !images?.length) return;

    const speed = 30;
    let animId;
    let pos = 0;

    const step = () => {
      pos += direction === "left" ? -0.5 : 0.5;
      container.style.transform = `translateX(${pos}px)`;
      const threshold = direction === "left"
        ? -(container.scrollWidth / 2)
        : 0;
      if (direction === "left" && pos <= threshold) pos = 0;
      if (direction === "right" && pos >= 0) pos = -(container.scrollWidth / 2);
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [images, direction]);

  if (!images?.length) return null;

  return (
    <div className="overflow-hidden w-full">
      <div ref={containerRef} className="flex gap-[0.5vw] will-change-transform" style={{ width: "max-content" }}>
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 lg:w-[14vw] w-[45vw] aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-sm"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              draggable="false"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
