import React, { useState, useEffect } from "react";

import WeatherCard from "./WeatherCard/component";

function App({ location }) {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    temp: null,
    condition: null,
  });

  const getWeather = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=6b0748f06459e016838fef68b678e61b`
    );
    const resJson = await apiRes.json();
    console.log(resJson);
    return setWeather({
      city: resJson.name,
      country: resJson.sys.country,
      condition: resJson.weather[0].main,
      temp: resJson.main.temp,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, []);

  return (
    <div>
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <WeatherCard temp={-5} condition="Clouds" city="Tel Aviv" country="IL" />
      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
