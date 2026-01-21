import React from "react";
import Profile_Picture from "../assets/Filimon-Alem-2026.jpg";

const PortfolioHomepage: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-white to-blue-50 p-4 sm:p-8">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-xl rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="space-y-4 lg:w-2/3 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Hi there,
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            I'm Filimon Alem
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-blue-700 mt-4">
            Fullstack Software Engineer
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-2xl font-medium text-gray-600">
            Web, Mobile & Desktop
          </h3>
        </div>

        {/* Profile Image */}
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={Profile_Picture}
            alt="Filimon Alem"
            className="w-40 h-52 sm:w-48 sm:h-60 md:w-56 md:h-72 rounded-full object-cover shadow-2xl border-4 border-blue-100"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-2xl text-gray-800 text-base sm:text-lg leading-relaxed space-y-4">
        <p>
          I'm a software engineer passionate about building practical,
          user-focused applications across the web, mobile, and desktop.
        </p>
        <p>
          I enjoy turning ideas into reliable solutions, whether it's a
          responsive web app, an Android experience, or a full desktop
          application.
        </p>
        <p>
          My focus is on writing clean, efficient code while creating
          experiences that are intuitive and impactful for users.
        </p>
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto mt-16 px-2 sm:px-0 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
        <span>© 2025 Filimon Alem • Portfolio</span>
        <span className="font-mono mt-2 sm:mt-0">All rights reserved</span>
      </footer>
    </div>
  );
};

export default PortfolioHomepage;
