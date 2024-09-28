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
        <div className="flex items-center space-x-4 mb-8">
          {/* Profile Picture */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg">
            <img src="/profile-placeholder.jpg" alt="Profile" />
          </div>
  
          {/* User Info */}
          <div>
            <h1 className="text-3xl font-semibold">{userName}</h1>
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
          {/* Progress Bar */}
          <div className="relative w-full h-6 bg-gray-700 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full"
              style={{ width: `${(daysSober / sobrietyGoal) * 100}%` }}
            ></div>
          </div>
          <p className="text-right mt-2 text-sm">
            {daysSober}/{sobrietyGoal} Days
          </p>
        </div>
  
        {/* Achievements Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Achievements</h2>
          <ul>
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className={`mb-2 text-md ${
                  achievement.achieved ? "text-green-400" : "text-gray-500"
                }`}
              >
                {achievement.title}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Edit Profile Button */}
        <div className="mt-8">
          <a
            href="/settings"
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition-all"
          >
            Edit Profile
          </a>
        </div>
      </div>
    );
  };
  
  export default ProfilePage;
  