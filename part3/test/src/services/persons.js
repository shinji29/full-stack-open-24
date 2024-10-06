import axios from "axios";

const apiClient = axios.create({
  baseUrl: import.meta.env.VITE_PERSONS_API,
});

function fetchAllPersons() {
  try {
    const response = apiClient.get("/");
    return response.data;
  } catch (error) {
    console.error(`Error fetching contacts : ${error}`);
    throw error;
  }
}

function fetchPersonById(id) {
  try {
    const response = apiClient.get(`/${id}`);
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
