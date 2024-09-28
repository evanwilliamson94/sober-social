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
    const posts = [
      {
        id: 1,
        content: "Feeling great! 100 days sober!",
        image: "/post-image1.jpg",
        likes: 120,
        comments: 15,
      },
      {
        id: 2,
        content: "Meditation is keeping me strong.",
        image: "/post-image2.jpg",
        likes: 80,
        comments: 10,
      },
    ];
  
    const followers = 150;
    const following = 85;
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-6">
        {/* Two-column layout on large screens */}
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
    
          {/* Left Column: Profile and Progress */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Header */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <div className="flex items-center space-x-4">
                {/* Profile Picture */}
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg hover:scale-105 transition-transform duration-300">
                  <img src="/profile-placeholder.jpg" alt="Profile" />
                </div>
    
                {/* User Info */}
                <div>
                  <h1 className="text-4xl font-extrabold">{userName}</h1>
                  <p className="text-lg mt-2">
                    Sober for{" "}
                    <span className="font-bold text-yellow-400">{daysSober} days</span>.
                  </p>
                  <p className="text-md mt-1">
                    <span className="text-yellow-400">{nextMilestone} days</span> until your next milestone!
                  </p>
                </div>
              </div>
    
              {/* Followers/Following */}
              <div className="mt-6 flex justify-around text-center">
                <div>
                  <p className="text-lg font-extrabold text-yellow-400">{followers}</p>
                  <p className="text-sm">Followers</p>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-yellow-400">{following}</p>
                  <p className="text-sm">Following</p>
                </div>
              </div>
            </div>
    
            {/* Sobriety Progress */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <h2 className="text-2xl font-bold mb-4">Sobriety Progress</h2>
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
    
            {/* Edit Profile Button */}
            <div className="text-center">
              <a
                href="/settings"
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300 transition-all hover:scale-105"
              >
                Edit Profile
              </a>
            </div>
          </div>
    
          {/* Right Column: Achievements and Posts */}
          <div className="lg:col-span-2 space-y-8">
    
            {/* Achievements Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <h2 className="text-2xl font-bold mb-4">Achievements</h2>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg text-center shadow-lg transition-transform duration-300 ${
                      achievement.achieved
                        ? "bg-green-600 text-white hover:scale-105"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    <p className="font-bold">{achievement.title}</p>
                  </div>
                ))}
              </div>
            </div>
    
            {/* User Posts Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <h2 className="text-2xl font-bold mb-4">Your Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <div key={post.id} className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <p className="text-md mb-4">{post.content}</p>
                    <div className="flex justify-between text-sm text-gray-400">
                      <p>{post.likes} Likes</p>
                      <p>{post.comments} Comments</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    
        </div>
      </div>
    );
  };
  
  export default ProfilePage;
  