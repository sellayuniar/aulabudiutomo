import AulaUtama from "../../public/aula-main.png";
import AulaDepanSatu from "../../public/aula-depan-2.png";
import AulaDepanDua from "../../public/depan.jpeg";
import AulaBelakang from "../../public/belakang.jpeg";
import AulaDepanTiga from "../../public/depan-3.jpeg";
import Image from "next/image";
export default function Galeri() {
  return (
    <section className="w-full my-16 md:px-32 px-5 lg:pb-20" id="galeri">
      <h1 className="md:text-3xl text-xl mb-12 text-center font-bold">
        Galeri
      </h1>
      <div className="flex flex-wrap lg:justify-between gap-y-4 lg:gap-x-1 items-center">
        <Image
          src={AulaUtama}
          alt=""
          className="h-[180px] md:h-[250px] lg:w-[360px] w-full object-cover"
        />
        <Image
          src={AulaDepanDua}
          alt=""
          className="h-[180px] md:h-[250px] lg:w-[360px] w-full object-cover"
        />
        <Image
          src={AulaDepanSatu}
          alt=""
          className="h-[180px] md:h-[250px] lg:w-[360px] w-full object-cover"
        />
        <Image
          src={AulaDepanTiga}
          alt=""
          className="h-[180px] md:h-[250px] lg:w-[360px] w-full object-cover"
        />
        <Image
          src={AulaBelakang}
          alt=""
          className="h-[180px] md:h-[250px] lg:w-[360px] w-full object-cover"
        />
        <Image
          src={AulaUtama}
          alt=""
          className="h-[180px] md:h-[250px] lg:w-[360px] w-full object-cover"
        />
      </div>
    </section>
  );
}
