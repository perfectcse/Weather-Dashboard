import "../styles/cards.css";

function WeatherCard({ title, value, unit }) {
  return (
    <div className="weather-card">
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <h2 className="card-value">
          {value}
          <span className="card-unit"> {unit}</span>
        </h2>
      </div>
    </div>
  );
}

export default WeatherCard;