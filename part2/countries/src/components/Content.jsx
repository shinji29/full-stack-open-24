import Country from "./Country";

function Content({ country, allCountries }) {
  const filteredCountries = allCountries.filter((data) =>
    data.name.common.toLowerCase().trim().includes(country.toLowerCase().trim())
  );

  if (filteredCountries.length > 10 && country.length !== 0)
    return <p>Too many matches! Please specify another filter.</p>;
  else if (filteredCountries.length <= 10 && filteredCountries.length >= 2)
    return (
      <div>
        {filteredCountries.map((data, id) => (
          <p key={id}>
            <span>
              {data.name.common}{" "}
              <button
                onClick={() => console.log(`Showing ${data.name.common} ...`)}
              >
                Show
              </button>{" "}
            </span>
          </p>
        ))}
      </div>
    );
  else if (filteredCountries.length === 1)
    return <Country country={filteredCountries[0]} />;
}

export default Content;
