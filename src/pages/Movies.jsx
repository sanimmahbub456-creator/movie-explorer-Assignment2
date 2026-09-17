import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

export default function Movies() {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all shows on first load
  useEffect(() => {
    async function fetchShows() {
      setLoading(true);

      const res = await fetch("https://api.tvmaze.com/shows");
      const data = await res.json();

      setShows(data);
      setLoading(false);
    }

    fetchShows();
  }, []);

  // Search handler
  async function handleSearch(e) {
    e.preventDefault();

    if (!query.trim()) return;

    setLoading(true);

    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
    );

    const data = await res.json();

    setShows(data.map((item) => item.show));
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 px-6 py-8 max-w-6xl mx-auto">
        {/* Search bar */}
        <form onSubmit={handleSearch} className="mb-6 flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
            className="flex-1 border rounded-lg px-4 py-2"
          />

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </form>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-600 mb-6">
            Loading...
          </p>
        )}

        {/* Movie grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shows.map((show) => (
            <MovieCard
              key={show.id}
              show={show}
              onSeeDetails={setSelectedShow}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedShow && (
          <MovieModal
            show={selectedShow}
            onClose={() => setSelectedShow(null)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}