import { useState, useEffect } from "react";
import personServices from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    function fetchAll() {
      const data = personServices.fetchAllPersons();
      setPersons(data);
    }

    // fetchAll();
  }, []);

  return (
    <>
      <h2>Phonebook</h2>
      {persons.length === 0 ? (
        <div>
          <p>No contacts to show.</p>
        </div>
      ) : (
        persons.map((person) => (
          <div key={person.id}>
            <h3>{person.name}</h3>
            <p>Contact : {person.number}</p>
          </div>
        ))
      )}
    </>
  );
}

export default App;
