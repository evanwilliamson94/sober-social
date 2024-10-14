import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import BottomNavbar from '@/components/BottomNavbar';

const CreatePage: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle image upload (drag-and-drop or click)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      simulateProgress();
    }
  };

  // Simulate progress for image upload
  const simulateProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (image && caption) {
      setIsSubmitted(true);
      setTimeout(() => {
        // Reset form after success
        setImage(null);
        setImagePreview(null);
        setCaption('');
        setProgress(0);
        setIsSubmitted(false);
      }, 2000);
    } else {
      alert("Please upload an image and add a caption.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12 pb-28">
      {/* Added padding-bottom (pb-28) to prevent overlap */}
      <div className="container mx-auto space-y-8">
  
        {/* Page Header */}
        <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Create a New Post
        </h2>

        {/* Post Form */}
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
          
          {/* Image Upload */}
          <div className="upload-section">
            <label className="block text-lg font-semibold mb-2">Upload an Image</label>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:border-yellow-500">
              {imagePreview ? (
                <div className="relative">
                  <img src={imagePreview} alt="Preview" className="w-full h-64 object-cover rounded-lg" />
                  <button 
                    className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full hover:bg-red-500 transition duration-300"
                    onClick={() => {
                      setImage(null);
                      setImagePreview(null);
                    }}>
                    Remove
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer">
                  <FaPlus size={48} className="mx-auto mb-4 text-gray-400" />
                  <span className="text-gray-400">Click or drag to upload an image</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
            
            {/* Progress Bar (if image is uploading) */}
            {image && progress > 0 && (
              <div className="mt-4">
                <div className="progress-bar bg-gray-700 rounded-full overflow-hidden h-2">
                  <div
                    className="bg-yellow-500 h-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">{progress}% Uploaded</p>
              </div>
            )}
          </div>

          {/* Caption Input */}
          <div className="caption-section">
            <label className="block text-lg font-semibold mb-2">Add a Caption</label>
            <textarea
              className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-gray-600 transition duration-300"
              placeholder="Write something inspiring..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              rows={4}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105 w-full text-center">
            Submit Post
          </button>
        </form>

        {/* Success Modal */}
        {isSubmitted && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-gray-900 p-8 rounded-lg text-center shadow-lg">
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">🎉 Post Submitted!</h3>
              <p className="text-gray-300">Your post has been successfully submitted.</p>
            </div>
          </div>
        )}

      </div>
      {/* Sticky Bottom Navigation */}
      <BottomNavbar /> {/* Reusable Bottom Navbar */}
    </div>
  );
};

export default CreatePage;
