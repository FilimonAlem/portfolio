import axios from "axios";

const VITE_API_URL = "https://personal-portfolio-backend-t1m9.onrender.com"; 

export const getProjects = async () => {
  const response = await axios.get(`${VITE_API_URL}/projects`);
  return response.data;
};