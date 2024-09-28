import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaHome, FaClipboardList, FaUsers, FaUser, FaPlus, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { getDailyQuote } from "../utils/motivationService"; // Assume this fetches a daily quote
import Image from "next/image";

export default function Dashboard() {
  const [daysSober, setDaysSober] = useState(0); // Track days sober
  const [dailyQuote, setDailyQuote] = useState(""); // Daily motivational quote
  const [loading, setLoading] = useState(true); // Track loading state
  const milestone = 30; // Define a sobriety milestone (e.g., 30 days)
  
  useEffect(() => {
    // Fetch days sober (this can be dynamically calculated from user data)
    const sobrietyStartDate = new Date("2024-01-01"); // Placeholder for user sobriety date
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - sobrietyStartDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysSober(diffDays);

    // Fetch daily quote
    getDailyQuote().then((quote) => {
      setDailyQuote(quote);
      setLoading(false); // Once quote is fetched, stop loading
    });
  }, []);

  const percentage = (daysSober / milestone) * 100;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Hero Section */}
      <section className="px-6 py-8 bg-indigo-700 text-white rounded-b-3xl shadow-lg">
        <div className="flex items-center space-x-6">
          <div className="relative w-20 h-20 transition-all transform hover:scale-105">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={80}
              height={80}
              className="rounded-full border-4 border-white shadow-2xl"
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
        
        {/* Sobriety Progress Section */}
        <div className="mt-8 flex justify-center">
          <div className="w-40 h-40">
            <CircularProgressbar
              value={percentage}
              text={`${daysSober} days`}
              styles={buildStyles({
                pathColor: percentage >= 100 ? "#00C851" : "#FFD700",
                textColor: "#FFFFFF",
                trailColor: "#D3D3D3",
                backgroundColor: "#3e98c7",
              })}
            />
            <p className="text-white text-center mt-4">Goal: {milestone} Days</p>
          </div>
        </div>
      </section>

      {/* Daily Motivation Section */}
      <section className="px-6 py-8 bg-white shadow-md rounded-lg my-6 transition-all hover:shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center md:text-left">
          Your Daily Motivation
        </h2>
        {loading ? (
          <p className="mt-2 text-gray-500 italic animate-pulse text-center md:text-left">
            Loading...
          </p>  
        ) : (
          <blockquote className="text-lg text-gray-600 italic font-light tracking-wide border-l-4 border-yellow-400 pl-4 md:max-w-3xl mx-auto md:mx-0">
            "{dailyQuote}"
          </blockquote>
        )}
      </section>

   {/* Quick Actions Section */}
<section className="px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 my-8 bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-inner">
  {/* Card 1 - Track Sobriety */}
  <div className="relative p-8 bg-white shadow-lg rounded-xl transition-all duration-300 transform hover:shadow-2xl hover:scale-105 group">
    <div className="flex justify-center mb-6">
      <FaClipboardList className="text-indigo-700 w-12 h-12 group-hover:text-yellow-400 transition-colors duration-300" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
      Track Sobriety
    </h3>
    <p className="text-gray-600 text-base">Log your sobriety progress and set personal goals.</p>
    
    {/* Ripple Effect */}
    <div className="absolute inset-0 bg-indigo-700 opacity-0 rounded-xl group-hover:opacity-10 transition duration-500"></div>
  </div>

  {/* Card 2 - Community */}
  <div className="relative p-8 bg-white shadow-lg rounded-xl transition-all duration-300 transform hover:shadow-2xl hover:scale-105 group">
    <div className="flex justify-center mb-6">
      <FaUsers className="text-indigo-700 w-12 h-12 group-hover:text-yellow-400 transition-colors duration-300" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
      Community
    </h3>
    <p className="text-gray-600 text-base">Engage with others in the sober community and stay connected.</p>
    
    {/* Ripple Effect */}
    <div className="absolute inset-0 bg-indigo-700 opacity-0 rounded-xl group-hover:opacity-10 transition duration-500"></div>
  </div>

  {/* Card 3 - Resources & Coaching */}
  <div className="relative p-8 bg-white shadow-lg rounded-xl transition-all duration-300 transform hover:shadow-2xl hover:scale-105 group">
    <div className="flex justify-center mb-6">
      <FaUser className="text-indigo-700 w-12 h-12 group-hover:text-yellow-400 transition-colors duration-300" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
      Resources & Coaching
    </h3>
    <p className="text-gray-600 text-base">Access personalized coaching, tools, and exclusive resources.</p>
    
    {/* Ripple Effect */}
    <div className="absolute inset-0 bg-indigo-700 opacity-0 rounded-xl group-hover:opacity-10 transition duration-500"></div>
  </div>
</section>


    {/* Sticky Bottom Navigation */}
<nav className="fixed bottom-0 left-0 right-0 bg-indigo-700 text-white shadow-lg rounded-t-3xl px-4 py-4 z-50">
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

    {/* Central Action Button */}
    <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-16 h-16 bg-yellow-400 border-4 border-indigo-700 rounded-full p-3 shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 ease-in-out">
      <a href="/create" className="text-indigo-700">
        <FaPlus size={34} />
      </a>
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
