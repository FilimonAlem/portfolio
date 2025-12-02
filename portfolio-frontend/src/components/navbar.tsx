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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLinkClick = () => setDropdownOpen(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/About", label: "About" },
    { to: "/Projects", label: "Projects" },
  ];

  const dropdownLinks = [
    { to: "/Contact", label: "Contact" },
    { to: "/Resume", label: "Resume" },
    { to: "/Follow", label: "Follow" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between h-16">
        {/* Mobile Hamburger */}
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
        <div className="hidden md:flex md:items-center md:gap-6 w-full">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              label={link.label}
              active={location.pathname === link.to}
            />
          ))}

          {/* Dropdown on the right */}
          <div ref={dropdownRef} className="relative ml-auto">
            <button
              onClick={toggleDropdown}
              className="px-3 py-2 text-blue-200 hover:text-white font-medium"
            >
              More ▼
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-600 rounded-md shadow-lg py-1">
                {dropdownLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    label={link.label}
                    active={location.pathname === link.to}
                    onClick={handleLinkClick}
                  />
                ))}
              </div>
            )}
          </div>
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

          {/* Dropdown in mobile */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={toggleDropdown}
              className="text-blue-200 hover:text-white font-medium text-left"
            >
              More ▼
            </button>
            {dropdownOpen && (
              <div className="pl-4 flex flex-col gap-1">
                {dropdownLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    label={link.label}
                    active={location.pathname === link.to}
                    onClick={() => {
                      handleLinkClick();
                      setMobileOpen(false);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
