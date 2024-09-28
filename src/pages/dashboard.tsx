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
    const diffTime = Math.abs(today - sobrietyStartDate);
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
      <section className="px-4 py-6 bg-blue-600 text-white">
        <div className="flex items-center space-x-4">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">Welcome back, [User Name]!</h1>
            <p className="text-lg">
              You have been sober for{" "}
              <span className="font-bold">{daysSober} days</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Motivation Section */}
      <section className="px-4 py-6 bg-white">
        <h2 className="text-xl font-semibold text-gray-800">Daily Motivation</h2>
        {loading ? (
          <p className="mt-2 text-gray-600 italic">Loading...</p>
        ) : (
          <p className="mt-2 text-gray-600 italic">"{dailyQuote}"</p>
        )}
      </section>

      {/* Quick Actions Section */}
      <section className="px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-lg font-bold">Track Sobriety</h3>
          <p className="text-gray-600">Log your sobriety progress and set goals.</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-lg font-bold">Community</h3>
          <p className="text-gray-600">Engage with others in the sober community.</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-lg font-bold">Resources & Coaching</h3>
          <p className="text-gray-600">Access personalized coaching and exclusive tools.</p>
        </div>
      </section>

      {/* Sticky Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white shadow-md rounded-t-3xl px-4 py-2">
  <div className="flex justify-between items-center max-w-md mx-auto relative">
    {/* Home Icon */}
    <a href="/dashboard" className="text-center flex flex-col items-center group">
      <FaHome size={24} className="group-hover:text-yellow-400 transition duration-200" />
      <span className="text-xs mt-1 group-hover:text-yellow-400 transition duration-200">Home</span>
    </a>
    
    {/* Tracker Icon */}
    <a href="/tracker" className="text-center flex flex-col items-center group">
      <FaClipboardList size={24} className="group-hover:text-yellow-400 transition duration-200" />
      <span className="text-xs mt-1 group-hover:text-yellow-400 transition duration-200">Tracker</span>
    </a>

    {/* Central Action Button */}
    <div className="absolute -top-6 mx-auto bg-yellow-400 rounded-full p-4 shadow-lg hover:bg-yellow-300 transition duration-300">
      <a href="/create" className="text-blue-900">
        <FaPlus size={30} />
      </a>
    </div>

    {/* Community Icon */}
    <a href="/community" className="text-center flex flex-col items-center group">
      <FaUsers size={24} className="group-hover:text-yellow-400 transition duration-200" />
      <span className="text-xs mt-1 group-hover:text-yellow-400 transition duration-200">Community</span>
    </a>

    {/* Profile Icon */}
    <a href="/profile" className="text-center flex flex-col items-center group">
      <FaUser size={24} className="group-hover:text-yellow-400 transition duration-200" />
      <span className="text-xs mt-1 group-hover:text-yellow-400 transition duration-200">Profile</span>
    </a>
  </div>
</nav>

    </div>
  );
}
