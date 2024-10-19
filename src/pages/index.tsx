import Head from 'next/head';
import Image from 'next/image';
import { ChartBarIcon, UsersIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';  // Social media icons
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';

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
  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-2xl">
    Join the <span className="text-yellow-400">SoberSocial</span> Community
  </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8 drop-shadow-lg text-gray-200">
    Track your sobriety, connect with others, and get personalized support.
  </p>
          <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 justify-center">
  <SignUpButton>
    <button className="w-full md:w-auto px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl">
      Start Your Journey Today
    </button>
  </SignUpButton>

  <SignInButton>
    <button className="w-full md:w-auto px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all transform hover:scale-105 shadow-xl">
      Sign In
    </button>
  </SignInButton>
</div>

        </div>
      </section>

      {/* Partner Logos */}
      <section className="bg-white py-12 text-center">
        <h3 className="text-lg font-bold text-gray-700 mb-6">Trusted by</h3>
        <div className="flex justify-center space-x-8">
          <Image src="/Sober Tracker.png" alt="Media Outlet 1" width={150} height={60} />
          <Image src="/Sober Media.png" alt="Media Outlet 2" width={150} height={60} />
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
            <Link href="/tracker">
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer">
    <div className="mb-4 flex justify-center items-center">
      <div className="bg-blue-100 p-4 rounded-full hover:animate-bounce">
        <ChartBarIcon className="w-12 h-12 text-blue-600" />
      </div>
    </div>
    <h3 className="text-2xl font-semibold text-blue-600">Track Your Sobriety</h3>
    <p className="mt-4 text-gray-600">
      Monitor your sober days, milestones, and progress with intuitive trackers designed for success.
    </p>
  </div>
</Link>

            {/* Card 2 - Community Support */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="mb-4 flex justify-center items-center">
                <div className="bg-blue-100 p-4 rounded-full hover:animate-bounce">
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
                <div className="bg-blue-100 p-4 rounded-full hover:animate-bounce">
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
<section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 md:py-24 text-white text-center">
  <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-lg">
    Ready to Begin Your Journey?
  </h2>
  <p className="text-md md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200">
    Join SoberSocial today and take control of your sobriety in a supportive and motivating environment.
  </p>
 {/* Flexbox for Button Layout */}
<div className="flex flex-col md:flex-row justify-center items-center gap-4">
  <SignUpButton>
    <button className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl">
      Join Now
    </button>
  </SignUpButton>

  <SignInButton>
    <button className="inline-block px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all transform hover:scale-105 shadow-xl">
      Sign In
    </button>
  </SignInButton>

</div>
      </section>
      
    {/* Footer with Social Media Icons, Links, and Newsletter */}
    <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-white hover:text-yellow-400 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition">
              <FaLinkedinIn size={24} />
            </a>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul>
                <li><a href="#" className="hover:text-yellow-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Resources</h4>
              <ul>
                <li><a href="#" className="hover:text-yellow-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Community</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Support</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Help Center</a></li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-xl font-bold mb-4">Join Our Newsletter</h4>
              <p className="text-gray-400 mb-4">Stay updated on new features and community stories.</p>
              <form>
                <div className="flex flex-col md:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 mb-4 md:mb-0 md:mr-2 rounded-md focus:outline-none text-gray-800"
                  />
                  <button
                    type="submit"
                    className="bg-yellow-400 text-blue-900 font-bold px-4 py-3 rounded-md hover:bg-yellow-300 transition"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-gray-700 pt-8">
            <p className="text-sm">&copy; 2024 SoberSocial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
