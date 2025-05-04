import AulaUtama from "../../public/aula-main.png";
import AulaDepanSatu from "../../public/aula-depan-2.png";
import AulaDepanDua from "../../public/depan.jpeg";
import AulaBelakang from "../../public/belakang.jpeg";
import AulaDepanTiga from "../../public/depan-3.jpeg";
import Image from "next/image";
export default function Galeri() {
  return (
    <section
      className="w-full pb-40 pt-24 md:px-32 px-5 lg:pb-56 bg-[#F9DD6B] bg-opacity-20"
      id="galeri"
    >
      <h1 className="md:text-3xl text-base mb-16 md:mb-24 text-center font-bold">
        Galeri
      </h1>
      <div className="flex flex-wrap lg:justify-between gap-y-10 md:gap-y-4 lg:gap-x-1 items-center">
        <Image
          src={AulaUtama}
          alt=""
          className="h-[180px] md:h-[250px] lg:w-[360px] w-full object-cover rounded-md"
        />
        <Image
          src={AulaDepanDua}
          alt=""
          className="h-[180px] md:h-[250px] lg:w-[360px] w-full object-cover rounded-md"
        />
        <Image
          src={AulaDepanSatu}
          alt=""
          className="h-[180px] md:h-[250px] lg:w-[360px] w-full object-cover rounded-md"
        />
        <Image
          src={AulaDepanTiga}
          alt=""
          className="h-[180px] md:h-[250px] lg:w-[360px] w-full object-cover rounded-md"
        />
        <Image
          src={AulaBelakang}
          alt=""
          className="h-[180px] md:h-[250px] lg:w-[360px] w-full object-cover rounded-md"
        />
        <Image
          src={AulaUtama}
          alt=""
          className="h-[180px] md:h-[250px] lg:w-[360px] w-full object-cover rounded-md"
        />
      </div>
    </section>
  );
}
