import React, { useState, useEffect } from 'react';
import { FaHome, FaClipboardList, FaUsers, FaUser, FaPlus, FaHeart, FaComment } from "react-icons/fa";

interface Post {
  id: number;
  username: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

const CommunityPage: React.FC = () => {
  const initialPosts: Post[] = [
    {
      id: 1,
      username: "John Doe",
      avatar: "/path-to-avatar1.jpg",
      image: "/post-image1.jpg",
      caption: "Feeling great at 100 days sober!",
      likes: 120,
      comments: 15,
      isLiked: false,
    },
    {
      id: 2,
      username: "Jane Smith",
      avatar: "/path-to-avatar2.jpg",
      image: "/post-image2.jpg",
      caption: "Reached a new milestone today!",
      likes: 80,
      comments: 10,
      isLiked: false,
    },
    // Add more initial posts here if needed
  ];

  const [postList, setPostList] = useState<Post[]>(initialPosts);
  const [loading, setLoading] = useState(false);

  // Handle like button click
  const handleLike = (id: number) => {
    setPostList(
      postList.map((post) =>
        post.id === id
          ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
          : post
      )
    );
  };

  // Simulate fetching more posts (you would replace this with an API call)
  const fetchMorePosts = () => {
    if (loading) return;
    
    setLoading(true);
    
    // Simulate fetching data
    setTimeout(() => {
      const newPosts = [
        {
          id: 3,
          username: "Alex Johnson",
          avatar: "/path-to-avatar3.jpg",
          image: "/post-image3.jpg",
          caption: "Proud of hitting the 6-month milestone!",
          likes: 150,
          comments: 25,
          isLiked: false,
        },
        // Add more new posts here if needed
      ];
      setPostList((prevPosts) => [...prevPosts, ...newPosts]);
      setLoading(false);
    }, 1500); // Simulate network delay
  };

  // Infinite scroll implementation
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      
      if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
        fetchMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12 pb-20 page-content">
      <div className="container mx-auto space-y-12">

        {/* Page Header */}
        <h2 className="text-5xl font-bold mb-10 text-center lg:text-left transition-transform duration-300 transform hover:scale-105">
          Sober Social
        </h2>

        {/* Filters & Search */}
        <div className="filter-section flex flex-col md:flex-row justify-between items-center mb-10">
          {/* Search Bar */}
          <input 
            type="text" 
            placeholder="Search posts..." 
            className="p-4 rounded-lg w-full md:w-1/3 bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-gray-600 transition duration-300 mb-4 md:mb-0"
          />

          {/* Filter Buttons */}
          <div className="filter-options flex space-x-4">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300 shadow-md focus:ring-2 focus:ring-yellow-300 transform hover:scale-105">
              Most Recent
            </button>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300 shadow-md focus:ring-2 focus:ring-yellow-300 transform hover:scale-105">
              Most Liked
            </button>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300 shadow-md focus:ring-2 focus:ring-yellow-300 transform hover:scale-105">
              Milestones
            </button>
          </div>
        </div>

        {/* Trending Section */}
        <div className="trending-section mb-8">
          <h3 className="text-3xl font-semibold mb-6">Trending Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postList.filter((post) => post.likes > 50).map((post) => (
              <div key={post.id} className="post-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <div className="post-header flex items-center mb-4">
                  <a href={`/profile/${post.username}`} className="flex items-center">
                    <img src={post.avatar} alt="avatar" className="avatar w-10 h-10 rounded-full mr-2"/>
                    <span className="username font-bold text-lg hover:underline">{post.username}</span>
                  </a>
                </div>
                <img src={post.image} alt="post" className="post-image w-full h-48 object-cover rounded-lg mb-4"/>
                <p className="post-caption text-gray-300">{post.caption}</p>
                <div className="post-actions mt-4 flex justify-between text-sm text-gray-400">
                  <button
                    className={`like-btn flex items-center ${post.isLiked ? 'text-red-500 animate-pulse' : 'hover:text-yellow-400'}`} 
                    onClick={() => handleLike(post.id)}
                  >
                    <FaHeart className="mr-1" /> {post.likes}
                  </button>
                  <button className="comment-btn flex items-center hover:text-yellow-400">
                    <FaComment className="mr-1" /> {post.comments}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Community Posts */}
        <div className="featured-posts mb-6">
          <h3 className="text-3xl font-semibold mb-6">Top Community Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postList.map((post) => (
              <div key={post.id} className="post-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <div className="post-header flex items-center mb-4">
                  <a href={`/profile/${post.username}`} className="flex items-center">
                    <img src={post.avatar} alt="avatar" className="avatar w-10 h-10 rounded-full mr-2"/>
                    <span className="username font-bold text-lg hover:underline">{post.username}</span>
                  </a>
                </div>
                <img src={post.image} alt="post" className="post-image w-full h-48 object-cover rounded-lg mb-4"/>
                <p className="post-caption text-gray-300">{post.caption}</p>
                <div className="post-actions mt-4 flex justify-between text-sm text-gray-400">
                  <button
                    className={`like-btn flex items-center ${post.isLiked ? 'text-red-500 animate-pulse' : 'hover:text-yellow-400'}`} 
                    onClick={() => handleLike(post.id)}
                  >
                    <FaHeart className="mr-1" /> {post.likes}
                  </button>
                  <button className="comment-btn flex items-center hover:text-yellow-400">
                    <FaComment className="mr-1" /> {post.comments}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Scroll Loader */}
        {loading && (
          <div className="text-center">
            <p className="text-yellow-500">Loading more posts...</p>
          </div>
        )}

        {/* Sticky Bottom Navigation */}
<nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-black text-white shadow-2xl rounded-t-3xl px-4 py-4 z-50 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-3xl">
  <div className="flex justify-between items-center max-w-lg mx-auto relative">
    
    {/* Home Icon */}
    <a href="/dashboard" className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out">
      <FaHome size={28} className="group-hover:text-yellow-400 transition duration-300 transform hover:scale-110" />
      <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">Home</span>
    </a>

    {/* Tracker Icon */}
    <a href="/tracker" className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out">
      <FaClipboardList size={28} className="group-hover:text-yellow-400 transition duration-300 transform hover:scale-110" />
      <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">Tracker</span>
    </a>

    {/* Central Action Button */}
    <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-16 h-16 bg-yellow-400 border-4 border-gray-900 rounded-full p-3 shadow-2xl flex items-center justify-center transform hover:scale-110 hover:shadow-3xl transition-all duration-300 ease-in-out">
      <a href="/create" className="text-gray-900">
        <FaPlus size={34} className="hover:animate-pulse" />
      </a>
    </div>

    {/* Community Icon */}
    <a href="/community" className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out">
      <FaUsers size={28} className="group-hover:text-yellow-400 transition duration-300 transform hover:scale-110" />
      <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">Community</span>
    </a>

    {/* Profile Icon */}
    <a href="/profile" className="text-center flex flex-col items-center group transition-all duration-300 ease-in-out">
      <FaUser size={28} className="group-hover:text-yellow-400 transition duration-300 transform hover:scale-110" />
      <span className="text-sm mt-1 group-hover:text-yellow-400 transition duration-300">Profile</span>
    </a>
  </div>
</nav>
      </div>
    </div>
    
  );
};

export default CommunityPage;
