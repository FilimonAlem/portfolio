import React from "react";
import Projects from "./pages/projects";
import "./App.css";
import Profile_Photo from "./assets/Filimon-Alem.jpg";

function App() {
  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <nav className="fixed z-[50] w-full bg-gray-500 font-heading flex items-center justify-end py-4 shadow-md">
        <div className="pr-10 flex gap-6">
          <NavLink href="#about-me" label="About Me" />
          <NavLink href="#my-projects" label="My Projects" />
          <NavLink href="#contact-me" label="Contact Me" />
          <NavLink href="#follow-me" label="Follow Me" />
        </div>
      </nav>

      {/* Header Section */}
      <HeaderSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <section id="my-projects" className="scroll-mt-24">
        <Projects />
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="text-center my-16">
        <label className="font-bold text-4xl font-heading text-blue-700">
          Thank You!
        </label>
      </footer>
    </div>
  );
}

export default App;

//
// Reusable Components
//

const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="text-lg md:text-xl lg:text-2xl hover:text-blue-200 transition"
  >
    {label}
  </a>
);

const HeaderSection = () => (
  <div className="mt-20 mb-10 px-6 py-10 bg-gray-300 flex justify-between items-center">
    <header>
      <h1 className="text-5xl font-semibold">Filimon Alem</h1>
      <h2 className="text-3xl text-green-700">Software Engineer</h2>
    </header>

    <div className="w-40 h-40 bg-gray-400 rounded-xl shadow-2xl border-2 border-blue-300 overflow-hidden">
      <img
        src={Profile_Photo}
        alt="My profile picture."
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const AboutSection = () => (
  <section id="about-me" className="bg-blue-300 scroll-mt-24 py-10 text-center">
    <h3 className="font-heading text-3xl font-semibold mb-6 border-b-2 border-black pb-2">
      About Me
    </h3>
    <p className="text-lg px-6 max-w-4xl mx-auto">
      I am a passionate software engineering student persuing my degree at
      Mekelle University. I have a strong interest in learning, problem-solving,
      and developing practical skills. I enjoy taking on projects that push my
      thinking and help me deepen my understanding of the world.
    </p>
  </section>
);

const ContactSection = () => (
  <section
    id="contact-me"
    className="my-16 px-6 py-6 scroll-mt-24 bg-white rounded-lg shadow-md border border-blue-200 max-w-3xl mx-auto text-center"
  >
    <h3 className="text-3xl font-semibold mb-6 text-blue-900 border-b-2 border-blue-300 pb-2">
      Contact Me
    </h3>

    <div className="flex flex-col gap-3 text-lg">
      <a
        href="mailto:filimonalem1@gmail.com"
        className="text-blue-600 hover:underline"
      >
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/filimon-alem-b321952b3"
        className="text-blue-600 hover:underline"
      >
        LinkedIn
      </a>
      <a
        href="https://www.github.com/FilimonAlem"
        className="text-blue-600 hover:underline"
      >
        GitHub
      </a>
    </div>
  </section>
);
