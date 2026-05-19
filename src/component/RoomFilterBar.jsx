"use client";

import { useEffect, useState } from "react";

export default function RoomFilterBar({
  onFilter,
  amenities,
  floors,
}) {
  const [search, setSearch] = useState("");
  const [amenity, setAmenity] = useState("");
  const [floor, setFloor] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("newest");

  // AUTO FILTER
  useEffect(() => {
    onFilter({
      search,
      amenity,
      floor,
      price,
      sort,
    });
  }, [search, amenity, floor, price, sort, onFilter]);

  return (
    <div className="w-full bg-white p-4 rounded-2xl shadow flex flex-wrap gap-3 items-center">

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search room..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded-xl"
      />

      {/* AMENITIES */}
      <select
        value={amenity}
        onChange={(e) => setAmenity(e.target.value)}
        className="border px-3 py-2 rounded-xl"
      >
        <option value="">Amenities</option>

        {amenities?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* FLOOR */}
      <select
        value={floor}
        onChange={(e) => setFloor(e.target.value)}
        className="border px-3 py-2 rounded-xl"
      >
        <option value="">Floor</option>

        {floors?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* PRICE */}
      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border px-3 py-2 rounded-xl"
      >
        <option value="">Price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      {/* SORT */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border px-3 py-2 rounded-xl"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
}