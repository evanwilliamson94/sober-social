import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [sobrietyLength, setSobrietyLength] = useState('');
  const [durationUnit, setDurationUnit] = useState('days');
  const [trackingFrequency, setTrackingFrequency] = useState('');
  const [engagementLevel, setEngagementLevel] = useState('');
  const [goals, setGoals] = useState('');
  const [showReward, setShowReward] = useState(false);  // New state for rewards
  const router = useRouter();

  const calculateDays = () => {
    const length = Number(sobrietyLength);
    if (durationUnit === 'days') return length;
    if (durationUnit === 'weeks') return length * 7;
    if (durationUnit === 'months') return length * 30;
    if (durationUnit === 'years') return length * 365;
    return length;
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setShowReward(true);
    setTimeout(() => {
      setShowReward(false);
      if (step < 3) {
        setStep(step + 1);
      } else {
        const totalDays = calculateDays();
        // Save data here, such as totalDays, engagementLevel, and goals
        router.push('/dashboard');  // Redirect after onboarding
      }
    }, 2500); // 2.5 second delay to display reward
  };

  
  const rewardMessage = () => {
    switch (step) {
      case 1:
        return "🎉 Congrats on unlocking the Sobriety Milestones!";
      case 2:
        return "🚀 Great! You’ve unlocked Personalized Journey Tracking!";
      case 3:
        return "👏 You’re all set! Welcome to Sober Social!";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-yellow-400">Welcome to SoberSocial!</h1>
        <p className="text-lg text-gray-300">Let’s personalize your sober journey for better tracking.</p>

        {/* Progress Bar */}
        <div className="relative pt-1">
          <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-yellow-200">
            <div
              style={{ width: `${(step / 3) * 100}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
            ></div>
          </div>
          <p className="text-sm text-gray-400">{step}/3 Steps Completed</p>
        </div>

        {/* Show reward message */}
        {showReward && (
          <div className="bg-yellow-500 text-gray-900 p-4 rounded-lg text-center shadow-lg mb-6">
            {rewardMessage()}
          </div>
        )}

        {/* Step 1: Sobriety Duration */}
        {step === 1 && (
          <div>
            <h2 className="text-3xl font-bold">How long have you been sober?</h2>
            <form onSubmit={handleNextStep}>
              <label className="block text-sm font-medium text-gray-200 mb-2">Enter your sobriety duration:</label>
              <div className="flex space-x-4">
                <input
                  type="number"
                  value={sobrietyLength}
                  onChange={(e) => setSobrietyLength(e.target.value)}
                  className="w-full p-4 bg-gray-700 rounded-lg text-gray-200"
                  placeholder="Enter duration"
                  required
                />
                <select
                  value={durationUnit}
                  onChange={(e) => setDurationUnit(e.target.value)}
                  className="w-full p-4 bg-gray-700 rounded-lg text-gray-200"
                >
                  <option value="days">Days</option>
                  <option value="weeks">Weeks</option>
                  <option value="months">Months</option>
                  <option value="years">Years</option>
                </select>
              </div>
              <button className="mt-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition-all" type="submit">
                Continue
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Tracking Preferences */}
        {step === 2 && (
          <div>
            <h2 className="text-3xl font-bold">How would you like to track your journey?</h2>
            <form onSubmit={handleNextStep}>
              <label className="block text-sm font-medium text-gray-200 mb-2">Choose your preferred tracking frequency:</label>
              <div className="space-y-4">
                <div>
                  <input
                    type="radio"
                    id="daily"
                    value="daily"
                    checked={trackingFrequency === 'daily'}
                    onChange={() => setTrackingFrequency('daily')}
                    className="mr-2"
                  />
                  <label htmlFor="daily" className="text-gray-200">Daily</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="weekly"
                    value="weekly"
                    checked={trackingFrequency === 'weekly'}
                    onChange={() => setTrackingFrequency('weekly')}
                    className="mr-2"
                  />
                  <label htmlFor="weekly" className="text-gray-200">Weekly</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="monthly"
                    value="monthly"
                    checked={trackingFrequency === 'monthly'}
                    onChange={() => setTrackingFrequency('monthly')}
                    className="mr-2"
                  />
                  <label htmlFor="monthly" className="text-gray-200">Monthly</label>
                </div>
              </div>
              <button className="mt-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition-all" type="submit">
                Continue
              </button>
            </form>
          </div>
        )}

        {/* Step 3: Community Engagement and Goal Setting */}
        {step === 3 && (
          <div>
            <h2 className="text-3xl font-bold">Set Your Sobriety Goals</h2>
            <form onSubmit={handleNextStep}>
              <label className="block text-sm font-medium text-gray-200 mb-2">How would you like to engage with the community?</label>
              <div className="space-y-4">
                <div>
                  <input
                    type="radio"
                    id="engageMore"
                    value="EngageMore"
                    checked={engagementLevel === 'EngageMore'}
                    onChange={() => setEngagementLevel('EngageMore')}
                    className="mr-2"
                  />
                  <label htmlFor="engageMore" className="text-gray-200">Join discussions, post updates</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="engageLess"
                    value="EngageLess"
                    checked={engagementLevel === 'EngageLess'}
                    onChange={() => setEngagementLevel('EngageLess')}
                    className="mr-2"
                  />
                  <label htmlFor="engageLess" className="text-gray-200">Mostly track privately</label>
                </div>
              </div>
              <label className="block text-sm font-medium text-gray-200 mt-6 mb-2">Set a goal to achieve in your sober journey:</label>
              <input
                type="text"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                className="w-full p-4 bg-gray-700 rounded-lg text-gray-200"
                placeholder="e.g., 'Stay sober for 6 months'"
                required
              />
              <button className="mt-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition-all" type="submit">
                Finish Onboarding
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
