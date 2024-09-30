import Link from 'next/link';

import {
    FaHome,
    FaClipboardList,
    FaPlus,
    FaUsers,
    FaUser,
    FaHeart,
    FaComment,
  } from "react-icons/fa"; // Importing necessary icons
  
  const ProfilePage = () => {
    // Placeholder static data
    const userName = "John Doe";
    const daysSober = 150;
    const sobrietyGoal = 180;
    const nextMilestone = 30; // days left for next milestone
    const achievements = [
      { title: "30 Days Sober", achieved: true, icon: "🎉" },
      { title: "100 Days Sober", achieved: true, icon: "🏅" },
      { title: "1 Year Sober", achieved: false, icon: "🎖️" },
    ];
    const futureAchievements = [
      { title: "1 Year Sober", achieved: false, icon: "🎖️" },
      { title: "5 Years Sober", achieved: false, icon: "🏆" },
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
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-6 lg:p-12 pb-20">
        {/* Two-column layout on large screens */}
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Profile and Progress */}
          <div className="lg:col-span-1 space-y-10">
            {/* Profile Header */}
            <div className="relative p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-gradient-to-r from-gray-900 to-black">
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-50 rounded-lg"></div>
              <div className="relative flex flex-col lg:flex-row lg:space-x-6 items-center lg:items-start">
                {/* Profile Picture */}
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg hover:scale-105 transition-transform duration-300 mb-4 lg:mb-0">
                  <img src="/profile-placeholder.jpg" alt="Profile" />
                </div>
  
                {/* User Info */}
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl lg:text-4xl font-bold">{userName}</h1>
                  <p className="text-base mt-2 lg:mt-3">
                    Sober for{" "}
                    <span className="font-bold text-yellow-400 animate-pulse">
                      {daysSober} days
                    </span>
                    .
                  </p>
                  <p className="text-sm mt-1">
                    <span className="text-yellow-400">{nextMilestone} days</span>{" "}
                    until your next milestone!
                  </p>
                </div>
              </div>
  
              {/* Followers/Following */}
              <div className="mt-6 flex justify-around text-center relative">
                <div>
                  <p className="text-lg font-bold text-yellow-400">{followers}</p>
                  <p className="text-sm text-gray-300">Followers</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-yellow-400">{following}</p>
                  <p className="text-sm text-gray-300">Following</p>
                </div>
              </div>
            </div>
  
            {/* Sobriety Progress */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 lg:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <h2 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4">
                Sobriety Progress
              </h2>
              <div className="relative w-full h-4 lg:h-6 bg-gray-700 rounded-full shadow-inner">
                <div
                  className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full transition-all duration-1000"
                  style={{ width: `${(daysSober / sobrietyGoal) * 100}%` }}
                ></div>
              </div>
              <p className="text-right mt-1 lg:mt-2 text-xs lg:text-sm text-gray-300">
                {daysSober}/{sobrietyGoal} Days
              </p>
            </div>
  
          {/* Edit Profile Button */}
<div className="text-center">
  <Link href="/settings" passHref>
    <button className="bg-yellow-400 text-gray-900 px-4 py-2 lg:px-5 lg:py-2 rounded-lg shadow-lg hover:bg-yellow-300 transition-all hover:scale-105">
      Edit Profile
    </button>
  </Link>
</div>
</div>
  
         {/* Achievements Section */}
<div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
  <h2 className="text-xl lg:text-2xl font-semibold mb-4">Achievements</h2>

  {/* Show Only Unlocked Achievements */}
  <div className="grid grid-cols-2 gap-6">
    {achievements
      .filter(achievement => achievement.achieved)  // Only show unlocked achievements
      .map((achievement, index) => (
        <div
          key={index}
          className="p-4 rounded-lg text-center shadow-lg bg-green-600 text-white hover:scale-105 transition-transform duration-300"
        >
          <div className="flex items-center justify-center">
            <span className="text-4xl">{achievement.icon}</span>
          </div>
          <p className="font-semibold text-base hover:text-lg transition-all duration-300">
            {achievement.title}
          </p>
          <div className="mt-1 text-xs text-yellow-400 animate-pulse">
            Achieved!
          </div>
        </div>
    ))}
  </div>

  {/* Link to All Achievements Page */}
  <div className="text-center mt-4">
    <a
      href="/achievements"
      className="text-yellow-400 hover:underline hover:text-yellow-300 text-sm"
    >
      View All Achievements
    </a>
  </div>

            {/* User Posts Section */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4">Your Posts</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {posts.map((post) => (
                  <div key={post.id} className="relative group">
                    {/* Post Image */}
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                      <div className="text-white text-sm flex space-x-4">
                        <span className="flex items-center">
                          <FaHeart className="mr-1" /> {post.likes}
                        </span>
                        <span className="flex items-center">
                          <FaComment className="mr-1" /> {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Sticky Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-black text-white shadow-2xl rounded-t-3xl px-4 py-4 z-50 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-3xl">
          <div className="flex justify-between items-center max-w-lg mx-auto relative">
            {/* Home Icon */}
            <a
              href="/dashboard"
              className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out"
            >
              <FaHome
                size={28}
                className="group-hover:text-yellow-400 transition duration-300 transform hover:scale-110"
              />
              <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">
                Home
              </span>
            </a>
  
            {/* Tracker Icon */}
            <a
              href="/tracker"
              className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out"
            >
              <FaClipboardList
                size={28}
                className="group-hover:text-yellow-400 transition duration-300 transform hover:scale-110"
              />
              <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">
                Tracker
              </span>
            </a>
  
            {/* Central Action Button */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-16 h-16 bg-yellow-400 border-4 border-gray-900 rounded-full p-3 shadow-2xl flex items-center justify-center transform hover:scale-110 hover:shadow-3xl transition-all duration-300 ease-in-out">
              <a href="/create" className="text-gray-900">
                <FaPlus size={34} className="hover:animate-pulse" />
              </a>
            </div>
  
            {/* Community Icon */}
            <a
              href="/community"
              className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out"
            >
              <FaUsers
                size={28}
                className="group-hover:text-yellow-400 transition duration-300 transform hover:scale-110"
              />
              <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">
                Community
              </span>
            </a>
  
            {/* Profile Icon */}
            <a
              href="/profile"
              className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out"
            >
              <FaUser
                size={28}
                className="group-hover:text-yellow-400 transition duration-300 transform hover:scale-110"
              />
              <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">
                Profile
              </span>
            </a>
          </div>
        </nav>
      </div>
    );
  };
  
  export default ProfilePage;
  