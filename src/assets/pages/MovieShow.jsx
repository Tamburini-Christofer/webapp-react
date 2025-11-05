import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import FilmCard from "../components/FilmCard";
import ReviewFilm from "../pages/ReviewFilm";
import ReviewForm from "../components/ReviewForm";
import "./MovieShow.css";

const MovieShow = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movie/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  // Funzione per aggiornare le recensioni quando ne viene aggiunta una nuova
  const handleReviewAdded = (newReview) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      reviews: [...(prevMovie.reviews || []), newReview],
    }));
  };

  if (!movie) return <p>Caricamento...</p>;

  return (
    <div className="container">
      {/* Mostra solo se movie è definito */}
      <FilmCard filmProp={movie} />

      <div className="reviews-section">
        <h4 className="reviews-title">Recensioni:</h4>
        {movie.reviews?.length ? (
          movie.reviews.map((r) => <ReviewFilm key={r.id} reviewProp={r} />)
        ) : (
          <p className="no-reviews">Nessuna recensione disponibile. Sii il primo a lasciarne una!</p>
        )}
      </div>

      {/* Form per aggiungere nuove recensioni */}
      <ReviewForm movieId={id} onReviewAdded={handleReviewAdded} />
    </div>
  );
};

export default MovieShow;
