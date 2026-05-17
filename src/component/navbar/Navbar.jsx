import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/rooms">Rooms</Link>
      </li>

      <li>
        <Link href="/add-room">Add Room</Link>
      </li>

      <li>
        <Link href="/my-listings">My Listings</Link>
      </li>

      <li>
        <Link href="/my-bookings">My Bookings</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/Wanderlast.png"
            height={50}
            width={50}
            alt="logo"
          />

          <h2 className="text-2xl font-bold text-primary">
            StudyNook
          </h2>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2">
        <Link href="/login" className="btn btn-outline btn-primary">
          Login
        </Link>

        <Link href="/register" className="btn btn-primary">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;