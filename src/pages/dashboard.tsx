import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaHome, FaClipboardList, FaUsers, FaUser, FaPlus } from "react-icons/fa";
import { getDailyQuote } from "../utils/motivationService"; // Assume this fetches a daily quote
import Image from "next/image";

export default function Dashboard() {
  const [daysSober, setDaysSober] = useState(0); // Track days sober
  const [dailyQuote, setDailyQuote] = useState(""); // Daily motivational quote
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Fetch days sober (this can be dynamically calculated from user data)
    const sobrietyStartDate = new Date("2024-01-01"); // Placeholder for user sobriety date
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - sobrietyStartDate.getTime()); // Use .getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  setDaysSober(diffDays);

    // Fetch daily quote
    getDailyQuote().then((quote) => {
      setDailyQuote(quote);
      setLoading(false); // Once quote is fetched, stop loading
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
    {/* Dashboard Hero Section */}
<section className="px-6 py-8 bg-blue-600 text-white">
  <div className="flex items-center space-x-6">
    <div className="relative w-20 h-20">
      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={80}
        height={80}
        className="rounded-full border-4 border-white shadow-lg"
      />
    </div>
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-2">Welcome back, [User Name]!</h1>
      <p className="text-xl">
        You have been sober for{" "}
        <span className="font-bold text-yellow-400 animate-pulse">
          {daysSober} days
        </span>.
      </p>
    </div>
  </div>
</section>


   {/* Daily Motivation Section */}
<section className="px-6 py-8 bg-white shadow-sm rounded-lg my-6 transition-all hover:shadow-md">
  <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">Your Daily Motivation</h2>
  {loading ? (
    <p className="mt-2 text-gray-500 italic animate-pulse text-center md:text-left">Loading...</p>  
  ) : (
    <blockquote className="text-lg text-gray-600 italic font-light tracking-wide border-l-4 border-yellow-400 pl-4 md:max-w-3xl mx-auto md:mx-0">
      "{dailyQuote}"
    </blockquote>
  )}
</section>



    {/* Quick Actions Section */}
<section className="px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
  <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105">
    <div className="flex justify-center mb-4">
      <FaClipboardList className="text-blue-600 w-10 h-10" /> {/* Icon for visual appeal */}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Track Sobriety</h3>
    <p className="text-gray-600">Log your sobriety progress and set personal goals.</p>
  </div>
  <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105">
    <div className="flex justify-center mb-4">
      <FaUsers className="text-blue-600 w-10 h-10" /> {/* Icon for community */}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
    <p className="text-gray-600">Engage with others in the sober community and stay connected.</p>
  </div>
  <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105">
    <div className="flex justify-center mb-4">
      <FaUser className="text-blue-600 w-10 h-10" /> {/* Icon for coaching */}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Resources & Coaching</h3>
    <p className="text-gray-600">Access personalized coaching, tools, and exclusive resources.</p>
  </div>
</section>


{/* Sticky Bottom Navigation */}
<nav className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white shadow-lg rounded-t-3xl px-4 py-4 z-50">
  <div className="flex justify-between items-center max-w-lg mx-auto relative">
    
    {/* Home Icon */}
    <a href="/dashboard" className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out">
      <FaHome size={28} className="group-hover:text-yellow-400 transition duration-300" />
      <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">Home</span>
    </a>

    {/* Tracker Icon */}
    <a href="/tracker" className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out">
      <FaClipboardList size={28} className="group-hover:text-yellow-400 transition duration-300" />
      <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">Tracker</span>
    </a>

    {/* Central Action Button - Square-like and Integrated */}
    <div className="relative flex items-center justify-center mx-2">
      <div className="w-16 h-16 bg-white border-4 border-blue-600 rounded-xl p-3 shadow-2xl flex items-center justify-center transform hover:scale-105 transition-all duration-300 ease-in-out">
        <a href="/create" className="text-blue-600">
          <FaPlus size={34} />
        </a>
      </div>
    </div>

    {/* Community Icon */}
    <a href="/community" className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out">
      <FaUsers size={28} className="group-hover:text-yellow-400 transition duration-300" />
      <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">Community</span>
    </a>

    {/* Profile Icon */}
    <a href="/profile" className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out">
      <FaUser size={28} className="group-hover:text-yellow-400 transition duration-300" />
      <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">Profile</span>
    </a>
  </div>
</nav>



    </div>
  );
}
