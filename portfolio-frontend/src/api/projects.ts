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
  const res = await fetch(`${VITE_API_URL}/api/projects`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  const data: Project[] = await res.json();
    console.log("Fetching projects from:", `${VITE_API_URL}/api/projects`);
  return data;
} 
