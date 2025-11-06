import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLoader } from "../../contexts/LoaderContext";
import FilmCard from "../components/FilmCard";
import ReviewFilm from "./ReviewFilm";
import ReviewForm from "../components/ReviewForm";
import "../css/MovieShow.css";

const MovieShow = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader();
    axios
      .get(`http://localhost:3000/api/movie/${id}`)
      .then((res) => {
        setMovie(res.data);
        hideLoader();
      })
      .catch((err) => {
        console.error(err);
        hideLoader();
      });
  }, [id, showLoader, hideLoader]);

  const handleReviewAdded = (newReview) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      reviews: [...(prevMovie.reviews || []), newReview],
    }));
  };

  const handleShowDetails = () => setShowDetails(true);
  const handleHideDetails = () => setShowDetails(false);

  if (!movie) return <p>Caricamento...</p>;

  return (
    <div className="movie-details-layout">
      <div className="movie-details-card">
        <FilmCard filmProp={movie} onShowDetails={handleShowDetails} />
      </div>
      <div style={{ width: "100%" }}>
        {showDetails && (
          <div className="movie-details-table">
            <h3>Dettagli Film</h3>
            <table>
              <tbody>
                <tr>
                  <td>Titolo</td>
                  <td>{movie.title}</td>
                </tr>
                <tr>
                  <td>Regista</td>
                  <td>{movie.director}</td>
                </tr>
                <tr>
                  <td>Descrizione</td>
                  <td>{movie.description}</td>
                </tr>
                <tr>
                  <td>ID</td>
                  <td>{movie.id}</td>
                </tr>
              </tbody>
            </table>
            <button onClick={handleHideDetails}>Chiudi dettagli</button>
          </div>
        )}
        <div className="reviews-section">
          <h4 className="reviews-title">Recensioni:</h4>
          {movie.reviews?.length ? (
            movie.reviews.map((r) => <ReviewFilm key={r.id} reviewProp={r} />)
          ) : (
            <p className="no-reviews">
              Nessuna recensione disponibile. Sii il primo a lasciarne una!
            </p>
          )}
        </div>
        <ReviewForm movieId={id} onReviewAdded={handleReviewAdded} />
      </div>
    </div>
  );
};

export default MovieShow;
