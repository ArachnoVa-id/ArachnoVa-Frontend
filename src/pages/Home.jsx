import { Helmet } from "react-helmet-async";
import { useCollection } from "@/context/DataContext";
import Hero from "@/components/MainPage/Hero/Hero";
import Tractions from "@/components/MainPage/Tractions";
import PricingTable from "@/components/MainPage/PricingTable";
import MarqueeCarousel from "@/components/Projects/MarqueeCarousel";
import ProjectCardGrid from "@/components/Projects/ProjectCardGrid";
import CTA from "@/components/MainPage/CTA";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [pricing] = useCollection("pricing");
  const [projects] = useCollection("projects");
  const images = projects.map((p) => p.imageDesktop).filter(Boolean);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const rowCount = Math.min(3, Math.ceil(images.length / 3));

  return (
    <>
      <Helmet>
        <title>ArachnoVa</title>
      </Helmet>
      <Hero />
      <Tractions />
      <PricingTable data={pricing} />

      {/* Projects carousel */}
      <section className="relative w-full bg-white-MainPage lg:py-[5vw] py-[15vw] overflow-hidden">
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="text-center bg-white/90 lg:py-[2.5vw] py-[5vw] lg:px-[4vw] px-[8vw] rounded-xl shadow-[0_0.5vw_2vw_rgba(0,0,0,0.08)] backdrop-blur-md">
            <p className="font-SourceSansProBold lg:text-[1.563vw] text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
              Our Creations
            </p>
            <h2 className="font-SourceSansProBold lg:text-[2.396vw] text-[6.977vw] text-neutral-g lg:leading-[2.8vw] leading-[7.5vw] mt-[0.5vw]">
              A Glimpse of What We Build
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-[1.5vw]">
          {Array.from({ length: rowCount }).map((_, i) => (
            <MarqueeCarousel
              key={i}
              images={images}
              direction={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </section>

      {/* Project cards */}
      <ProjectCardGrid projects={projects} />

      <CTA />
    </>
  );
}
