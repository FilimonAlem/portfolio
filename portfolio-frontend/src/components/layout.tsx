import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navigation */}
      <NavBar />

      {/* Main content */}
      <main className="flex-1 pt-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-10 py-6 text-center text-gray-400 text-sm sm:text-base">
        © 2025 Filimon Alem. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
