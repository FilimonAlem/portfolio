import React from "react";
import { Link, useLocation } from "react-router-dom";

// AboutSection component
const AboutSection: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <section
        id="about-me"
        className="bg-blue-300 scroll-mt-24 py-10 text-center"
      >
        <h3 className="font-heading text-3xl font-semibold mb-6 border-b-2 border-black pb-2">
          About Me
        </h3>

        <p className="text-lg px-6 max-w-4xl mx-auto">
          I am a passionate software engineering student pursuing my degree at
          Mekelle University. I have a strong interest in learning,
          problem-solving, and developing practical skills. I enjoy taking on
          projects that strengthen my thinking and help me grow through
          real-world challenges.
        </p>
      </section>
    </>
  );
};

export default AboutSection;
