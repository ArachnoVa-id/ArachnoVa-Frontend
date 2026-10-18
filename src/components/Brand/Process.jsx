import { FiSearch, FiCompass, FiPenTool, FiCpu, FiCheckCircle, FiRefreshCw } from "react-icons/fi";

// Problem-first, sustainable-by-default: how an engagement runs.
const STEPS = [
  { icon: FiSearch, title: "Understand the problem", text: "We start from what is actually broken in your operation, not from a feature list." },
  { icon: FiCompass, title: "Shape the solution", text: "Scope, milestones and the simplest design that solves it, agreed before we build." },
  { icon: FiPenTool, title: "Design with your users", text: "Flows and screens tested against the people who will use them every day." },
  { icon: FiCpu, title: "Build on fundamentals, with AI", text: "Solid engineering first; AI where it truly removes work, never as decoration." },
  { icon: FiCheckCircle, title: "Prove it works", text: "A live demo link from early on, tested on real devices and real traffic." },
  { icon: FiRefreshCw, title: "Keep it running", text: "Launch, monitoring and maintenance so the solution lasts beyond the handover." },
];

export default function Process() {
  return (
    <section aria-labelledby="process-title" className="w-full bg-white lg:px-24 px-4 lg:py-16 py-12">
      <div className="max-w-[72rem] mx-auto">
        <div className="text-center mb-10">
          <p className="font-SourceSansProBold lg:text-xl text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">How We Work</p>
          <h2 id="process-title" className="font-SourceSansProBold lg:text-3xl text-[26px] text-neutral-g mt-1">From a Real Problem to a Lasting Solution</h2>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="group relative rounded-2xl border border-gray-200 bg-white-MainPage p-5 transition hover:border-LightBlue-a hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <span className="w-[40px] h-[40px] rounded-xl bg-gradient-to-br from-[#1AB0C8] to-[#179FB5] text-white flex items-center justify-center shadow-sm">
                  <s.icon size={18} aria-hidden="true" />
                </span>
                <span className="text-[12px] font-semibold text-LightBlue-d">Step {i + 1}</span>
              </div>
              <h3 className="mt-3 font-SourceSansProBold text-[17px] text-neutral-g">{s.title}</h3>
              <p className="mt-1 text-[14px] leading-relaxed text-neutral-e">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
