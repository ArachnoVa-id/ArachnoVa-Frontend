// Per-page SEO. Plain data with no imports, so the app (Seo component) and the post-build
// script (scripts/prerender-meta.mjs, which writes per-route HTML for crawlers and link previews)
// share one source.
export const SITE_URL = "https://arachnova.id";
export const SITE_NAME = "ArachnoVa";
export const OG_IMAGE = `${SITE_URL}/image/og-image.png`;

export const SEO_ROUTES = {
  "/": {
    title: "ArachnoVa | Real Problems, Lasting Solutions",
    description:
      "ArachnoVa (PT Arah Inovasi Digitaloka) menyelesaikan masalah nyata bisnis dan organisasi dengan solusi digital yang berkelanjutan, menggabungkan fondasi engineering yang kuat dengan AI.",
    h1: "ArachnoVa, Real Problems, Lasting Solutions",
  },
  "/projects": {
    title: "Our Projects | ArachnoVa",
    description:
      "Portofolio ArachnoVa: website company profile, sistem ERP, dan aplikasi WhatsApp yang telah kami bangun untuk klien dari berbagai bidang.",
    h1: "Our Projects",
  },
  "/services": {
    title: "Our Services | ArachnoVa",
    description:
      "Layanan ArachnoVa: pembuatan website company profile, sistem ERP kustom, aplikasi berbasis WhatsApp API, dan Task Management Tools. Lihat paket dan harga.",
    h1: "Our Services",
  },
  "/aboutus": {
    title: "About Us | ArachnoVa",
    description:
      "Kenali ArachnoVa, bagian dari PT Arah Inovasi Digitaloka: tim pengembang produk digital yang menghadirkan solusi kreatif, andal, dan sesuai kebutuhan klien.",
    h1: "About ArachnoVa",
  },
  "/templates": {
    title: "Our Templates | ArachnoVa",
    description: "Template website siap pakai dari ArachnoVa untuk memulai company profile Anda lebih cepat.",
    h1: "Our Templates",
  },
};

export const NOT_FOUND = {
  title: "Page not found | ArachnoVa",
  description: "Halaman yang Anda cari tidak ditemukan.",
};
