import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa"; // Plus icon for adding image

const CreatePage: React.FC = () => {
  // State to hold the image file and preview URL
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>('');

  // Handle image upload and generate preview
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission (simulating post submission)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (image && caption) {
      alert("Post submitted successfully!");
      // Reset the form
      setImage(null);
      setImagePreview(null);
      setCaption('');
    } else {
      alert("Please upload an image and add a caption.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 lg:p-12">
      <div className="container mx-auto space-y-8">
        
        {/* Page Header */}
        <h2 className="text-4xl font-bold mb-6 text-center">Create a New Post</h2>

        {/* Post Form */}
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
          
          {/* Image Upload */}
          <div className="upload-section">
            <label className="block text-lg font-semibold mb-2">Upload an Image</label>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
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
                  <span className="text-gray-400">Click to upload an image</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
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
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300 transform hover:scale-105 w-full text-center">
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
