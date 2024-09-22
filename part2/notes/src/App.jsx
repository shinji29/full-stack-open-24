import axios from "axios";
import { useState, useEffect } from "react";

import Form from "./components/Form";
import Notes from "./components/Notes";
import Button from "./components/Button";

const App = () => {
  const apiUrl = import.meta.env.VITE_API;
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();

    if (newNote.length !== 0) {
      const noteObject = {
        content: newNote,
        important: Math.random() > 0.5,
        id: notes.length + 1,
      };

      axios.post(apiUrl, noteObject).then((response) => {
        console.log(response);
        setNotes(notes.concat(response.data));
        setNewNote("");
      });
    }
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
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
      <Notes notes={notes} showAll={showAll} />
    </>
  );
};

export default App;
