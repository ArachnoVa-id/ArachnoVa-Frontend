import { useEffect, useRef } from "react";

export default function MarqueeCarousel({ images, direction = "left" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !images?.length) return;

    const speed = 20;
    let animId;
    let pos = 0;

    const step = () => {
      pos += direction === "left" ? -0.5 : 0.5;
      container.style.transform = `translateX(${pos}px)`;

      const totalWidth = container.scrollWidth;
      const viewWidth = container.parentElement?.clientWidth || window.innerWidth;
      const threshold = direction === "left" ? -(totalWidth - viewWidth) - 50 : 50;

      if ((direction === "left" && pos <= threshold) || (direction === "right" && pos >= threshold)) {
        pos = 0;
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [images, direction]);

  if (!images?.length) return null;

  return (
    <div className="overflow-hidden w-full">
      <div ref={containerRef} className="flex gap-[clamp(0.2rem,0.5vw,0.72rem)] will-change-transform" style={{ width: "max-content" }}>
        {images.map((src, i) => (
          <div key={i} className="flex-shrink-0 lg:w-[clamp(2.24rem,14.0vw,20.16rem)] w-[clamp(7.2rem,45.0vw,50rem)] aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-sm">
            <img src={src} alt="" className="w-full h-full object-cover" draggable="false" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
