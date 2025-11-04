import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-dark text-white">
      <h1 className="display-3 fw-bold">404</h1>
      <p className="lead mb-4">Pagina non trovata</p>
      <Link to="/" className="btn btn-light">
        Torna alla Home
      </Link>
    </div>
  );
}

export default NotFound;
