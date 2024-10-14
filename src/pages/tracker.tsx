import { FaHome, FaClipboardList, FaUsers, FaUser, FaPlus } from "react-icons/fa";
import Link from "next/link";
import React from 'react';
import BottomNavbar from "@/components/BottomNavbar";

const TrackerPage = () => {
    const daysSober = 150;  // Placeholder for real data
    const sobrietyGoal = 365;  // Placeholder goal
    const nextMilestone = 30;  // Days left for the next milestone
    const savings = 450;  // Placeholder for savings
    const savingsGoal = 600;  // Placeholder savings goal
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12 pb-20 space-y-16">
      <div className="container mx-auto space-y-12">

      {/* Sobriety Progress Section */}
<div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500 relative space-y-6">
  <h2 className="text-4xl font-extrabold text-gray-900 drop-shadow-xl animate-fadeIn">
    Sobriety Progress
  </h2>
  <div className="relative w-full h-8 bg-gray-800 rounded-full shadow-inner overflow-hidden">
    <div
      className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-300 to-orange-600 rounded-full shadow-lg animate-progress transition-all duration-1500"
      style={{ width: `${(daysSober / sobrietyGoal) * 100}%` }}
    ></div>
  </div>
  <p className="text-right text-2xl text-gray-100 font-semibold">
    {daysSober}/{sobrietyGoal} Days Sober
  </p>
  {nextMilestone <= 0 && (
    <div className="absolute -top-10 right-4 p-4 bg-green-600 text-white font-bold rounded-full shadow-lg animate-bounce ring-4 ring-green-300">
      🎉 Milestone Achieved!
    </div>
  )}
</div>


      {/* Financial Tracker Section */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 space-y-4">
        <h2 className="text-3xl font-bold">Financial Savings</h2>
        <p className="text-lg text-gray-300">
          You've saved an estimated <span className="text-green-200 font-bold">${savings}</span> since becoming sober.
        </p>
        <div className="relative w-full h-6 bg-gray-700 rounded-full shadow-inner">
          <div
            className="absolute top-0 left-0 h-full bg-green-400 rounded-full transition-all duration-1000"
            style={{ width: `${(savings / savingsGoal) * 100}%` }} // Dynamic percentage
          ></div>
        </div>
        <p className="text-right text-sm text-gray-300">{(savings / savingsGoal) * 100}% of your savings goal achieved!</p>
      </div>

    {/* Mood Tracker Section */}
<div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 space-y-4">
  <h2 className="text-3xl font-bold">Mood Tracker</h2>
  <p className="text-sm text-gray-300">
    How are you feeling today?
  </p>
  <div className="flex justify-between">
    <Link href="/MoodTracker">
      <button className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition duration-300">
        😊
      </button>
    </Link>
    <Link href="/MoodTracker">
      <button className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition duration-300">
        😐
      </button>
    </Link>
    <Link href="/MoodTracker">
      <button className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition duration-300">
        😔
      </button>
    </Link>
  </div>
</div>

<div className="bg-gradient-to-r from-indigo-400 to-blue-500 p-8 rounded-lg shadow-2xl transition-shadow duration-500 space-y-6">
  <h2 className="text-4xl font-extrabold text-white mb-2 animate-fadeIn">Sleep Tracker</h2>
  <p className="text-base text-gray-200">How was your sleep last night?</p>

  <div className="flex justify-between space-x-4">
    <Link href="/SleepTracker">
      <button className="bg-indigo-600 p-4 rounded-full hover:bg-indigo-500 transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl">
        😴 Great
      </button>
    </Link>
    <Link href="/SleepTracker">
      <button className="bg-indigo-600 p-4 rounded-full hover:bg-indigo-500 transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl">
        😐 Average
      </button>
    </Link>
    <Link href="/SleepTracker">
      <button className="bg-indigo-600 p-4 rounded-full hover:bg-indigo-500 transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl">
        😴 Poor
      </button>
    </Link>
  </div>
</div>


{/* AI Sober Coach Section */}
<div className="bg-gradient-to-r from-indigo-400 to-purple-500 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 space-y-4">
  <h2 className="text-3xl font-bold">AI Sober Coach</h2>
  <p className="text-sm text-gray-300">
    Get personalized advice and guidance with our AI Sober Coach. Ask anything!
  </p>
  <div className="flex justify-center">
    <Link href="/sobercoach">
      <button className="bg-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-purple-500 transition-all transform hover:scale-105">
        Talk to Your Coach
      </button>
    </Link>
  </div>
</div>


{/* Trigger & Cravings Log Section */}
<div className="bg-gradient-to-r from-red-400 to-pink-500 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 space-y-4">
  <h2 className="text-3xl font-bold animate-fadeIn">Cravings & Triggers</h2>
  <p className="text-sm text-gray-300">
    Document when you experience a craving and what triggered it.
  </p>
  <button className="bg-red-500 text-white px-8 py-3 rounded-lg shadow hover:bg-red-400 transition-all transform hover:scale-105 duration-300">
    Log a Craving
  </button>
</div>

{/* Reflection & Gratitude Journal Section */}
<div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 relative">
  <div className="p-8 space-y-4">
    <h2 className="text-3xl font-bold animate-fadeIn">Reflection & Gratitude</h2>
    <p className="text-sm text-gray-300">
      What are you grateful for today?
    </p>
    <button className="bg-purple-600 text-white px-8 py-3 rounded-lg shadow hover:bg-purple-500 transition-all transform hover:scale-105 duration-300">
      Write in Journal (Premium)
    </button>
  </div>
  {/* Unlock Premium Overlay */}
  <div className="absolute inset-0 bg-black/60 flex justify-center items-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500">
    <button className="bg-white text-purple-600 px-8 py-3 rounded-lg shadow hover:bg-purple-100 transition-all transform hover:scale-105 duration-300">
      Unlock Premium
    </button>
  </div>
</div>

{/* Exercise & Wellness Tracker Section */}
<div className="bg-gradient-to-r from-teal-400 to-green-500 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 relative">
  <div className="p-8 space-y-4">
    <h2 className="text-3xl font-bold animate-fadeIn">Exercise & Wellness</h2>
    <p className="text-sm text-gray-300">
      Track your physical activity for a healthier lifestyle.
    </p>
    <button className="bg-teal-500 text-white px-8 py-3 rounded-lg shadow hover:bg-teal-400 transition-all transform hover:scale-105 duration-300">
      Log Exercise (Premium)
    </button>
  </div>
  {/* Unlock Premium Overlay */}
  <div className="absolute inset-0 bg-black/60 flex justify-center items-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500">
    <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg shadow hover:bg-yellow-400 transition-all transform hover:scale-105 duration-300">
      Unlock Premium
    </button>
  </div>
</div>

{/* Streaks & Badges Section */}
<div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 relative">
  <div className="p-8 space-y-4">
    <h2 className="text-3xl font-bold animate-fadeIn">Sobriety Streaks & Badges</h2>
    <p className="text-sm text-gray-300">
      Keep up your streak and earn badges for reaching milestones!
    </p>
    <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg shadow hover:bg-yellow-400 transition-all transform hover:scale-105 duration-300">
      View Badges (Premium)
    </button>
  </div>
  {/* Unlock Premium Overlay */}
  <div className="absolute inset-0 bg-black/60 flex justify-center items-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500">
    <button className="bg-white text-yellow-500 px-8 py-3 rounded-lg shadow hover:bg-yellow-100 transition-all transform hover:scale-105 duration-300">
      Unlock Premium
    </button>
  </div>
</div>

<BottomNavbar />
      </div>
    </div>
  );
};

export default TrackerPage;
