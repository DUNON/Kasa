import { Link } from "react-router-dom";
import logo from "../../assets/img/LOGO.png";
import "./Header.css";

function Header() {
  return (
    <header className="header_container">
      <img className="logo" src={logo} alt="logo" />
      <nav className="navbar">
        <Link to="/" className="nav-header">
          Accueil
        </Link>
        <Link to="/about" className="nav-header">
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
