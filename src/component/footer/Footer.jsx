import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold text-white">
              StudyNook
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Browse and book quiet, modern study rooms
              for focused learning and productive sessions.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary duration-300"
              >
                <RiTwitterXLine />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Useful Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/rooms"
                  className="hover:text-primary duration-300"
                >
                  Rooms
                </Link>
              </li>

              <li>
                <Link
                  href="/add-room"
                  className="hover:text-primary duration-300"
                >
                  Add Room
                </Link>
              </li>

              <li>
                <Link
                  href="/my-bookings"
                  className="hover:text-primary duration-300"
                >
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Support
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-primary duration-300 cursor-pointer">
                Help Center
              </li>

              <li className="hover:text-primary duration-300 cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-primary duration-300 cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-primary duration-300 cursor-pointer">
                Booking Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Info
            </h3>

            <div className="space-y-4">
              <p>
                📧 support@studynook.com
              </p>

              <p>
                📞 +880 1700-000000
              </p>

              <p>
                📍 Dhaka, Bangladesh
              </p>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white mb-3 font-medium">
                Subscribe Newsletter
              </h4>

              <div className="flex items-center bg-[#111827] rounded-xl overflow-hidden border border-gray-700">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-4 py-3 outline-none flex-1 text-sm"
                />

                <button className="bg-primary px-5 py-3 text-white hover:bg-blue-700 duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 StudyNook. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed for modern study room booking.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;