import { Helmet } from "react-helmet-async";
import { useCollection } from "@/context/DataContext";
import AboutUs from "@/components/AboutUs/AboutUs";
import TeamSection from "@/components/AboutUs/TeamSection";

export default function AboutUsPage() {
  const [members] = useCollection("team");

  return (
    <>
      <Helmet>
        <title>About Us | ArachnoVa</title>
      </Helmet>
      <AboutUs />
      <TeamSection members={members} />
    </>
  );
}
