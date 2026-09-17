import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MovieExplorer
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/movies" className="hover:text-blue-600 transition-colors">
            Movies
          </Link>
        </div>

        {/* Right: CTA Button */}
        <Link
          to="/movies"
          className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
        >
          Browse Movies
        </Link>
      </div>
    </nav>
  );
}
