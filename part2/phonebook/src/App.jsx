import axios from "axios";
import { useState, useEffect } from "react";

import Form from "./components/Form";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get(import.meta.env.VITE_PERSONS).then((response) => {
      setPersons(response.data);
    });
  }, []);

  console.log(`Fetched ${persons.length} contacts from server.`);

  const handleSubmit = (event) => {
    event.preventDefault();

    const numberExists = persons.some((person) => person.number === newNumber);
    const nameExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (nameExists) {
      window.alert(`${newName} already exists in the phonebook.`);
    } else if (numberExists) {
      window.alert(`${newNumber} already exists in the phonebook.`);
    } else if (newName.length !== 0 && newNumber.length !== 0) {
      const newPerson = {
        id: String(persons.length + 1),
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(newPerson));
      setNewNumber("");
      setNewName("");
    } else {
      window.alert("Please fill out both of the fields.");
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Form
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleSubmit={handleSubmit}
      />
      <Persons searchQuery={searchQuery} persons={persons} />
    </div>
  );
};

export default App;
