import axios from "axios";

/* ===============================
   CURRENT WEATHER + HOURLY API
================================= */
export const getCurrentWeather = async (lat, lon) => {
  const response = await axios.get(
    "https://api.open-meteo.com/v1/forecast",
    {
      params: {
        latitude: lat,
        longitude: lon,
        current_weather: true,
        hourly:
          "temperature_2m,relativehumidity_2m,precipitation,visibility,windspeed_10m,uv_index,precipitation_probability",
        daily:
          "temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum",
        timezone: "auto",
      },
    }
  );

  return response.data;
};

/* ===============================
   HISTORICAL WEATHER API
================================= */
export const getHistoricalWeather = async (
  lat,
  lon,
  startDate,
  endDate
) => {
  const response = await axios.get(
    "https://archive-api.open-meteo.com/v1/archive",
    {
      params: {
        latitude: lat,
        longitude: lon,
        start_date: startDate,
        end_date: endDate,
        daily:
          "temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max",
        timezone: "auto",
      },
    }
  );

  return response.data;
};

/* ===============================
   AIR QUALITY API
================================= */
export const getAirQuality = async (lat, lon) => {
  const response = await axios.get(
    "https://air-quality-api.open-meteo.com/v1/air-quality",
    {
      params: {
        latitude: lat,
        longitude: lon,
        hourly:
          "pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide",
        timezone: "auto",
      },
    }
  );

  return response.data;
};