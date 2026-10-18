import { useT } from "@/lib/i18n";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useSettings } from "@/context/DataContext";
import { waLink } from "@/lib/whatsapp";

const NEEDS = { en: ["Website", "System / ERP", "WhatsApp app", "AI solution", "Not sure yet"], id: ["Website", "Sistem / ERP", "Aplikasi WhatsApp", "Solusi AI", "Belum yakin"] };
const WHEN = { en: ["As soon as possible", "1–3 months", "3–6 months", "Just exploring"], id: ["Secepatnya", "1–3 bulan", "3–6 bulan", "Masih eksplorasi"] };

function Chips({ options, value, onChange, multi }) {
  const toggle = (o) => (multi ? onChange(value.includes(o) ? value.filter((x) => x !== o) : [...value, o]) : onChange(o));
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = multi ? value.includes(o) : value === o;
        return (
          <button key={o} type="button" onClick={() => toggle(o)} aria-pressed={on}
            className={`px-3.5 py-2 min-h-[40px] rounded-full text-[13px] border transition ${on ? "bg-LightBlue-c text-white border-LightBlue-c" : "bg-white text-neutral-f border-gray-300 hover:border-LightBlue-c"}`}>
            {o}
          </button>
        );
      })}
    </div>
  );
}

// A short brief that becomes a pre-written WhatsApp message: no backend, the conversation starts with context.
export default function BriefForm() {
  const t = useT();
  const settings = useSettings();
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [problem, setProblem] = useState("");
  const [needs, setNeeds] = useState([]);
  const [when, setWhen] = useState("");

  const ready = problem.trim().length >= 10;
  const message = [
    t({ en: "Hi ArachnoVa, I'd like a consultation.", id: "Halo ArachnoVa, saya ingin konsultasi." }),
    name && `${t({ en: "Name", id: "Nama" })}: ${name}`,
    org && `${t({ en: "Organisation", id: "Organisasi" })}: ${org}`,
    `${t({ en: "Problem to solve", id: "Masalah yang ingin diselesaikan" })}: ${problem.trim()}`,
    needs.length && `${t({ en: "Likely needs", id: "Perkiraan kebutuhan" })}: ${needs.join(", ")}`,
    when && `${t({ en: "Timeline", id: "Target waktu" })}: ${when}`,
].filter(Boolean).join("\n");

  const input = "w-full px-4 py-3 rounded-xl border border-gray-400 bg-white text-neutral-g placeholder:text-gray-500 text-[14px] focus:outline-none focus:border-LightBlue-c focus:ring-2 focus:ring-[#CBEFF5]";
  return (
    <section aria-labelledby="brief-title" className="w-full bg-gradient-to-b from-[#E3F5F8] to-[#F1FAFC] lg:px-24 px-4 lg:py-16 py-12">
      <div className="max-w-[60rem] mx-auto rounded-3xl border border-[#B9E6EE] bg-white p-6 lg:p-10 shadow-[0_12px_40px_-12px_rgba(21,139,158,0.25)]">
        <div className="mb-6">
          <p className="font-SourceSansProBold lg:text-xl text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">{t({ en: "Start With the Problem", id: "Mulai dari Masalahnya" })}</p>
          <h2 id="brief-title" className="font-SourceSansProBold lg:text-3xl text-[26px] text-neutral-g mt-1">{t({ en: "Tell Us the Problem, We'll Help Find the Solution", id: "Ceritakan Masalah Anda, Kami Bantu Carikan Solusinya" })}</h2>
          <p className="text-[15px] text-neutral-f mt-2">{t({ en: "Fill in the short form below and your WhatsApp message is written for you.", id: "Isi singkat di bawah; pesan WhatsApp akan tersusun otomatis." })}</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); if (ready) window.open(waLink(message, settings?.whatsapp), "_blank", "noopener"); }} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-3">
            <label className="block"><span className="block text-[13px] font-semibold text-neutral-f mb-1.5">{t({ en: "Name", id: "Nama" })}</span>
              <input value={name} onChange={(e) => setName(e.target.value)} className={input} placeholder={t({ en: "Your name", id: "Nama Anda" })} autoComplete="name" /></label>
            <label className="block"><span className="block text-[13px] font-semibold text-neutral-f mb-1.5">{t({ en: "Organisation / Business", id: "Organisasi / Bisnis" })}</span>
              <input value={org} onChange={(e) => setOrg(e.target.value)} className={input} placeholder={t({ en: "Optional", id: "Opsional" })} autoComplete="organization" /></label>
          </div>
          <label className="block"><span className="block text-[13px] font-semibold text-neutral-f mb-1.5">{t({ en: "The problem you want solved *", id: "Masalah yang ingin diselesaikan *" })}</span>
            <textarea value={problem} onChange={(e) => setProblem(e.target.value)} rows={4} className={input}
              placeholder={t({ en: "e.g. Our event registration still runs on Google Forms and every payment is checked by hand.", id: "Contoh: Pendaftaran event kami masih lewat Google Form dan pembayaran dicek manual satu per satu." })} /></label>
          <div><span className="block text-[13px] font-semibold text-neutral-f mb-2">{t({ en: "Likely needs", id: "Perkiraan kebutuhan" })}</span><Chips options={t(NEEDS)} value={needs} onChange={setNeeds} multi /></div>
          <div><span className="block text-[13px] font-semibold text-neutral-f mb-2">{t({ en: "Timeline", id: "Target waktu" })}</span><Chips options={t(WHEN)} value={when} onChange={setWhen} /></div>
          <button type="submit" disabled={!ready}
            className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-xl bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] text-white font-InterBold text-[14px] hover:brightness-110 disabled:bg-none disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed">
            <FaWhatsapp size={18} aria-hidden="true" /> {t({ en: "Send via WhatsApp", id: "Kirim lewat WhatsApp" })}
          </button>
          {!ready && <p className="text-[13px] text-neutral-e">{t({ en: "Describe the problem in at least one sentence.", id: "Ceritakan masalahnya minimal satu kalimat." })}</p>}
        </form>
      </div>
    </section>
  );
}
