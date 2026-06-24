import { useState, useEffect } from "react";

const codeData = [
  [{ c: "#0000CC", t: "import " }, { c: "#A31515", t: '"./globals.css";' }],
  [{ c: "#0000CC", t: "import " }, { c: "#333333", t: "{ " }, { c: "#001080", t: "ArachnoVa" }, { c: "#333333", t: " } from " }, { c: "#A31515", t: '"./api/provider";' }],
  [{ c: "#333333", t: "\u00A0" }],
  [{ c: "#0000CC", t: "export default" }],
  [{ c: "#333333", t: "<" }, { c: "#795E26", t: "div" }, { c: "#333333", t: " " }, { c: "#001080", t: "className" }, { c: "#333333", t: '="' }, { c: "#A31515", t: "Welcome to ArachnoVa" }, { c: "#333333", t: '">' }],
  [{ c: "#333333", t: "\u00A0 <" }, { c: "#795E26", t: "div" }, { c: "#333333", t: " " }, { c: "#001080", t: "className" }, { c: "#333333", t: '="' }, { c: "#A31515", t: "content" }, { c: "#333333", t: '">' }],
  [{ c: "#333333", t: "\u00A0 {" }],
  [{ c: "#333333", t: "\u00A0\u00A0 " }, { c: "#A31515", t: '"Your web design partner"' }],
  [{ c: "#333333", t: "\u00A0 }" }],
  [{ c: "#333333", t: "\u00A0 " }, { c: "#795E26", t: "</div>" }],
  [{ c: "#333333", t: "\u00A0 <" }, { c: "#795E26", t: "img" }, { c: "#333333", t: " " }, { c: "#001080", t: "src" }, { c: "#333333", t: '="' }, { c: "#A31515", t: "img/herofix.png" }, { c: "#333333", t: '"/>' }],
  [{ c: "#795E26", t: "</div>" }],
];

export default function CodeTyper({ speed = 70, className, onDone }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= codeData.length) return;
    const maxW = codeData[lineIdx].length;
    if (wordIdx < maxW) {
      const t = setTimeout(() => setWordIdx((v) => v + 1), speed);
      return () => clearTimeout(t);
    }
    if (lineIdx === codeData.length - 1) { onDone?.(); return; }
    const t = setTimeout(() => { setLineIdx((v) => v + 1); setWordIdx(0); }, speed * 2.5);
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
