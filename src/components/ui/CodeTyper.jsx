import { useState, useEffect } from "react";

export default function CodeTyper({ children, speed = 200, className }) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (!children || visible >= children.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), speed);
    return () => clearTimeout(t);
  }, [visible, children, speed]);

  if (!children) return null;

  return (
    <div className={className || ""}>
      {children.slice(0, visible)}
      {visible < children.length && (
        <p className="flex items-center gap-1">
          <span className="w-2 h-4 bg-LightBlue-c animate-pulse inline-block" />
        </p>
      )}
    </div>
  );
}
