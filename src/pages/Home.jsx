import Seo from "@/components/ui/Seo";
import { useCollection } from "@/context/DataContext";
import Hero from "@/components/MainPage/Hero/Hero";
import PortoSection from "@/components/MainPage/PortoSection";
import ServicesOption from "@/components/Services/ServicesOption/ServicesOption";
import CTA from "@/components/MainPage/CTA";
import TrustBar from "@/components/Brand/TrustBar";
import MegaCarousel from "@/components/Brand/MegaCarousel";
import LogoStrip from "@/components/Brand/LogoStrip";
import WeAre from "@/components/Brand/WeAre";
import Products from "@/components/Brand/Products";
import TeamCluster from "@/components/Brand/TeamCluster";
import Process from "@/components/Brand/Process";
import FAQ from "@/components/Brand/FAQ";
import BriefForm from "@/components/Brand/BriefForm";
import { useNavigate } from "react-router-dom";
import { byRecent } from "@/lib/period";

export default function Home() {
  const [pricing] = useCollection("pricing");
  const [allProjects] = useCollection("projects");
  const projects = allProjects.filter((p) => !p.hidden); // "team only" projects show just on team cards
  const [services] = useCollection("services");
  const navigate = useNavigate();
  const divider = <div className="w-full lg:h-[0.06rem] h-[0.23rem] bg-gradient-to-r from-[#F1F5F9] via-[#CBD5E1] to-[#F1F5F9]" />;

  return (
    <>
      <Seo path="/" />
      <Hero />
      <LogoStrip />
      <WeAre />
      <TrustBar />
      <MegaCarousel projects={projects} onOpen={(p) => navigate(`/projects?projectId=${p.id}`)} />
      {divider}
      <PortoSection projects={projects.filter((p) => !p.mega).sort(byRecent)} services={services} />
      <Products />
      <Process />
      <TeamCluster />
      {divider}
      <ServicesOption data={pricing} />
      <FAQ />
      <BriefForm />
      <CTA />
    </>
  );
}
