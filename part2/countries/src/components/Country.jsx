import { useEffect, useState } from "react";
import countryServices from "../services/countries";

function Country({ country }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function getCoords(cityName) {
      const { lat, lon } = await countryServices.fetchCoords(cityName);
      const weatherData = await countryServices.fetchWeather(lat, lon);
      setWeather(weatherData);
    }
    getCoords(country.capital);
  });

  return (
    <div>
      <h2>{country.name.common}</h2>
      <div className="country">
        <div>
          <p>
            <b>Capital</b> {country.capital}
          </p>
          <p>
            <b>Area</b> {country.area}
          </p>
          <p>
            <b>Languages:</b>
          </p>
          <ul>
            {Object.entries(country.languages).map(([code, name]) => (
              <li key={code}>{name}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt={"Flag of " + country.name.common} />
        </div>
        {weather !== null ? (
          <div>
            <h3>Weather in {country.capital}</h3>
            <p>
              <b>Temperature</b> {weather.temp}
            </p>
            <img src={weather.icon} alt="Weather Icon" />
            <p>
              <b>Wind speed</b> {weather.wind} m/s
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Country;
