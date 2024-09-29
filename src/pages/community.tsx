import React, { useState } from 'react';
import { FaHeart, FaComment } from "react-icons/fa"; // Icons for interaction buttons

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
  ];

  const [postList, setPostList] = useState<Post[]>(initialPosts);

  const handleLike = (id: number) => {
    setPostList(
      postList.map((post) =>
        post.id === id
          ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12 pb-20">
      <div className="container mx-auto space-y-12">

        {/* Page Header */}
        <h2 className="text-4xl font-bold mb-6">Community</h2>

        {/* Filters & Search */}
        <div className="filter-section flex justify-between mb-6 space-y-4 sm:space-y-0">
          <input type="text" placeholder="Search posts..." className="p-2 rounded-lg w-full md:w-1/3 bg-gray-700 text-white placeholder-gray-400"/>
          <div className="filter-options flex space-x-4">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition">Most Recent</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition">Most Liked</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition">Milestones</button>
          </div>
        </div>

        {/* Trending Section */}
        <div className="trending-section mb-8">
          <h3 className="text-3xl font-semibold mb-4">Trending Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postList.filter((post) => post.likes > 50).map((post) => (
              <div key={post.id} className="post-card bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
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
          <h3 className="text-3xl font-semibold mb-4">Top Community Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postList.map((post) => (
              <div key={post.id} className="post-card bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
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

        {/* Infinite Scroll or Load More Button */}
        <div className="text-center">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300">Load More Posts</button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
