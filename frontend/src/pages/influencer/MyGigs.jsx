import { useState, useEffect } from "react";
import Modal from "../../components/Modal";

export default function MyGigs() {
  const [gigs, setGigs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGig, setSelectedGig] = useState(null);

  // Placeholder: Fetch influencer's gigs
  useEffect(() => {
    const mockGigs = [
      {
        id: 1,
        title: "Social Media Promotion",
        category: "Social Media",
        price: 150,
        deliveryTime: 3,
        image: "https://via.placeholder.com/400x250",
      },
      {
        id: 2,
        title: "Logo Design",
        category: "Graphic Design",
        price: 100,
        deliveryTime: 5,
        image: "https://via.placeholder.com/400x250",
      },
    ];
    setGigs(mockGigs);
  }, []);

  const openDeleteModal = (gig) => {
    setSelectedGig(gig);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedGig) {
      // TODO: Call API to delete gig
      setGigs(gigs.filter((gig) => gig.id !== selectedGig.id));
      console.log("Deleted gig with id:", selectedGig.id);
      setSelectedGig(null);
      setIsModalOpen(false);
    }
  };

  const handleEdit = (id) => {
    // TODO: Redirect to edit page or open edit modal
    console.log("Edit gig with id:", id);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Gigs</h1>

      {gigs.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gigs.map((gig) => (
            <div
              key={gig.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden"
            >
              {gig.image && (
                <img
                  src={gig.image}
                  alt={gig.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {gig.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{gig.category}</p>
                <p className="text-gray-800 font-medium">
                  ${gig.price} &bull; {gig.deliveryTime} days
                </p>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(gig.id)}
                    className="flex-1 py-2 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => openDeleteModal(gig)}
                    className="flex-1 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center mt-8">
          You have not created any gigs yet.
        </p>
      )}

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm Delete"
      >
        <p>
          Are you sure you want to delete the gig{" "}
          <strong>{selectedGig?.title}</strong>?
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={confirmDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
}
