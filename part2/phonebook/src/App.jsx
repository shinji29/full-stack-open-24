import { useState } from "react";

import Form from "./components/Form";
import Notes from "./components/Notes";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleNoteChange = (event) => {
    event.preventDefault();
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();

    if (newNote.length !== 0) {
      const noteObject = {
        id: String(notes.length + 1),
        content: newNote,
        important: Math.random() > 0.5,
      };

      setNotes(notes.concat(noteObject));
      setNewNote("");
    }
  };

  return (
    <>
      <Header text={"Notes"} />
      <Form
        showAll={showAll}
        newNote={newNote}
        addNote={addNote}
        setShowAll={setShowAll}
        handleNoteChange={handleNoteChange}
      />
      <br />
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Important" : "Show All"}
      </button>
      <hr />
      <Notes notes={notes} showAll={showAll} />
    </>
  );
}

export default App;
