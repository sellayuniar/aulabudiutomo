import Logo from "../../public/SMA-11-Jogja-Logo.png";
import Image from "next/image";
import LogoUNY from "../../public/logo_uny.png";
import LogoPPG from "../../public/logo_ppg.png";
import { Heart } from "react-feather";
export default function Footer() {
  return (
    <section className="w-full px-5 pt-5 gap-2 flex flex-col items-center bg-[#F9DD6B]">
      <Image src={Logo} alt="" className="h-[50px] w-[50px]" />
      <h3 className="text-base font-bold">SMAN 11 Yogyakarta</h3>
      <p className="md:text-sm text-xs font-bold text-center">
        Jl. A.M. Sangaji No.50, Cokrodiningratan, Kec. Jetis, Kota Yogyakarta,
        Daerah Istimewa Yogyakarta 55233
      </p>
      <p className="md:text-sm text-xs font-bold">Jam Kerja 07.00 - 16.00 </p>
      <div className="w-full flex flex-col md:flex-row justify-between items-center border-t-[1px] border-amber-600 mt-5 mb-2">
        <div className="flex items-center justify-center mt-3 gap-3">
          <Image src={LogoUNY} alt="" className="h-[50px] w-[50px]" />
          <Image src={LogoPPG} alt="" className="h-[50px] w-[100px]" />
        </div>
        <p className="md:flex items-center gap-2 text-xs md:text-base hidden">
          Created with <Heart size={20} fill="red" stroke="red" />
          by Team PPL PPG Informatika UNY 2024/2025
        </p>
        <p className="md:hidden items-center gap-2 text-xs md:text-base flex mt-2 font-bold text-gray-700">
          Created by Team PPL PPG Informatika UNY 2024/2025
        </p>
      </div>
    </section>
  );
}
