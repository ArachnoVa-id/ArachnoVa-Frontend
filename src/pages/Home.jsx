import { Helmet } from "react-helmet-async";
import { useCollection } from "@/context/DataContext";
import Hero from "@/components/MainPage/Hero/Hero";
import Tractions from "@/components/MainPage/Tractions";
import PricingTable from "@/components/MainPage/PricingTable";
import PortoSection from "@/components/MainPage/PortoSection";
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
      <Tractions />
      <PricingTable data={pricing} />
      <PortoSection projects={projects} />
      <CTA />
    </>
  );
}
