import React, { useState } from "react";
import { FaLock, FaTrophy } from "react-icons/fa"; // FaTrophy for unlocked and FaLock for locked

// Expanded list of achievements
const allAchievements = [
  { title: "7 Days Sober", achieved: true, icon: "🎉", description: "You’ve reached 7 days of sobriety!" },
  { title: "14 Days Sober", achieved: true, icon: "🎉", description: "You’ve reached 14 days of sobriety!" },
  { title: "30 Days Sober", achieved: true, icon: "🏅", description: "30 days of commitment!" },
  { title: "60 Days Sober", achieved: false, icon: "🏅", description: "60 days strong! Keep going!" },
  { title: "90 Days Sober", achieved: false, icon: "🎖️", description: "90 days of sobriety! Almost at 3 months!" },
  { title: "120 Days Sober", achieved: false, icon: "🎖️", description: "120 days sober! Keep it up!" },
  { title: "150 Days Sober", achieved: false, icon: "🏆", description: "150 days sober, amazing progress!" },
  { title: "180 Days Sober", achieved: false, icon: "🏆", description: "Half a year sober! You are amazing!" },
  { title: "210 Days Sober", achieved: false, icon: "🎖️", description: "210 days strong! Keep it up!" },
  { title: "240 Days Sober", achieved: false, icon: "🏆", description: "240 days sober, stay strong!" },
  { title: "270 Days Sober", achieved: false, icon: "🎖️", description: "270 days sober! Almost at 9 months!" },
  { title: "300 Days Sober", achieved: false, icon: "🏅", description: "300 days sober! Incredible progress!" },
  { title: "330 Days Sober", achieved: false, icon: "🏅", description: "330 days sober, you're on the way!" },
  { title: "1 Year Sober", achieved: false, icon: "🏆", description: "1 Year Sober! Keep going!" },
  { title: "2 Years Sober", achieved: false, icon: "🏆", description: "2 Years Sober! A true inspiration!" },
  { title: "5 Years Sober", achieved: false, icon: "🏆", description: "5 Years of Sobriety!" },
];

const AchievementsPage: React.FC = () => {
  const [visibleAchievements, setVisibleAchievements] = useState(6); // Initial number of visible achievements

  // Function to load more achievements
  const loadMoreAchievements = () => {
    setVisibleAchievements((prev) => prev + 6); // Load 6 more achievements each time
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12">
      <div className="container mx-auto space-y-12">
        
       {/* Page Header */}
<h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-16 tracking-wider animate-fadeIn">
  Achievements
</h1>


        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allAchievements.slice(0, visibleAchievements).map((achievement, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg shadow-lg bg-gradient-to-r ${
                achievement.achieved
                  ? "from-green-500 to-green-700 hover:from-green-600 hover:to-green-800"
                  : "from-gray-700 to-gray-900"
              } transition-all duration-500 transform hover:scale-105 flex flex-col items-center justify-center text-center`}
            >
              {/* Achievement Icon */}
              <div className="text-6xl mb-4">
                {achievement.achieved ? <FaTrophy /> : <FaLock className="text-gray-500" />}
              </div>

              {/* Achievement Title */}
              <h3 className={`text-2xl font-semibold tracking-wide ${
                achievement.achieved ? "text-white" : "text-gray-500"
              }`}>
                {achievement.title}
              </h3>

              {/* Achievement Description */}
              <p className="text-sm text-gray-300 mt-2">
                {achievement.description}
              </p>

              {/* Achievement Status */}
              <p className={`text-sm mt-2 ${
                achievement.achieved ? "text-yellow-400 animate-pulse" : "text-gray-400"
              }`}>
                {achievement.achieved ? "Achieved!" : "Locked"}
              </p>

              {/* Progress Bar for Locked Achievements */}
              {!achievement.achieved && (
                <div className="w-full mt-4 h-2 bg-gray-600 rounded-full">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "40%" }} />
                  {/* 40% is a placeholder, this should reflect user progress */}
                </div>
              )}

              {/* Locked Overlay */}
              {!achievement.achieved && (
                <div className="absolute inset-0 bg-black/70 flex justify-center items-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <button className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
                    Keep Going to Unlock
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More Achievements Button */}
        {visibleAchievements < allAchievements.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreAchievements}
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
            >
              Load More Achievements
            </button>
          </div>
        )}

        {/* Back to Profile Button */}
        <div className="text-center mt-12">
          <a
            href="/profile"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
          >
            Back to Profile
          </a>
        </div>
      </div>
    </div>
  );
};
export default AchievementsPage;
