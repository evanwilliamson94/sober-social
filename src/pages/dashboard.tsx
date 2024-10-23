import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from "react";
import { FaHome, FaClipboardList, FaUsers, FaUser, FaPlus, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import BottomNavbar from '@/components/BottomNavbar';

export default function Dashboard() {
  const { user } = useUser(); // Access Clerk user object

  useEffect(() => {
    if (!user) return;

    // Here, you would send the user info to Neon DB
    const addUserToNeon = async () => {
      try {
        const response = await fetch('/api/neon-add-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.emailAddresses[0].emailAddress,
            username: user?.username,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to add user to Neon DB');
        }

        console.log('User added to Neon DB successfully');
      } catch (error) {
        console.error('Error adding user to Neon DB:', error);
      }
    };

    addUserToNeon();
  }, [user]);

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gray-900 text-white font-roboto pb-20">
          {/* Dashboard Hero Section */}
          <section className="px-2 py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-b-3xl shadow-lg">
            <div className="flex items-center space-x-4">
              {/* Profile Picture with Hover Effect */}
              <div className="relative w-12 h-12 transition-all transform hover:scale-105">
                {user?.imageUrl ? (
                  <Image
                    src={user.imageUrl}
                    alt="Profile Picture"
                    width={48}
                    height={48}
                    className="rounded-full border-4 border-gray-300 shadow-2xl"
                  />
                ) : (
                  <Image
                    src="/default-profile.jpg"
                    alt="Default Profile Picture"
                    width={48}
                    height={48}
                    className="rounded-full border-4 border-gray-300 shadow-2xl"
                  />
                )}
              </div>

              {/* Welcome Message */}
              <div className="flex-1 text-left">
                <h1 className="text-base font-semibold tracking-wide">
                  Welcome back, <span className="text-yellow-400">{user?.fullName || "User"}</span>!
                </h1>
              </div>

              {/* Settings / Profile Button */}
              <div className="flex items-center justify-center">
              <Link href="/profile" passHref>
  <a className="text-yellow-300">
    <FaUserCircle size={20} />
  </a>
</Link>

              </div>
            </div>
          </section>

          {/* Quick Actions Section */}
          <section className="px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 my-8 bg-black rounded-lg shadow-inner">
            {/* Card 1 - Track Sobriety */}
            <Link href="/tracker">
              <div className="relative p-8 bg-gray-700 shadow-xl rounded-xl transition-all duration-300 transform hover:shadow-2xl hover:scale-105 group cursor-pointer">
                <div className="flex justify-center mb-6">
                  <FaClipboardList className="text-yellow-400 w-12 h-12 group-hover:text-yellow-500 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  Track Sobriety
                </h3>
                <p className="text-gray-300 text-base">Log your sobriety progress and set personal goals.</p>
                
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-yellow-400 opacity-0 rounded-xl group-hover:opacity-10 transition duration-500"></div>
              </div>
            </Link>

            {/* Card 2 - Community */}
            <Link href="/community">
              <div className="relative p-8 bg-gray-700 shadow-xl rounded-xl transition-all duration-300 transform hover:shadow-2xl hover:scale-105 group cursor-pointer">
                <div className="flex justify-center mb-6">
                  <FaUsers className="text-yellow-400 w-12 h-12 group-hover:text-yellow-500 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  Community
                </h3>
                <p className="text-gray-300 text-base">Engage with others in the sober community and stay connected.</p>
                
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-yellow-400 opacity-0 rounded-xl group-hover:opacity-10 transition duration-500"></div>
              </div>
            </Link>

            {/* Card 3 - Resources & Coaching */}
            <div className="relative bg-gray-700 shadow-xl rounded-xl transition-all duration-300 transform hover:shadow-2xl hover:scale-105 group">
              <div className="p-8 space-y-4">
                <div className="flex justify-center mb-6">
                  <FaUser className="text-yellow-400 w-12 h-12 group-hover:text-yellow-500 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  Resources & Coaching
                </h3>
                <p className="text-gray-300 text-base">Access personalized coaching, tools, and exclusive resources.</p>
              </div>

              {/* Unlock Premium Overlay */}
              <div className="absolute inset-0 bg-black/60 flex justify-center items-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg shadow hover:bg-yellow-100 transition duration-300">
                  Unlock Premium
                </button>
              </div>

              {/* Ripple Effect */}
              <div className="absolute inset-0 bg-yellow-400 opacity-0 rounded-xl group-hover:opacity-10 transition duration-500"></div>
            </div>
          </section>

   {/* Sticky Bottom Navigation */}
   <BottomNavbar /> {/* Reusable Bottom Navbar */}
          </div>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    );
}