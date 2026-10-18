import { FiArrowUpRight } from "react-icons/fi";
import { useCollection } from "@/context/DataContext";
import { useT } from "@/lib/i18n";

// Our own ready-made products, separate from client work.
export default function Products() {
  const t = useT();
  const [projects] = useCollection("projects");
  const roetix = (projects || []).find((p) => p.title === "Roetix");
  const items = [
    {
      key: "roetix",
      name: "Roetix",
      logo: roetix?.logo,
      image: roetix?.imageDesktop,
      tag: { en: "Event ticketing", id: "Tiket event" },
      text: { en: "Sell tickets without crashing on sale day: queue, seat map, online payment and QR e-tickets at the gate.", id: "Jual tiket tanpa sistem tumbang saat hari penjualan: antrean, denah kursi, pembayaran online, dan e-tiket QR di gerbang." },
      href: "https://roetix.com/",
      cta: { en: "Visit Roetix", id: "Kunjungi Roetix" },
      external: true,
    },
    {
      key: "tasks",
      name: { en: "Task Management Tools", id: "Task Management Tools" },
      image: "/image/OurServices/TaskManagement/task-management-1.webp",
      tag: { en: "Team workspace", id: "Ruang kerja tim" },
      text: { en: "Tasks, teams and projects in one dashboard, with chats and reminders built in.", id: "Tugas, tim, dan proyek dalam satu dasbor, lengkap dengan chat dan pengingat." },
      href: "/services",
      cta: { en: "Learn more", id: "Selengkapnya" },
    },
    {
      key: "templates",
      name: { en: "Website Templates", id: "Template Website" },
      image: "/image/OurProducts/LandingPage-1.png",
      tag: { en: "Ready to launch", id: "Siap pakai" },
      text: { en: "Start your company profile faster from a template, then make it yours.", id: "Mulai company profile Anda lebih cepat dari template, lalu sesuaikan dengan identitas Anda." },
      href: "/templates",
      cta: { en: "Browse templates", id: "Lihat template" },
    },
  ];
  return (
    <section aria-labelledby="products-title" className="w-full bg-white lg:px-24 px-4 lg:py-16 py-12">
      <div className="max-w-[72rem] mx-auto">
        <div className="mb-8 max-w-[40rem]">
          <p className="text-[13px] font-semibold text-LightBlue-e">{t({ en: "Our products", id: "Produk kami" })}</p>
          <h2 id="products-title" className="font-SourceSansProBold lg:text-[2rem] text-[26px] text-neutral-g leading-tight mt-1">{t({ en: "Ready-made solutions from problems we've solved before", id: "Solusi siap pakai dari masalah yang pernah kami selesaikan" })}</h2>
        </div>
        <ul className="grid md:grid-cols-3 gap-5">
          {items.map((it) => (
            <li key={it.key}>
              <a href={it.href} target={it.external ? "_blank" : undefined} rel={it.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col h-full rounded-3xl border border-gray-200 bg-white-MainPage overflow-hidden transition hover:-translate-y-1 hover:shadow-xl hover:border-LightBlue-a">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-[#E6F6F9] to-[#EEF2FF] overflow-hidden">
                  {it.image && <img src={it.image} alt="" loading="lazy" className="absolute left-[8%] top-[10%] w-[92%] h-[100%] object-cover object-left-top rounded-tl-xl shadow-lg transition duration-500 group-hover:scale-[1.04]" />}
                  <span className="absolute left-3 top-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 text-LightBlue-e shadow-sm">{t(it.tag)}</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="flex items-center gap-2 font-SourceSansProBold text-[19px] text-neutral-g">
                    {it.logo && <img src={it.logo} alt="" className="w-[28px] h-[28px] rounded-lg object-contain bg-white border border-gray-200" />}
                    {t(it.name)}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-neutral-e flex-1">{t(it.text)}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-LightBlue-d group-hover:gap-2 transition-all">{t(it.cta)} <FiArrowUpRight aria-hidden="true" /></span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
