🌦️ Weather Dashboard – ReactJS (Open-Meteo API)
📌 Project Overview
The Weather Dashboard is a responsive web application built using ReactJS that integrates with the Open-Meteo API to display current weather conditions, hourly forecasts, air quality data, and historical weather trends.
The application automatically detects the user’s location using the Browser Geolocation API and displays localized weather information with interactive charts and weather analytics dashboards.
This project was developed as part of a Junior ReactJS Frontend Developer Selection Test.

🚀 Features
🌤️ Page 1 – Current Weather
The application automatically fetches the user’s GPS location and displays real-time weather data.
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

🌫️ Air Quality Data

PM10
PM2.5
Carbon Monoxide (CO)
Nitrogen Dioxide (NO2)
Sulphur Dioxide (SO2)


📊 Hourly Data Charts
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


📅 Page 2 – Historical Weather (Date Range)
Users can select a date range (up to 2 years) to view historical weather trends.
Historical Charts Include

Temperature (Min, Max, Mean)
Sunrise & Sunset
Precipitation
Wind Speed
Wind Direction
Air Quality Trends


✨ Additional Features

Automatic GPS Location Detection
Celsius ↔ Fahrenheit Temperature Toggle
Fully Responsive Design (Mobile Friendly)
Interactive Charts with Zoom & Scroll
Clean Dashboard UI Layout
Fast API Data Loading
Modular React Component Structure


🔌 APIs Used
This project uses Open-Meteo APIs:



API
Purpose




Forecast API
Current & Hourly Weather


Archive API
Historical Weather


Air Quality API
Pollution Data



📄 API Documentation:
https://open-meteo.com/

🛠️ Tech Stack
Frontend

ReactJS
React Hooks (useState, useEffect)
Axios / Fetch API
Chart Library (Chart.js / Recharts / ApexCharts)
CSS / Responsive Dashboard UI

APIs

Open-Meteo Forecast API
Open-Meteo Archive API
Open-Meteo Air Quality API
Browser Geolocation API


📂 Project Structure
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── CurrentWeather.jsx
│   │   ├── HistoricalWeather.jsx
│   │   ├── Charts/
│   │   └── AirQuality.jsx
│   ├── pages/
│   ├── services/
│   │   └── weatherApi.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── README.md


⚙️ Installation & Setup
1️⃣ Clone Repository
git clone YOUR_GITHUB_REPO_LINK
cd weather-dashboard

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev

App will run on:
http://localhost:5173


🎯 Key Concepts Demonstrated

React Functional Components
React Hooks (useState, useEffect)
API Integration
Geolocation API
Data Visualization with Charts
Responsive Dashboard Design
Component-Based Architecture
State Management
Historical Data Filtering
Clean UI Dashboard Layout


📌 Project Status

✔ Current Weather Dashboard Completed
✔ Hourly Charts Implemented
✔ Air Quality Data Integrated
✔ Historical Weather Page Completed
✔ Responsive UI Completed
✔ API Integration Working
✔ Selection Test Project Submitted


👨‍💻 Author
Vishal
Frontend Developer | MERN Stack Learner

📄 Conclusion
The Weather Dashboard project demonstrates strong frontend development skills including API integration, geolocation services, interactive data visualization, responsive dashboard UI design, and component-based architecture in ReactJS.
This project simulates a real-world weather analytics dashboard used in modern web applications.

