import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "../components/FilmCard";

const MovieShow = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movie/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) return <p>Caricamento...</p>;

  return (
    <div className="container text-center">
      <img src={movie.image} alt={movie.title} className="img-fluid mb-3" />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      {movie.media_voti && <h5>⭐ Media voti: {movie.media_voti}</h5>}

      <h4 className="mt-4">Recensioni:</h4>
      {movie.reviews?.length ? (
        movie.reviews.map((r) => (
          <ReviewCard key={r.id} reviewProp={r} />
        ))
      ) : (
        <p>Nessuna recensione</p>
      )}
    </div>
  );
};

export default MovieShow;
