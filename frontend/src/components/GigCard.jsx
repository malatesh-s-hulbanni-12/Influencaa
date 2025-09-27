export default function GigCard({ gig }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden hover:scale-105 transition duration-500">
      {gig.image && (
        <img
          src={gig.image}
          alt={gig.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {gig.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{gig.category}</p>
        <p className="text-gray-800 font-medium">
          ${gig.price} &bull; {gig.deliveryTime} days
        </p>
      </div>
    </div>
  );
}
