import { Helmet } from "react-helmet-async";
import { useCollection } from "@/context/DataContext";
import AboutUs from "@/components/AboutUs/AboutUs";
import TeamSection from "@/components/AboutUs/TeamSection";

const defaultFounders = [
  { name: "Muhammad Alif Ramadhan", role: "CEO", image: "" },
  { name: "Muhammad Agus Salim", role: "Advisor", image: "" },
  { name: "Hari Afriansyah", role: "Digital Marketing Specialist", image: "" },
  { name: "Ariel Fikru Avicenna", role: "Software Engineer", image: "" },
  { name: "Muhammad Iqro Negoro", role: "Software Engineer", image: "" },
  { name: "Zainul Muhaimin", role: "Software Engineer", image: "" },
  { name: "M Ramadani Akbar Ariyadi", role: "AI Researcher", image: "" },
  { name: "Gusti Ayu Putu Erika Erlina", role: "AI Researcher", image: "" },
  { name: "Mochammad Daffa Putra Karyudi", role: "Software Engineer", image: "" },
  { name: "Muhammad Abdiel Al Hafiz", role: "Project Manager", image: "" },
  { name: "Tegar Dinar Harsya Ibrahim", role: "Software Engineer", image: "" },
  { name: "Nida Mutmainah", role: "Frontend Engineer", image: "" },
  { name: "Bintang Ramadhan", role: "AI Engineer", image: "" },
  { name: "Muhamad Satrio Abel Fikri", role: "Frontend Engineer", image: "" },
  { name: "Fredyliano Ardiansyah Putra", role: "Frontend Engineer", image: "" },
];

export default function AboutUsPage() {
  const [teamData] = useCollection("team");
  const members = teamData?.length ? teamData : defaultFounders;

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
