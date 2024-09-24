import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_PROJECT_URL,
  import.meta.env.VITE_API_KEY
);

async function createNote(newNote) {
  const { data, error } = await supabase.from("notes").insert(newNote).select();
  if (error) {
    console.log(`Error fetching notes : ${error}`);
    return [];
  } else {
    return data;
  }
}

async function fetchNotes() {
  const { data, error } = await supabase.from("notes").select();
  if (error) {
    console.log(`Error fetching notes : ${error}`);
    return [];
  } else {
    return data;
  }
}

async function updateNote(id, updatedNote) {
  const { data, error } = await supabase
    .from("notes")
    .update({ important: updatedNote.important })
    .eq("id", id)
    .select();
  if (error) {
    console.log(`Error updating note : ${error}`);
    return null;
  } else {
    return data.id;
  }
}

async function deleteNote(id) {
  const { data, error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id)
    .select();
  if (error) {
    console.log(`Error deleting note : ${error}`);
    return null;
  } else {
    return data.id;
  }
}

export default {
  fetchNotes,
  createNote,
  updateNote,
  deleteNote,
};
