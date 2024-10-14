import { useEffect } from 'react';
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';
import Link from 'next/link';

// Register necessary components for Pie Chart
Chart.register(PieController, ArcElement, Tooltip, Legend);

const MoodTracker = () => {
  useEffect(() => {
    const ctx = document.getElementById('moodChart') as HTMLCanvasElement;

    // Ensure any existing chart is destroyed
    if (Chart.getChart(ctx)) {
      Chart.getChart(ctx)?.destroy();
    }

    const moodChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['😊 Happy', '😐 Neutral', '😔 Sad'],
        datasets: [{
          label: 'Mood Distribution',
          data: [40, 30, 30],  // Example data
          backgroundColor: [
            'rgba(75, 192, 192, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(255, 99, 132, 0.7)',
          ],
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: '#fff',
            },
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `Mood: ${tooltipItem.raw}%`,
            },
          },
        },
      },
    });

    return () => {
      moodChart.destroy();
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 space-y-4">
      <h2 className="text-3xl font-bold">Mood Tracker</h2>
      <p className="text-sm text-gray-300">How are you feeling today?</p>
      <div className="flex justify-between space-x-4">
        {['😊', '😐', '😔'].map((emoji, idx) => (
          <button
            key={idx}
            className="bg-blue-600 w-16 h-16 rounded-full text-3xl hover:bg-blue-500 transition duration-300 hover:shadow-xl active:scale-95"
          >
            {emoji}
          </button>
        ))}
      </div>

      {/* Mood Progress Chart */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-200 mb-4">Your Mood Distribution</h3>
        <canvas id="moodChart" className="w-full h-64"></canvas>
      </div>

      {/* Back to Tracker Button */}
      <div className="mt-8 text-center">
        <Link href="/tracker">
          <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition-all transform hover:scale-105">
            Back to Tracker
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MoodTracker;
