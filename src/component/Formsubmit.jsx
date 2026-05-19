"use client";

import { useState } from "react";

const BookRoomPage = ({ room }) => {
  const [open, setOpen] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState(1);
  const [note, setNote] = useState("");

  const pricePerHour = room?.hourlyRate || 0;
  const totalCost = duration * pricePerHour;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      roomId: room?._id,
      roomName: room?.name,
      image: room?.image,
      date,
      time,
      duration,
      note,
      totalCost,
      status: "confirmed",
      createdAt: new Date(),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Booking Saved Successfully!");
        setOpen(false);
      } else {
        alert("Failed to book");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Book Now
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl">

            <div className="flex justify-between p-5 border-b">
              <h2 className="text-xl font-bold">Book This Room</h2>
              <button onClick={() => setOpen(false)}>×</button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <input type="date" value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border p-2 rounded"
                />

                <input type="time" value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="border p-2 rounded"
                />
              </div>

              <select
                className="w-full border p-2 rounded"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              >
                {[1,2,3,4,5,6,7,8].map((h) => (
                  <option key={h} value={h}>{h} Hour</option>
                ))}
              </select>

              <div className="font-bold text-green-600">
                Total: ${totalCost}
              </div>

              <textarea
                className="w-full border p-2 rounded"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Confirm Booking
              </button>

            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default BookRoomPage;