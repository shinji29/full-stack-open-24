import { useState, useEffect } from "react";
import axios from "axios";
import Notes from "./components/Notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get(import.meta.env.VITE_SERVER_URL).then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);

  return (
    <div>
      <Notes notes={notes} />
    </div>
  );
};

export default App;
