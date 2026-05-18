import Image from 'next/image';
import Link from 'next/link';

const Roomcord = ({room}) => {

    return (
        <div className="bg-white rounded-[28px] overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 duration-300">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          width={500}
          height={350}
          className="w-full h-[260px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Room Name */}
        <h3 className="text-2xl font-bold text-[#0F172A]">
          {room.name}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-7 mt-4">
          {room.description?.slice(0, 100)}...
        </p>

        {/* Floor & Capacity */}
        <div className="flex items-center justify-between mt-6 text-sm text-gray-600">
          <p>📍 {room.floor}</p>
          <p>👥 {room.capacity}</p>
        </div>

        {/* Price */}
        <div className="mt-5">
          <h4 className="text-2xl font-bold text-primary">
            ${room.hourlyRate}
            <span className="text-base text-gray-500 font-medium">
              /hr
            </span>
          </h4>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-3 mt-5">
          {room.amenities?.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-medium"
            >
              {item}
            </span>
          ))}

          {room.amenities?.length > 3 && (
            <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Button */}
        <Link
          href={`/rooms/${room.id}`}
          className="btn btn-primary w-full rounded-xl mt-7"
        >
          View Details
        </Link>
      </div>
    </div>
    );
};

export default Roomcord;