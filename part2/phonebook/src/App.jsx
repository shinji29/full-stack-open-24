import personServices from "./services/persons";
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
    personServices
      .fetchPersons()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const toBeAdded = persons.filter((person) => person.name === newName);

    if (toBeAdded.length === 0) {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      personServices.addPerson(newPerson).then((data) => {
        setPersons(persons.concat(data));
        setNewNumber("");
        setNewName("");
      });
    } else {
      const personToAdd = { ...toBeAdded[0], number: newNumber };
      if (
        window.confirm(
          `${personToAdd.name} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        personServices
          .updatePerson(personToAdd.id, personToAdd)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === updatedPerson.id ? updatedPerson : person
              )
            );
            setNewNumber("");
            setNewName("");
          });
      }
    }
  };

  const handleDelete = (id) => {
    const tbd = persons.filter((person) => person.id === id)[0];
    const confirmDelete = window.confirm(`Delete ${tbd.name}?`);
    if (confirmDelete) {
      personServices.deletePerson(id).then((data) => {
        setPersons(persons.filter((person) => person.id !== data.id));
      });
    }
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Form
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        handleSubmit={handleSubmit}
      />
      <Persons
        searchQuery={searchQuery}
        persons={persons}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default App;
