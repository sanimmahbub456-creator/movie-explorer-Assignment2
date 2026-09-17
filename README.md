🎬 MovieExplorer — Assignment 2

A responsive Movie Explorer Application built with React and Vite. The application allows users to explore shows, search for titles, and view detailed information through an interactive modal.

🌐 Live Project
Live Demo:
https://classy-marigold-f263d5.netlify.app/
GitHub Repository:
https://github.com/sanimmahbub456-creator/movie-explorer-Assignment2

 Project Overview
MovieExplorer is a responsive web application developed for Foundation Program Assignment 2.

The project provides an easy way for users to discover shows, search by title, and view additional information about a selected show.

The application uses the TVMaze API to fetch show data dynamically.
 Features
 Home Page

The home page includes:

🎬 MovieExplorer brand/logo
🧭 Responsive navigation bar
🎥 Movie-related hero banner
📝 Application title and description
🔘 Explore Movies call-to-action button
📱 Responsive layout
📄 Footer with application name and copyright
🎬 Movie Listing Page

Users can browse available shows/movies through a responsive card layout.

Each card includes:

🖼️ Poster image
🎬 Show/movie title
📅 Release year/date
⭐ Rating
🔎 See Details button

The cards are displayed using a responsive grid layout.

🔍 Search Functionality

Users can search for a show/movie by title using the search bar.

The application uses the TVMaze search API:
GET https://api.tvmaze.com/search/shows?q=:query
Example:
https://api.tvmaze.com/search/shows?q=girls
🎞️ Details Modal
Clicking See Details opens an interactive modal containing:
Large poster/image
Show/movie title
⭐ Rating
📅 Release date
🎭 Genres
📝 Summary/overview
Additional information from the API
❌ Close button

📱 Responsive Design
The application is responsive across:
Mobile 📱
Tablet
Desktop 💻
The movie/show grid automatically adjusts according to screen size.

Technologies Used
JavaScript
React.js
Vite
Tailwind CSS
CSS
TVMaze API
React Router

🌐 API Integration
This project uses the free TVMaze API.
Get All Shows
GET https://api.tvmaze.com/shows
Search Shows
GET https://api.tvmaze.com/search/shows?q=:query
API Documentation
https://www.tvmaze.com/api

📂 Project Structure
movie-explorer-Assignment2/
│
├── public/
│   └── Theater.jpg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   └── MovieModal.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Movies.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md

The exact component names and folder structure may vary depending on the implementation.

🚀 Installation & Setup
1. Clone the repository
git clone https://github.com/sanimmahbub456-creator/movie-explorer-Assignment2.git
2. Go to the project directory
cd movie-explorer-Assignment2
3. Install dependencies
npm install
4. Start the development server
npm run dev

The application will run on the Vite development server.

5. Build the project
npm run build

The production files will be generated in:

dist/
☁️ Deployment

The application is deployed using Netlify.

Build Command
npm run build
Publish Directory
dist
Live URL

The main goal of this project is to create a user-friendly and responsive Movie Explorer application that demonstrates:
React component development
API integration
State management
Search functionality
Reusable components
Modal interaction
Responsive UI design
Deployment using Netlify

👨‍💻 Developer
Mahbubul Alam
Foundation Program — Assignment 2
MovieExplorer
© 2026 MovieExplorer. All rights reserved.
