import axios from "axios";

const baseUrl = import.meta.env.VITE_PERSONS_API;

function fetchAllPersons() {
  const request = axios.get(baseUrl);
  request.then((response) => response.data);
}

export default {
  fetchAllPersons,
};
