import Roomcord from "@/component/Roomcord";
import { div } from "framer-motion/client";
import Image from "next/image";

import Link from "next/link";

const FeaturedRooms = async () => {
const res = await fetch('http://localhost:3000/data.json')
const Roomdata = await res.json()
 console.log("data",Roomdata)
  return (
     <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
          Available Study Rooms
        </h2>

        <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-7">
          Find quiet and affordable study rooms for focused learning, group discussions, and productive work sessions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {Roomdata?.map((room) => (
          <Roomcord key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedRooms;