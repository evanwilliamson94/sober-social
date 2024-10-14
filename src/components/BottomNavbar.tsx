import { FaHome, FaClipboardList, FaUsers, FaUser, FaPlus } from "react-icons/fa";

const BottomNavbar = () => {
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-black text-white shadow-2xl rounded-t-3xl px-6 py-4 z-50 transition-shadow duration-300">
        <div className="flex justify-between items-center max-w-lg mx-auto relative">
          
          {/* Home Icon */}
          <a href="/dashboard" className="text-center flex flex-col items-center group">
            <FaHome size={28} className="group-hover:text-yellow-400 transition-colors duration-300" />
            <span className="text-sm mt-1 group-hover:text-yellow-400 transition-colors duration-300">Home</span>
          </a>
      
          {/* Tracker Icon */}
          <a href="/tracker" className="text-center flex flex-col items-center group">
            <FaClipboardList size={28} className="group-hover:text-yellow-400 transition-colors duration-300" />
            <span className="text-sm mt-1 group-hover:text-yellow-400 transition-colors duration-300">Tracker</span>
          </a>
      
          {/* Central Action Button */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 w-16 h-16 bg-yellow-400 border-4 border-gray-900 rounded-full p-3 shadow-xl flex items-center justify-center hover:bg-yellow-300 transition-colors duration-300">
            <a href="/create" className="text-gray-900">
              <FaPlus size={34} />
            </a>
          </div>
      
          {/* Community Icon */}
          <a href="/community" className="text-center flex flex-col items-center group">
            <FaUsers size={28} className="group-hover:text-yellow-400 transition-colors duration-300" />
            <span className="text-sm mt-1 group-hover:text-yellow-400 transition-colors duration-300">Community</span>
          </a>
      
          {/* Profile Icon */}
          <a href="/profile" className="text-center flex flex-col items-center group">
            <FaUser size={28} className="group-hover:text-yellow-400 transition-colors duration-300" />
            <span className="text-sm mt-1 group-hover:text-yellow-400 transition-colors duration-300">Profile</span>
          </a>
        </div>
      </nav>
    );
  };
  
  export default BottomNavbar;
  
