import { Helmet } from "react-helmet-async";
import AboutUs from "@/components/AboutUs/AboutUs";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Us | ArachnoVa</title>
      </Helmet>
      <AboutUs />
    </>
  );
}
