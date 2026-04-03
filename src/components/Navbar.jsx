import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Weather Dashboard
      </div>

      <div className="navbar-links">
        <Link to="/">Current Weather</Link>
        <Link to="/historical">Historical Data</Link>
      </div>
    </nav>
  );
}

export default Navbar;