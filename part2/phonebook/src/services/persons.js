import axios from "axios";

const baseUrl = import.meta.env.VITE_PERSONS;

function addPerson(newContact) {
  const request = axios.post(baseUrl, newContact);
  return request.then((response) => response.data);
}

function fetchPersons() {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
}

function updatePerson(id, updatedContact) {
  const request = axios.put(`${baseUrl}/${id}`, updatedContact);
  return request.then((response) => response.data);
}

function deletePerson(id) {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
}

export default {
  addPerson,
  fetchPersons,
  updatePerson,
  deletePerson,
};
