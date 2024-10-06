import { useState, useEffect } from "react";
import personServices from "./services/persons";

import Message from "./components/Message";
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
      <Message loading={loading} error={error} />
      <Persons persons={persons} />
    </>
  );
}

export default App;
