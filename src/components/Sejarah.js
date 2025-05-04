import AulaDepanSatu from "../../public/aula-depan-2.png";
import AulaDepanDua from "../../public/depan.jpeg";
import Image from "next/image";
export default function Sejarah() {
  return (
    <section
      className="w-full md:my-32 mt-10 md:mt-[250px] lg:mt-10 mb-32 lg:px-44 px-8 xl:mt-44"
      id="sejarah"
    >
      <h1 className="md:text-3xl lg:mt-20 text-base md:mb-12 mb-10 lg:mb-20 text-center font-bold">
        Sejarah Singkat
      </h1>

      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full">
          <div className="flex flex-col md:flex-row lg:flex-col gap-3 justify-between">
            <Image
              src={AulaDepanDua}
              alt=""
              className="lg:w-3/4 md:w-[350px] md:h-[300px] h-[150px] w-full object-cover "
            />
            <Image
              src={AulaDepanSatu}
              alt=""
              className="lg:w-3/4 md:w-[350px] md:h-[300px] h-[150px] w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:pt-0 pt-3">
          <p className="text-sm md:text-base">
            Bangunan SMA Negeri 11 Yogyakarta merupakan salah satu bangunan
            bersejarah yang ada di Yogyakarta. Bangunan ini menyimpan memori
            kolektif bangsa tentang kebangkitan nasional Indonesia. Organisasi
            Budi Utomo pernah menyelenggarakan kongres pertamanya di gedung
            tersebut pada 3 – 5 Oktober 1908. Sebagaimana kita ketahui, Hari
            Kebangkitan Nasional yang diperingati setiap 20 Mei bertepatan
            dengan lahirnya Organisasi Budi Utomo. Pada saat diselenggarakannya
            Kongres I Budi Utomo, gedung ini (sekarang SMA N 11 Yogyakarta)
            merupakan bangunan “Kweekschool Voor Inlandsche Onderwijzen
            Djogjakarta”, yaitu sekolah untuk mendidik guru. Sekolah yang juga
            dikenal dengan nama “Openbare Kweekshool” ini dibangun pada 1894,
            dan mulai dibuka pada 7 April 1897. Sekolah ini juga disebut
            “sekolah raja” karena biaya operasionalnya berasal dari pemerintah
            Belanda.
          </p>
          <br />
          <p className="text-sm md:text-base">
            Kongres I Budi Utomo berlangsung pada 3 – 5 Oktober 1908 di gedung
            Kweekschool Jetis, Yogyakarta. Kongres berlangsung di ruang makan
            (eatzal) (sekarang aula SMA Negeri 11 Yogyakarta). Dalam kongres
            tersebut hal-hal yang dibahas antara lain penyusunan anggaran dasar
            (AD) dan anggaran rumah tangga (ART) organisasi serta membahas
            mengenai masalah kebudayaan dan pendidikan bagi kemajuan kaum bumi
            putera (Ki Nayono, 1987). Kongres I Budi Utomo memiliki makna bagi
            perjuangan bangsa Indonenesia yaitu mencerminkan jiwa zaman yang
            mengandung aspirasi bangsa untuk bergerak mencapai kemajuan serta
            merefleksikan kesadaran kolektif untuk mengatasi krisis identitas
            dengan mencari yang baru (Sartono Kartodirjo, 1988).
          </p>
          <br />
          <p className="text-sm md:text-base">
            Sekarang gedung ini digunakan untuk aula SMA Negeri 11 Yogyakarta. Bangunan
            ini telah ditetapkan sebagai cagar budaya melalui Kep.Men P&K RI No.
            132/M/1998. Gedung Budi Utomo terletak di Jalan A.M Sangaji No. 38,
            Yogyakarta.
          </p>
          <br />
          <a
            href="https://kebudayaan.kemdikbud.go.id/bpcbyogyakarta/bangunan-sma-negeri-11-yogyakarta-tempat-bersejarah-berlangsungnya-kongres-i-budi-utomo/"
            className="text-sm md:text-base hover:text-blue-500"
          >
            Sumber: Kebudayaan Kemendikbud Bangunan SMAN 11 Yogyakarta
          </a>
        </div>
      </div>
    </section>
  );
}
