// /pages/custom-signup.tsx
import { useState } from 'react';
import { SignUp } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CustomSignUpPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    sobrietyGoal: '',
    reasonForJoining: '',
    sobrietyStartDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add any custom sign-up logic or API call here
    console.log(formData);
    router.push('/dashboard'); // Redirect after signup (to be adjusted)
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Join SoberSocial</h1>
        <SignUp
          afterSignUpUrl="/dashboard"
          appearance={{
            variables: {
              colorPrimary: '#4A90E2',
              colorBackground: '#ffffff',
              fontFamily: 'Arial, sans-serif',
              borderRadius: '8px',
            },
          }}
        />
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div>
            <label htmlFor="sobrietyGoal" className="block text-sm font-medium text-gray-700">
              Your Sobriety Goal
            </label>
            <input
              type="text"
              id="sobrietyGoal"
              name="sobrietyGoal"
              value={formData.sobrietyGoal}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="E.g. 100 days, 1 year, etc."
            />
          </div>

          <div>
            <label htmlFor="reasonForJoining" className="block text-sm font-medium text-gray-700">
              Why are you joining SoberSocial?
            </label>
            <textarea
              id="reasonForJoining"
              name="reasonForJoining"
              value={formData.reasonForJoining}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Tell us why you're joining..."
            ></textarea>
          </div>

          <div>
            <label htmlFor="sobrietyStartDate" className="block text-sm font-medium text-gray-700">
              When did your sobriety journey start?
            </label>
            <input
              type="date"
              id="sobrietyStartDate"
              name="sobrietyStartDate"
              value={formData.sobrietyStartDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300"
          >
            Continue
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomSignUpPage;
