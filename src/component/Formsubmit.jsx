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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      date,
      time,
      duration,
      note,
      totalCost,
    });

    alert("Booking Confirmed!");
    setOpen(false);
  };

  return (
    <div>

      {/* BOOK NOW BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Book Now
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl relative">
            
            {/* HEADER */}
            <div className="flex justify-between items-center border-b p-5">
              <h2 className="text-xl font-bold text-[#0F172A]">
                Book This Room
              </h2>

              {/* CROSS */}
              <button
                onClick={() => setOpen(false)}
                className="text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="border p-2 rounded"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />

                <input
                  type="time"
                  className="border p-2 rounded"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              {/* Duration */}
              <select
                className="w-full border p-2 rounded"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              >
                {[1,2,3,4,5,6,7,8].map((h) => (
                  <option key={h} value={h}>
                    {h} Hour
                  </option>
                ))}
              </select>

              {/* COST */}
              <div className="font-bold text-green-600">
                Total Cost: ${totalCost}
              </div>

              {/* NOTE */}
              <textarea
                className="w-full border p-2 rounded"
                rows="3"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />

              {/* BUTTONS */}
              <div className="flex justify-end gap-3">

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Confirm Booking
                </button>

              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default BookRoomPage;