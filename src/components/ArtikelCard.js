import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArtikelCard = ({ gambar, judul, link, deskripsi }) => {
  return (
    <div className="md:h-[350px] md:w-[300px] h-[300px] w-[250px] rounded-md  relative">
      <Image
        src={gambar}
        alt={judul}
        className="md:h-[350px] h-[250px] absolute object-cover rounded-lg"
        width={350}
        height={250}
      />
      <span className="absolute -bottom-1 bg-[#F9DD6B] rounded-md p-2 flex flex-col">
        <h3 className="text-sm md:text-lg font-bold py-2">{judul}</h3>
        <p className="text-xs pb-2">{deskripsi}</p>
        <Link
          href={link}
          className="cursor-pointer text-xs md:text-sm font-bold flex justify-end pb-1 hover:text-[#625004]"
        >
          Selengkapnya{">>"}
        </Link>
      </span>
    </div>
  );
};

export default ArtikelCard;
