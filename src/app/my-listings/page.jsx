"use client";

import Image from "next/image";
import Link from "next/link";

const myRooms = [
  {
    id: 1,
    name: "Quiet Focus Room",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    price: 5,
    bookings: 12,
    floor: "3rd Floor",
  },

  {
    id: 2,
    name: "Premium Study Lounge",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    price: 12,
    bookings: 20,
    floor: "6th Floor",
  },
];

const MyListingsPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      {/* Heading */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#0F172A]">
          My Listings
        </h1>

        <p className="text-gray-500 mt-3">
          Manage all the study rooms you have added.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-[28px] overflow-hidden shadow-lg border border-gray-100"
          >
            {/* Image */}
            <Image
              src={room.image}
              alt={room.name}
              width={500}
              height={300}
              className="w-full h-[240px] object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#0F172A]">
                {room.name}
              </h2>

              <div className="flex items-center justify-between mt-4 text-gray-600">
                <p>📍 {room.floor}</p>

                <p>
                  <span className="font-semibold text-primary">
                    {room.bookings}
                  </span>{" "}
                  bookings
                </p>
              </div>

              <div className="mt-5">
                <h3 className="text-3xl font-bold text-primary">
                  ${room.price}
                  <span className="text-base text-gray-500">
                    /hr
                  </span>
                </h3>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-7">
                <Link
                  href={`/update-room/${room.id}`}
                  className="btn btn-primary flex-1 rounded-xl"
                >
                  Edit
                </Link>

                <button className="btn btn-error flex-1 rounded-xl text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {myRooms.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-gray-700">
            No Listings Found
          </h2>

          <p className="text-gray-500 mt-4">
            You haven’t added any study rooms yet.
          </p>
        </div>
      )}
    </section>
  );
};

export default MyListingsPage;