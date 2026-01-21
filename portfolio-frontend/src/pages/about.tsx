import React from "react";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about-me"
      className="bg-gradient-to-b from-blue-50 to-blue-100 scroll-mt-24 py-20 sm:py-32 px-4 sm:px-8"
    >
      {/* Section Heading */}
      <h3 className="font-heading text-4xl sm:text-5xl font-bold mb-12 text-center border-b-4 border-blue-700 pb-4 inline-block">
        About Me
      </h3>

      {/* Description */}
      <div className="max-w-4xl mx-auto space-y-8 text-gray-800 text-base sm:text-lg leading-relaxed">
        <p>
          I am a dedicated software engineering student at Mekelle University
          with a strong commitment to building technical and analytical
          expertise to excel in today’s digital landscape. My journey is guided
          by curiosity, discipline, and a desire to contribute meaningfully to
          impactful technological solutions.
        </p>
        <p>
          I focus on developing clean, efficient, and user-centered
          applications. Beyond coursework, I explore new frameworks, tools, and
          methodologies to continuously expand my skill set. I enjoy turning
          ideas into reliable solutions and approaching challenges with
          creativity.
        </p>
        <p>
          I aim to contribute to projects that require thoughtful design,
          logical problem-solving, and a strong technical foundation. I’m
          motivated to grow professionally, collaborate with others, and stay
          engaged in the fast-moving world of software development.
        </p>
      </div>

      {/* Core Strengths */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h4 className="font-heading text-2xl sm:text-3xl font-semibold mb-6 text-blue-900 text-center">
          Core Strengths
        </h4>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
          {[
            "React.js",
            "Vite",
            "TypeScript",
            "Tailwind CSS",
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "PHP",
            "Android Development",
            "Java",
            "C++",
            "Python",
            "JavaFX",
            "Data Structures & Algorithms",
          ].map((skill) => (
            <li
              key={skill}
              className="bg-white px-4 py-2 rounded-xl shadow-lg text-blue-700 font-medium text-center hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Call-to-action */}
      <div className="mt-16 text-center">
        <Link
          to="/projects"
          className="inline-block bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-800 transition-colors duration-300 font-semibold"
        >
          Explore My Projects
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
