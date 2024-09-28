import axios from "axios";

const weatherApiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const countriesApiUrl = "https://studies.cs.helsinki.fi/restcountries/api";

async function fetchAll() {
  const { data } = await axios.get(`${countriesApiUrl}/all`);
  return data;
}

async function fetchByName(name) {
  const { data } = await axios.get(`${countriesApiUrl}/name/${name}`);
  return data;
}

async function fetchCoords(cityName) {
  const { data } = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${weatherApiKey}`
  );
  return { lat: data[0].lat, lon: data[0].lon };
}

async function fetchWeather(lat, lon) {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`
  );
  return {
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    temp: data.main.temp,
    wind: data.wind.speed,
  };
}

export default {
  fetchAll,
  fetchByName,
  fetchCoords,
  fetchWeather,
};
