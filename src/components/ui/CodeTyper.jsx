import { useState, useEffect } from "react";

const codeData = [
  [{ c: "#0151EC", w: ['import ', '"./globals.css";'] }],
  [{ c: "#1E293B", w: ['import { '] }, { c: "#1CA7BD", w: ['ArachnoVa'] }, { c: "#1E293B", w: [' } from '] }, { c: "#8131B2", w: ['"./api/provider";'] }],
  [{ c: "#1E293B", w: ['\u00A0'] }],
  [{ c: "#0151EC", w: ['export default'] }],
  [{ c: "#1E293B", w: ['<div className="'] }, { c: "#8131B2", w: ['Welcome to ArachnoVa'] }, { c: "#1E293B", w: ['">'] }],
  [{ c: "#1E293B", w: ['\u00A0 <div className="'] }, { c: "#8131B2", w: ['content'] }, { c: "#1E293B", w: ['">'] }],
  [{ c: "#8131B2", w: ['\u00A0 \u00A0 "Your web design partner"'] }],
  [{ c: "#1E293B", w: ['\u00A0 </div>'] }],
  [{ c: "#1E293B", w: ['\u00A0 <img src="img/herofix.png"/>'] }],
  [{ c: "#1E293B", w: ['</div>'] }],
];

function flattenWords() {
  const all = [];
  for (const line of codeData) {
    const words = [];
    for (const token of line) {
      for (const w of token.w) {
        const parts = w.split(/(\s+)/);
        for (const p of parts) {
          if (p.length > 0) words.push({ text: p, color: token.c });
        }
      }
    }
    all.push(words);
  }
  return all;
}

const flatLines = flattenWords();

export default function CodeTyper({ speed = 70, className }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= flatLines.length) return;
    const maxW = flatLines[lineIdx].length;
    if (wordIdx < maxW) {
      const t = setTimeout(() => setWordIdx((v) => v + 1), speed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((v) => v + 1);
      setWordIdx(0);
    }, speed * 2.5);
    return () => clearTimeout(t);
  }, [lineIdx, wordIdx, speed]);

  return (
    <div className={className || ""}>
      {flatLines.slice(0, lineIdx + 1).map((line, li) => {
        const isDone = li < lineIdx;
        const max = isDone ? line.length : wordIdx;
        const isLastLine = li === lineIdx;
        return (
          <p key={li} className="whitespace-pre-wrap">
            {line.slice(0, max).map((word, wi) => (
              <span key={wi} style={{ color: word.color }}>{word.text}</span>
            ))}
            {isLastLine && lineIdx < flatLines.length && (
              <span className="w-[0.05em] h-[1.1em] bg-teal animate-pulse inline-block align-text-bottom ml-[0.05em]" />
            )}
          </p>
        );
      })}
    </div>
  );
}
