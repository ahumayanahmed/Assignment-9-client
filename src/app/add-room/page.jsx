"use client";
 import { authClient } from "@/lib/auth-client";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
const amenitiesList = [
  "Whiteboard",
  "Projector",
  "WiFi",
  "Power Outlets",
  "Quiet Zone",
  "Air Conditioning",
];

const AddRoomPage = () => {
      const { user } = useContext(AuthContext);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleAmenities = (value) => {
    if (selectedAmenities.includes(value)) {
      setSelectedAmenities(
        selectedAmenities.filter((item) => item !== value)
      );
    } else {
      setSelectedAmenities([
        ...selectedAmenities,
        value,
      ]);
    }
  };

 const handleAddRoom = async (e) => {
  e.preventDefault();

  const form = e.target;

  const roomData = {
    name: form.name.value,
    image: form.image.value,
    floor: form.floor.value,
    capacity: form.capacity.value,
    hourlyRate: form.hourlyRate.value,
    description: form.description.value,
    amenities: selectedAmenities,

    ownerEmail: user?.email,
    ownerName: user?.displayName,
    ownerPhoto: user?.photoURL,
  };

  console.log(roomData);
 const {data:tokenData}= await authClient.token()
 
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
         authorization :`Bearer ${tokenData.token}`
      },
      credentials: "include",
      body: JSON.stringify(roomData),
    }
  );

  const data = await res.json();

  console.log(data);

  if (data.insertedId) {
  toast.success("Room added successfully");

  form.reset();

  setSelectedAmenities([]);

  setTimeout(() => {
    window.location.href = "/";
  }, 1500);

} else {
  toast.error("Failed to add room");
}
};

  return (
    <section className="min-h-screen bg-[#F8FAFC] py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-[32px] shadow-xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-primary px-10 py-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            Add New Study Room
          </h1>

          <p className="mt-4 text-blue-100 max-w-2xl">
            Create a professional study room listing
            with detailed information, amenities,
            pricing, and room capacity.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleAddRoom}
          className="p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Room Name */}
            <div>
              <label className="font-semibold text-gray-700 block mb-3">
                Room Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter room name"
                className="input input-bordered w-full h-14 rounded-2xl"
              />
            </div>

            {/* Floor */}
            <div>
              <label className="font-semibold text-gray-700 block mb-3">
                Floor
              </label>

              <input
                type="text"
                name="floor"
                required
                placeholder="e.g. 3rd Floor"
                className="input input-bordered w-full h-14 rounded-2xl"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="font-semibold text-gray-700 block mb-3">
                Room Image URL
              </label>

              <input
                type="text"
                name="image"
                required
                placeholder="Paste image URL"
                className="input input-bordered w-full h-14 rounded-2xl"
              />
            </div>

            {/* Capacity */}
            <div>
              <label className="font-semibold text-gray-700 block mb-3">
                Seat Capacity
              </label>

              <input
                type="number"
                name="capacity"
                required
                placeholder="e.g. 4"
                className="input input-bordered w-full h-14 rounded-2xl"
              />
            </div>

            {/* Hourly Rate */}
            <div>
              <label className="font-semibold text-gray-700 block mb-3">
                Hourly Rate ($)
              </label>

              <input
                type="number"
                name="hourlyRate"
                required
                placeholder="e.g. 5"
                className="input input-bordered w-full h-14 rounded-2xl"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <label className="font-semibold text-gray-700 block mb-3">
              Description
            </label>

            <textarea
              name="description"
              required
              rows="6"
              placeholder="Write detailed room description..."
              className="textarea textarea-bordered w-full rounded-2xl"
            ></textarea>
          </div>

          {/* Amenities */}
          <div className="mt-10">
            <label className="font-semibold text-gray-700 block mb-5">
              Select Amenities
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {amenitiesList.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 bg-[#F8FAFC] border border-gray-200 px-5 py-4 rounded-2xl cursor-pointer hover:border-primary duration-300"
                >
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    onChange={() =>
                      handleAmenities(item)
                    }
                  />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="mt-12">
            <button className="btn btn-primary w-full h-14 rounded-2xl text-lg">
              Add Room
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddRoomPage;