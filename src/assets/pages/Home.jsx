import FilmCard from "../components/FilmCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLoader } from "../../contexts/LoaderContext";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader();
    axios
      .get("http://localhost:3000/api/movie")
      .then((res) => {
        setMovies(res.data);
        hideLoader();
      })
      .catch((err) => {
        console.error(err);
        hideLoader();
      });
  }, [showLoader, hideLoader]);

  return (
    <div className="text-center">
      <h1 className="mb-2">PopCornVote</h1>
      <h5 className="text-muted mb-4">
        Il gusto del cinema, un voto alla volta.
      </h5>

      <div className="row">
        {movies.map((film) => (
          <FilmCard key={film.id} filmProp={film} />
        ))}
      </div>
    </div>
  );
};

export default Home;
