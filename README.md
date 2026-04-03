Weather Dashboard – ReactJS (Open-Meteo API)

Project Overview:The Weather Dashboard is a responsive web application built using ReactJS that integrates with the Open-Meteo API to display current weather conditions, hourly forecasts, air quality data, and historical weather trends.The application automatically detects the user’s location using the browser’s Geolocation API and displays localized weather information with interactive charts.This project was developed as part of a Junior ReactJS Frontend Developer Selection Test.

Features
Page 1 – Current Weather
The application automatically fetches the user's GPS location and displays current weather data.



The application automatically fetches the user's GPS location and displays current weather data.

Weather Parameters Displayed
*Current Temperature
*Minimum Temperature
*Maximum Temperature
*Sunrise Time
*Sunset Time
*Wind Speed
*Relative Humidity
*Precipitation
*UV Index
*Air Quality Data
*PM10
*PM2.5
*Carbon Monoxide (CO)
*Nitrogen Dioxide (NO2)
*Sulphur Dioxide (SO2)
*Hourly Data Charts
*Charts are displayed for:
*Temperature
*Relative Humidity
*Precipitation
*Visibility
*Wind Speed
*PM10 / PM2.5
*Chart Features
*Zoom In / Zoom Out
*Horizontal Scrolling
*Responsive Charts
*Smooth Line Charts

Page 2 – Historical Weather (Date Range)
Users can select a date range (up to 2 years) to view historical weather trends.

Historical Charts

Temperature (Min, Max, Mean)
Sunrise & Sunset
Precipitation
Wind Speed
Wind Direction
Air Quality Trends

Additional Features
Automatic GPS Location Detection
Celsius ↔ Fahrenheit Temperature Toggle
Fully Responsive Design (Mobile Friendly)
Interactive Charts with Zoom & Scroll
Clean Dashboard UI Layout
Fast API Data Loading
Modular React Component Structure

APIs Used
This project uses the Open-Meteo APIs:

API  
Forecast API
Purpose
Current & Hourly Weather
API
Archive API
Purpose
Historical Weather
API
Air Quality API
Purpose
Pollution Data

API Documentation: https://open-meteo.com/