import React from "react";
import Profile_Picture from "../assets/Filimon-Alem.jpg";

const PortfolioHomepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-sm rounded-lg p-8">
        <div className="mb-12 flex">
          <div className="space-y-2 ">
            <h1 className="text-5xl font-light text-gray-900 leading-none tracking-tight">
              Hi there,
            </h1>
            <h1 className="text-5xl font-light text-gray-900 leading-none tracking-tight">
              I'm Filimon Alem
            </h1>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 leading-tight tracking-wide">
                Fullstack Software Engineer
              </h2>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight tracking-wide">
                Web, Mobile and Desktop
              </h3>
            </div>
          </div>
          <div>
            <img
              src={Profile_Picture}
              alt="Profile"
              className="w-[5cm] h-[6cm] rounded-full ml-20 object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl">
          <div className="text-gray-800 space-y-6">
            <p className="text-lg leading-relaxed tracking-normal">
              I'm a software engineer passionate about building practical,
              user-focused applications across the web, mobile, and desktop. I
              enjoy turning ideas into reliable solutions, whether it's a
              responsive web app, an Android experience, or a full desktop
              application.
            </p>
          </div>
        </div>
      </div>

      {/* 底部装饰 */}
      <div className="max-w-4xl mx-auto mt-8">
        <div className="flex items-center justify-between text-sm text-gray-400">
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
