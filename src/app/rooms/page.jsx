"use client";

import { useEffect, useState } from "react";
import Roomcord from "@/component/Roomcord";
import RoomFilterBar from "@/component/RoomFilterBar";
// import { authClient } from "@/lib/auth-client";


const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filters, setFilters] = useState({});

  // FETCH ROOMS
  useEffect(() => {
    const fetchRooms = async () => {
      //  const { data: tokenData } =
      //     await authClient.token();
      const query = new URLSearchParams(filters).toString();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking?${query}`,{
          //  headers: {
          //     authorization: `Bearer ${tokenData.token}`
          //   },
        }
    
      );

      const data = await res.json();

      setRooms(data);
    };

    fetchRooms();
  }, [filters]);

  // UNIQUE AMENITIES
  const amenities = [
    ...new Set(rooms.flatMap((room) => room.amenities || [])),
  ];

  // UNIQUE FLOORS
  const floors = [...new Set(rooms.map((room) => room.floor))];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

      <RoomFilterBar
        onFilter={setFilters}
        amenities={amenities}
        floors={floors}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {rooms?.length > 0 ? (
          rooms.map((room) => (
            <Roomcord key={room._id} room={room} />
          ))
        ) : (
          <p>No rooms found</p>
        )}

      </div>
    </section>
  );
};

export default FeaturedRooms;