import ArtikelCard from "./ArtikelCard";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Artikel() {
  const [dataPrevArtikel, setDataPrevArtikel] = useState([]);
  const collectionRef = collection(db, "artikel-preview");

  useEffect(() => {
    const getPrevArtikel = async () => {
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDataPrevArtikel(filteredData);
    };

    getPrevArtikel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="w-full pb-44 pt-12 px-32 bg-[#F9DD6B] bg-opacity-20 h-fit"
      id="artikel"
    >
      <h1 className="md:text-3xl text-xl py-24 text-center font-bold">
        Artikel Sejarah
      </h1>

      <div className="flex justify-between items-center lg:flex-row flex-col gap-7">
        {dataPrevArtikel.map((s) => (
          <ArtikelCard
            gambar={s.gambar}
            judul={s.judul}
            link={s.link}
            deskripsi={s.deskripsi}
            key={s.id}
          />
        ))}
      </div>
    </section>
  );
}
