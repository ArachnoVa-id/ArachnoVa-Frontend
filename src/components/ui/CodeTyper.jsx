import { useState, useEffect, useRef } from "react";

export default function CodeTyper({ lines, speed = 30, className }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }

    const line = lines[currentLine];
    const text = typeof line === "object" ? line.text : line;
    if (!text) {
      setVisibleLines((prev) => [...prev, ""]);
      setCurrentLine((c) => c + 1);
      return;
    }

    if (currentChar < text.length) {
      const timer = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(timer);
    }

    const lineContent = typeof line === "object"
      ? { text: text, color: line.color }
      : text;

    setVisibleLines((prev) => [...prev, lineContent]);
    setCurrentLine((c) => c + 1);
    setCurrentChar(0);
  }, [currentLine, currentChar, lines, speed]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines, currentChar]);

  const currentLineObj = lines[currentLine];
  const currentText = currentLineObj ? (typeof currentLineObj === "object" ? currentLineObj.text : currentLineObj) : "";
  const currentColor = currentLineObj && typeof currentLineObj === "object" ? currentLineObj.color : "";

  return (
    <div ref={containerRef} className={`overflow-hidden ${className || ""}`}>
      {visibleLines.map((line, i) => (
        <p key={i} className={typeof line === "object" ? "" : ""}>
          {typeof line === "object" ? (
            <>
              <span className={line.color || ""}>{line.text}</span>
            </>
          ) : (
            <span>{line}</span>
          )}
        </p>
      ))}
      {!done && currentText && (
        <p>
          <span className={currentColor || ""}>
            {currentText.slice(0, currentChar)}
          </span>
          <span className="animate-pulse text-LightBlue-c">|</span>
        </p>
      )}
    </div>
  );
}
