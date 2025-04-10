import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import busLogo from "@/public/selam-bus.jpg";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="max-w-[90%] md:max-w-[80%] mx-auto py-8">
      <div>
        <Card className="max-w-lg bg-white/30 backdrop-blur-md shadow hover:shadow-xl transition-shadow py-2">
          <div className="md:flex items-center justify-between p-4 ">
            <div className="flex flex-col items-center">
              <Image src={busLogo} className="h-16 w-16" alt="Bus Logo" />
              <CardTitle className="mt-2 text-lg font-bold text-center">
                Selam Bus
              </CardTitle>
            </div>

            <CardContent className="space-y-4 ">
              <div className="grid grid-cols-2 gap-1">
                <p className="font-semibold text-gray-600">From</p>
                <p className="font-medium">Addis Ababa</p>
                <p className="font-semibold text-gray-600">To</p>
                <p className="font-medium">Aksum</p>
                <p className="font-semibold text-gray-600">Date</p>
                <p className="font-medium">Sat, April 12, 2025</p>
                <p className="font-semibold text-gray-600">Seats</p>
                <p className="font-medium">42 available</p>
                <p className="font-semibold text-gray-600">Bus Number</p>
                <p className="font-medium">01</p>
                <p className="font-semibold text-gray-600">Price</p>
                <p className="font-medium text-green-600">
                  3000 <span>ETB</span>
                </p>
              </div>

              <div className="flex justify-end items-center pt-4">
                <Button>Book Now</Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
