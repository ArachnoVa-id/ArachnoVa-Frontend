import Seo from "@/components/ui/Seo";
import { useCollection } from "@/context/DataContext";
import AboutUs from "@/components/AboutUs/AboutUs";
import TeamSection from "@/components/AboutUs/TeamSection";
import TeamNetwork from "@/components/AboutUs/TeamNetwork";

export default function AboutUsPage() {
  const [members] = useCollection("team");
  const [projects] = useCollection("projects");

  return (
    <>
      <Seo path="/aboutus" />
      <AboutUs />
      <TeamNetwork members={members} projects={projects} />
      <TeamSection members={members} projects={projects} />
    </>
  );
}
