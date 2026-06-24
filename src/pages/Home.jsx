import { Helmet } from "react-helmet-async";
import { useCollection } from "@/context/DataContext";
import Hero from "@/components/MainPage/Hero/Hero";
import PortoSection from "@/components/MainPage/PortoSection";
import ServicesOption from "@/components/Services/ServicesOption/ServicesOption";
import CTA from "@/components/MainPage/CTA";

export default function Home() {
  const [pricing] = useCollection("pricing");
  const [projects] = useCollection("projects");

  return (
    <>
      <Helmet>
        <title>ArachnoVa</title>
      </Helmet>
      <Hero />
      <div className="w-full lg:h-[clamp(0.2rem,0.052vw,0.07rem)] h-[clamp(0.2rem,0.233vw,0.34rem)] bg-gradient-to-r from-[#F1F5F9] via-[#CBD5E1] to-[#F1F5F9]" />
      <PortoSection projects={projects} />
      <div className="w-full lg:h-[clamp(0.2rem,0.052vw,0.07rem)] h-[clamp(0.2rem,0.233vw,0.34rem)] bg-gradient-to-r from-[#F1F5F9] via-[#CBD5E1] to-[#F1F5F9]" />
      <ServicesOption data={pricing} />
      <div className="w-full lg:h-[clamp(0.2rem,0.052vw,0.07rem)] h-[clamp(0.2rem,0.233vw,0.34rem)] bg-gradient-to-r from-[#F1F5F9] via-[#CBD5E1] to-[#F1F5F9]" />
      <CTA />
    </>
  );
}
