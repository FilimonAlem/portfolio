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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close dropdown when a link is clicked
  const handleLinkClick = () => setDropdownOpen(false);

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

        {/* Desktop / Mobile links */}
        <div
          className={`${
            mobileOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 w-full md:w-auto`}
        >
          <NavLink
            to="/"
            label="Home"
            active={location.pathname === "/"}
            onClick={() => {
              handleLinkClick();
              setMobileOpen(false);
            }}
          />
          <NavLink
            to="/About"
            label="About"
            active={location.pathname === "/About"}
            onClick={() => {
              handleLinkClick();
              setMobileOpen(false);
            }}
          />
          <NavLink
            to="/Projects"
            label="Projects"
            active={location.pathname === "/Projects"}
            onClick={() => {
              handleLinkClick();
              setMobileOpen(false);
            }}
          />

          {/* Dropdown menu on right */}
          <div className="relative ml-auto">
            <button
              onClick={toggleDropdown}
              className="px-3 py-2 text-blue-200 hover:text-white font-medium"
            >
              More ▼
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-600 rounded-md shadow-lg py-1">
                <NavLink
                  to="/Contact"
                  label="Contact"
                  active={location.pathname === "/Contact"}
                  onClick={handleLinkClick}
                />
                <NavLink
                  to="/Resume"
                  label="Resume"
                  active={location.pathname === "/Resume"}
                  onClick={handleLinkClick}
                />
                <NavLink
                  to="/Follow"
                  label="Follow"
                  active={location.pathname === "/Follow"}
                  onClick={handleLinkClick}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile dropdown stacking */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-600 px-4 py-2 flex flex-col gap-2">
          <NavLink
            to="/"
            label="Home"
            active={location.pathname === "/"}
            onClick={() => setMobileOpen(false)}
          />
          <NavLink
            to="/About"
            label="About"
            active={location.pathname === "/About"}
            onClick={() => setMobileOpen(false)}
          />
          <NavLink
            to="/Projects"
            label="Projects"
            active={location.pathname === "/Projects"}
            onClick={() => setMobileOpen(false)}
          />

          {/* Mobile dropdown */}
          <button
            onClick={toggleDropdown}
            className="text-blue-200 hover:text-white font-medium text-left"
          >
            More ▼
          </button>
          {dropdownOpen && (
            <div className="pl-4 flex flex-col gap-1">
              <NavLink
                to="/Contact"
                label="Contact"
                active={location.pathname === "/Contact"}
                onClick={() => {
                  handleLinkClick();
                  setMobileOpen(false);
                }}
              />
              <NavLink
                to="/Resume"
                label="Resume"
                active={location.pathname === "/Resume"}
                onClick={() => {
                  handleLinkClick();
                  setMobileOpen(false);
                }}
              />
              <NavLink
                to="/Follow"
                label="Follow"
                active={location.pathname === "/Follow"}
                onClick={() => {
                  handleLinkClick();
                  setMobileOpen(false);
                }}
              />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
