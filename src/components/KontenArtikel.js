import React from "react";
import Image from "next/image";

const KontenArtikel = ({
  gambar,
  judul,
  sumber,
  konten1,
  konten2,
  konten3,
  judulLink,
}) => {
  return (
    <section className="flex-col gap-2 items-center justify-center w-full mt-20 mb-32 lg:px-32 lg:pb-32 px-8">
      <h1 className="md:text-3xl lg:mt-20 text-xl md:mb-12 mb-5 lg:mb-20 text-center font-bold">
        {judul}
      </h1>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-full mb-10">
          <Image
            src={gambar}
            alt=""
            width={500}
            height={300}
            className="md:w-[700px] md:h-[400px] w-full object-cover rounded-md"
          />
        </div>
        <div className=" w-full lg:pt-0 pt-3">
          <p className="text-sm md:text-base">{konten1}</p>
          <br />
          <p className="text-sm md:text-base">{konten2}</p>
          <br />
          <p className="text-sm md:text-base">{konten3}</p>
          <br />
          <a
            href={sumber}
            className="text-sm md:text-base hover:text-blue-500 text-wrap"
          >
            Sumber: {judulLink}
          </a>
        </div>
      </div>
    </section>
  );
};

export default KontenArtikel;
