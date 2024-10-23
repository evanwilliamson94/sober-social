import React, { useState, useEffect, useCallback } from 'react';
import { FaHome, FaHeart, FaComment, FaClipboardList, FaPlus, FaUsers, FaUser } from "react-icons/fa";
import BottomNavbar from '@/components/BottomNavbar';
import Image from 'next/image'; // Import Image from next/image

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

  // Simulate fetching more posts
  const fetchMorePosts = useCallback(() => {
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
      ];
      setPostList((prevPosts) => [...prevPosts, ...newPosts]);
      setLoading(false);
    }, 1500);
  }, [loading]);

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
  }, [loading, fetchMorePosts]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12 pb-20 page-content">
      <div className="container mx-auto space-y-12">

        {/* Page Header */}
        <h2 className="text-5xl font-bold mb-10 text-center lg:text-left transition-transform duration-300 transform hover:scale-105">
          Sober Social
        </h2>

        {/* Top Community Posts */}
        <div className="featured-posts mb-6">
          <h3 className="text-3xl font-semibold mb-6">Community Posts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {postList.map((post) => (
              <div key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <div className="flex items-center mb-4 space-x-3">
                  <a href={`/profile/${post.username}`} className="flex items-center">
                    <Image
                      src={post.avatar}
                      alt="avatar"
                      width={48}
                      height={48}
                      className="rounded-full object-cover shadow-lg"
                    />
                    <span className="font-bold text-lg text-white hover:underline ml-3">{post.username}</span>
                  </a>
                </div>
                <Image
                  src={post.image}
                  alt="post"
                  width={500}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
                />
                <p className="text-gray-300 mb-4">{post.caption}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <button
                    className={`flex items-center space-x-1 ${post.isLiked ? 'text-red-500 animate-pulse' : 'hover:text-yellow-400'}`}
                    onClick={() => handleLike(post.id)}
                  >
                    <FaHeart className="mr-1" /> {post.likes}
                  </button>
                  <button className="flex items-center space-x-1 hover:text-yellow-400">
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
        <BottomNavbar /> {/* Reusable Bottom Navbar */}
      </div>
    </div>
  );
};

export default CommunityPage;
