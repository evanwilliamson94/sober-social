import { useRouter } from 'next/router'; 
import Link from "next/link";
import React from 'react';
import BottomNavbar from "@/components/BottomNavbar";
import { useUser } from '@clerk/nextjs';  // Import useUser to fetch user details

const TrackerPage = () => {
    const { user } = useUser();  // Fetch user data from Clerk
    const daysSober = 150;  // Placeholder for real data
    const sobrietyGoal = 365;  // Placeholder goal
    const nextMilestone = 30;  // Days left for the next milestone
    const savings = 450;  // Placeholder for savings
    const savingsGoal = 600;  // Placeholder savings goal
    const router = useRouter();

    const userHasCompletedOnboarding = false;
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12 pb-20 space-y-16">
      <div className="container mx-auto space-y-12">

   {/* Onboarding Box - only display if onboarding isn't completed */}
   {!userHasCompletedOnboarding && (
        <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-bold">Complete Your Onboarding</h3>
          <p className="text-sm mb-2">Start your journey by setting your sobriety date and goals.</p>
          <button
            className="bg-yellow-400 text-black px-4 py-2 rounded-md"
            onClick={() => router.push('/onboarding')}
          >
            Start Onboarding
          </button>
        </div>
      )}


 {/* Sobriety Progress Section */}
 <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500 relative space-y-6">
 <h2 className="text-4xl font-extrabold text-gray-900 drop-shadow-xl animate-fadeIn">
  {user?.fullName || "User"}&apos;s Sobriety Progress
</h2>

  
  {/* Progress Bar */}
  <div className="relative w-full h-8 bg-gray-800 rounded-full shadow-inner overflow-hidden">
    <div
      className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-300 to-orange-600 rounded-full shadow-lg animate-progress transition-all duration-1500"
      style={{ width: `${(daysSober / sobrietyGoal) * 100}%` }}
    ></div>
  </div>
  
  <p className="text-right text-2xl text-gray-100 font-semibold">{daysSober}/{sobrietyGoal} Days Sober</p>
  
  {/* Milestone Alert */}
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
  You&apos;ve saved an estimated <span className="text-green-200 font-bold">${savings}</span> since becoming sober.
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
        How are you feeling today, {user?.firstName || "User"}?
      </p>
      <div className="flex justify-between">
        <Link href="/MoodTracker">
          <button className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition duration-300">😊</button>
        </Link>
        <Link href="/MoodTracker">
          <button className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition duration-300">😐</button>
        </Link>
        <Link href="/MoodTracker">
          <button className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition duration-300">😔</button>
        </Link>
      </div>
    </div>


 {/* Sleep Tracker Section */}
<div className="bg-gradient-to-r from-indigo-400 to-blue-500 p-8 rounded-lg shadow-2xl transition-shadow duration-500 space-y-6">
  <h2 className="text-4xl font-extrabold text-white mb-2 animate-fadeIn">Sleep Tracker</h2>
  <p className="text-base text-gray-200">How was your sleep last night?</p>
  <div className="flex justify-between space-x-4">
    <Link href="/SleepTracker">
      <button className="bg-indigo-600 p-4 rounded-full hover:bg-indigo-500 transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl">😴 Great</button>
    </Link>
    <Link href="/SleepTracker">
      <button className="bg-indigo-600 p-4 rounded-full hover:bg-indigo-500 transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl">😐 Average</button>
    </Link>
    <Link href="/SleepTracker">
      <button className="bg-indigo-600 p-4 rounded-full hover:bg-indigo-500 transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl">😴 Poor</button>
    </Link>
  </div>
</div>


{/* Testimonial Section */}
<div className="bg-gradient-to-r from-green-400 to-teal-500 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 space-y-8">
  <h2 className="text-3xl font-bold animate-fadeIn">Share Your Story</h2>
  <p className="text-sm text-gray-300">
    Tell the community about your journey, or keep your thoughts private.
  </p>

  {/* Public Testimonials */}
  <div className="mt-8">
    <h3 className="text-2xl font-semibold mb-6">Public Testimonials</h3>
    <Link href="/Testimonial">
      <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-400 transition-all transform hover:scale-105 duration-300">
        Share with the Community
      </button>
    </Link>
    {/* Testimonials Feed (Placeholder) */}
    <div className="mt-6 space-y-6">
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <p className="text-gray-300">&quot;Sobriety has given me a new perspective on life!&quot;</p>
        <p className="text-sm text-yellow-400 mt-2">- User123</p>
      </div>
      {/* More testimonials can be added dynamically here */}
    </div>
  </div>

  {/* Private Journals */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold mb-6">Private Journals</h3>
    <Link href="/PrivateJournal">
      <button className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-400 transition-all transform hover:scale-105 duration-300">
        Log a Private Journal Entry
      </button>
    </Link>
    {/* Journal Entries (Placeholder) */}
    <div className="mt-6 space-y-6">
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <p className="text-gray-300">&quot;Today I felt stronger in my journey.&quot;</p>
        <p className="text-sm text-gray-500 mt-2">Private Entry</p>
      </div>
      {/* More private entries can be added dynamically here */}
    </div>
  </div>
</div>

{/* AI Sober Coach Section */}
<div className="relative bg-gradient-to-r from-indigo-400 to-purple-500 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 space-y-4 overflow-hidden">
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

  {/* Coming Soon Overlay */}
  <div className="absolute inset-0 bg-black/60 flex justify-center items-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500">
    <button className="bg-white text-purple-600 px-8 py-3 rounded-lg shadow hover:bg-purple-100 transition-all transform hover:scale-105 duration-300">
      Coming Soon
    </button>
  </div>
</div>
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
    Coming Soon
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
      Coming Soon
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
    Coming Soon
    </button>
  </div>
</div>

<BottomNavbar />
      </div>
    </div>
  );
};

export default TrackerPage;
