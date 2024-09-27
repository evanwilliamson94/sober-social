import Head from 'next/head';
import Image from 'next/image';
import { ChartBarIcon, UsersIcon, AcademicCapIcon } from '@heroicons/react/24/outline';  // v2 icons

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>SoberSocial | Transform Your Sobriety Journey</title>
        <meta name="description" content="Join a thriving community and track your sobriety journey with SoberSocial." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Interactive CTAs */}
      <section className="relative flex items-center justify-center h-screen text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Sober-Hike.png"  // Ensure this is the correct path
            alt="SoberSocial Community"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="opacity-70"
          />
        </div>

        {/* Slightly Reduced Overlay for Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-60"></div>

        {/* Centered Content with Subtle Text Enhancements */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            Join the <span className="text-yellow-400">SoberSocial</span> Community
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-lg">
            Track your sobriety, connect with others, and get personalized support.
          </p>
          <div className="space-y-4 md:flex md:space-y-0 md:space-x-4 justify-center">
            <a
              href="#"
              className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl"
              style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}
            >
              Start Your Journey Today
            </a>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all transform hover:scale-105 shadow-2xl"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition and Trust Elements */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why <span className="text-yellow-400">SoberSocial</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Empowering thousands of individuals on their sobriety journey. Join a community that understands and supports you.
          </p>

          {/* Cards for the value proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 - Track Your Sobriety */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="mb-4 flex justify-center items-center">
                <div className="bg-blue-100 p-4 rounded-full">
                  <ChartBarIcon className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-blue-600">Track Your Sobriety</h3>
              <p className="mt-4 text-gray-600">
                Monitor your sober days, milestones, and progress with intuitive trackers designed for success.
              </p>
            </div>

            {/* Card 2 - Community Support */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="mb-4 flex justify-center items-center">
                <div className="bg-blue-100 p-4 rounded-full">
                  <UsersIcon className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-blue-600">Community Support</h3>
              <p className="mt-4 text-gray-600">
                Engage with others on a similar journey. Get encouragement and accountability when you need it most.
              </p>
            </div>

            {/* Card 3 - Personalized Coaching */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="mb-4 flex justify-center items-center">
                <div className="bg-blue-100 p-4 rounded-full">
                  <AcademicCapIcon className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-blue-600">Personalized Coaching</h3>
              <p className="mt-4 text-gray-600">
                Access exclusive tools, coaching, and resources tailored to your specific needs and goals.
              </p>
            </div>
          </div>

          {/* Trust and Social Proof */}
          <div className="mt-16">
  <p className="text-gray-600 text-lg md:text-xl">
    Over <span className="text-yellow-400 font-semibold">95% of members</span> report feeling more supported and empowered in their sobriety journey with <span className="text-yellow-400 font-semibold">SoberSocial</span>.
  </p>
</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
        <p className="text-lg mb-8">
          Join SoberSocial today and take control of your sobriety in a supportive and motivating environment.
        </p>
        
        {/* Flexbox for Button Layout */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
          >
            Join Now
          </a>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all transform hover:scale-105 shadow-lg"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">&copy; 2024 SoberSocial. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
