import Image from "next/image";
import busHero from "@/public/bus-hero.png";
import TripForm from "@/components/TripForm";

export default function Home() {
  return (
    <>
      <Image src={busHero} alt="bus hero" className="md:h-screen" />
      <TripForm />
    </>
  );
}
