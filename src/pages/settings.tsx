import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import { FaUserEdit, FaKey, FaBell, FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image'; // Import the Next.js Image component

const SettingsPage: React.FC = () => {
  const { user } = useUser();
  const [activeSection, setActiveSection] = useState('profile');
  const [profileImage, setProfileImage] = useState<string | null>(user?.imageUrl || null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // State for username change
  const [newUsername, setNewUsername] = useState(user?.username || '');

  // State for password change
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Handle username update
  const handleUsernameChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      await user.update({
        username: newUsername,
      });
      alert('Username updated successfully!');
    } catch (error) {
      console.error('Failed to update username:', error);
      alert('Failed to update username. Please try again.');
    }
  };

  // Handle password update
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      await user.updatePassword({
        currentPassword,
        newPassword,
      });
      alert('Password updated successfully!');
    } catch (error) {
      console.error('Failed to update password:', error);
      alert('Failed to update password. Please try again.');
    }
  };

  // Handle image upload (mock example for Neon)
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      try {
        const imageUrl = await uploadProfileImageToServer(file);
        setProfileImage(imageUrl);
        setUploadError(null);
      } catch {
        setUploadError('Failed to upload image. Please try again.');
      }
    }
  };

  const uploadProfileImageToServer = async (file: File): Promise<string> => {
    // Simulate upload logic (this should connect to Neon)
    return new Promise((resolve) => {
      setTimeout(() => resolve(URL.createObjectURL(file)), 1000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12">
      <div className="container mx-auto space-y-12">

        {/* Page Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-16 tracking-wider">
          Account Settings
        </h1>

        {/* Settings Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['profile', 'password', 'notifications', 'delete'].map(section => (
            <button
              key={section}
              className={`w-full sm:w-auto px-4 py-2 rounded-lg ${activeSection === section ? 'bg-yellow-400 text-blue-900' : 'bg-gray-700 text-gray-300'}`}
              onClick={() => setActiveSection(section)}
            >
              {section === 'profile' ? 'Edit Profile' : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Profile Section */}
        {activeSection === 'profile' && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Edit Profile</h3>
            <p className="text-gray-300 mb-6">Update your personal information, username, and profile picture.</p>
            <form onSubmit={handleUsernameChange}>
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">Username</label>
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  className="w-full p-2 rounded-lg bg-gray-700 text-white"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">Profile Picture</label>
                <input type="file" className="w-full p-2 rounded-lg bg-gray-700 text-white" onChange={handleImageUpload} />
                {profileImage && (
                  <div className="mt-4">
                    <Image
                      src={profileImage}
                      alt="Profile"
                      width={96}
                      height={96}
                      className="rounded-lg object-cover"
                    />
                  </div>
                )}
                {uploadError && <p className="text-red-500 mt-2">{uploadError}</p>}
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
            <form onSubmit={handlePasswordChange}>
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full p-2 rounded-lg bg-gray-700 text-white"
                  placeholder="Enter current password"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-2 rounded-lg bg-gray-700 text-white"
                  placeholder="Enter new password"
                />
              </div>
              <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg hover:bg-yellow-300 transition-all hover:scale-105">
                Save Changes
              </button>
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
              <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg hover:bg-yellow-300 transition-all hover:scale-105">
                Save Changes
              </button>
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
