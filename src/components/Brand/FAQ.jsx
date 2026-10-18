import { useT } from "@/lib/i18n";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const ITEMS = [
  { q: { en: "We don't have a technical spec yet. Where do we start?", id: "Kami belum punya spesifikasi teknis. Bisa mulai dari mana?" }, a: { en: "Just tell us the problem you want solved. We help shape the solution, scope and stages before a single line of code is written.", id: "Cukup ceritakan masalah yang ingin diselesaikan. Kami bantu merumuskan solusi, ruang lingkup, dan tahapan sebelum ada baris kode yang ditulis." } },
  { q: { en: "Does every project use AI?", id: "Apakah ArachnoVa memakai AI di setiap project?" }, a: { en: "Not necessarily. We use AI only where it truly removes work or adds value, on top of a solid system that is easy to maintain.", id: "Tidak harus. Kami memakai AI hanya jika benar-benar mengurangi pekerjaan atau memberi nilai, di atas fondasi sistem yang kuat dan mudah dirawat." } },
  { q: { en: "How long does a project take?", id: "Berapa lama pengerjaan sebuah project?" }, a: { en: "A company profile website usually takes 2–4 weeks; systems and apps 1–4 months depending on scope. The timeline is agreed upfront and you get a demo link early on.", id: "Website company profile umumnya 2–4 minggu; sistem dan aplikasi 1–4 bulan, tergantung ruang lingkup. Jadwal disepakati di awal dan Anda mendapat link demo sejak tahap awal." } },
  { q: { en: "Can we request changes during development?", id: "Apakah bisa revisi di tengah pengembangan?" }, a: { en: "Yes. We work in stages with regular reviews, so changes can go in before they become expensive.", id: "Bisa. Kami bekerja per tahap dengan review rutin, sehingga perubahan bisa dimasukkan sebelum menjadi mahal." } },
  { q: { en: "What happens after launch?", id: "Bagaimana setelah project selesai?" }, a: { en: "We support the launch, monitor it and offer maintenance plans so the solution keeps running and growing.", id: "Kami menyediakan pendampingan peluncuran, pemantauan, dan paket pemeliharaan agar solusi tetap berjalan dan berkembang." } },
  { q: { en: "How do pricing and payment work?", id: "Bagaimana sistem harga dan pembayarannya?" }, a: { en: "Pricing follows the scope and is split into instalments by stage. See the plans on the Services page or ask us for a free consultation on WhatsApp.", id: "Harga mengikuti ruang lingkup dan dibagi per termin sesuai tahapan. Lihat paket di halaman Services atau konsultasikan gratis via WhatsApp." } },
];

export default function FAQ() {
  const t = useT();
  const [open, setOpen] = useState(0);
  return (
    <section aria-labelledby="faq-title" className="w-full bg-white-MainPage lg:px-24 px-4 lg:py-16 py-12">
      <div className="max-w-[56rem] mx-auto">
        <div className="text-center mb-8">
          <p className="font-SourceSansProBold lg:text-xl text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">FAQ</p>
          <h2 id="faq-title" className="font-SourceSansProBold lg:text-3xl text-[26px] text-neutral-g mt-1">{t({ en: "Frequently Asked Questions", id: "Pertanyaan yang Sering Diajukan" })}</h2>
        </div>
        <div className="space-y-2.5">
          {ITEMS.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q.en} className={`rounded-2xl border bg-white transition ${isOpen ? "border-LightBlue-a shadow-sm" : "border-gray-200"}`}>
                <h3>
                  <button type="button" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-LightBlue-c rounded-2xl">
                    <span className="font-SourceSansProSemibold text-[15px] text-neutral-g">{t(it.q)}</span>
                    <FiPlus size={18} className={`shrink-0 text-LightBlue-d transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden="true" />
                  </button>
                </h3>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden px-5 text-[14px] leading-relaxed text-neutral-e">
                    <span className="block pb-4">{t(it.a)}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
