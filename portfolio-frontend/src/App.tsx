import React, { useEffect, useState } from "react";
import Projects from "./pages/projects";
import "./App.css";
import Profile_Photo from "./assets/Filimon-Alem.jpg";

function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section, header");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <nav className="fixed z-[50] w-full bg-gray-500 font-heading flex items-center justify-end py-4 shadow-md">
        <div className="pr-10 flex gap-6">
          <NavLink href="#home" label="Home" active={active === "home"} />
          <NavLink
            href="#about-me"
            label="About"
            active={active === "about-me"}
          />
          <NavLink
            href="#my-projects"
            label="Projects"
            active={active === "my-projects"}
          />
          <NavLink
            href="#contact-me"
            label="Contact"
            active={active === "contact-me"}
          />
          <NavLink
            href="#follow-me"
            label="Follow"
            active={active === "follow-me"}
          />
        </div>
      </nav>

      {/* HOME SECTION */}
      <HeaderSection />

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* PROJECTS */}
      <section id="my-projects" className="scroll-mt-24">
        <Projects />
      </section>

      {/* CONTACT */}
      <ContactSection />

      {/* FOLLOW (simple placeholder) */}
      <section
        id="follow-me"
        className="my-20 text-center scroll-mt-24 py-10 bg-gray-100"
      >
        <h3 className="text-3xl font-semibold mb-5 text-blue-700">Follow Me</h3>
        <p className="text-lg">Social media links coming soon...</p>
      </section>

      <footer className="text-center my-16">
        <label className="font-bold text-4xl font-heading text-blue-700">
          Thank You!
        </label>
      </footer>
    </div>
  );
}

export default App;
