import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="h-[420px] bg-cover bg-center bg-no-repeat flex flex-col justify-center text-center text-white px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524985069026-dd778a2f0f5b?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="bg-black/60 w-full h-full absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Discover Movies
        </h1>

        <p className="text-gray-200 max-w-xl mx-auto mb-8 drop-shadow-md">
          Explore thousands of movies, ratings, and summaries.  
          Dive into the world of cinema with one click.
        </p>

        <Link
          to="/movies"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
}