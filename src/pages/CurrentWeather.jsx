import { useEffect, useState } from "react";
import useLocation from "../hooks/userlocation";
import { getCurrentWeather, getAirQuality } from "../services/weatherApi";
import WeatherCard from "../components/weatherCard";
import HourlyCharts from "../components/HourlyCharts";
import "../styles/layout.css";

function CurrentWeather() {
  const { lat, lon } = useLocation();
  const [weather, setWeather] = useState(null);
  const [air, setAir] = useState(null);
  const [unit, setUnit] = useState("C");

  useEffect(() => {
    if (!lat || !lon) return;

    const fetchData = async () => {
      const weatherData = await getCurrentWeather(lat, lon);
      const airData = await getAirQuality(lat, lon);

      setWeather(weatherData);
      setAir(airData);
    };

    fetchData();
  }, [lat, lon]);

  const convertTemp = (temp) => {
    if (unit === "C") return temp;
    return ((temp * 9) / 5 + 32).toFixed(1);
  };

  if (!weather) return <h2>Loading Weather...</h2>;

  return (
    <div className="page-container">
      <h1>Current Weather</h1>

      {/* Toggle Button */}
      <button
        style={{
          marginTop: "10px",
          padding: "8px 15px",
          borderRadius: "6px",
          border: "none",
          background: "#4ca1af",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => setUnit(unit === "C" ? "F" : "C")}
      >
        Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
      </button>

      {/* Weather Cards */}
      <div className="cards-grid">
        <WeatherCard
          title="Current Temp"
          value={convertTemp(weather.current_weather.temperature)}
          unit={`°${unit}`}
        />

        <WeatherCard
          title="Max Temp"
          value={convertTemp(weather.daily.temperature_2m_max[0])}
          unit={`°${unit}`}
        />

        <WeatherCard
          title="Min Temp"
          value={convertTemp(weather.daily.temperature_2m_min[0])}
          unit={`°${unit}`}
        />

        <WeatherCard
          title="Wind Speed"
          value={weather.current_weather.windspeed}
          unit="km/h"
        />

        <WeatherCard
          title="Sunrise"
          value={weather.daily.sunrise[0].split("T")[1]}
          unit=""
        />

        <WeatherCard
          title="Sunset"
          value={weather.daily.sunset[0].split("T")[1]}
          unit=""
        />

        <WeatherCard
          title="Precipitation"
          value={weather.daily.precipitation_sum[0]}
          unit="mm"
        />

        <WeatherCard
          title="Humidity"
          value={weather.hourly.relativehumidity_2m[0]}
          unit="%"
        />

        <WeatherCard
          title="UV Index"
          value={weather.hourly.uv_index[0]}
          unit=""
        />
      </div>

      {/* Air Quality Cards */}
      {air && (
        <div className="cards-grid">
          <WeatherCard title="PM10" value={air.hourly.pm10[0]} unit="µg/m³" />
          <WeatherCard title="PM2.5" value={air.hourly.pm2_5[0]} unit="µg/m³" />
          <WeatherCard title="CO" value={air.hourly.carbon_monoxide[0]} unit="" />
          <WeatherCard title="NO2" value={air.hourly.nitrogen_dioxide[0]} unit="" />
          <WeatherCard title="SO2" value={air.hourly.sulphur_dioxide[0]} unit="" />
        </div>
      )}

      {/* Hourly Charts */}
      <HourlyCharts
        title="Temperature Hourly"
        data={weather.hourly.temperature_2m}
        categories={weather.hourly.time}
      />

      <HourlyCharts
        title="Humidity Hourly"
        data={weather.hourly.relativehumidity_2m}
        categories={weather.hourly.time}
      />

      <HourlyCharts
        title="Precipitation Hourly"
        data={weather.hourly.precipitation}
        categories={weather.hourly.time}
      />

      <HourlyCharts
        title="Visibility Hourly"
        data={weather.hourly.visibility}
        categories={weather.hourly.time}
      />

      <HourlyCharts
        title="Wind Speed Hourly"
        data={weather.hourly.windspeed_10m}
        categories={weather.hourly.time}
      />

      {/* PM Charts */}
      {air && (
        <HourlyCharts
          title="PM10"
          data={air.hourly.pm10}
          categories={air.hourly.time}
        />
      )}
    </div>
  );
}

export default CurrentWeather;