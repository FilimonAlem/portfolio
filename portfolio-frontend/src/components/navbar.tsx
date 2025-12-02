import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({
  to,
  label,
  active,
}: {
  to: string;
  label: string;
  active: boolean;
}) => (
  <Link
    to={to}
    className={`block px-3 py-2 rounded-md text-base md:text-lg transition ${
      active
        ? "font-bold text-white underline"
        : "text-blue-200 hover:text-white"
    }`}
  >
    {label}
  </Link>
);

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { to: "/", label: "Home" },
    { to: "/About", label: "About" },
    { to: "/Projects", label: "Projects" },
    { to: "/Contact", label: "Contact" },
    { to: "/Resume", label: "Resume" },
    { to: "/Follow", label: "Follow" },
  ];

  return (
    <nav className="fixed top-0 z-[50] w-full bg-gray-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between h-16">
        {/* Logo or Brand */}
        <div className="text-white font-bold text-xl">Filimon Alem</div>

        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6`}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              label={link.label}
              active={location.pathname === link.to}
            />
          ))}
        </div>
      </div>

      {/* Mobile menu animation */}
      {isOpen && (
        <div className="md:hidden bg-gray-600 px-4 pb-4 flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              label={link.label}
              active={location.pathname === link.to}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
