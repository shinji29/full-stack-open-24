import noteServices from "./services/notes";
import { useState, useEffect } from "react";

import Form from "./components/Form";
import Notes from "./components/Notes";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Notification from "./components/Notification";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [message, setMessage] = useState({
    content: null,
    nature: "success",
  });

  useEffect(() => {
    async function fetchNotes() {
      try {
        const data = await noteServices.fetchNotes();
        setNotes(data);
      } catch (error) {
        setMessage({
          content: `Error fetching notes : ${error}`,
          nature: "error",
        });
        setTimeout(() => {
          setMessage({
            ...message,
            content: null,
          });
        }, 5000);
        setNotes([]);
      }
    }

    fetchNotes();
  }, [notes]);

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
        setMessage({
          content: "New note added!",
          nature: "success",
        });
        setTimeout(() => {
          setMessage({
            ...message,
            content: null,
          });
        }, 5000);
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
      .then((updatedId) => {
        setMessage({
          content: "Note importance updated!",
          nature: "success",
        });
        setTimeout(() => {
          setMessage({
            ...message,
            content: null,
          });
        }, 5000);
        setNotes(
          notes.map((note) => (note.id === updatedId ? noteUpdate : note))
        );
      })
      .catch((error) => {
        setMessage({
          content: `The note "${noteUpdate.content}" was already removed from the server.`,
          nature: "error",
        });
        setTimeout(() => {
          setMessage({
            ...message,
            content: null,
          });
        }, 5000);
        setNotes(notes.filter((note) => note.id !== id));
      });
  };

  const deletion = (id) => {
    noteServices
      .deleteNote(id)
      .then((deletedId) => {
        setMessage({
          content: "Note deleted!",
          nature: "success",
        });
        setTimeout(() => {
          setMessage({
            ...message,
            content: null,
          });
        }, 5000);
        setNotes(notes.filter((note) => note.id !== deletedId));
      })
      .catch((error) => {
        setMessage({
          content: `Error deleting note : ${error}`,
          nature: "error",
        });
        setTimeout(() => {
          setMessage({
            ...message,
            content: null,
          });
        }, 5000);
      });
  };

  return (
    <>
      <h2>Notes</h2>
      <Notification message={message} />
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
      <Footer />
    </>
  );
};

export default App;
