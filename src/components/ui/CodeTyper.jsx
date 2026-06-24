import { useState, useEffect } from "react";

const codeData = [
  // Line 1: import "./globals.css";
  [
    { c: "#0151EC", t: "import " },
    { c: "#8131B2", t: '"./globals.css";' },
  ],
  // Line 2: import { ArachnoVa } from "./api/provider";
  [
    { c: "#0151EC", t: "import " },
    { c: "#1E293B", t: "{ " },
    { c: "#1CA7BD", t: "ArachnoVa" },
    { c: "#1E293B", t: " } from " },
    { c: "#8131B2", t: '"./api/provider";' },
  ],
  // Line 3: &nbsp; (empty)
  [
    { c: "#1E293B", t: "\u00A0" },
  ],
  // Line 4: export default
  [
    { c: "#0151EC", t: "export default" },
  ],
  // Line 5: <div className="Welcome to ArachnoVa">
  [
    { c: "#1E293B", t: '<div ' },
    { c: "#0151EC", t: "className" },
    { c: "#1E293B", t: '="' },
    { c: "#8131B2", t: "Welcome to ArachnoVa" },
    { c: "#1E293B", t: '">' },
  ],
  // Line 6:   <div className="content">
  [
    { c: "#1E293B", t: '\u00A0 <div ' },
    { c: "#0151EC", t: "className" },
    { c: "#1E293B", t: '="' },
    { c: "#8131B2", t: "content" },
    { c: "#1E293B", t: '">' },
  ],
  // Line 7:   {
  [
    { c: "#1E293B", t: "\u00A0 {" },
  ],
  // Line 8:     "Your web design partner"
  [
    { c: "#1E293B", t: "\u00A0\u00A0 " },
    { c: "#8131B2", t: '"Your web design partner"' },
  ],
  // Line 9:   }
  [
    { c: "#1E293B", t: "\u00A0 }" },
  ],
  // Line 10:   </div>
  [
    { c: "#1E293B", t: "\u00A0 </div>" },
  ],
  // Line 11:   <img src="img/herofix.png"/>
  [
    { c: "#1E293B", t: "\u00A0 <" },
    { c: "#0151EC", t: "img" },
    { c: "#1E293B", t: ' src="' },
    { c: "#8131B2", t: "img/herofix.png" },
    { c: "#1E293B", t: '"/>' },
  ],
  // Line 12: </div>
  [
    { c: "#1E293B", t: "</div>" },
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
