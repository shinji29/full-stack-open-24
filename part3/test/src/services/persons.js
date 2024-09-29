import axios from "axios";

const baseUrl = import.meta.env.VITE_PERSONS_API;

function fetchAllPersons() {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
}

function fetchPersonById(id) {
  const request = axios.get(`${baseUrl}${id}`);
  return request.then((response) => response.data);
}

export default {
  fetchAllPersons,
  fetchPersonById,
};
