"use client";

import Image from "next/image";

const bookings = [
  {
    id: 1,
    roomName: "Modern Study Hub",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    date: "20 May 2026",
    start: "10:00 AM",
    end: "01:00 PM",
    total: 24,
    status: "confirmed",
  },

  {
    id: 2,
    roomName: "Silent Reading Space",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    date: "24 May 2026",
    start: "03:00 PM",
    end: "05:00 PM",
    total: 10,
    status: "cancelled",
  },
];

const MyBookingsPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      {/* Heading */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#0F172A]">
          My Bookings
        </h1>

        <p className="text-gray-500 mt-3">
          View and manage your booked study rooms.
        </p>
      </div>

      {/* Booking Cards */}
      <div className="space-y-8">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-[28px] shadow-lg border border-gray-100 overflow-hidden grid lg:grid-cols-3"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={booking.image}
                alt={booking.roomName}
                width={500}
                height={350}
                className="w-full h-full min-h-[280px] object-cover"
              />
            </div>

            {/* Details */}
            <div className="lg:col-span-2 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h2 className="text-3xl font-bold text-[#0F172A]">
                    {booking.roomName}
                  </h2>

                  {/* Status */}
                  <span
                    className={`px-5 py-2 rounded-full text-sm font-semibold ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>

                {/* Booking Info */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <p className="text-gray-500 text-sm">
                      Booking Date
                    </p>

                    <h4 className="font-semibold text-lg mt-1">
                      {booking.date}
                    </h4>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Time Slot
                    </p>

                    <h4 className="font-semibold text-lg mt-1">
                      {booking.start} - {booking.end}
                    </h4>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Total Cost
                    </p>

                    <h4 className="font-semibold text-lg mt-1 text-primary">
                      ${booking.total}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="mt-10">
                {booking.status === "confirmed" ? (
                  <button className="btn btn-error rounded-xl text-white px-8">
                    Cancel Booking
                  </button>
                ) : (
                  <button
                    disabled
                    className="btn rounded-xl px-8"
                  >
                    Cancelled
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {bookings.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-gray-700">
            No Bookings Yet
          </h2>

          <p className="text-gray-500 mt-4">
            You haven’t booked any study rooms.
          </p>
        </div>
      )}
    </section>
  );
};

export default MyBookingsPage;