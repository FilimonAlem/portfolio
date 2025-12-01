// pages/home.tsx
import React from "react";

const HomePage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-800 text-white">
      {/* Hero Section */}
      <div className="max-w-3xl px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          I’m Fili, a passionate web developer building modern, responsive, and
          interactive websites.
        </p>
        <a
          href="/projects"
          className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded text-white font-semibold"
        >
          View My Projects
        </a>
      </div>

      {/* Optional Additional Sections */}
      <div className="mt-16 max-w-4xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-700 p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">About Me</h3>
          <p className="text-gray-300">
            Learn more about my journey, skills, and experience as a developer.
          </p>
        </div>
        <div className="bg-gray-700 p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Projects</h3>
          <p className="text-gray-300">
            Check out the projects I’ve built using React, Tailwind, and modern
            web technologies.
          </p>
        </div>
        <div className="bg-gray-700 p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p className="text-gray-300">
            Get in touch with me for collaborations, freelance work, or just to
            say hi!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
