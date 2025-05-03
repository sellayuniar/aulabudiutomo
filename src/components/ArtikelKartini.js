import Carousel from "./Carousel";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ArtikelKartini() {
  const [fotoArtikel, setFotoArtikel] = useState([]);
  const collectionRef = collection(db, "artikel-kartini");

  useEffect(() => {
    const getFotoKartini = async () => {
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFotoArtikel(filteredData);
    };

    getFotoKartini();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-full mt-10 px-32 lg:pb-36 h-fit pb-20" id="artikel">
      <h1 className="md:text-3xl text-xl py-20 text-center font-bold">
        Kegiatan Hari Kartini di Aula Boedi Oetomo
      </h1>

      <div className="flex flex-col">
        <Carousel autoSlide={false} autoSlideInterval={5000}>
          {fotoArtikel.map((s) => (
            <Image
              src={s.gambar}
              alt={s.judul}
              className="object-fit w-full"
              width={1920}
              height={1080}
              key={s.id}
            />
          ))}
        </Carousel>
        <div className="mt-5">
          <p className="text-sm md:text-base leading-10">
            Dalam rangka memperingati Hari Kartini, SMA Negeri 11 Yogyakarta
            menyelenggarakan acara Sebelas Kartinian (SEKAR) dengan mengusung
            tema <b>Kartini Masa Kini: Merawat Tradisi, Menginspirasi Negeri</b>
            . Kegiatan ini menjadi momentum penting untuk menggali kembali
            semangat juang Kartini dengan wajah generasi masa kini yang tetap
            hidup dan berkembang dalam zaman modern. SEKAR tahun ini menegaskan
            bahwa Kartini masa kini adalah mereka yang terus merawat tradisi dan
            tidak berhenti menginspirasi negeri. Di SMA Negeri 11 Yogyakarta,
            nilai kebangsaan tidak hanya diajarkan lewat teori, tapi diwujudkan
            dalam aksi dan karya nyata.
          </p>
          <br />
          <a
            href="https://www.instagram.com/p/DIxrotIS4vQ/?img_index=1"
            className="text-sm md:text-base hover:text-blue-500"
          >
            Sumber: Instagram SMAN 11 Yogyakarta
          </a>
        </div>
      </div>
    </section>
  );
}
