import axios from "axios";

const VITE_API_URL = "https://portfolio-backend-hgi2.onrender.com"; 

export const getProjects = async () => {
  const response = await axios.get(`${VITE_API_URL}/projects`);
  return response.data;
};