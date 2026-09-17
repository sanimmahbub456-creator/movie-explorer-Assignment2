export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center">
        
        {/* App Name */}
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          MovieExplorer
        </h2>

        {/* Copyright */}
        <p className="text-gray-600 text-sm">
          © 2026 MovieExplorer. All rights reserved.
        </p>

        {/* Optional Social Links */}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}