import { Helmet } from "react-helmet-async";
import TemplatePage from "@/components/Templates/TemplatePage";

export default function TemplatesPage() {
  return (
    <>
      <Helmet>
        <title>Our Templates | ArachnoVa</title>
      </Helmet>
      <main className="w-full flex flex-col min-h-screen justify-center items-center bg-transparent">
        <TemplatePage />
      </main>
    </>
  );
}
