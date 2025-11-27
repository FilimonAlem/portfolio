import React from "react";
import Projects from "./pages/projects"; // dynamic Projects component
import "./App.css";

function App() {
  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <nav className="fixed z-[50] w-full h-[5vw] bg-gray-500 font-heading flex items-center justify-end">
        <div className="pr-[2vw] flex">
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
      <section id="my-projects" className="scroll-mt-[5vw]">
        <Projects />
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="text-center mb-[5vw]">
        <label className="font-bold text-4xl font-heading text-blue-700">
          Thank You!
        </label>
      </footer>
    </div>
  );
}

export default App;

//
// 💡 Reusable Components
//

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="mx-[1.5vw] text-base sm:text-1xl md:text-2xl lg:text-3xl hover:text-blue-200 transition"
  >
    {label}
  </a>
);

const HeaderSection = () => (
  <div className="mb-[1vw] pt-[5vw] bg-gray-300 flex justify-between items-center h-[40vh]">
    <header className="pl-[2vw]">
      <h1 className="text-4xl font-semibold">Filimon Alem</h1>
      <h2 className="text-2xl text-green-700">Software Engineer</h2>
    </header>
    <div className="w-[18vw] h-[20vw] bg-gray-400 rounded-xl shadow-2xl border-2 border-blue-300" />
  </div>
);

const AboutSection = () => (
  <section
    id="about-me"
    className="bg-blue-300 scroll-mt-[5vw] pb-[3vw] mb-[3vw] text-center"
  >
    <h3 className="font-heading text-3xl font-semibold mb-5 border-b-2 border-black pb-2 pt-5">
      About Me
    </h3>
    <p className="text-lg px-[2vw] mt-4">[About me text placeholder]</p>
  </section>
);

const ContactSection = () => (
  <section
    id="contact-me"
    className="mb-12 px-6 py-5 scroll-mt-[5vw] bg-white rounded-lg shadow-md border border-blue-200 w-[95vw] mx-auto"
  >
    <h3 className="text-3xl font-semibold mb-6 text-blue-900 border-b-2 border-blue-300 pb-2">
      Contact Me
    </h3>
    <a
      href="mailto:filimonalem1@gmail.com"
      className="text-blue-600 hover:undrline"
    >
      <p className="text-gray-800 mb-2">Email</p>
    </a>
    <a
      href="www.linkedin.com/in/filimon-alem-b321952b3"
      className="text-blue-600 hover:undrline"
    >
      <p className="text-gray-800 mb-2">LinkedIn</p>
    </a>
    <a
      className="text-blue-600 hover:undrline"
      href="www.github.com/FilimonAlem"
    >
      <p className="text-gray-800 mb-2">GitHub</p>
    </a>
  </section>
);
