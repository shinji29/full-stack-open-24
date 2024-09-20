import { useState } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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
