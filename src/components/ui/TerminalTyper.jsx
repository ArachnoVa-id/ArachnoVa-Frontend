import { useState, useEffect } from "react";

const parts = [
  { text: ".\\arachnova-", color: "text-[#8131B2]" },
  { text: "official-site", color: "text-[#0151EC]" },
  { text: " > ", color: "text-[#1CA7BD]" },
  { text: "npm run dev", color: "text-ink" },
];

const fullText = parts.map((p) => p.text).join("");

export default function TerminalTyper({ speed = 50 }) {
  const [chars, setChars] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (chars >= fullText.length) return setDone(true);
    const t = setTimeout(() => setChars((v) => v + 1), speed);
    return () => clearTimeout(t);
  }, [chars, speed]);

  let consumed = 0;
  const visible = [];

  for (const part of parts) {
    const start = consumed;
    const end = consumed + part.text.length;
    consumed = end;
    if (chars >= end) {
      visible.push(<span key={start} className={part.color}>{part.text}</span>);
    } else if (chars > start) {
      visible.push(
        <span key={start} className={part.color}>{part.text.slice(0, chars - start)}</span>
      );
    }
  }

  return (
    <>
      {visible}
      {!done && (
        <span className="w-[0.05em] h-[1.1em] bg-teal animate-pulse inline-block align-text-bottom ml-[0.05em]" />
      )}
    </>
  );
}
