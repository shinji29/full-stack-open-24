import { useState, useEffect } from "react";

import Form from "./components/Form";
import Notes from "./components/Notes";
import Button from "./components/Button";

import noteServices from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const data = await noteServices.fetchNotes();
        setNotes(data);
      } catch (error) {
        console.log(`Error fetching notes : ${error}`);
        setNotes([]);
      }
    }

    fetchNotes();
  }, []);

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = async (event) => {
    event.preventDefault();

    if (newNote.length !== 0) {
      const noteObject = {
        content: newNote,
        important: Math.random() > 0.5,
      };

      await noteServices.createNote(noteObject).then((createdNote) => {
        setNotes(notes.concat(createdNote));
        setNewNote("");
      });
    }
  };

  const toggleImportance = (id) => {
    const note = notes.find((note) => note.id === id);
    const noteUpdate = { ...note, important: !note.important };

    noteServices
      .updateNote(id, noteUpdate)
      .then((updatedNote) =>
        setNotes(notes.map((note) => (note.id === id ? updatedNote : note)))
      )
      .catch((error) => {
        alert(`Error updating note : ${error}`);
        setNotes(notes.filter((note) => note.id !== id));
      });
  };

  const deletion = (id) => {
    noteServices
      .deleteNote(id)
      .then((deletedNote) => {
        setNotes(notes.filter((note) => note.id !== deletedNote.id));
      })
      .catch((error) => console.log(`Error deleting note #${id}: ${error}`));
  };

  return (
    <>
      <h2>Notes</h2>
      <Form
        addNote={addNote}
        newNote={newNote}
        handleNoteChange={handleNoteChange}
      />
      <hr />
      <Button showAll={showAll} setShowAll={setShowAll} />
      <br />
      <Notes
        notes={notes}
        showAll={showAll}
        deletion={deletion}
        toggleImportance={toggleImportance}
      />
    </>
  );
};

export default App;
