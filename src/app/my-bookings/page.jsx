import { BookingCancelAlert } from "@/component/BookingCancelAlert";
import Image from "next/image";

const MyBookingsPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`,
    { cache: "no-store" }
  );

  const data = await res.json();

  const bookings = data?.bookings || data || [];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

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
            key={booking._id}
            className="bg-white rounded-[28px] shadow-lg border border-gray-100 overflow-hidden grid lg:grid-cols-3"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={booking.image || "/placeholder.jpg"}
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

                  <span
                    className={`px-5 py-2 rounded-full text-sm font-semibold ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {booking.status || "confirmed"}
                  </span>
                </div>

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
                      Time
                    </p>
                    <h4 className="font-semibold text-lg mt-1">
                      {booking.time}
                    </h4>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Total Cost
                    </p>
                    <h4 className="font-semibold text-lg mt-1 text-green-600">
                      ${booking.totalCost || booking.total}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="mt-10">
                {booking.status === "confirmed" ? (
                   <BookingCancelAlert booking={booking}/>
                  // <button className="bg-red-500 text-white px-8 py-2 rounded-xl">
                   
                  // </button>
                ) : (
                  <button disabled className="px-8 py-2 rounded-xl bg-gray-200">
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