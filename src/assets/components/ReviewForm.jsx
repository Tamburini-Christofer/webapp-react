import { useState } from "react";
import axios from "axios";
import "./ReviewForm.css";

const ReviewForm = ({ movieId, onReviewAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    vote: "3",
    text: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/movie/${movieId}/review`,
        formData
      );

      // Reset form
      setFormData({
        name: "",
        vote: "3",
        text: "",
      });

      setSuccess(true);

      // Chiama la callback per aggiornare la lista delle recensioni
      if (onReviewAdded) {
        onReviewAdded(response.data);
      }

      // Nasconde il messaggio di successo dopo 3 secondi
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(
        err.response?.data?.message || "Errore durante l'invio della recensione"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card shadow-sm mt-5 mb-4">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">Lascia una recensione</h4>
      </div>
      <div className="card-body">
        {success && (
          <div className="alert alert-success" role="alert">
            ✓ Recensione inviata con successo!
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            ✗ {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Inserisci il tuo nome"
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="vote" className="form-label">
              Voto <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              id="vote"
              name="vote"
              value={formData.vote}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            >
              <option value="1">⭐ 1/5 - Pessimo</option>
              <option value="2">⭐⭐ 2/5 - Scarso</option>
              <option value="3">⭐⭐⭐ 3/5 - Sufficiente</option>
              <option value="4">⭐⭐⭐⭐ 4/5 - Buono</option>
              <option value="5">⭐⭐⭐⭐⭐ 5/5 - Eccellente</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Recensione <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              id="text"
              name="text"
              rows="4"
              value={formData.text}
              onChange={handleChange}
              required
              placeholder="Scrivi qui la tua recensione..."
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Invio in corso...
              </>
            ) : (
              "Invia recensione"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
