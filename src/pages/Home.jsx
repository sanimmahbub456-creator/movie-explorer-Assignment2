import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover{" "}
            <span className="text-blue-600">
              Movies
            </span>
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Explore and discover your favorite movies from around the world.
            Browse thousands of shows, find ratings, and view detailed summaries.
          </p>

          <Link
            to="/movies"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Explore Now
          </Link>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
