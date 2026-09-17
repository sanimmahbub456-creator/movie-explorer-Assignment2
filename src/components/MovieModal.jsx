export default function MovieModal({ show, onClose }) {
  const rating = show.rating?.average ?? "N/A";
  const date = show.premiered ?? "N/A";
  const backdrop = show.image?.original;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose} // close when clicking outside
    >
      <div
        className="bg-white max-w-2xl w-full rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <div className="flex justify-end p-3">
          <button
            onClick={onClose}
            className="text-gray-600 text-xl hover:text-black transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Backdrop image */}
        {backdrop && (
          <img
            src={backdrop}
            alt={show.name}
            className="w-full h-64 object-cover"
          />
        )}

        {/* Content */}
        <div className="p-5">
          <h2 className="text-2xl font-semibold mb-2">{show.name}</h2>

          <p className="text-sm text-gray-600 mb-4">
            ⭐ Rating: {rating} | 📅 Release: {date}
          </p>

          {/* Summary (HTML from API) */}
          <div
            className="text-gray-700 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: show.summary || "No summary available.",
            }}
          />

          {/* Close button bottom */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-900 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}