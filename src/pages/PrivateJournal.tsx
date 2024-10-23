import { useState } from "react";
import BottomNavbar from '@/components/BottomNavbar';
import { useUser } from '@clerk/nextjs'; // Import useUser for Clerk data

const PrivateJournalPage = () => {
  const { user } = useUser(); // Access Clerk user data
  const firstName = user?.firstName || "User"; // Fallback if no name is available

  const [entries, setEntries] = useState([
    { id: 1, text: "Today I felt empowered to overcome a challenge.", date: "2024-10-02" },
    { id: 2, text: "Meditation helped me stay calm today.", date: "2024-10-01" },
  ]);
  const [newEntry, setNewEntry] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntry.trim()) {
      const newJournalEntry = {
        id: entries.length + 1,
        text: newEntry,
        date: new Date().toISOString().split("T")[0],
      };
      setEntries([newJournalEntry, ...entries]);
      setNewEntry("");
      setIsSubmitted(true);

      setTimeout(() => setIsSubmitted(false), 2000); // Clear success message after 2 seconds
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12 pb-24">
      <div className="container mx-auto space-y-12">

        {/* Page Header */}
        <h2 className="text-5xl font-bold mb-10 text-center bg-gradient-to-r from-yellow-400 to-teal-500 bg-clip-text text-transparent">
  {firstName}&apos;s Private Journal {/* Displaying user's first name */}
</h2>


        {/* New Journal Entry Form */}
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
          <textarea
            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-500 focus:bg-gray-600 transition duration-300"
            placeholder={`Write your private thoughts here, ${firstName}...`} // Personalized placeholder
            rows={4}
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 w-full text-center"
          >
            Log Journal Entry
          </button>
        </form>

        {/* Success Modal */}
        {isSubmitted && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-gray-900 p-8 rounded-lg text-center shadow-lg">
              <h3 className="text-3xl font-bold text-teal-400 mb-4">🎉 Entry Logged, {firstName}!</h3> {/* Personalized success message */}
              <p className="text-gray-300">Your private journal entry has been successfully saved.</p>
            </div>
          </div>
        )}

        {/* Journal Entries Feed */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold mb-6">Your Entries</h3>
          {entries.map((entry) => (
            <div key={entry.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <p className="text-gray-300 mb-2">{entry.text}</p>
              <p className="text-sm text-gray-500">{entry.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
};

export default PrivateJournalPage;
