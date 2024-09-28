import { useState, useEffect } from "react";
import countryServices from "./services/countries";

import Filter from "./components/Filter";
import Content from "./components/Content";

function App() {
  const [country, setCountry] = useState("");
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    async function fetchAllCountries() {
      const data = await countryServices.fetchAll();
      setAllCountries(data);
    }
    fetchAllCountries();
  }, []);

  return (
    <>
      <h1>Countries</h1>
      <Filter country={country} setCountry={setCountry} />
      <Content
        country={country}
        allCountries={allCountries}
      />
    </>
  );
}

export default App;
