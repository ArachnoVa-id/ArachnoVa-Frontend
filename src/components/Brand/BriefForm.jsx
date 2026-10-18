import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useSettings } from "@/context/DataContext";
import { waLink } from "@/lib/whatsapp";

const NEEDS = ["Website", "Sistem / ERP", "Aplikasi WhatsApp", "Solusi AI", "Belum yakin"];
const WHEN = ["Secepatnya", "1–3 bulan", "3–6 bulan", "Masih eksplorasi"];

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
  const settings = useSettings();
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [problem, setProblem] = useState("");
  const [needs, setNeeds] = useState([]);
  const [when, setWhen] = useState("");

  const ready = problem.trim().length >= 10;
  const message = [
    "Halo ArachnoVa, saya ingin konsultasi.",
    name && `Nama: ${name}`,
    org && `Organisasi: ${org}`,
    `Masalah yang ingin diselesaikan: ${problem.trim()}`,
    needs.length && `Perkiraan kebutuhan: ${needs.join(", ")}`,
    when && `Target waktu: ${when}`,
  ].filter(Boolean).join("\n");

  const input = "w-full px-4 py-3 rounded-xl border border-gray-400 bg-white text-neutral-g placeholder:text-gray-500 text-[14px] focus:outline-none focus:border-LightBlue-c focus:ring-2 focus:ring-[#CBEFF5]";
  return (
    <section aria-labelledby="brief-title" className="w-full bg-gradient-to-b from-[#E3F5F8] to-[#F1FAFC] lg:px-24 px-4 lg:py-16 py-12">
      <div className="max-w-[60rem] mx-auto rounded-3xl border border-[#B9E6EE] bg-white p-6 lg:p-10 shadow-[0_12px_40px_-12px_rgba(21,139,158,0.25)]">
        <div className="mb-6">
          <p className="font-SourceSansProBold lg:text-xl text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">Start With the Problem</p>
          <h2 id="brief-title" className="font-SourceSansProBold lg:text-3xl text-[26px] text-neutral-g mt-1">Ceritakan Masalah Anda, Kami Bantu Carikan Solusinya</h2>
          <p className="text-[15px] text-neutral-f mt-2">Isi singkat di bawah; pesan WhatsApp akan tersusun otomatis.</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); if (ready) window.open(waLink(message, settings?.whatsapp), "_blank", "noopener"); }} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-3">
            <label className="block"><span className="block text-[13px] font-semibold text-neutral-f mb-1.5">Nama</span>
              <input value={name} onChange={(e) => setName(e.target.value)} className={input} placeholder="Nama Anda" autoComplete="name" /></label>
            <label className="block"><span className="block text-[13px] font-semibold text-neutral-f mb-1.5">Organisasi / Bisnis</span>
              <input value={org} onChange={(e) => setOrg(e.target.value)} className={input} placeholder="Opsional" autoComplete="organization" /></label>
          </div>
          <label className="block"><span className="block text-[13px] font-semibold text-neutral-f mb-1.5">Masalah yang ingin diselesaikan *</span>
            <textarea value={problem} onChange={(e) => setProblem(e.target.value)} rows={4} className={input}
              placeholder="Contoh: Pendaftaran event kami masih lewat Google Form dan pembayaran dicek manual satu per satu." /></label>
          <div><span className="block text-[13px] font-semibold text-neutral-f mb-2">Perkiraan kebutuhan</span><Chips options={NEEDS} value={needs} onChange={setNeeds} multi /></div>
          <div><span className="block text-[13px] font-semibold text-neutral-f mb-2">Target waktu</span><Chips options={WHEN} value={when} onChange={setWhen} /></div>
          <button type="submit" disabled={!ready}
            className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-xl bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] text-white font-InterBold text-[14px] hover:brightness-110 disabled:bg-none disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed">
            <FaWhatsapp size={18} aria-hidden="true" /> Kirim lewat WhatsApp
          </button>
          {!ready && <p className="text-[13px] text-neutral-e">Ceritakan masalahnya minimal satu kalimat.</p>}
        </form>
      </div>
    </section>
  );
}
