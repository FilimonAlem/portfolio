import { useEffect, useState } from "react";
import { getProjects } from "../api/projects";
import ProjectCard from "../components/projectCard";
import { Project } from "../api/projects";
import React from "react";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-6 text-gray-500">Loading projects...</p>;
  if (error) return <p className="p-6 text-red-500">Error: {error}</p>;

  return (
    <div className="grid gap-6 p-6">
      {projects.map((p) => (
        <ProjectCard key={p._id} project={p} />
      ))}
    </div>
  );
}
