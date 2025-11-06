import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <nav className="header-cinema">
      <div className="container">
        <Link className="navbar-brand" to="/">
          PopCornVote
        </Link>
        <Link className="add-movie-link" to="/add-movie">
          + Aggiungi Film
        </Link>
      </div>
    </nav>
  );
};

export default Header;
