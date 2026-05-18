import Image from "next/image";

const Detailspage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  const data = await res.json();

  const room = data.find((r) => r.id.toString() === id);

  if (!room) {
    return (
      <div className="text-center mt-20 text-red-500">
        Room not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Image Side */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={room.image}
          alt={room.name}
          width={800}
          height={600}
          className="w-full h-[450px] object-cover"
        />
      </div>

      {/* Details Side */}
      <div className="space-y-5">
        <h1 className="text-4xl font-bold text-[#0F172A]">
          {room.name}
        </h1>

        <p className="text-gray-500 leading-7">
          {room.description}
        </p>

        <div className="flex justify-between text-gray-600">
          <p>📍 Floor: {room.floor}</p>
          <p>👥 Capacity: {room.capacity}</p>
        </div>

        <h2 className="text-3xl font-bold text-primary">
          ${room.hourlyRate}
          <span className="text-base text-gray-500 font-medium">
            /hr
          </span>
        </h2>

        <div className="flex flex-wrap gap-3">
          {room.amenities?.map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <button className="btn btn-primary w-full mt-6 rounded-xl">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Detailspage;