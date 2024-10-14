import { useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, LinearScale, CategoryScale, Title } from 'chart.js';
import Link from 'next/link';

const SleepTracker = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    Chart.register(BarController, BarElement, LinearScale, CategoryScale, Title);

    const sleepChart = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Sleep Quality (Hours)',
          data: [7, 6, 5, 8, 7, 6, 7],
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Sleep Tracker (Hours)',
            color: '#fff',
            font: {
              size: 16,
            },
          },
        },
      },
    });

    return () => {
      sleepChart.destroy();
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-400 to-blue-500 p-8 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500 space-y-6">
      <h2 className="text-4xl font-extrabold text-white animate-fadeIn">Sleep Tracker</h2>
      <p className="text-base text-gray-300">How was your sleep last night?</p>

      <div className="flex justify-around space-x-4">
        <button className="bg-indigo-600 p-4 rounded-full hover:bg-indigo-500 transition-all transform hover:scale-110 shadow-lg hover:shadow-2xl">
          😴 Great
        </button>
        <button className="bg-indigo-600 p-4 rounded-full hover:bg-indigo-500 transition-all transform hover:scale-110 shadow-lg hover:shadow-2xl">
          😐 Average
        </button>
        <button className="bg-indigo-600 p-4 rounded-full hover:bg-indigo-500 transition-all transform hover:scale-110 shadow-lg hover:shadow-2xl">
          😔 Poor
        </button>
      </div>

      {/* Sleep Progress Chart */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-200 mb-4">Your Sleep Progress</h3>
        <canvas ref={chartRef} className="w-full h-64 rounded-lg bg-white"></canvas>
      </div>

      {/* Back to Tracker Button */}
      <div className="mt-8 text-center">
        <Link href="/tracker">
          <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-110">
            Back to Tracker
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SleepTracker;
