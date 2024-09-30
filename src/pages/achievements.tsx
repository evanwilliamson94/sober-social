import React from "react";
import { FaLock } from "react-icons/fa"; // Icon for locked achievements

const achievements = [
  { title: "30 Days Sober", achieved: true, icon: "🎉" },
  { title: "100 Days Sober", achieved: true, icon: "🏅" },
  { title: "1 Year Sober", achieved: false, icon: "🎖️" },
  { title: "5 Years Sober", achieved: false, icon: "🏆" },
];

const AchievementsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12">
      <div className="container mx-auto space-y-12">
        
        {/* Page Header */}
        <h1 className="text-5xl font-bold text-center mb-10 lg:mb-16 tracking-wider">
          Achievements
        </h1>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
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
                {achievement.achieved ? achievement.icon : <FaLock className="text-gray-500" />}
              </div>

              {/* Achievement Title */}
              <h3 className={`text-2xl font-semibold tracking-wide ${
                achievement.achieved ? "text-white" : "text-gray-500"
              }`}>
                {achievement.title}
              </h3>

              {/* Achievement Status */}
              <p className={`text-sm mt-2 ${
                achievement.achieved ? "text-yellow-400 animate-pulse" : "text-gray-400"
              }`}>
                {achievement.achieved ? "Achieved!" : "Locked"}
              </p>

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
