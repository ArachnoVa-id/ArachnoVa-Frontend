import { Helmet } from "react-helmet-async";
import Hero from "@/components/MainPage/Hero/Hero";
import PortoSection from "@/components/MainPage/PortoSection/PortoSection";
import AboutUs from "@/components/MainPage/AboutUs/AboutUs";
import OurProducts from "@/components/MainPage/OurProducts/OurProducts";
import CTA from "@/components/MainPage/CTA";
import OurMechs from "@/components/MainPage/OurMechs/OurMechs";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ArachnoVa</title>
      </Helmet>
      <Hero />
      <AboutUs />
      <OurMechs />
      <PortoSection />
      <OurProducts />
      <CTA />
    </>
  );
}
