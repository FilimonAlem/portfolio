import React from "react";
import { Link, useLocation } from "react-router-dom";

const AboutSection: React.FC = () => {
  const location = useLocation();

  return (
    <section
      id="about-me"
      className="bg-blue-300 scroll-mt-24 py-16 text-center"
    >
      <h3 className="font-heading text-4xl font-bold mb-10 border-b-2 border-black pb-3">
        About Me
      </h3>

      <div className="text-lg px-6 max-w-4xl mx-auto space-y-7 leading-relaxed">
        <p>
          I am a dedicated software engineering student at Mekelle University
          with a strong commitment to building the technical and analytical
          expertise needed to excel in today’s evolving digital landscape. My
          academic journey is grounded in curiosity, discipline, and a desire to
          contribute meaningfully to impactful technological solutions.
        </p>

        <p>
          I focus on developing clean, efficient, and user-centered
          applications. Beyond coursework, I continuously explore new
          frameworks, tools, and methodologies to expand my skill set. I enjoy
          turning ideas into reliable solutions and approaching challenges with
          purpose and creativity.
        </p>

        <p>
          As I continue progressing in my field, I aim to contribute to projects
          that require thoughtful design, logical problem-solving, and a strong
          technical foundation. I’m motivated to grow professionally,
          collaborate with others, and stay engaged in the fast-moving world of
          software development.
        </p>
      </div>

      <div className="mt-14 px-6">
        <h4 className="font-heading text-2xl font-semibold mb-4 text-blue-800">
          Core Strengths
        </h4>

        <ul className="flex flex-wrap justify-center gap-4 text-base">
          {/* Front-End */}
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            React.js
          </li>
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            Vite
          </li>
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            TypeScript
          </li>
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            Tailwind CSS
          </li>
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            HTML
          </li>
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            CSS
          </li>
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            JavaScript
          </li>

          {/* Back-End */}
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            Node.js
          </li>
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            Express.js
          </li>
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            MongoDB
          </li>
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            PHP
          </li>

          {/* Mobile Development */}
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            Android Development
          </li>

          {/* Programming Languages */}
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            Java
          </li>
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            C++
          </li>
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            Python
          </li>

          {/* Additional Skills */}
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            JavaFX
          </li>
          <li className="bg-white px-4 py-2 rounded-lg shadow text-blue-300">
            Data Structures & Algorithms
          </li>
        </ul>
      </div>

      <div className="mt-14">
        <Link
          to="/projects"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Explore My Projects
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
