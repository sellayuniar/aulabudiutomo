import Link from "next/link";
import BudiUtomo from "../../public/budi-utomo.png";
import Image from "next/image";
export default function Artikel() {
  return (
    <section
      className="w-full my-16 px-32 lg:pb-20 bg-[#F9DD6B] bg-opacity-20 h-fit pb-20"
      id="artikel"
    >
      <h1 className="md:text-3xl text-xl py-12 text-center font-bold">
        Artikel
      </h1>

      <div className="flex justify-between items-center lg:flex-row flex-col gap-7">
        {/* card */}
        <div className="md:h-[350px] md:w-[300px] h-[300px] w-[250px] rounded-md  relative">
          <Image
            src={BudiUtomo}
            alt=""
            className="md:h-[350px] h-[250px] absolute object-cover rounded-lg"
          />
          <span className="absolute -bottom-1 bg-[#F9DD6B] rounded-md p-2 flex flex-col">
            <h3 className="text-lg font-bold py-2">Pendiri Budi Oetomo</h3>
            <p className="text-xs pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              euismod elementum semper
            </p>
            <Link
              href="/artikel/budi-utomo"
              className="cursor-pointer text-sm font-bold flex justify-end pb-1 hover:text-[#625004]"
            >
              Selengkapnya{">>"}
            </Link>
          </span>
        </div>

        {/* card */}
        <div className="md:h-[350px] md:w-[300px] h-[300px] w-[250px] rounded-md  relative">
          <Image
            src={BudiUtomo}
            alt=""
            className="md:h-[350px] h-[250px] absolute object-cover rounded-lg"
          />
          <span className="absolute -bottom-1 bg-[#F9DD6B] rounded-md p-2 flex flex-col">
            <h3 className="text-lg font-bold py-2">Pendiri Budi Oetomo</h3>
            <p className="text-xs pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              euismod elementum semper
            </p>
            <Link
              href="/artikel/budi-utomo"
              className="cursor-pointer text-sm font-bold flex justify-end pb-1 hover:text-[#625004]"
            >
              Selengkapnya{">>"}
            </Link>
          </span>
        </div>

        {/* card */}
        <div className="md:h-[350px] md:w-[300px] h-[300px] w-[250px] rounded-md  relative">
          <Image
            src={BudiUtomo}
            alt=""
            className="md:h-[350px] h-[250px] absolute object-cover rounded-lg"
          />
          <span className="absolute -bottom-1 bg-[#F9DD6B] rounded-md p-2 flex flex-col">
            <h3 className="text-lg font-bold py-2">Pendiri Budi Oetomo</h3>
            <p className="text-xs pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              euismod elementum semper
            </p>
            <Link
              href="/artikel/budi-utomo"
              className="cursor-pointer text-sm font-bold flex justify-end pb-1 hover:text-[#625004]"
            >
              Selengkapnya{">>"}
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
