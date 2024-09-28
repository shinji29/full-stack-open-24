function Country({ country }) {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>
        <b>Capital</b> {country.capital}
      </p>
      <p>
        <b>Area</b> {country.area}
      </p>
      <h4>Languages:</h4>
      <ul>
        {Object.entries(country.languages).map(([code, name]) => (
          <li key={code}>{name}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={"Flag of " + country.name.common} />
    </div>
  );
}

export default Country;
