import axios from "axios";

const baseUrl = import.meta.env.VITE_COUNTRIES_API;

async function fetchAll() {
  const { data } = await axios.get(`${baseUrl}/all`);
  return data;
}

async function fetchByName(name) {
  const { data } = await axios.get(`${baseUrl}/name/${name}`);
  return data;
}

export default {
  fetchAll,
  fetchByName,
};
