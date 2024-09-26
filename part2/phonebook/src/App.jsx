import personServices from "./services/persons";
import { useState, useEffect } from "react";

import Form from "./components/Form";
import Filter from "./components/Filter";
import Section from "./components/Section";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState({
    content: null,
    nature: "success",
  });

  useEffect(() => {
    personServices
      .fetchPersons()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newName.length === 0 || newNumber.length === 0) {
      window.alert("Please fill out both the fields.");
      return;
    }

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
        setMessage({
          content: `Added ${newPerson.name}.`,
          nature: "success",
        });
        setTimeout(() => {
          setMessage({ ...message, content: null });
        }, 3000);
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
            setMessage({
              content: `Updated ${updatedPerson.name}.`,
              nature: "success",
            });
            setTimeout(() => {
              setMessage({ ...message, content: null });
            }, 3000);
          })
          .catch((error) => {
            console.log(error);
            setPersons(persons.filter((person) => person.id != personToAdd.id));
            setMessage({
              content: `${personToAdd.name} was already deleted from the server!`,
              nature: "error",
            });
            setTimeout(() => {
              setMessage({
                ...message,
                content: null,
              });
            }, 5000);
          });
      }
    }
  };

  const handleDelete = (id) => {
    const tbd = persons.filter((person) => person.id === id)[0];
    const confirmDelete = window.confirm(`Delete ${tbd.name}?`);
    if (confirmDelete) {
      personServices.deletePerson(id).then((deletedPerson) => {
        setPersons(persons.filter((person) => person.id !== deletedPerson.id));
        setMessage({
          content: `Deleted ${deletedPerson.name}.`,
          nature: "error",
        });
        setTimeout(() => {
          setMessage({ ...message, content: null });
        }, 3000);
      });
    }
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Notification message={message} />
      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Form
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        handleSubmit={handleSubmit}
      />
      <Section
        searchQuery={searchQuery}
        persons={persons}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default App;
