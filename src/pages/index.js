import Artikel from "@/components/Artikel";
import Footer from "@/components/Footer";
import Galeri from "@/components/Galeri";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Kontak from "@/components/Kontak";
import Sejarah from "@/components/Sejarah";
import Logo from "../../public/SMA-11-Jogja-Logo.ico";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Aula Budi Oetomo</title>
        <link
          rel="icon"
          href="/SMA-11-Jogja-Logo.ico"
          type="image/icon type"
        ></link>
      </Head>
      <Header />
      <Hero />
      <Sejarah />
      <Artikel />
      <Galeri />
      <Kontak />
      <Footer />
    </div>
  );
}
