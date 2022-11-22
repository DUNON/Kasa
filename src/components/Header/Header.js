import { Link } from "react-router-dom";
import logo from "../assets/img/LOGO.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header_container">
      <img className="logo" src={logo} alt="logo Kasa" />
      <nav className="navbar">
        <Link to="/" className="nav_header">
          Accueil
        </Link>
        <Link to="/about" className="nav_header">
          A propos
        </Link>
      </nav>
    </header>
  );
}
