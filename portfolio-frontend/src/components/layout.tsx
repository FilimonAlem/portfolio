// components/layout/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />

      <main className="pt-20 px-4 md:px-8 lg:px-16">
        <Outlet />
      </main>

      {/* Optional footer */}
      <footer className="mt-10 py-6 text-center text-gray-400">
        © 2025 Filimon Alem. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
