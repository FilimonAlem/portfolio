import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({
  to,
  label,
  active,
  onClick,
}: {
  to: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const links = [
    { to: "/", label: "Home" },
    { to: "/About", label: "About" },
    { to: "/Projects", label: "Projects" },
    { to: "/Contact", label: "Contact" },
    { to: "/Resume", label: "Resume" },
    { to: "/Follow", label: "Follow" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between h-16">
        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex md:items-center md:gap-6">
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-600 px-4 py-2 flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              label={link.label}
              active={location.pathname === link.to}
              onClick={() => setMobileOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
