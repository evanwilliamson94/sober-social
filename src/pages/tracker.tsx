import React from 'react';

const TrackerPage = () => {
  const daysSober = 150;  // Placeholder for real data
  const sobrietyGoal = 365;  // Placeholder goal
  const nextMilestone = 30;  // Days left for the next milestone

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12 pb-20">
      <div className="container mx-auto space-y-12">
        
        {/* Sobriety Progress Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <h2 className="text-2xl font-semibold mb-4">Sobriety Progress</h2>
          <div className="relative w-full h-6 bg-gray-700 rounded-full shadow-inner">
            <div
              className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full transition-all duration-1000"
              style={{ width: `${(daysSober / sobrietyGoal) * 100}%` }}
            ></div>
          </div>
          <p className="text-right mt-2 text-sm text-gray-300">
            {daysSober}/{sobrietyGoal} Days Sober
          </p>
          <p className="text-right mt-1 text-sm text-gray-300">
            {nextMilestone} days until your next milestone!
          </p>
        </div>
        {/* Financial Tracker Section */}
<div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
  <h2 className="text-2xl font-semibold mb-4">Financial Savings</h2>
  <p className="text-sm text-gray-300 mb-4">
    You've saved an estimated <span className="text-green-200 font-bold">$450</span> since becoming sober.
  </p>
  <div className="relative w-full h-6 bg-gray-700 rounded-full shadow-inner">
    <div
      className="absolute top-0 left-0 h-full bg-green-400 rounded-full transition-all duration-1000"
      style={{ width: `75%` }} // Example percentage of savings goal
    ></div>
  </div>
  <p className="text-right mt-2 text-sm text-gray-300">75% of your savings goal achieved!</p>
</div>
{/* Mood Tracker Section */}
<div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
  <h2 className="text-2xl font-semibold mb-4">Mood Tracker</h2>
  <p className="text-sm text-gray-300 mb-4">
    How are you feeling today?
  </p>
  <div className="flex justify-between">
    <button className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition duration-300">
      😊
    </button>
    <button className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition duration-300">
      😐
    </button>
    <button className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition duration-300">
      😔
    </button>
  </div>
</div>
{/* Trigger & Cravings Log Section */}
<div className="bg-gradient-to-r from-red-400 to-pink-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
  <h2 className="text-2xl font-semibold mb-4">Cravings & Triggers</h2>
  <p className="text-sm text-gray-300 mb-4">
    Document when you experience a craving and what triggered it.
  </p>
  <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-400 transition duration-300">
    Log a Craving
  </button>
</div>

      </div>
    </div>
  );
};

export default TrackerPage;
