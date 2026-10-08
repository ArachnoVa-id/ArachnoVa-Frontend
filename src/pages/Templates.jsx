import Seo from "@/components/ui/Seo";
import TemplatePage from "@/components/Templates/TemplatePage";

export default function TemplatesPage() {
  return (
    <>
      <Seo path="/templates" />
      <main className="w-full flex flex-col min-h-screen justify-center items-center bg-transparent">
        <TemplatePage />
      </main>
    </>
  );
}
