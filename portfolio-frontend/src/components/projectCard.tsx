import React from "react";

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="p-4 rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold">{project.title}</h2>
      <p className="mb-2">{project.description}</p>
      <p className="text-sm text-gray-600">{project.technologies.join(", ")}</p>
      <div className="mt-2 flex gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          className="text-green-600 hover:underline"
        >
          Live
        </a>
      </div>
    </div>
  );
}
