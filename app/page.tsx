import Image from "next/image";
import busHero from "@/public/bus-hero.png";
import TripForm from "@/components/TripForm";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 -z-10">
        <Image
          src={busHero}
          alt="bus hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-center mx-6">
        <TripForm />
      </div>
    </div>
  );
}
