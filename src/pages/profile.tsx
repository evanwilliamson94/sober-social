import { useUser } from '@clerk/nextjs';  // Fetch user details directly from Clerk
import Link from 'next/link';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import BottomNavbar from '../components/BottomNavbar';  // Reusable bottom navigation
import { FaHeart, FaComment } from 'react-icons/fa';
import Image from 'next/image';
const ProfilePage = () => {
  const { user } = useUser();  // Fetch user data from Clerk

  // If user data is not available, show a loading indicator
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  // Replace these placeholders with real data if needed in the future
  const daysSober = 150;  // Placeholder for days sober
  const sobrietyGoal = 180;  // Placeholder for sobriety goal
  const nextMilestone = 30;  // Placeholder for next milestone
  const followers = 150;  // Placeholder for followers
  const following = 85;  // Placeholder for following count
  const achievements = [
    { title: "30 Days Sober", achieved: true, icon: "🎉" },
    { title: "100 Days Sober", achieved: true, icon: "🏅" },
    { title: "1 Year Sober", achieved: false, icon: "🎖️" },
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

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 text-white p-6 lg:p-12 pb-20">
          {/* Responsive Grid Layout */}
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Profile Section */}
            <div className="lg:col-span-1 space-y-8 lg:space-y-10">
              {/* Profile Header */}
              <div className="relative p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-gradient-to-r from-gray-900 to-black">
                <div className="relative flex flex-col lg:flex-row lg:space-x-6 items-center lg:items-start">
                  {/* Profile Picture */}
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg hover:scale-105 transition-transform duration-300 mb-4 lg:mb-0">
                  {user?.imageUrl ? (
  <Image
    src={user.imageUrl}
    alt="Profile"
    width={96}
    height={96}
    className="rounded-full object-cover"
  />
) : (
  <Image
    src="/profile-placeholder.jpg"
    alt="Profile"
    width={96}
    height={96}
    className="rounded-full object-cover"
  />
)}

                  </div>
  
                  {/* User Info */}
                  <div className="text-center lg:text-left">
                    <h1 className="text-3xl lg:text-4xl font-bold">{user?.fullName || 'User'}</h1>
                    <p className="text-lg lg:text-xl text-gray-400">@{user?.username || 'username'}</p> {/* Displaying username */}
                    <p className="text-base mt-2 lg:mt-3">
                      Sober for{" "}
                      <span className="font-bold text-yellow-400 animate-pulse">
                        {daysSober} days
                      </span>.
                    </p>
                    <p className="text-sm mt-1">
                      <span className="text-yellow-400">{nextMilestone} days</span>{" "}
                      until your next milestone!
                    </p>
                  </div>
                </div>
  
                {/* Followers/Following */}
                <div className="mt-6 flex justify-around lg:justify-start text-center lg:text-left lg:space-x-6">
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
            <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4">Achievements</h2>
              <div className="grid grid-cols-2 gap-6">
                {achievements
                  .filter((achievement) => achievement.achieved)
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
                      <div className="mt-1 text-xs text-yellow-400 animate-pulse">Achieved!</div>
                    </div>
                  ))}
              </div>
            </div>
  
            {/* User Posts Section */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 mt-8">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4">Your Posts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <div key={post.id} className="relative group">
                    <div className="w-full aspect-w-1 aspect-h-1">
                    <Image
  src={post.image}
  alt="Post"
  width={500}
  height={500}
  className="w-full h-full object-cover rounded-lg"
/>

                    </div>
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
  
        {/* Add Bottom Navbar */}
        <BottomNavbar />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}