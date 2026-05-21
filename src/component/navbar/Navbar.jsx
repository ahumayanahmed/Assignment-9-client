"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  // NAV LINKS
  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/rooms">Rooms</Link>
      </li>

      {/* PRIVATE LINKS */}
      {user && (
        <>
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
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-3 sm:px-6 lg:px-10 sticky top-0 z-50">

      {/* LEFT */}
      <div className="navbar-start">

        {/* MOBILE MENU */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-xl"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-60 space-y-1"
          >
            {navLinks}

            {/* LOGIN / REGISTER ONLY */}
            {!user && (
              <div className="border-t pt-3 mt-3">
                <div className="flex flex-col gap-2">
                  <Link
                    href="/login"
                    className="btn btn-outline btn-primary btn-sm"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="btn btn-primary btn-sm"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
          </ul>
        </div>

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-primary">
            StudyNook
          </h2>
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          {navLinks}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-2">

        {user ? (
          <div className="dropdown dropdown-end">

            {/* PROFILE BUTTON */}
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 cursor-pointer"
            >

              <div className="hidden sm:block text-sm font-medium">
                {user.name}
              </div>

              <Avatar>
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  src={user.image}
                />

                <Avatar.Fallback>
                  {user.name?.charAt(0)}
                </Avatar.Fallback>
              </Avatar>
            </div>

            {/* DROPDOWN */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-56"
            >
              <li className="font-semibold border-b pb-2 mb-2">
                {user.name}
              </li>

             

              <li className="mt-2">
                <button
                  onClick={handleSignOut}
                  className="text-red-500"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="hidden sm:flex gap-2">
            <Link
              href="/login"
              className="btn btn-outline btn-primary btn-sm"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="btn btn-primary btn-sm"
            >
              Register
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;