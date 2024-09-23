import axios from "axios";
import { createClient } from "@supabase/supabase-js";

const baseUrl = import.meta.env.VITE_API;
const supabase = createClient(
  import.meta.env.VITE_PROJECT_URL,
  import.meta.env.VITE_API_KEY
);

async function createNote(newNote) {
  const request = axios.post(baseUrl, newNote);
  return request.then((response) => {
    return response.data;
  });
}

async function fetchNotes() {
  try {
    const { data } = await supabase.from("notes").select();
    return data;
  } catch (error) {
    console.log(`Error fetching notes : ${error}`);
    return [];
  }
}

async function updateNote(id, updatedNote) {
  const request = axios.put(`${baseUrl}/${id}`, updatedNote);
  return request.then((response) => {
    return response.data;
  });
}

async function deleteNote(id) {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => {
    return response.data;
  });
}

export default {
  fetchNotes,
  createNote,
  updateNote,
  deleteNote,
};
