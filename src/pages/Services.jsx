import Seo from "@/components/ui/Seo";
import { useCollection } from "@/context/DataContext";
import ServicesHero from "@/components/Services/ServicesHero/ServicesHero";
import ServicesOption from "@/components/Services/ServicesOption/ServicesOption";
import ServicesCTA from "@/components/Services/ServicesCTA";

export default function ServicesPage() {
  const [pricing] = useCollection("pricing");

  return (
    <>
      <Seo path="/services" />
      <main className="w-full flex flex-col justify-center items-center bg-transparent">
        <ServicesHero />
        <ServicesOption data={pricing} />
        <ServicesCTA />
      </main>
    </>
  );
}
