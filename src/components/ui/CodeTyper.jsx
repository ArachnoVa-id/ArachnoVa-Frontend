import { useState, useEffect } from "react";

const codeData = [
  [{ c: "#94A3B8", t: "// fundamentals first" }],
  [{ c: "#0151EC", t: "import " }, { c: "#1CA7BD", t: "core" }, { c: "#0151EC", t: " from " }, { c: "#8131B2", t: '"./xp";' }],
  [{ c: "#0151EC", t: "import " }, { c: "#1CA7BD", t: "ai" }, { c: "#0151EC", t: " from " }, { c: "#8131B2", t: '"./wave";' }],
  [{ c: "#1E293B", t: "\u00A0" }],
  [{ c: "#0151EC", t: "const " }, { c: "#1CA7BD", t: "solve" }, { c: "#1E293B", t: " = (" }, { c: "#B45309", t: "problem" }, { c: "#1E293B", t: ") =>" }],
  [{ c: "#1E293B", t: "\u00A0 " }, { c: "#0151EC", t: "sustainable" }, { c: "#1E293B", t: "(" }],
  [{ c: "#1E293B", t: "\u00A0\u00A0\u00A0 " }, { c: "#1CA7BD", t: "core" }],
  [{ c: "#1E293B", t: "\u00A0\u00A0\u00A0\u00A0\u00A0 ." }, { c: "#0151EC", t: "understand" }, { c: "#1E293B", t: "(" }, { c: "#B45309", t: "problem" }, { c: "#1E293B", t: ")" }],
  [{ c: "#1E293B", t: "\u00A0\u00A0\u00A0\u00A0\u00A0 ." }, { c: "#0151EC", t: "build" }, { c: "#1E293B", t: "({ " }, { c: "#1CA7BD", t: "ai" }, { c: "#1E293B", t: " })" }],
  [{ c: "#1E293B", t: "\u00A0 );" }],
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
