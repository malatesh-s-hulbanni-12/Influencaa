import { useState } from "react";
import FormInput from "../../components/FormInput";

export default function CreateGig() {
  const [gigData, setGigData] = useState({
    title: "",
    description: "",
    category: "Social Media",
    price: "",
    deliveryTime: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setGigData({ ...gigData, image: file });

      // Preview the selected image
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      if (file) reader.readAsDataURL(file);
    } else {
      setGigData({ ...gigData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle gig creation with image upload using gigService.createGig(gigData)
    console.log("New Gig Data:", gigData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create a New Gig
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Gig Title"
            type="text"
            name="title"
            placeholder="Enter gig title"
            value={gigData.title}
            onChange={handleChange}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={gigData.description}
              onChange={handleChange}
              placeholder="Describe your gig in detail"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={4}
              required
            ></textarea>
          </div>

          {/* Category Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={gigData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="Social Media">Social Media</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Writing">Writing</option>
              <option value="Video Editing">Video Editing</option>
            </select>
          </div>

          <FormInput
            label="Price ($)"
            type="number"
            name="price"
            placeholder="Set your price"
            value={gigData.price}
            onChange={handleChange}
          />
          <FormInput
            label="Delivery Time (days)"
            type="number"
            name="deliveryTime"
            placeholder="Enter delivery time in days"
            value={gigData.deliveryTime}
            onChange={handleChange}
          />

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full text-gray-700"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Gig Preview"
                className="mt-4 w-full h-64 object-cover rounded-lg border"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Create Gig
          </button>
        </form>
      </div>
    </div>
  );
}
