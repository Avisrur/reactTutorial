import React from "react";

import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={20} condition="Clear" city="Sydney" country="AU" />
      <WeatherCard temp={-5} condition="Clouds" city="Tel Aviv" country="IL" />
    </div>
  );
}

export default App;
