import axios from "axios";

const baseUrl = import.meta.env.VITE_API;

const createNote = async (newNote) => {
  const request = axios.post(baseUrl, newNote);
  return request.then((response) => {
    return response.data;
  });
};

const getAll = async () => {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    return response.data;
  });
};

const updateNote = async (id, updatedNote) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedNote);
  return request.then((response) => {
    return response.data;
  });
};

const deleteNote = async (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => {
    return response.data;
  });
};

export default {
  getAll,
  createNote,
  updateNote,
  deleteNote,
};
