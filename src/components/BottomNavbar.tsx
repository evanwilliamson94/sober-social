import { FaHome, FaClipboardList, FaUsers, FaUser, FaPlus } from "react-icons/fa";

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-black text-white shadow-2xl rounded-t-3xl px-4 py-4 z-50 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-3xl">
      <div className="flex justify-between items-center max-w-lg mx-auto relative">
        <a href="/dashboard" className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out">
          <FaHome size={28} className="group-hover:text-yellow-400 transition duration-300 transform hover:scale-110" />
          <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">Home</span>
        </a>
        <a href="/tracker" className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out">
          <FaClipboardList size={28} className="group-hover:text-yellow-400 transition duration-300 transform hover:scale-110" />
          <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">Tracker</span>
        </a>
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-16 h-16 bg-yellow-400 border-4 border-gray-900 rounded-full p-3 shadow-2xl flex items-center justify-center transform hover:scale-110 hover:shadow-3xl transition-all duration-300 ease-in-out">
          <a href="/create" className="text-gray-900">
            <FaPlus size={34} className="hover:animate-pulse" />
          </a>
        </div>
        <a href="/community" className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out">
          <FaUsers size={28} className="group-hover:text-yellow-400 transition duration-300 transform hover:scale-110" />
          <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">Community</span>
        </a>
        <a href="/profile" className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out">
          <FaUser size={28} className="group-hover:text-yellow-400 transition duration-300 transform hover:scale-110" />
          <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">Profile</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomNavbar;
