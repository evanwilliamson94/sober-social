import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from "react";
import { FaHome, FaClipboardList, FaUsers, FaUser, FaPlus, FaUserCircle } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { getDailyQuote } from "../utils/motivationService";
import Image from "next/image";
import Link from 'next/link';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import BottomNavbar from '@/components/BottomNavbar';
import { getSobrietyData } from '../utils/api'

export default function Dashboard() {
  const { user } = useUser(); // Access Clerk user object
  const [daysSober, setDaysSober] = useState(0);
  const [dailyQuote, setDailyQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const milestone = 30;

  useEffect(() => {
    if (!user) return;

    // Fetch daily quote
    getDailyQuote().then((quote) => {
      setDailyQuote(quote);
    });

    // Fetch sobriety data
    const fetchSobrietyData = async () => {
      try {
        const response = await fetch('/api/sobriety');
        if (!response.ok) throw new Error('Failed to fetch sobriety data');
        const data = await response.json();
        setDaysSober(data.daysSober);
      } catch (error) {
        console.error('Error fetching sobriety data:', error);
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchSobrietyData();
  }, [user]);

  const percentage = (daysSober / milestone) * 100;

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

          {/* Welcome Message and Days Sober */}
          <div className="flex-1 text-left">
          <h1 className="text-base font-semibold tracking-wide">
    Welcome back, <span className="text-yellow-400">{user?.fullName || "User"}</span>!
  </h1>
            <p className="text-sm">
              You have been sober for{" "}
              <span className="font-bold text-yellow-400 animate-pulse">
                {daysSober} days
              </span>.
            </p>
          </div>

          {/* Settings / Profile Button */}
          <div className="flex items-center justify-center">
            <a href="/profile" className="text-yellow-300">
              <FaUserCircle size={20} />
            </a>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center">
          <div className="w-36 h-36 relative">
            {/* Circular Progress Bar with gradient and animation */}
            <CircularProgressbar
              value={percentage}
              text={`${daysSober} days`}
              strokeWidth={6} // Slightly thinner for a sleek look
              styles={buildStyles({
                  pathColor: percentage >= 100 ? "url(#greenGradient)" : "url(#yellowGradient)",
                  textColor: "#FFFFFF",
                  trailColor: "rgba(255, 255, 255, 0.1)", // Softer trail for a sleek look
                  strokeLinecap: "round", // Rounded edges for a smoother feel
                  pathTransitionDuration: 1.5, // Smooth transition for the progress bar
                  textSize: '16px', // Refined text size
                })}
                />

            {/* Add SVG gradient for the circular progress */}
            <svg style={{ position: "absolute", width: 0, height: 0 }}>
              <defs>
                <linearGradient id="yellowGradient" gradientTransform="rotate(90)">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#FFB200" />
                </linearGradient>
                <linearGradient id="greenGradient" gradientTransform="rotate(90)">
                  <stop offset="0%" stopColor="#00C851" />
                  <stop offset="100%" stopColor="#00A843" />
                </linearGradient>
              </defs>
            </svg>

            {/* Optional Glow Effect */}
            <div className="absolute inset-0 rounded-full shadow-lg" style={{
                boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
                opacity: percentage >= 100 ? 0.7 : 0.3,
                transition: "opacity 0.5s ease",
            }} />
          </div>

          {/* Goal text with subtle hover effect */}
          <p className="text-white text-sm mt-2 font-semibold tracking-wide hover:scale-105 transition-all">
            Goal: {milestone} Days
          </p>
        </div>

      </section>

      {/* Daily Motivation Section */}
      <section className="px-6 py-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-lg rounded-lg my-6 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center md:text-left">
          Your Daily Motivation
        </h2>
        {loading ? (
            <p className="mt-2 text-gray-400 italic animate-pulse text-center md:text-left">
            Loading...
          </p>
        ) : (
            <blockquote className="text-lg text-gray-300 italic font-light tracking-wide border-l-4 border-yellow-500 pl-4 md:max-w-3xl mx-auto md:mx-0 bg-gray-800 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-inner">
            "{dailyQuote}"
          </blockquote>
        )}
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