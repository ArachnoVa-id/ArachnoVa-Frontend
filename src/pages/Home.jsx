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
      <section className="w-full bg-white-MainPage lg:pt-[5.208vw] pt-[13.953vw] lg:pb-[3vw] pb-[8vw] overflow-hidden">
        <div data-aos="fade-down" className="text-center mb-[2.5vw] lg:px-[10vw] px-[5.581vw]">
          <p className="font-SourceSansProBold lg:text-[1.563vw] text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
            Our Creations
          </p>
          <h2 className="font-SourceSansProBold lg:text-[2.396vw] text-[6.977vw] text-neutral-g lg:leading-[2.8vw] leading-[7.5vw] mt-[0.5vw]">
            A Glimpse of What We Build
          </h2>
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
