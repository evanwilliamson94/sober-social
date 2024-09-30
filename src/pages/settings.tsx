import React from 'react';
import Link from 'next/link';
import { FaUserEdit, FaKey, FaBell, FaTrashAlt } from 'react-icons/fa'; // Icons for settings options

const SettingsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12">
      <div className="container mx-auto space-y-12">
        
        {/* Page Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-16 tracking-wider">
          Account Settings
        </h1>

        {/* Settings Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Edit Profile */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="mb-4 flex justify-center items-center">
              <FaUserEdit className="w-12 h-12 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold text-center text-yellow-400 mb-4">Edit Profile</h3>
            <p className="text-gray-300 text-center mb-6">
              Update your personal information, username, and profile picture.
            </p>
            <div className="text-center">
              <Link href="/edit-profile">
                <a className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition-all transform hover:scale-105">
                  Edit Profile
                </a>
              </Link>
            </div>
          </div>

          {/* Change Password */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="mb-4 flex justify-center items-center">
              <FaKey className="w-12 h-12 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold text-center text-yellow-400 mb-4">Change Password</h3>
            <p className="text-gray-300 text-center mb-6">
              Ensure your account is secure by updating your password regularly.
            </p>
            <div className="text-center">
              <Link href="/change-password">
                <a className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition-all transform hover:scale-105">
                  Change Password
                </a>
              </Link>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="mb-4 flex justify-center items-center">
              <FaBell className="w-12 h-12 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold text-center text-yellow-400 mb-4">Notification Settings</h3>
            <p className="text-gray-300 text-center mb-6">
              Customize your notification preferences and email alerts.
            </p>
            <div className="text-center">
              <Link href="/notifications">
                <a className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition-all transform hover:scale-105">
                  Manage Notifications
                </a>
              </Link>
            </div>
          </div>

          {/* Delete Account */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="mb-4 flex justify-center items-center">
              <FaTrashAlt className="w-12 h-12 text-red-500" />
            </div>
            <h3 className="text-2xl font-semibold text-center text-red-500 mb-4">Delete Account</h3>
            <p className="text-gray-300 text-center mb-6">
              Permanently delete your account and all associated data.
            </p>
            <div className="text-center">
              <button className="bg-red-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-red-400 transition-all transform hover:scale-105">
                Delete Account
              </button>
            </div>
          </div>

        </div>

        {/* Back to Profile Button */}
        <div className="text-center mt-12">
          <Link href="/profile">
            <a className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-all transform hover:scale-105">
              Back to Profile
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
