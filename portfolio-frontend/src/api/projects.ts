export interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function getProjects(): Promise<Project[]> {
  const res = await fetch("https://portfolio-backend-hgi2.onrender.com/api/project");
  if (!res.ok) throw new Error("Failed to fetch projects");
  const data: Project[] = await res.json();
  return data;
} 