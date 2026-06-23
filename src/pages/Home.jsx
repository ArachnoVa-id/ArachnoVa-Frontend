import { Helmet } from "react-helmet-async";
import Hero from "@/components/MainPage/Hero/Hero";
import Tractions from "@/components/MainPage/Tractions";
import PricingTable from "@/components/MainPage/PricingTable";
import { useCollection } from "@/context/DataContext";
import PortoSection from "@/components/MainPage/PortoSection/PortoSection";
import AboutUs from "@/components/MainPage/AboutUs/AboutUs";
import CTA from "@/components/MainPage/CTA";
import OurMechs from "@/components/MainPage/OurMechs/OurMechs";

export default function Home() {
  const [pricing] = useCollection("pricing");

  return (
    <>
      <Helmet>
        <title>ArachnoVa</title>
      </Helmet>
      <Hero />
      <Tractions />
      <PricingTable data={pricing} />
      <AboutUs />
      <OurMechs />
      <PortoSection />
      <CTA />
    </>
  );
}
