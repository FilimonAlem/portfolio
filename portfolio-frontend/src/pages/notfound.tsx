// pages/notfound.tsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
      <h1 className="text-6xl md:text-7xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl mb-6">Oops! Page not found.</h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved. Check the
        URL or return home.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded text-white font-semibold"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
