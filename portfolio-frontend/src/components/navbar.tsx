import React, { useState, useRef, useEffect } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { to: "/", label: "Home" },
    { to: "/About", label: "About" },
    { to: "/Projects", label: "Projects" },
    { to: "/Contact", label: "Contact" },
    { to: "/Resume", label: "Resume" },
    { to: "/Follow", label: "Follow" },
  ];

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between h-16">
        {/* Logo / Brand can go here if needed */}
        <div className="text-white font-bold text-xl"> </div>

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

        {/* Mobile Hamburger */}
        <div className="md:hidden" ref={menuRef}>
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-600 rounded-md shadow-lg py-2 flex flex-col gap-1">
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
