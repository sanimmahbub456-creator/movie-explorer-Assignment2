export default function MovieCard({ show, onSeeDetails }) {
  const rating = show.rating?.average ?? "N/A";
  const year = show.premiered ? show.premiered.slice(0, 4) : "N/A";
  const poster = show.image?.medium;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
      
      {/* Poster */}
      {poster ? (
        <img
          src={poster}
          alt={show.name}
          className="w-full h-64 object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-1">{show.name}</h3>

        <p className="text-sm text-gray-600 mb-3">
          ⭐ {rating} • 📅 {year}
        </p>

        <button
          onClick={() => onSeeDetails(show)}
          className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
