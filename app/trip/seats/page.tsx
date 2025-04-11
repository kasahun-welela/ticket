"use client";

import { useState } from "react";

export default function BusSeatBooking() {
  const price = 3000;
  const generateSeats = () => {
    const rows = ["A", "B", "C", "D"];
    const seats = [];

    for (const row of rows) {
      for (let num = 1; num <= 15; num++) {
        seats.push({
          number: `${row}${num}`,
          status: Math.random() > 0.7 ? "reserved" : "available",
          price: 3000,
        });
      }
    }
    return seats;
  };

  const [seats] = useState(generateSeats());
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (seatNumber: string, currentStatus: string) => {
    if (currentStatus === "reserved") return;

    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((s) => s !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const calculateTotal = () => {
    return selectedSeats.length * 3000;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Selam Bus - Seat Selection
      </h1>

      {/* Legend */}
      <div className="flex justify-center gap-6 mb-8">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-green-500 rounded mr-2"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-yellow-400 rounded mr-2"></div>
          <span>Selected</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
          <span>Reserved</span>
        </div>
      </div>

      {/* Bus Layout */}
      <div className="bg-gray-100 dark:bg-[#020817] p-6 rounded-lg">
        {/* Seats Grid */}
        <div className="flex flex-col">
          <div className="grid grid-cols-4 md:grid-cols-15 gap-3 mb-6">
            {seats.map((seat) => {
              const isSelected = selectedSeats.includes(seat.number);
              const isReserved = seat.status === "reserved";

              let seatClass = "bg-green-500 hover:bg-green-600"; // Available
              if (isSelected) seatClass = "bg-yellow-400 hover:bg-yellow-500";
              if (isReserved) seatClass = "bg-gray-300 cursor-not-allowed";

              return (
                <button
                  key={seat.number}
                  className={`w-10 h-10 rounded flex items-center justify-center text-white font-medium ${seatClass} transition-colors`}
                  onClick={() => handleSeatClick(seat.number, seat.status)}
                  disabled={isReserved}
                >
                  {seat.number}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selection Summary */}
      {selectedSeats.length > 0 && (
        <div className="mt-8 p-6 bg-white md:dark:bg-[#020817] border rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Your Selection</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Selected Seats:</h3>
              <p>{selectedSeats.join(", ")}</p>
            </div>
            <div>
              <h3 className="font-semibold">Total Price:</h3>
              <p>{calculateTotal().toLocaleString()} ETB</p>
            </div>
          </div>
          <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Confirm Booking for {selectedSeats.length} Seat(s)
          </button>
        </div>
      )}
    </div>
  );
}
