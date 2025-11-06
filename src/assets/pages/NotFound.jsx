import { Link } from "react-router-dom";
import "../css/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Pagina non trovata</p>
      <Link to="/" className="not-found-btn">
        Torna alla Home
      </Link>
    </div>
  );
};

export default NotFound;
