import React from 'react';

const TrackerPage = () => {
  const daysSober = 150;  // Placeholder for real data
  const sobrietyGoal = 365;  // Placeholder goal
  const nextMilestone = 30;  // Days left for the next milestone
  const savings = 450;  // Placeholder for savings
  const savingsGoal = 600;  // Placeholder savings goal

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12 pb-20">
      <div className="container mx-auto space-y-12">
        
       {/* Sobriety Progress Section */}
<div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 relative">
  <h2 className="text-3xl font-bold mb-4">Sobriety Progress</h2>
  <div className="relative w-full h-6 bg-gray-700 rounded-full shadow-inner">
    <div
      className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full transition-all duration-1000 animate-pulse"
      style={{ width: `${(daysSober / sobrietyGoal) * 100}%` }}
    ></div>
  </div>
  <p className="text-right mt-2 text-lg text-gray-200">
    {daysSober}/{sobrietyGoal} Days Sober
  </p>
  {nextMilestone <= 0 && (
    <div className="absolute -top-8 right-0 p-3 bg-green-500 text-white rounded-full animate-bounce">
      🎉 Milestone Achieved!
    </div>
  )}
</div>


        {/* Financial Tracker Section */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <h2 className="text-3xl font-bold mb-4">Financial Savings</h2>
          <p className="text-lg text-gray-300 mb-4">
            You've saved an estimated <span className="text-green-200 font-bold">${savings}</span> since becoming sober.
          </p>
          <div className="relative w-full h-6 bg-gray-700 rounded-full shadow-inner">
            <div
              className="absolute top-0 left-0 h-full bg-green-400 rounded-full transition-all duration-1000"
              style={{ width: `${(savings / savingsGoal) * 100}%` }} // Dynamic percentage
            ></div>
          </div>
          <p className="text-right mt-2 text-sm text-gray-300">{(savings / savingsGoal) * 100}% of your savings goal achieved!</p>
        </div>

        {/* Mood Tracker Section */}
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <h2 className="text-3xl font-bold mb-4">Mood Tracker</h2>
          <p className="text-sm text-gray-300 mb-4">
            How are you feeling today?
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition duration-300">
              😊
            </button>
            <button className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition duration-300">
              😐
            </button>
            <button className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition duration-300">
              😔
            </button>
          </div>
        </div>
{/* Sleep Tracker Section */}
<div className="bg-gradient-to-r from-indigo-400 to-blue-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
  <h2 className="text-3xl font-bold mb-4">Sleep Tracker</h2>
  <p className="text-sm text-gray-300 mb-4">
    How was your sleep last night?
  </p>
  <div className="flex justify-between">
    <button className="bg-indigo-600 p-2 rounded-full hover:bg-indigo-500 transition duration-300">
      😴 Great
    </button>
    <button className="bg-indigo-600 p-2 rounded-full hover:bg-indigo-500 transition duration-300">
      😐 Average
    </button>
    <button className="bg-indigo-600 p-2 rounded-full hover:bg-indigo-500 transition duration-300">
      😴 Poor
    </button>
  </div>
</div>
        {/* Trigger & Cravings Log Section */}
        <div className="bg-gradient-to-r from-red-400 to-pink-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <h2 className="text-3xl font-bold mb-4">Cravings & Triggers</h2>
          <p className="text-sm text-gray-300 mb-4">
            Document when you experience a craving and what triggered it.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-400 transition duration-300">
            Log a Craving
          </button>
        </div>
{/* Reflection & Gratitude Journal Section */}
<div className="bg-gradient-to-r from-purple-400 to-pink-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 relative">
  <h2 className="text-3xl font-bold mb-4">Reflection & Gratitude</h2>
  <p className="text-sm text-gray-300 mb-4">
    What are you grateful for today?
  </p>
  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-500 transition duration-300">
    Write in Journal (Premium)
  </button>
  {/* Unlock Premium Overlay */}
  <div className="absolute inset-0 bg-black/60 flex justify-center items-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500">
    <button className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow hover:bg-purple-100 transition duration-300">
      Unlock Premium
    </button>
  </div>
</div>

{/* Exercise & Wellness Tracker Section */}
<div className="bg-gradient-to-r from-teal-400 to-green-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 relative">
  <h2 className="text-3xl font-bold mb-4">Exercise & Wellness</h2>
  <p className="text-sm text-gray-300 mb-4">
    Track your physical activity for a healthier lifestyle.
  </p>
  <button className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-400 transition duration-300">
    Log Exercise (Premium)
  </button>
  <div className="absolute inset-0 bg-black/60 flex justify-center items-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500">
    <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-400 transition duration-300">
      Unlock Premium
    </button>
  </div>
</div>

{/* Streaks & Badges Section */}
<div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 relative">
  <h2 className="text-3xl font-bold mb-4">Sobriety Streaks & Badges</h2>
  <p className="text-sm text-gray-300 mb-4">
    Keep up your streak and earn badges for reaching milestones!
  </p>
  <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-400 transition duration-300">
    View Badges (Premium)
  </button>
  {/* Unlock Premium Overlay */}
  <div className="absolute inset-0 bg-black/60 flex justify-center items-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500">
    <button className="bg-white text-yellow-500 px-6 py-3 rounded-lg shadow hover:bg-yellow-100 transition duration-300">
      Unlock Premium
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default TrackerPage;
