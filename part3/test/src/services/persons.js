import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_PERSONS_API,
});

async function fetchAllPersons() {
  try {
    const response = await apiClient.get("/");
    return response.data;
  } catch (error) {
    console.error(`Error fetching contacts : ${error}`);
    throw error;
  }
}

async function fetchPersonById(id) {
  try {
    const response = await apiClient.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching person with id ${id} : ${error}`);
    throw error;
  }
}

export default {
  fetchAllPersons,
  fetchPersonById,
};
