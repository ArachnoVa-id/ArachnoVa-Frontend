import { Helmet } from "react-helmet-async";
import HeroProjects from "@/components/Projects/HeroProjects";
import PortoLustrumDTETI from "@/components/Projects/PortoLustrumDTETI";
import PortoKPUFT from "@/components/Projects/PortoKPUFT";
import PortoEzParenting from "@/components/Projects/PortoEzParenting";
import CTAProjects from "@/components/Projects/CTAProjects";
import PortoTemplate from "@/components/Projects/PortoTemplate";

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Our Projects | ArachnoVa</title>
      </Helmet>
      <main className="w-full flex flex-col justify-center items-center bg-transparent">
        <HeroProjects />
        <PortoTemplate
          type={2}
          title={"Gadjah Mada Chamber Orchestra"}
          desc={`GMCO merupakan sebuah kelompok seni bermusik khususnya dalam bidang musik instrumental. Pada tanggal 16 February 2008, atas inisiatif Andreas Joko Purwanto (FMIPA 2005) dan Gian Afrisando (FMIPA 2007) mengumpulkan teman-teman maka muncullah ide untuk membentuk sebuah orkestra di Unversitas Gadjah Mada.`}
          srcDesktop={"/image/Projects/GMCODesktop.png"}
          srcMobile={"/image/Projects/GMCOMobile.png"}
          link={"http://gmcograndconcert.web.id/"}
        />
        <PortoTemplate
          type={1}
          title={"Tsirwah Quran"}
          desc={`Tsirwah adalah pesantren Digital, Menghubungkan Anda dengan Kehidupan Akhirat, Mempertemukan Masyarakat dengan Alim Ulama Keilmuan Bersanad ila Rasulillah.`}
          srcDesktop={"/image/Projects/TsirwahDesktop.png"}
          srcMobile={"/image/Projects/TsirwahMobile.png"}
          link={"https://quran.tsirwah.com/"}
        />
        <PortoTemplate
          type={2}
          title={"HMTI"}
          desc={`HMTI UGM berdiri sekitar bulan Juni tahun 2000. HMTI UGM pada mulanya merupakan Badan Semi Otonom (BSO) dibawah Keluarga Mahasiswa Teknik Mesin (KMTM) UGM. Hingga pada tahun 2003, kedudukan HMTI telah sejajar dengan KMTM sebagai keluarga/himpunan mahasiswa.`}
          srcDesktop={"/image/Projects/HMTIDesktop.png"}
          srcMobile={"/image/Projects/HMTIMobile.png"}
          link={"https://hmti.ft.ugm.ac.id/"}
        />
        <PortoTemplate
          type={1}
          title={"Legal Kreatif"}
          desc={`Berdiri sejak 2012, LegalKreatif telah membantu lebih dari 4000 pengusaha Indonesia untuk mendirikan perusahaan dan mengurus suluruh kebutuhan legalitas perusahaan. Membantu pengusaha mendirikan perusahaan berupa PT, CV maupun PMA.`}
          srcDesktop={"/image/Projects/LegalKreatifDesktop.png"}
          srcMobile={"/image/Projects/LegalKreatifMobile.png"}
          link={"https://www.legalkreatif.co.id/"}
        />
        <PortoTemplate
          type={2}
          title={"KMTETI"}
          desc={`KMTETI adalah organisasi resmi yang ada di Departemen Teknik Elektro dan Teknologi Informasi (DTETI). Salah satu semboyan yang dimiliki KMTETI adalah Profesionalisme Berbasis Kekeluargaan.`}
          srcDesktop={"/image/Projects/KMTETIDesktop.png"}
          srcMobile={"/image/Projects/KMTETIMobile.png"}
          link={"https://kmteti.ft.ugm.ac.id/"}
        />
        <PortoTemplate
          type={1}
          title={"Teknisiade"}
          desc={`Teknisiade adalah ajang tahunan yang diselenggarakan oleh Kementrian Olahraga, Apresiasi, dan Daya Kreasi Seni (OASE) BEM KMFT UGM. Acara ini menjadi sarana untuk mengekspresikan kreativitas olahraga dan apresiasi seni dengan mempertemukan mahasiswa dari berbagai jurusan di Fakultas Teknik.`}
          srcDesktop={"/image/Projects/TeknisiadeDesktop.png"}
          srcMobile={"/image/Projects/TeknisiadeMobile.png"}
          link={"https://forked-fe-teknisiade.vercel.app/"}
        />
        <PortoTemplate
          type={2}
          title={"PKM Recaping"}
          desc={`Recipe Collection for Pet with Integrated Guidance: Buku resep pakan anjing yang terintegrasi media audio visual dan kalkulator nutrisi sebagai implementasi teknologi digital. Menyediakan produk buku resep pakan hewan 3 in 1 yang pertama di Indonesia yang mencakup buku fisik, kalkulator nutrisi, dan video tutorial.`}
          srcDesktop={"/image/Projects/PKM_RecapingDesktop.png"}
          srcMobile={"/image/Projects/PKM_RecapingMobile.png"}
          link={"https://recaping.id/"}
        />
        <PortoTemplate
          type={1}
          title={"Batam Karya Prima"}
          desc={`Perusahaan yang turut berkontribusi meningkatkan kualitas sumber daya manusia pada industri, kesehatan serta institusi lainnya agar mampu membawa perubahan yang signifikan kearah kemajuan dengan memiliki keunggulan kompetitif agar tercapai performa kerja yang unggul dan optimal.`}
          srcDesktop={"/image/Projects/BKPDesktop.png"}
          srcMobile={"/image/Projects/BKPMobile.png"}
          link={"https://bkpbatam.id/"}
        />
        <PortoTemplate
          type={2}
          title={"EzParenting"}
          desc={` EzParenting adalah sebuah platform yang bertujuan untuk menemani
            perjalanan orang tua dalam mengoptimalkan perkembangan anak-anak
            mereka dari usia 0-5 tahun pertama kehidupan melalui pendidikan dan
            solusi praktis.`}
          srcDesktop={"/image/Projects/EzParenting.png"}
          srcMobile={"/image/Projects/EzParentingMobile.png"}
          link={"https://ez-parenting.vercel.app/"}
        />
        <PortoTemplate
          type={1}
          title={"KPU FT UGM"}
          desc={`Komisi Pemilihan Umum Fakultas Teknik UGM adalah website yang
            dirancang untuk melakukan pelaksanaan pemilihan ketua umum Badan
            Eksekutif Mahasiswa (BEM KMFT) untuk periode 2024-2025. Website
            memiliki fitur untuk melakukan voting dan live count saat pemilihan
            berlangsung.`}
          srcDesktop={"/image/Projects/KPUFT.png"}
          srcMobile={"/image/Projects/KPUFTMobile.png"}
          link={"https://www.electionftugm.web.id/"}
        />
        <PortoTemplate
          type={2}
          title={"Lustrum DTETI"}
          desc={`Rangkaian acara besar perayaan ulang tahun Departemen Teknik Elektro
            dan Teknologi Informasi UGM yang ke-60 lebih tepatnya perayaan
            lustrum yang ke-12. Acara ini dimeriahkan menjadi 3 sub acara besar
            yaitu Tetipendence, Enforian dan Troposfer dengan semua kegiatan
            dinaungi oleh bagian dari DTETI FT UGM.`}
          srcDesktop={"/image/Projects/LustrumDTETIDesktop.png"}
          srcMobile={"/image/Projects/LustrumDTETIMobile.png"}
          link={"https://lustrumdteti.id/"}
        />
        <CTAProjects />
      </main>
    </>
  );
}
