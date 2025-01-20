import Logo from "../../public/SMA-11-Jogja-Logo.png";
import Image from "next/image";
export default function Footer() {
  return (
    <section className="w-full pt-4 md:px-32 px-5 py-5 gap-2 flex flex-col items-center bg-[#F9DD6B]">
      <Image src={Logo} alt="" className="h-[50px] w-[50px]" />
      <h3 className="text-base font-bold">SMAN 11 Yogyakarta</h3>
      <p className="md:text-sm text-xs font-bold text-center">
        Jl. A.M. Sangaji No.50, Cokrodiningratan, Kec. Jetis, Kota Yogyakarta,
        Daerah Istimewa Yogyakarta 55233
      </p>
      <p className="md:text-sm text-xs font-bold">Jam Kerja 07.00 - 16.00 </p>
    </section>
  );
}
