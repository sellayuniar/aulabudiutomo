import AulaDepanSatu from "../../public/aula-depan-2.png";
import AulaDepanDua from "../../public/depan.jpeg";
import Image from "next/image";
export default function Sejarah() {
  return (
    <section
      className="w-full md:my-16 my-8 lg:px-32 lg:pb-20 px-8"
      id="sejarah"
    >
      <h1 className="md:text-3xl lg:mt-20 text-xl md:mb-12 mb-5 lg:mb-8 text-center font-bold">
        Sejarah
      </h1>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full">
          <div className="flex flex-col md:flex-row lg:flex-col gap-3 justify-between">
            <Image
              src={AulaDepanDua}
              alt=""
              className="lg:w-3/4 md:w-[350px] md:h-[300px] w-full object-cover"
            />
            <Image
              src={AulaDepanSatu}
              alt=""
              className="lg:w-3/4 md:w-[350px] md:h-[300px] w-full object-cover"
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
