import { useState } from "react";
import { FaHeart, FaUserPlus } from "react-icons/fa";
import BottomNavbar from '@/components/BottomNavbar';

const TestimonialPage = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [testimonials, setTestimonials] = useState([
    { id: 1, user: "User123", text: "Sobriety has given me a new perspective on life!", likes: 12 },
    { id: 2, user: "User456", text: "Every day is a blessing in this journey.", likes: 8 },
    { id: 3, user: "User789", text: "Feeling stronger each day. Keep going everyone!", likes: 20 },
  ]);
  const [newTestimonial, setNewTestimonial] = useState("");
  const [liked, setLiked] = useState<number[]>([]);

  const handleLike = (id: number) => {
    setLiked((prevLikes) =>
      prevLikes.includes(id) ? prevLikes.filter((postId) => postId !== id) : [...prevLikes, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTestimonial.trim()) {
      const newEntry = {
        id: testimonials.length + 1,
        user: "NewUser",
        text: newTestimonial,
        likes: 0,
      };
      setTestimonials([newEntry, ...testimonials]);
      setNewTestimonial(""); // Clear the input after submission
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12 pb-24">
      <div className="container mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-gray-400 text-base">
            A space to share and reflect on your sober journey.
          </p>
        </div>

        {/* Write a Testimonial */}
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-gray-600 transition duration-300"
            placeholder="Write your testimonial here..."
            rows={3}
            value={newTestimonial}
            onChange={(e) => setNewTestimonial(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-400 to-purple-500 text-white px-6 py-3 mt-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 w-full text-center"
          >
            Submit Your Story
          </button>
        </form>

        {/* Testimonials Feed */}
        <div className="space-y-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{testimonial.user}</h3>
                <button className="flex items-center space-x-2 text-sm text-teal-400 hover:text-teal-300 transition">
                  <FaUserPlus />
                  <span>Follow</span>
                </button>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <div className="flex justify-between items-center text-sm">
                <button
                  className={`flex items-center space-x-2 ${liked.includes(testimonial.id) ? "text-red-500" : "text-gray-400"}`}
                  onClick={() => handleLike(testimonial.id)}
                >
                  <FaHeart />
                  <span>{liked.includes(testimonial.id) ? testimonial.likes + 1 : testimonial.likes} Likes</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
};

export default TestimonialPage;
