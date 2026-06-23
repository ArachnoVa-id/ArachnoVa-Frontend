"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesOptionButton from "./ServicesOptionButton";
import Image from "@/components/ui/Img";
import { IoMdArrowRoundBack } from "react-icons/io";

const ServicesOption = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section
      className="relative w-full lg:min-h-screen flex flex-col justify-center items-center bg-white-MainPage overflow-hidden
                 lg:pt-[5.208vw] lg:pb-[6.25vw]
                 pt-[13.953vw] pb-[23.256vw]"
    >
      <div
        className="relative flex flex-col justify-center items-center text-black
                   lg:gap-[3.125vw]
                   gap-[5.581vw]"
      >
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center items-center
                     lg:gap-[0.417vw]
                     gap-[1.86vw]"
        >
          <div
            className="text-[#001118] font-SourceSansProBold leading-[125%]
                       lg:text-[2.083vw]
                       text-[6.977vw]"
          >
            Choose Your Services
          </div>
          <div
            className="text-[#4E5F66] text-center leading-[150%] font-SourceSansProSemibold
                       lg:text-[1.042vw] lg:w-[43.229vw]
                       text-[3.256vw] w-[90.699vw]"
          >
            Kami menawarkan berbagai pilihan paket dengan fitur dan harga yang
            berbeda sehingga dapat menemukan solusi yang tepat untuk Anda.
          </div>
        </div>
        <div
          className="flex justify-start items-center bg-white-MainPage
                     lg:w-auto lg:overflow-visible
                     w-[90.698vw] overflow-x-scroll overflow-visible"
        >
          <div
            data-aos="fade-up"
            className="flex bg-[#FAFDFF] border-[#E2E8F0]
                       lg:border-[0.156vw] lg:rounded-[1.042vw] lg:shadow-[0_0.573vw_1.042vw_-0.521vw_rgba(0,0,0,0.25)]
                       border-[0.465vw] rounded-[3.721vw] shadow-[0_1.395vw_4.651vw_-2.326vw_rgba(0,0,0,0.15)]"
          >
            <div
              className="flex flex-col border-[#E2E8F0]
                       lg:border-r-[0.052vw] lg:w-[18.75vw]
                       border-r-[0.233vw] w-[30.698vw]"
            >
              <div
                className="flex flex-col justify-center items-start border-[#E2E8F0]
                         lg:border-b-[0.052vw] lg:h-[11.719vw] lg:p-[1.667vw]  lg:gap-[0.625vw]
                         border-b-[0.233vw] h-[60.465vw] p-[4.651vw]  gap-[3.721vw]"
              >
                <div
                  className="font-SourceSansProBold text-neutral-g leading-[125%]
                           lg:text-[1.25vw]
                           text-[4.651vw]"
                >
                  Spesifikasi Layanan
                </div>
                <div
                  className="font-SourceSansProSemibold text-neutral-e 
                           lg:text-[0.781vw] lg:leading-[133.333%]
                           text-[2.791vw] leading-[5/3]"
                >
                  Pilih Paket yang Sesuai untuk Kebutuhan Anda
                </div>
              </div>
              <div
                className="flex flex-col justify-center border-[#E2E8F0]
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[6.406vw]
                         p-[4.651vw] border-b-[0.233vw] h-[28.837vw]"
              >
                <div
                  className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]
                           lg:text-[1.25vw]
                           text-[4.186vw]"
                >
                  Harga
                </div>
              </div>
              <div
                className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         p-[4.651vw] border-b-[0.233vw] h-[18.605vw] text-[3.721vw]"
              >
                Pages
              </div>
              <div
                className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         p-[4.651vw] border-b-[0.233vw] h-[18.605vw] text-[3.721vw]"
              >
                Jumlah Section
              </div>
              <div
                className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         p-[4.651vw] border-b-[0.233vw] h-[18.605vw] text-[3.721vw]"
              >
                Estimasi Waktu
              </div>
              <div
                className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         p-[4.651vw] border-b-[0.233vw] h-[18.605vw] text-[3.721vw]"
              >
                Konfigurasi Admin
              </div>
              <div
                className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         p-[4.651vw] border-b-[0.233vw] h-[18.605vw] text-[3.721vw]"
              >
                Kustomisasi
              </div>
              <div
                className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         p-[4.651vw] h-[18.605vw] text-[3.721vw]"
              >
                Extension
              </div>
            </div>
            <div
              className="flex flex-col border-[#E2E8F0] relative
                       lg:border-r-[0.052vw] lg:w-[18.75vw]
                       border-r-[0.233vw] w-[31.628vw]"
            >
              <div
                className="flex flex-col items-center border-[#E2E8F0] relative
                         lg:border-b-[0.052vw] lg:h-[11.719vw] lg:p-[1.458vw] lg:gap-[1.458vw]
                         border-b-[0.233vw] h-[60.465vw] px-[4.651vw] py-[6.512vw] gap-[3.721vw]"
              >
                <div className="w-full h-full relative">
                  <div
                    className="flex flex-col justify-center items-center relative
                             lg:gap-0
                             gap-[0.93vw]"
                  >
                    <div
                      className="font-SourceSansProBold text-center text-neutral-g text-nowrap
                               lg:text-[1.458vw]
                               text-[4.186vw]"
                    >
                      Landing Page
                    </div>
                    <div
                      className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%]
                               lg:text-[0.729vw] lg:w-auto
                               text-[2.791vw] w-[24.885vw]"
                    >
                      Laman utama yang untuk memperkenalkan produk atau identitas yang memaparkan informasi spesifik
                    </div>
                  </div>
                  <div className="absolute bottom-0">
                    <ServicesOptionButton href="https://wa.me/6287785917029" />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0]
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[6.406vw]
                         border-b-[0.233vw] h-[28.837vw]"
              >
                <div
                  className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]
                           lg:text-[1.458vw]
                           text-[4.186vw]"
                >
                  Rp 475.000
                </div>
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold text-nowrap
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              >
                1-2 Pages
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              >
                {" "}
                4-12
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              >
                {" "}
                3-10 Hari
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              >
                <div
                  className="lg:w-[1.51vw]
                             w-[6.744vw]"
                >
                  <Image
                    src="/image/OurServices/red-cross.svg"
                    alt=""
                    draggable="false"
                    style={{ width: "100%", height: "auto" }}
                    width="28"
                    height="28"
                  />
                </div>
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              >
                <div>Desain unik</div>
                <div>Layout template</div>
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold text-center
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         h-[18.605vw] text-[3.256vw]"
              >
                +25K untuk tiap section tambahan
              </div>
            </div>
            <div
              className="flex flex-col border-[#E2E8F0] relative
                       lg:border-r-[0.052vw] lg:w-[18.75vw]
                       border-r-[0.233vw] w-[31.628vw]"
            >
              <div
                className="flex flex-col items-center border-[#E2E8F0] relative
                         lg:border-b-[0.052vw] lg:h-[11.719vw] lg:p-[1.458vw] lg:gap-[1.458vw]
                         border-b-[0.233vw] h-[60.465vw] px-[4.651vw] py-[6.512vw] gap-[3.721vw]"
              >
                <div className="w-full h-full relative">
                  <div
                    className="flex flex-col justify-center items-center relative
                               lg:gap-0
                               gap-[0.93vw]"
                  >
                    <div
                      className="font-SourceSansProBold text-center text-neutral-g
                               lg:text-[1.458vw]
                               text-[4.186vw]"
                    >
                      ComPro
                    </div>
                    <div
                      className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%]
                               lg:text-[0.729vw] lg:w-auto
                               text-[2.791vw] w-[24.885vw]"
                    >
                      Website yang menyajikan informasi perusahaan/organisasi,
                      visi, misi, layanan, dan kontak.
                    </div>
                  </div>
                  <div className="absolute bottom-0">
                    <ServicesOptionButton href="https://wa.me/6287785917029" />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0]
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[6.406vw]
                         border-b-[0.233vw] h-[28.837vw]"
              >
                <div
                  className="flex flex-col justify-center items-center font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]
                           lg:text-[1.458vw] lg:leading-[1.042vw]
                           text-[4.186vw]"
                >
                  <div
                    className="font-InterSemibold text-neutral-d 
                             lg:text-[0.729vw] lg:leading-[200%]
                             text-[2.791vw] leading-[125%]"
                  >
                    Start from
                  </div>
                  Rp 1.100.000
                  <div
                    className="flex justify-center items-center font-InterSemibold text-neutral-d text-center
                               lg:text-[0.833vw] lg:h-[1.823vw]
                               text-[2.791vw] h-auto"
                  >
                    Harga tergantung jumlah page
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              >
                3-6 Pages
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              >
                {" "}
                15-25
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              >
                {" "}
                14-28 Hari
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              >
                <div
                  className="lg:w-[1.667vw]
                             w-[7.442vw]"
                >
                  <Image
                    src="/image/OurServices/green-check.svg"
                    alt=""
                    draggable="false"
                    style={{ width: "100%", height: "auto" }}
                    width="36"
                    height="36"
                  />
                </div>
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              >
                <div>Desain unik</div>
                <div>Layout opsional</div>
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold text-center
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         h-[18.605vw] text-[3.256vw]"
              >
                +125K untuk tiap page tambahan
              </div>
            </div>
            <div
              className="flex flex-col border-[#E2E8F0] relative
                       lg:w-[18.75vw]
                       w-[31.628vw]"
            >
              <div
                className="flex flex-col items-center border-[#E2E8F0] relative
                         lg:border-b-[0.052vw] lg:h-[11.719vw] lg:p-[1.458vw] lg:gap-[1.458vw]
                         border-b-[0.233vw] h-[60.465vw] px-[4.651vw] py-[6.512vw] gap-[3.721vw]"
              >
                <div className="w-full h-full relative">
                  <div
                    className="flex flex-col justify-center items-center relative
                               lg:gap-0
                               gap-[0.93vw]"
                  >
                    <div
                      className="font-SourceSansProBold text-center text-neutral-g
                               lg:text-[1.458vw]
                               text-[4.186vw]"
                    >
                      Custom
                    </div>
                    <div
                      className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%]
                               lg:text-[0.729vw] lg:w-auto
                               text-[2.791vw] w-[24.885vw]"
                    >
                      Website yang dirancang dan dibangun sesuai kebutuhan
                      spesifik klien.
                    </div>
                  </div>
                  <div className="absolute bottom-0">
                    <ServicesOptionButton href="https://wa.me/6287785917029" />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0]
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[6.406vw]
                         border-b-[0.233vw] h-[28.837vw]
                         "
              >
                <div
                  className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]
                           lg:text-[1.458vw]
                           text-[4.186vw]"
                >
                  Custom
                </div>
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              >
                Unlimited
                <div
                  className="text-neutral-d text-center
                           lg:text-[0.833vw]
                           text-[2.791vw] leading-[125%]"
                >
                  Menyesuaikan Kebutuhan
                </div>
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              >
                Unlimited
                <div
                  className="text-neutral-d text-center
                           lg:text-[0.833vw]
                           text-[2.791vw] leading-[125%]"
                >
                  Menyesuaikan Kebutuhan
                </div>
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                          lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                          border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              ></div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                          lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                          border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              ></div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold text-center
                          lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                          border-b-[0.233vw] h-[18.605vw] text-[3.256vw]"
              >
                Desain dan Layout Unik
              </div>
              <div
                className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]
                         h-[18.605vw] text-[3.256vw]"
              ></div>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/6287785917029"
          data-aos="fade-up"
          className="group flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] hover:from-[#159E8D] via-[#44C4D9] hover:via-[#0893D4] to-[#159E8D] hover:to-[#44C4D9] *:transition-all duration-[5000] ease-in-out
                     lg:w-[8.75vw] lg:h-[2.396vw] lg:gap-[0.417vw]
                     w-[32.558vw] h-[9.302vw] gap-[1.86vw]"
        >
          <p
            className="font-InterSemibold
                       lg:text-[0.833vw] lg:group-hover:text-[0.9163vw]
                       text-[3.256vw] group-hover:text-[3.721vw]"
          >
            Talk With Us{" "}
          </p>
          <IoMdArrowRoundBack
            className="text-[#24AAA7] group-hover:text-[#20d2ed] group-hover:scale-[-110%] scale-x-[-100%]
                       lg:text-[1.25vw] lg:group-hover:text-[1.375vw]
                       text-[3.953vw] group-hover:text-[4.651vw]"
          />
        </a>
      </div>
      <div
        className="absolute bottom-0 w-full bg-gradient-to-r from-[#F1F5F9] via-[#CBD5E1] to-[#F1F5F9]
                   lg:h-[0.052vw]
                   h-[0.233vw]"
      ></div>
    </section>
  );
};

export default ServicesOption;
