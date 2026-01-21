import React from "react";
import Profile_Picture from "../assets/Filimon-Alem-2026.jpg";

const PortfolioHomepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-sm rounded-lg p-6 sm:p-8">
        <div className="mb-12 flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Text Section */}
          <div className="space-y-4 lg:w-2/3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-none tracking-tight">
              Hi there,
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-none tracking-tight">
              I'm Filimon Alem
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 leading-tight tracking-wide mt-4">
              Fullstack Software Engineer
            </h2>

            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900 leading-tight tracking-wide">
              Web, Mobile and Desktop
            </h3>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <img
              src={Profile_Picture}
              alt="Profile"
              className="w-36 h-44 sm:w-40 sm:h-52 md:w-48 md:h-60 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-800 text-base sm:text-lg md:text-lg leading-relaxed tracking-normal">
            I'm a software engineer passionate about building practical,
            user-focused applications across the web, mobile, and desktop. I
            enjoy turning ideas into reliable solutions, whether it's a
            responsive web app, an Android experience, or a full desktop
            application.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-8 px-2 sm:px-0">
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 gap-2 sm:gap-0">
          <div className="flex items-center gap-2">
            <span>•</span>
            <span>Portfolio</span>
            <span>•</span>
          </div>
          <div className="text-gray-300">
            <span className="font-mono">2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHomepage;
