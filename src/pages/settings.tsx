import React, { useState } from 'react';
import { FaUserEdit, FaKey, FaBell, FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link';

const SettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile'); // Track active section

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12">
      <div className="container mx-auto space-y-12">

        {/* Page Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-16 tracking-wider">
          Account Settings
        </h1>

        {/* Settings Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg ${activeSection === 'profile' ? 'bg-yellow-400 text-blue-900' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => setActiveSection('profile')}
          >
            Edit Profile
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${activeSection === 'password' ? 'bg-yellow-400 text-blue-900' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => setActiveSection('password')}
          >
            Change Password
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${activeSection === 'notifications' ? 'bg-yellow-400 text-blue-900' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => setActiveSection('notifications')}
          >
            Notifications
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${activeSection === 'delete' ? 'bg-yellow-400 text-blue-900' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => setActiveSection('delete')}
          >
            Delete Account
          </button>
        </div>

        {/* Profile Section */}
        {activeSection === 'profile' && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Edit Profile</h3>
            <p className="text-gray-300 mb-6">Update your personal information, username, and profile picture.</p>
            <form>
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">Username</label>
                <input type="text" className="w-full p-2 rounded-lg bg-gray-700 text-white" placeholder="Enter your username" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">Profile Picture</label>
                <input type="file" className="w-full p-2 rounded-lg bg-gray-700 text-white" />
              </div>
              <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg hover:bg-yellow-300">Save Changes</button>
            </form>
          </div>
        )}

        {/* Change Password Section */}
        {activeSection === 'password' && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Change Password</h3>
            <p className="text-gray-300 mb-6">Ensure your account is secure by updating your password regularly.</p>
            <form>
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">Current Password</label>
                <input type="password" className="w-full p-2 rounded-lg bg-gray-700 text-white" placeholder="Enter current password" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">New Password</label>
                <input type="password" className="w-full p-2 rounded-lg bg-gray-700 text-white" placeholder="Enter new password" />
              </div>
              <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg hover:bg-yellow-300">Save Changes</button>
            </form>
          </div>
        )}

        {/* Notifications Section */}
        {activeSection === 'notifications' && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Notification Settings</h3>
            <p className="text-gray-300 mb-6">Customize your notification preferences and email alerts.</p>
            <form>
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">Email Notifications</label>
                <input type="checkbox" className="mr-2" /> Enable email notifications
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">Push Notifications</label>
                <input type="checkbox" className="mr-2" /> Enable push notifications
              </div>
              <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg hover:bg-yellow-300">Save Changes</button>
            </form>
          </div>
        )}

        {/* Delete Account Section */}
        {activeSection === 'delete' && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-red-500 mb-4">Delete Account</h3>
            <p className="text-gray-300 mb-6">Permanently delete your account and all associated data.</p>
            <button className="bg-red-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-red-400 transition-all transform hover:scale-105">
              Delete Account
            </button>
          </div>
        )}

        {/* Back to Profile Button */}
        <div className="text-center mt-12">
          <Link href="/profile" legacyBehavior>
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
