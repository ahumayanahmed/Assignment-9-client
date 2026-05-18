"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { Button } from "@heroui/react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  const navLinks = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/rooms">Rooms</Link></li>
      <li><Link href="/add-room">Add Room</Link></li>
      <li><Link href="/my-listings">My Listings</Link></li>
      <li><Link href="/my-bookings">My Bookings</Link></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">

      {/* LEFT */}
      <div className="navbar-start">

        {/* MOBILE */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>

        {/* LOGO */}
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

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-3">

        {user ? (
          <div className="flex items-center gap-3">
            <Avatar>
              <Avatar.Image
                referrerPolicy="no-referrer"
                src={user.image}
              />
              <Avatar.Fallback>
                {user.name?.charAt(0)}
              </Avatar.Fallback>
            </Avatar>

            <Button
              size="sm"
              onClick={handleSignOut}
              className="rounded-none bg-red-500 text-white"
            >
              Logout
            </Button>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-outline btn-primary">
              Login
            </Link>

            <Link href="/register" className="btn btn-primary">
              Sign Up
            </Link>
          </>
        )}

      </div>
    </div>
  );
};

export default Navbar;