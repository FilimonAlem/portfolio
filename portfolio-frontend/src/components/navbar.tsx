import React from "react";
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
    className={`text-lg md:text-xl lg:text-2xl transition ${
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
  console.log("NavBar rendered, path:", location.pathname);

  return (
    <nav
      aria-label="app-navbar"
      className="fixed top-0 z-[50] w-full bg-gray-500 font-heading flex items-center justify-end py-4 shadow-md"
    >
      <div className="pr-10 flex gap-6">
        <NavLink to="/" label="Home" active={location.pathname === "/"} />
        <NavLink
          to="/About"
          label="About"
          active={location.pathname === "/About"}
        />
        <NavLink
          to="/Projects"
          label="Projects"
          active={location.pathname === "/Projects"}
        />
        <NavLink
          to="/Contact"
          label="Contact"
          active={location.pathname === "/Contact"}
        />
        <NavLink
          to="/Resume"
          label="Resume"
          active={location.pathname === "/Resume"}
        />
        <NavLink
          to="/Follow"
          label="Follow"
          active={location.pathname === "/Follow"}
        />
      </div>
    </nav>
  );
};

export default NavBar;
