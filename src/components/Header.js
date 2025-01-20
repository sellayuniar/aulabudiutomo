import Link from "next/link";
import Logo from "../../public/SMA-11-Jogja-Logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="w-full h-[70px] lg:h-24 flex bg-[#F9DD6B] lg:px-32 md:px-10 md:py-5 py-1 items-center justify-between">
      <div className="mr-32">
        <Link href="/" className="flex items-center cursor-pointer">
          <div>
            <Image
              src={Logo}
              alt="logo"
              className="lg:w-[80px] lg:h-[80px] h-[60px] w-[60px] "
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="lg:text-2xl md:text-xl text-sm font-bold">
              Aula Budi Oetomo
            </h1>
            <h3 className="lg:text-sm text-xs font-bold">SMAN 11 Yogyakarta</h3>
          </div>
        </Link>
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center justify-between">
          <li>
            <Link
              href="/"
              className="text-lg font-bold py-2 pl-3 pr-4 cursor-pointer hover:text-[#625004]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#sejarah"
              className="text-lg font-bold py-2 pl-3 pr-4 cursor-pointer hover:text-[#625004]"
            >
              Sejarah
            </Link>
          </li>
          <li>
            <Link
              href="#galeri"
              className="text-lg font-bold py-2 pl-3 pr-4 cursor-pointer hover:text-[#625004]"
            >
              Galeri
            </Link>
          </li>
          <li>
            <Link
              href="#kontak-kami"
              className="text-lg font-bold py-2 pl-3 pr-4 cursor-pointer hover:text-[#625004]"
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
