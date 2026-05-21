"use client";

import {useEffect, useState } from "react";

import { DeleteAlert } from "@/component/Deleatalart";
import { EditModal } from "@/component/EditModal";



import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const MyListingsPage = () => {

  const { data: session } = authClient.useSession();
  const user = session?.user;


  const [rooms, setRooms] = useState([]);

  useEffect(() => {

    if (user?.email) {
 
      const fetchRooms = async () => {

        const { data: tokenData } =
  await authClient.token();

const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/my/${user.email}`,
  {
    headers: {
      authorization: `Bearer ${tokenData?.token}`,
    },
  }
);

       const data = await res.json();
setRooms(Array.isArray(data) ? data : []);
      };

      fetchRooms();
    }

  }, [user]);

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

      {
        rooms.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {
              rooms.map((room) => (

                <div
                  key={room._id}
                  className="bg-white rounded-[28px] overflow-hidden shadow-lg border border-gray-100"
                >

                  <Image
                    src={room.image}
                    alt={room.name}
                    width={500}
                    height={300}
                    className="w-full h-[240px] object-cover"
                  />

                  <div className="p-6">

                    <h2 className="text-2xl font-bold text-[#0F172A]">
                      {room.name}
                    </h2>

                    <div className="flex items-center justify-between mt-4 text-gray-600">

                      <p>
                        📍 {room.floor}
                      </p>

                      <p>
                        👥 {room.capacity}
                      </p>

                    </div>

                    <h3 className="text-3xl font-bold text-primary mt-5">

                      ${room.hourlyRate}

                      <span className="text-base text-gray-500">
                        /hr
                      </span>

                    </h3>

                    {/* Amenities */}

                    <div className="flex flex-wrap gap-2 mt-5">

                      {
                        room.amenities?.map(
                          (item, index) => (
                            <span
                              key={index}
                              className="bg-base-200 px-3 py-1 rounded-full text-sm"
                            >
                              {item}
                            </span>
                          )
                        )
                      }

                    </div>

                    {/* Buttons */}

                    <div className="flex gap-4 mt-7">

                      <EditModal room={room} />

                      <DeleteAlert room={room} />

                    </div>

                  </div>

                </div>

              ))
            }

          </div>

        ) : (

          <div className="text-center py-20">

            <h2 className="text-3xl font-bold text-gray-700">
              No Listings Found
            </h2>

            <p className="text-gray-500 mt-4">
              You haven’t added any study rooms yet.
            </p>

          </div>

        )
      }

    </section>
  );
};

export default MyListingsPage;