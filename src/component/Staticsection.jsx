import {
  HiOutlineShieldCheck,
  HiOutlineClock,
} from "react-icons/hi";

import { FaRegCalendarCheck } from "react-icons/fa";

const Staticsection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Why Choose Section */}
        <div className="bg-[#F7F9FC] rounded-[32px] p-8 lg:p-10">
          <h2 className="text-3xl font-bold text-[#0F172A]">
            Why Choose{" "}
            <span className="text-primary">
              StudyNook?
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {/* Card 1 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-primary text-4xl">
                <HiOutlineShieldCheck />
              </div>

              <h3 className="font-bold text-lg mt-5">
                Quiet Environment
              </h3>

              <p className="text-gray-500 text-sm leading-6 mt-2">
                Find peaceful spaces to boost
                productivity and focus.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-4xl">
                <FaRegCalendarCheck />
              </div>

              <h3 className="font-bold text-lg mt-5">
                Easy Booking
              </h3>

              <p className="text-gray-500 text-sm leading-6 mt-2">
                Book your rooms instantly in
                just a few clicks.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 text-4xl">
                <HiOutlineClock />
              </div>

              <h3 className="font-bold text-lg mt-5">
                Affordable Pricing
              </h3>

              <p className="text-gray-500 text-sm leading-6 mt-2">
                Great rooms at budget-friendly
                hourly rates.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-[#F7F9FC] rounded-[32px] p-8 lg:p-10">
          <h2 className="text-3xl font-bold text-[#0F172A]">
            How It Works
          </h2>

          <div className="relative mt-14">
            {/* Dashed Line */}
            <div className="hidden md:block absolute top-5 left-20 right-20 border-t-2 border-dashed border-blue-300"></div>

            <div className="grid md:grid-cols-3 gap-10 relative z-10">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-4 border-blue-500 bg-white text-blue-600 font-bold flex items-center justify-center mx-auto">
                  1
                </div>

                <h3 className="font-bold text-lg mt-5">
                  Browse Rooms
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-2">
                  Explore available study rooms.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-4 border-blue-500 bg-white text-blue-600 font-bold flex items-center justify-center mx-auto">
                  2
                </div>

                <h3 className="font-bold text-lg mt-5">
                  Select Time
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-2">
                  Choose your preferred date
                  and time slot.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-4 border-blue-500 bg-white text-blue-600 font-bold flex items-center justify-center mx-auto">
                  3
                </div>

                <h3 className="font-bold text-lg mt-5">
                  Confirm Booking
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-2">
                  Book instantly and enjoy your
                  study session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staticsection;