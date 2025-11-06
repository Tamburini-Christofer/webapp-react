import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../../contexts/LoaderContext";
import "../css/AddMovie.css";

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    description: "",
    image: "",
  });
  const [error, setError] = useState(null);
  const { showLoader, hideLoader } = useLoader();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    showLoader();
    setError(null);

    try {
      await axios.post("http://localhost:3000/api/movie", formData);
      hideLoader();
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Errore durante l'aggiunta del film");
      hideLoader();
    }
  };

  return (
    <div className="add-movie-container">
      <div className="add-movie-card">
        <div className="add-movie-header">
          <h2>Aggiungi Nuovo Film</h2>
        </div>
        <div className="add-movie-body">
          {error && (
            <div className="alert alert-danger" role="alert">
              ✗ {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Titolo <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Inserisci il titolo del film"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="director" className="form-label">
                Regista <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="director"
                name="director"
                value={formData.director}
                onChange={handleChange}
                required
                placeholder="Inserisci il nome del regista"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descrizione <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Inserisci la descrizione del film"
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                URL Immagine <span className="text-danger">*</span>
              </label>
              <input
                type="url"
                className="form-control"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                placeholder="https://esempio.com/immagine.jpg"
              />
            </div>

            <div className="add-movie-actions">
              <button type="submit" className="btn-submit">
                Aggiungi Film
              </button>
              <button
                type="button"
                className="btn-cancel"
                onClick={() => navigate("/")}
              >
                Annulla
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
