import Country from "./Country";
import { useState, useEffect } from "react";

function Content({ country, allCountries }) {
  const [selectCountry, setSelectCountry] = useState(null);

  const filteredCountries = allCountries.filter((data) =>
    data.name.common.toLowerCase().trim().includes(country.toLowerCase().trim())
  );

  function handleShow(event, data) {
    event.preventDefault();
    setSelectCountry(data);
  }

  useEffect(() => {
    setSelectCountry(null);
  }, [country]);

  if (filteredCountries.length > 10 && country.length !== 0)
    return <p>Too many matches! Please specify another filter.</p>;
  else if (
    filteredCountries.length <= 10 &&
    filteredCountries.length >= 2 &&
    !selectCountry
  )
    return (
      <div>
        {filteredCountries.map((data, id) => (
          <p key={id}>
            <span>
              {data.name.common}{" "}
              <button onClick={(event) => handleShow(event, data)}>Show</button>{" "}
            </span>
          </p>
        ))}
      </div>
    );
  else if (filteredCountries.length === 1)
    return <Country country={filteredCountries[0]} />;
  else if (selectCountry) return <Country country={selectCountry} />;
  else return <p>Start typing for suggestions.</p>;
}

export default Content;
