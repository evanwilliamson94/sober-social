import React, { useState } from 'react';
import axios from 'axios'; // For making API calls
import { FaRobot } from 'react-icons/fa'; // Icon for AI coach

const SoberCoachPage: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    setError(false); // Clear error on new input
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAiResponse(''); // Clear any previous response

    try {
      const response = await axios.post('/api/ask-coach', {
        prompt: userInput,
      });

      setAiResponse(response.data.reply);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setError(true);
      setAiResponse('Sorry, something went wrong. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12">
      <div className="container mx-auto space-y-8">

        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center mb-10">Your AI Sober Coach</h1>

        {/* AI Coach Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
          <div className="flex items-center space-x-4">
            <FaRobot className="text-yellow-400 w-12 h-12" />
            <h2 className="text-3xl font-semibold">Ask Your Sober Coach</h2>
          </div>
          <p className="text-gray-300">Feeling stuck or need guidance? Ask your AI coach anything related to your sobriety journey.</p>
          
          {/* Input Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 transition duration-300"
              placeholder="Ask your sober coach anything..."
              required
            />
            <button
              type="submit"
              className={`w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded-lg shadow-lg transition-all transform ${loading ? 'cursor-wait' : 'hover:bg-yellow-300 hover:scale-105'}`}
              disabled={loading}
            >
              {loading ? 'Thinking...' : 'Get Advice'}
            </button>
          </form>

          {/* AI Response */}
          {loading && (
            <div className="bg-gray-700 p-4 rounded-lg text-gray-300 mt-4 animate-pulse">
              Your coach is processing your question...
            </div>
          )}

          {aiResponse && !error && (
            <div className="bg-gray-700 p-4 rounded-lg text-white mt-4">
              <p className="text-xl">{aiResponse}</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-500 p-4 rounded-lg text-white mt-4">
              <p>Oops! There was an error processing your request. Please try again later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SoberCoachPage;
