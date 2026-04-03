import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CurrentWeather from "./pages/CurrentWeather";
import HistoricalWeather from "./pages/HistoricalWeather";
//import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="page-container">
        <Routes>
          <Route path="/" element={<CurrentWeather />} />
          <Route path="/historical" element={<HistoricalWeather />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;