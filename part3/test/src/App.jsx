import { useState, useEffect } from "react";
import personServices from "./services/persons";

import Persons from "./components/Persons";
import Header from "./components/Header";

function App() {
  const [error, setError] = useState(null);
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      try {
        setLoading(true);
        const data = await personServices.fetchAllPersons();
        setPersons(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  return (
    <>
      <Header title="Phonebook" />
      <Persons persons={persons} loading={loading} error={error} />
    </>
  );
}

export default App;
