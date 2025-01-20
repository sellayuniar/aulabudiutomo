import AulaUtama from "../../public/aula-main.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section className=" relative lg:h-[592px] md:h-[300px] h-[200px] w-full">
      <Image
        src={AulaUtama}
        alt=""
        className="absolute lg:h-[592px] md:h-[300px] h-[200px] object-cover"
      />
      <span className="bg-[#FFEDB4] opacity-40 h-full w-full absolute"></span>
      <span className="absolute  flex items-center flex-col h-full w-full lg:top-48 top-14">
        <h1 className="lg:text-5xl md:text-3xl text-md font-bold md:my-5 my-2">
          CAGAR BUDAYA
        </h1>
        <h1 className="lg:text-5xl md:text-3xl text-md font-bold">
          AULA BUDI OETOMO YOGYAKARTA
        </h1>
      </span>
    </section>
  );
}
