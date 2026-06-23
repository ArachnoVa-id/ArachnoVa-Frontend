"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardContents from "./CardContents";

export default function Slider() {
  const data = {
    title: [
      "Lustrum DTETI XII",
      "KPU FT",
      "EzParenting",
      "Batam Karya Prima",
      "PKM Recaping",
      "Teknisiade",
      "KMTETI",
      "Legal Kreatif",
      "HMTI",
      "Tsirwah Quran",
      "Gadjah Mada Chamber Orchestra",
    ],
    description: [
      "Lustrum DTETI merupakan rangkaian acara besar perayaan ulang tahun Departemen Teknik Elektro dan Teknologi Informasi UGM yang ke-60 lebih tepatnya perayaan lustrum yang ke-12. Acara ini dimeriahkan menjadi 3 sub acara besar yaitu Tetipendence, Enforian dan Troposfer dengan semua kegiatan dinaungi oleh bagian dari DTETI FT UGM.",
      "Komisi Pemilihan Umum Fakultas Teknik UGM adalah website yang dirancang untuk melakukan pelaksanaan pemilihan ketua umum Badan Eksekutif Mahasiswa (BEM KMFT) untuk periode 2024-2025. Website memiliki fitur untuk melakukan voting dan live count saat pemilihan berlangsung.",
      "EzParenting adalah sebuah platform yang bertujuan untuk menemani perjalanan orang tua dalam mengoptimalkan perkembangan anak-anak mereka dari usia 0-5 tahun pertama kehidupan melalui pendidikan dan solusi praktis. Platform ini menyediakan informasi dan saran yang membantu orang tua dalam mendidik dan merawat anak.",
      "Perusahaan yang turut berkontribusi meningkatkan kualitas sumber daya manusia pada industri, kesehatan serta institusi lainnya agar mampu membawa perubahan yang signifikan kearah kemajuan dengan memiliki keunggulan kompetitif agar tercapai performa kerja yang unggul dan optimal",
      "Recipe Collection for Pet with Integrated Guidance: Buku resep pakan anjing yang terintegrasi media audio visual dan kalkulator nutrisi sebagai implementasi teknologi digital. Menyediakan produk buku resep pakan hewan 3 in 1 yang pertama di Indonesia yang mencakup buku fisik, kalkulator nutrisi, dan video tutorial.",
      "Teknisiade adalah ajang tahunan yang diselenggarakan oleh Kementrian Olahraga, Apresiasi, dan Daya Kreasi Seni (OASE) BEM KMFT UGM. Acara ini menjadi sarana untuk mengekspresikan kreativitas olahraga dan apresiasi seni dengan mempertemukan mahasiswa dari berbagai jurusan di Fakultas Teknik",
      "KMTETI merupakan singkatan dari Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi, KMTETI adalah organisasi resmi yang ada di Departemen Teknik Elektro dan Teknologi Informasi (DTETI). Salah satu semboyan yang dimiliki KMTETI adalah Profesionalisme Berbasis Kekeluargaan.",
      "Berdiri sejak 2012, LegalKreatif telah membantu lebih dari 4000 pengusaha Indonesia untuk mendirikan perusahaan dan mengurus suluruh kebutuhan legalitas perusahaan. Membantu pengusaha mendirikan perusahaan berupa PT, CV maupun PMA.",
      "HMTI UGM berdiri sekitar bulan Juni tahun 2000. HMTI UGM pada mulanya merupakan Badan Semi Otonom (BSO) dibawah Keluarga Mahasiswa Teknik Mesin (KMTM) UGM. Hingga pada tahun 2003, kedudukan HMTI telah sejajar dengan KMTM sebagai keluarga/himpunan mahasiswa.",
      "Tsirwah adalah pesantren Digital, Menghubungkan Anda dengan Kehidupan Akhirat, Mempertemukan Masyarakat dengan Alim Ulama Keilmuan Bersanad ila Rasulillah",
      "GMCO merupakan sebuah kelompok seni bermusik khususnya dalam bidang musik instrumental. Pada tanggal 16 February 2008, atas inisiatif Andreas Joko Purwanto (FMIPA 2005) dan Gian Afrisando (FMIPA 2007) mengumpulkan teman-teman maka muncullah ide untuk membentuk sebuah orkestra di Unversitas Gadjah Mada",
      "",
      "",
      "", 
    ],
    image: [
      "/image/Projects/LustrumDTETIDesktop.png",
      "/image/Projects/KPUFT.png",
      "/image/Projects/EzParenting.png",
      "/image/Projects/BKPDesktop.png",
      "/image/Projects/PKM_RecapingDesktop.png",
      "/image/Projects/TeknisiadeDesktop.png",
      "/image/Projects/KMTETIDesktop.png",
      "/image/Projects/LegalKreatifDesktop.png",
      "/image/Projects/HMTIDesktop.png",
      "/image/Projects/TsirwahDesktop.png",
      "/image/Projects/GMCODesktop.png",
    ],
    imageMobile: [
      "/image/Projects/LustrumDTETIMobile.png",
      "/image/Projects/KPUFTMobile.png",
      "/image/Projects/EzParentingMobile.png",
      "/image/Projects/BKPMobile.png",
      "/image/Projects/PKM_RecapingMobile.png",
      "/image/Projects/TeknisiadeMobile.png",
      "/image/Projects/KMTETIMobile.png",
      "/image/Projects/LegalKreatifMobile.png",
      "/image/Projects/HMTIMobile.png",
      "/image/Projects/TsirwahMobile.png",
      "/image/Projects/GMCOMobile.png",
      "",
    ],
  };

  return (
    <Swiper height={720} spaceBetween={40} slidesPerView={1} loop={true}>
      {data.title.map(function (item, index) {
        return (
          <SwiperSlide key={index}>
            <CardContents
              title={data.title[index]}
              description={data.description[index]}
              image={data.image[index]}
              imageMobile={data.imageMobile[index]}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
