import { useEffect, useRef } from "react";

export default function MarqueeCarousel({ items, direction = "left", onItemClick }) {
  const containerRef = useRef(null);
  const images = items?.map((i) => i.src) || [];

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !items?.length) return;

    const speed = 20;
    let animId;
    let pos = 0;
    const singleWidth = container.scrollWidth / 2;

    const step = () => {
      pos += direction === "left" ? -0.5 : 0.5;
      if (direction === "left" && pos <= -singleWidth) pos = 0;
      if (direction === "right" && pos >= 0) pos = -singleWidth;
      container.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [items, direction]);

  if (!items?.length) return null;

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <div ref={containerRef} className="flex items-center gap-[0.5rem] will-change-transform" style={{ width: "max-content" }}>
        {doubled.map((item, i) => {
          // one row height; each kind keeps its own shape
          const shape = item.kind === "logo"
            ? "aspect-square rounded-full bg-white shadow-md self-center lg:!h-[6.5rem] !h-[clamp(5.5rem,28vw,21rem)] mx-[0.6rem]"
            : item.kind === "mobile"
              ? "aspect-[245/485] rounded-[0.9rem] border border-border shadow-sm"
              : "aspect-[4/3] rounded-lg border border-border shadow-sm";
          return (
            <div
              key={i}
              onClick={() => onItemClick?.(item.projectId)}
              className={`relative group flex-shrink-0 lg:h-[10.5rem] h-[clamp(9rem,45vw,33.75rem)] overflow-hidden cursor-pointer ${shape}`}
            >
              <img
                src={item.src}
                alt=""
                className={`w-full h-full transition-opacity duration-300 group-hover:opacity-40 ${item.kind === "logo" ? "object-contain p-[14%]" : "object-cover object-top"}`}
                draggable="false"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                <span className={`text-white font-bold text-center px-2 drop-shadow-lg [text-shadow:_0_1px_4px_rgba(0,0,0,0.6)] ${item.kind === "desktop" ? "text-[13px] md:text-sm" : "text-[11px]"}`}>
                  {item.projectTitle}
                </span>
              </div>
            </div>
          );
        })}
        ))}
      </div>
    </div>
  );
}
