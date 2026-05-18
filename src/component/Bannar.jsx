"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F9FF] to-white">
      {/* Background Blur Shape */}
      <div className="absolute top-32 left-1/3 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <span className="inline-block px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-semibold">
              Better Space, Better Focus
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-6 text-[#0F172A]">
              Find Your Perfect{" "}
              <span className="text-primary">
                Study Room
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              Browse and book quiet, private study rooms
              designed for deep focus, group discussions,
              and productive learning sessions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-8">
              <Link
                href="/rooms"
                className="btn btn-primary px-8 rounded-xl text-white"
              >
                Explore Rooms
              </Link>

              <Link
                href="/add-room"
                className="btn btn-outline btn-primary px-8 rounded-xl"
              >
                Become a Host
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-[#0F172A]">
                  500+
                </h3>
                <p className="text-gray-500 mt-1">
                  Study Rooms
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#0F172A]">
                  10K+
                </h3>
                <p className="text-gray-500 mt-1">
                  Happy Students
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#0F172A]">
                  24/7
                </h3>
                <p className="text-gray-500 mt-1">
                  Booking Access
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
                alt="study room"
                width={800}
                height={700}
                className="w-full h-[550px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 right-6 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
                ✓
              </div>

              <div>
                <h4 className="font-bold text-lg text-[#0F172A]">
                  200+
                </h4>

                <p className="text-gray-500 text-sm">
                  Happy Students
                </p>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-6 -left-6 grid grid-cols-4 gap-2">
              {[...Array(16)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-blue-300 rounded-full"
                ></span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;