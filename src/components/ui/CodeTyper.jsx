import { useState, useEffect } from "react";

const codeData = [
  [{ c: "#569CD6", w: ["import "] }, { c: "#CE9178", w: ['"' , "./globals.css", '"', ";"] }],
  [{ c: "#569CD6", w: ["import { "] }, { c: "#9CDCFE", w: ["ArachnoVa"] }, { c: "#569CD6", w: [" } from "] }, { c: "#CE9178", w: ['"', "./api/provider", '"', ";"] }],
  [],
  [{ c: "#569CD6", w: ["export default"] }],
  [{ c: "#DCDCAA", w: ["<div "] }, { c: "#9CDCFE", w: ["className"] }, { c: "#D4D4D4", w: ['="'] }, { c: "#CE9178", w: ["Welcome to ArachnoVa"] }, { c: "#D4D4D4", w: ['">'] }],
  [{ c: "#D4D4D4", w: ["  "] }, { c: "#DCDCAA", w: ["<div "] }, { c: "#9CDCFE", w: ["className"] }, { c: "#D4D4D4", w: ['="'] }, { c: "#CE9178", w: ["content"] }, { c: "#D4D4D4", w: ['">'] }],
  [{ c: "#CE9178", w: ['    "', "Your web design partner", '"'] }],
  [{ c: "#DCDCAA", w: ["  </div>"] }],
  [{ c: "#D4D4D4", w: ["  "] }, { c: "#DCDCAA", w: ["<img "] }, { c: "#9CDCFE", w: ["src"] }, { c: "#D4D4D4", w: ['="'] }, { c: "#CE9178", w: ["img/herofix.png"] }, { c: "#D4D4D4", w: ['"/>'] }],
  [{ c: "#DCDCAA", w: ["</div>"] }],
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
const totalLines = flatLines.length;

export default function CodeTyper({ speed = 70, className, onDone }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const doneRef = useState(false);

  useEffect(() => {
    if (lineIdx >= totalLines) {
      onDone?.();
      return;
    }
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
  }, [lineIdx, wordIdx, speed, onDone]);

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
            {isLastLine && lineIdx < totalLines && (
              <span className="w-[0.05em] h-[1.1em] bg-LightBlue-c animate-pulse inline-block align-text-bottom ml-[0.05em]" />
            )}
          </p>
        );
      })}
    </div>
  );
}
