Weather Dashboard – ReactJS (Open-Meteo API)
Project Overview
The Weather Dashboard is a responsive web application built using ReactJS that integrates with the Open-Meteo API to display current weather conditions, hourly forecasts, air quality data, and historical weather trends.
The application automatically detects the user’s location using the browser’s Geolocation API and displays localized weather information with interactive charts and data visualizations.
This project was developed as part of a Junior ReactJS Frontend Developer Selection Test.
Features
Page 1 – Current Weather
The application automatically fetches the user's GPS location and displays current weather data.
Weather Parameters Displayed
Current Temperature
Minimum Temperature
Maximum Temperature
Sunrise Time
Sunset Time
Wind Speed
Relative Humidity
Precipitation
UV Index
Air Quality Data
PM10
PM2.5
Carbon Monoxide (CO)
Nitrogen Dioxide (NO2)
Sulphur Dioxide (SO2)
Hourly Data Charts
Charts are displayed for:
Temperature
Relative Humidity
Precipitation
Visibility
Wind Speed
PM10 / PM2.5
Chart Features
Zoom In / Zoom Out
Horizontal Scrolling
Responsive Charts
Smooth Line Charts
Page 2 – Historical Weather (Date Range)
Users can select a date range (up to a maximum of 2 years) to view historical weather trends.
Historical Charts
Temperature (Minimum, Maximum, Mean)
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
Tech Stack
Technology
Purpose
ReactJS
Frontend Framework
Vite
Build Tool
Axios
API Requests
ApexCharts
Charts & Data Visualization
React DatePicker
Date Range Selection
Open-Meteo API
Weather Data
CSS
Styling
Netlify
Deployment
Project Structure

src
│
├── components
│   ├── Navbar.jsx
│   ├── WeatherCard.jsx
│   ├── HourlyCharts.jsx
│   ├── HistoricalCharts.jsx
│
├── pages
│   ├── CurrentWeather.jsx
│   ├── HistoricalWeather.jsx
│
├── services
│   ├── weatherApi.js
│
├── hooks
│   ├── userlocation.js
│
├── styles
│   ├── navbar.css
│   ├── cards.css
│   ├── charts.css
│   ├── layout.css
│
├── App.jsx
├── main.jsx
APIs Used
This project uses the Open-Meteo APIs:
API
Purpose
Forecast API
Current & Hourly Weather
Archive API
Historical Weather
Air Quality API
Pollution Data
API Documentation:
https://open-meteo.com/⁠�
Installation & Running Locally
To run the project locally:

npm install
npm run dev
Then open:

http://localhost:5173
Deployment
The project is deployed using Netlify.
Project Summary
This project demonstrates:
React component architecture
API integration
Data visualization using charts
Responsive dashboard UI design
Custom React hooks (Geolocation)
State management using React hooks
Real-world frontend project structure
Author
Your Name
Junior ReactJS Developer
