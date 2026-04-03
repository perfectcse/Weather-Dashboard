import { useState, useEffect } from "react";
import useLocation from "../hooks/userlocation";
import { getHistoricalWeather } from "../services/weatherApi";
import HistoricalCharts from "../components/HistoricalCharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HistoricalWeather() {
  const { lat, lon } = useLocation();

  const [startDate, setStartDate] = useState(new Date("2023-01-01"));
  const [endDate, setEndDate] = useState(new Date());
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!lat || !lon) return;

    const fetchHistorical = async () => {
      const formattedStart = startDate.toISOString().split("T")[0];
      const formattedEnd = endDate.toISOString().split("T")[0];

      const result = await getHistoricalWeather(
        lat,
        lon,
        formattedStart,
        formattedEnd
      );

      setData(result);
    };

    fetchHistorical();
  }, [lat, lon, startDate, endDate]);

  if (!data) return <h2>Loading Historical Data...</h2>;

  return (
    <div>
      <h1>Historical Weather</h1>

      {/* Date Range */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div>
          <p>Start Date</p>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>

        <div>
          <p>End Date</p>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        </div>
      </div>

      {/* Temperature Charts */}
      <HistoricalCharts
        title="Max Temperature"
        data={data.daily.temperature_2m_max}
        categories={data.daily.time}
      />

      <HistoricalCharts
        title="Min Temperature"
        data={data.daily.temperature_2m_min}
        categories={data.daily.time}
      />

      {data.daily.temperature_2m_mean && (
        <HistoricalCharts
          title="Mean Temperature"
          data={data.daily.temperature_2m_mean}
          categories={data.daily.time}
        />
      )}

      {/* Sunrise & Sunset */}
      {data.daily.sunrise && (
        <HistoricalCharts
          title="Sunrise Time"
          data={data.daily.sunrise.map((t) => t.split("T")[1])}
          categories={data.daily.time}
        />
      )}

      {data.daily.sunset && (
        <HistoricalCharts
          title="Sunset Time"
          data={data.daily.sunset.map((t) => t.split("T")[1])}
          categories={data.daily.time}
        />
      )}

      {/* Precipitation */}
      <HistoricalCharts
        title="Precipitation"
        data={data.daily.precipitation_sum}
        categories={data.daily.time}
      />

      {/* Wind */}
      <HistoricalCharts
        title="Max Wind Speed"
        data={data.daily.windspeed_10m_max}
        categories={data.daily.time}
      />

      {data.daily.winddirection_10m_dominant && (
        <HistoricalCharts
          title="Wind Direction"
          data={data.daily.winddirection_10m_dominant}
          categories={data.daily.time}
        />
      )}
    </div>
  );
}

export default HistoricalWeather;