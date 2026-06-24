import { useState, useEffect } from "react";

const prompt = ".\\arachnova-official-site > ";
const cmd = "npm run dev";
const full = prompt + cmd;

export default function TerminalTyper({ speed = 50, startDelay = 0 }) {
  const [phase, setPhase] = useState("waiting");
  const [cmdChars, setCmdChars] = useState(0);

  useEffect(() => {
    if (phase !== "waiting") return;
    const t = setTimeout(() => setPhase("prompt"), startDelay);
    return () => clearTimeout(t);
  }, [phase, startDelay]);

  useEffect(() => {
    if (phase !== "cmd") return;
    if (cmdChars >= cmd.length) return;
    const t = setTimeout(() => setCmdChars((v) => v + 1), speed);
    return () => clearTimeout(t);
  }, [phase, cmdChars, speed]);

  useEffect(() => {
    if (phase === "prompt") {
      const t = setTimeout(() => setPhase("cmd"), 400);
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <>
      {phase !== "waiting" && (
        <>
          <span className="text-[#8131B2]">{".\\arachnova-"}</span>
          <span className="text-[#0151EC]">{"official-site"}</span>
          <span className="text-[#1CA7BD]">{" > "}</span>
        </>
      )}
      {phase === "cmd" && (
        <span className="text-[#D4D4D4]">{cmd.slice(0, cmdChars)}</span>
      )}
      {phase === "cmd" && cmdChars < cmd.length && (
        <span className="w-[0.05em] h-[1.1em] bg-LightBlue-c animate-pulse inline-block align-text-bottom ml-[0.05em]" />
      )}
    </>
  );
}
