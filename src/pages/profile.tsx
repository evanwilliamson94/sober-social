const ProfilePage = () => {
    // Placeholder static data
    const userName = "John Doe";
    const daysSober = 150;
    const sobrietyGoal = 180;
    const nextMilestone = 30; // days left for next milestone
    const achievements = [
      { title: "30 Days Sober", achieved: true },
      { title: "100 Days Sober", achieved: true },
      { title: "1 Year Sober", achieved: false },
    ];
  
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-8 bg-gray-800 p-4 rounded-lg shadow-lg">
          {/* Profile Picture */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="/profile-placeholder.jpg" alt="Profile" />
          </div>
  
          {/* User Info */}
          <div>
            <h1 className="text-3xl font-bold">{userName}</h1>
            <p className="text-lg mt-2">
              You have been sober for{" "}
              <span className="font-bold text-yellow-400">{daysSober} days</span>.
            </p>
            <p className="text-md mt-1">
              <span className="text-yellow-400">{nextMilestone} days</span> until your next milestone!
            </p>
          </div>
        </div>
  
        {/* Progress Overview */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Sobriety Progress</h2>
          {/* Animated Progress Bar */}
          <div className="relative w-full h-6 bg-gray-700 rounded-full shadow-inner">
            <div
              className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full transition-all duration-1000"
              style={{ width: `${(daysSober / sobrietyGoal) * 100}%` }}
            ></div>
          </div>
          <p className="text-right mt-2 text-sm">
            {daysSober}/{sobrietyGoal} Days
          </p>
        </div>
  
        {/* Achievements Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Achievements</h2>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-center shadow-lg transition-transform duration-300 ${
                  achievement.achieved
                    ? "bg-green-600 text-white"
                    : "bg-gray-700 text-gray-400"
                }`}
              >
                <p className="font-bold">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Edit Profile Button */}
        <div className="mt-8">
          <a
            href="/settings"
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300 transition-all"
          >
            Edit Profile
          </a>
        </div>
      </div>
    );
  };
  
  export default ProfilePage;
  