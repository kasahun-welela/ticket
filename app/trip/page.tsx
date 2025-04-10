import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import busLogo from "@/public/selam-bus.jpg";
import { Button } from "@/components/ui/button";

export default function page() {
  const buses = [
    {
      id: 1,
      name: "Selam Bus",
      logo: "/selam-bus.jpg",
      from: "Addis Ababa",
      to: "Aksum",
      date: "Sat, April 12, 2025",
      seats: 42,
      busNumber: "01",
      price: 3000,
      currency: "ETB",
    },
    {
      id: 2,
      name: "Sky Bus",
      logo: "/selam-bus.jpg",
      from: "Addis Ababa",
      to: "Bahir Dar",
      date: "Sun, April 13, 2025",
      seats: 36,
      busNumber: "02",
      price: 2500,
      currency: "ETB",
    },
    {
      id: 3,
      name: "Abay Bus",
      logo: "/selam-bus.jpg",
      from: "Addis Ababa",
      to: "Gondar",
      date: "Mon, April 14, 2025",
      seats: 40,
      busNumber: "03",
      price: 2800,
      currency: "ETB",
    },
    {
      id: 4,
      name: "Lucy Bus",
      logo: "/selam-bus.jpg",
      from: "Addis Ababa",
      to: "Hawassa",
      date: "Tue, April 15, 2025",
      seats: 38,
      busNumber: "04",
      price: 2200,
      currency: "ETB",
    },
    {
      id: 5,
      name: "Roha Bus",
      logo: "/selam-bus.jpg",
      from: "Addis Ababa",
      to: "Mekele",
      date: "Wed, April 16, 2025",
      seats: 45,
      busNumber: "05",
      price: 3200,
      currency: "ETB",
    },
  ];
  return (
    <div className="max-w-[90%] md:max-w-[80%] mx-auto py-8 space-y-6">
      {buses.map((bus) => (
        <Card
          key={bus.id}
          className="max-w-lg bg-white/30 backdrop-blur-md shadow hover:shadow-xl transition-shadow py-2"
        >
          <div className="md:flex items-center justify-between p-4">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={bus.logo}
                width={64}
                height={64}
                alt={`${bus.name} Logo`}
                className="h-16 w-16"
              />
              <CardTitle className="mt-2 text-lg font-bold text-center">
                {bus.name}
              </CardTitle>
            </div>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-1">
                <p className="font-semibold text-gray-600">From</p>
                <p className="font-medium">{bus.from}</p>
                <p className="font-semibold text-gray-600">To</p>
                <p className="font-medium">{bus.to}</p>
                <p className="font-semibold text-gray-600">Date</p>
                <p className="font-medium">{bus.date}</p>
                <p className="font-semibold text-gray-600">Seats</p>
                <p className="font-medium">{bus.seats} available</p>
                <p className="font-semibold text-gray-600">Bus Number</p>
                <p className="font-medium">{bus.busNumber}</p>
                <p className="font-semibold text-gray-600">Price</p>
                <p className="font-medium text-green-600">
                  {bus.price} <span>{bus.currency}</span>
                </p>
              </div>

              <div className="flex justify-end items-center pt-4">
                <Button>Book Now</Button>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
