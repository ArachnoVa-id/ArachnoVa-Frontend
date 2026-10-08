import Seo from "@/components/ui/Seo";
import { useCollection } from "@/context/DataContext";
import AboutUs from "@/components/AboutUs/AboutUs";
import TeamSection from "@/components/AboutUs/TeamSection";

export default function AboutUsPage() {
  const [members] = useCollection("team");
  const [projects] = useCollection("projects");

  return (
    <>
      <Seo path="/aboutus" />
      <AboutUs />
      <TeamSection members={members} projects={projects} />
    </>
  );
}
