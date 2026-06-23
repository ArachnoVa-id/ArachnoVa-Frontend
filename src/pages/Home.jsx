import { Helmet } from "react-helmet-async";
import { useCollection } from "@/context/DataContext";
import Hero from "@/components/MainPage/Hero/Hero";
import ServicesOption from "@/components/Services/ServicesOption/ServicesOption";
import PortoSection from "@/components/MainPage/PortoSection";
import CTA from "@/components/MainPage/CTA";

export default function Home() {
  const [projects] = useCollection("projects");

  return (
    <>
      <Helmet>
        <title>ArachnoVa</title>
      </Helmet>
      <Hero />
      <ServicesOption />
      <PortoSection projects={projects} />
      <CTA />
    </>
  );
}
