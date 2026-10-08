import { Link } from "react-router-dom";
import Seo from "@/components/ui/Seo";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/aboutus", label: "About" },
];

// Shown for any unknown public URL. nginx also returns HTTP 404 for these paths (dist/404.html).
export default function NotFound() {
  return (
    <>
      <Seo notFound />
      <main className="w-full min-h-[75vh] flex flex-col items-center justify-center text-center bg-white-MainPage px-6 pt-28 pb-16">
        <p className="font-SourceSansProBold text-[clamp(4rem,18vw,7rem)] leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
          404
        </p>
        <h1 className="font-SourceSansProBold text-[clamp(1.5rem,6vw,2.2rem)] text-neutral-g mt-3">Page not found</h1>
        <p className="font-SourceSansProSemibold text-neutral-e mt-2 max-w-[28rem]">
          Halaman yang Anda cari tidak ada atau sudah dipindahkan.
        </p>
        <nav aria-label="Pages" className="flex flex-wrap justify-center gap-3 mt-8">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className={`min-h-[44px] px-5 inline-flex items-center rounded-md font-InterBold text-[0.9rem] transition-all ${
                i === 0
                  ? "bg-gradient-to-r from-[#1AB0C8] to-[#179FB5] text-white hover:brightness-110"
                  : "border border-border text-neutral-g hover:border-LightBlue-c"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </main>
    </>
  );
}
