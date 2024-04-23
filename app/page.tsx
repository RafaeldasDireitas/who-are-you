import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Hero from "./Hero";
import OwnData from "./OwnData";
import Registrar from "./Registrar";

export default function Home() {
  return (
    <>
      <Hero />
      <OwnData />
      <Registrar />
    </>
  );
}
