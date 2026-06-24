import { useState, useEffect } from "react";

const codeData = [
  [
    { c: "#569CD6", t: "import " },
    { c: "#CE9178", t: '"./globals.css";' },
  ],
  [
    { c: "#569CD6", t: "import " },
    { c: "#D4D4D4", t: "{ " },
    { c: "#4FC1FF", t: "ArachnoVa" },
    { c: "#D4D4D4", t: " } from " },
    { c: "#CE9178", t: '"./api/provider";' },
  ],
  [
    { c: "#D4D4D4", t: "\u00A0" },
  ],
  [
    { c: "#569CD6", t: "export default" },
  ],
  [
    { c: "#D4D4D4", t: "<" },
    { c: "#DCDCAA", t: "div" },
    { c: "#D4D4D4", t: " " },
    { c: "#9CDCFE", t: "className" },
    { c: "#D4D4D4", t: '="' },
    { c: "#CE9178", t: "Welcome to ArachnoVa" },
    { c: "#D4D4D4", t: '">' },
  ],
  [
    { c: "#D4D4D4", t: "\u00A0 <" },
    { c: "#DCDCAA", t: "div" },
    { c: "#D4D4D4", t: " " },
    { c: "#9CDCFE", t: "className" },
    { c: "#D4D4D4", t: '="' },
    { c: "#CE9178", t: "content" },
    { c: "#D4D4D4", t: '">' },
  ],
  [
    { c: "#D4D4D4", t: "\u00A0 {" },
  ],
  [
    { c: "#D4D4D4", t: "\u00A0\u00A0 " },
    { c: "#CE9178", t: '"Your web design partner"' },
  ],
  [
    { c: "#D4D4D4", t: "\u00A0 }" },
  ],
  [
    { c: "#D4D4D4", t: "\u00A0 " },
    { c: "#DCDCAA", t: "</div>" },
  ],
  [
    { c: "#D4D4D4", t: "\u00A0 <" },
    { c: "#DCDCAA", t: "img" },
    { c: "#D4D4D4", t: " " },
    { c: "#9CDCFE", t: "src" },
    { c: "#D4D4D4", t: '="' },
    { c: "#CE9178", t: "img/herofix.png" },
    { c: "#D4D4D4", t: '"/>' },
  ],
  [
    { c: "#DCDCAA", t: "</div>" },
  ],
];

export default function CodeTyper({ speed = 70, className, onDone }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= codeData.length) {
      return;
    }
    const maxW = codeData[lineIdx].length;
    if (wordIdx < maxW) {
      const t = setTimeout(() => setWordIdx((v) => v + 1), speed);
      return () => clearTimeout(t);
    }
    if (lineIdx === codeData.length - 1) {
      onDone?.();
      return;
    }
    const t = setTimeout(() => {
      setLineIdx((v) => v + 1);
      setWordIdx(0);
    }, speed * 2.5);
    return () => clearTimeout(t);
  }, [lineIdx, wordIdx, speed, onDone]);

  return (
    <div className={className || ""}>
      {codeData.slice(0, lineIdx + 1).map((line, li) => {
        const isDone = li < lineIdx;
        const max = isDone ? line.length : wordIdx;
        const isLastLine = li === lineIdx;
        return (
          <p key={li} className="whitespace-pre-wrap">
            {line.slice(0, max).map((word, wi) => (
              <span key={wi} style={{ color: word.c }}>{word.t}</span>
            ))}
            {isLastLine && lineIdx < codeData.length && (
              <span className="w-[0.05em] h-[1.1em] bg-LightBlue-c animate-pulse inline-block align-text-bottom ml-[0.05em]" />
            )}
          </p>
        );
      })}
    </div>
  );
}
