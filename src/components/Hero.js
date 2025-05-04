import Image from "next/image";
import Carousel from "./Carousel";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { ChevronRight } from "react-feather";
import Link from "next/link";

export default function Hero() {
  const [dataBanner, setDataBanner] = useState([]);
  const collectionRef = collection(db, "banner");

  useEffect(() => {
    const getDataBanner = async () => {
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDataBanner(filteredData);
    };

    getDataBanner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative lg:h-[600px] md:h-[300px] h-[250px] w-full pb-20 md:mb-54 lg:mb-10 xl:mb-72">
      <div className="block">
        <Carousel autoSlide={false} autoSlideInterval={5000}>
          {dataBanner.map((s) => (
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

        <div className="flex absolute items-center  bg-[#F9DD6B]/80 rounded-full md:p-1 drop-shadow-xl right-3 bottom-14 lg:bottom-20 lg:right-20 md:-bottom-24 xl:-bottom-20">
          <h3 className="md:text-2xl font-bold text-xs mx-5 z-50">
            Sejarah Cagar Budaya Aula Boedi Oetomo
          </h3>
          <Link
            href="/artikel/sejarah-aula-boedi-oetomo"
            className="p-1 rounded-full shadow bg-amber-600  text-white hover:bg-amber-500"
          >
            <ChevronRight className="md:w-10 md:h-10 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
