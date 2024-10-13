import { useEffect } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler } from 'chart.js';
import Link from 'next/link';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler);


const MoodTracker = () => {
  useEffect(() => {
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend);

    const ctx = document.getElementById('moodChart') as HTMLCanvasElement;
    const moodChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Mood Progress',
          data: [3, 4, 2, 5, 4, 3, 4], 
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: true,
        }],
      },
      options: {
        responsive: true,
        animation: {
          duration: 1000,
          easing: 'easeInOutQuad',
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 5,
            grid: {
              color: 'rgba(255, 255, 255, 0.2)',
            },
            ticks: {
              color: '#fff',
            },
          },
          x: {
            ticks: {
              color: '#fff',
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: '#fff',
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
        <h3 className="text-2xl font-bold text-gray-200 mb-4">Your Mood Progress</h3>
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
