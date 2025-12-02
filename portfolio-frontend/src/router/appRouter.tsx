import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Projects from "../pages/projects";
import App from "../App";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<App />} />
    </Routes>
  );
}
