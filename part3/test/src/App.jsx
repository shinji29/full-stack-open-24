import { useState, useEffect } from "react";

import personServices from "./services/persons";
import Persons from "./components/Persons";
import Header from "./components/Header";

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      const data = await personServices.fetchAllPersons();
      setPersons(data);
    }
    fetchAll();
  }, []);

  return (
    <>
      <Header title={"Phonebook"} />
      <Persons persons={persons} />
    </>
  );
}

export default App;
