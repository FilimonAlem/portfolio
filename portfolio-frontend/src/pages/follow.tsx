import React from "react";
import { FaLinkedin, FaYoutube, FaGithub, FaTwitter } from "react-icons/fa";

const FollowMe: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl text-blue-300 font-bold mb-6">Follow Me</h2>
      <p className="text-gray-600 mb-8">
        Stay connected! Follow me on my social media channels for updates.
      </p>

      <div className="flex justify-center gap-6 text-3xl">
        <a
          href="https://www.linkedin.com/in/filimon-alem-b321952b3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition-colors"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.youtube.com/@FilimonAlem-wmd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-800 transition-colors"
        >
          <FaYoutube />
        </a>

        <a
          href="https://github.com/FilimonAlem"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition-colors"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default FollowMe;
