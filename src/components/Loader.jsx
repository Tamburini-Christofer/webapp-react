import { useLoader } from "../contexts/LoaderContext";
import "../assets/css/Loader.css";

const Loader = () => {
  const { isLoading } = useLoader();

  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="film-reel">
          <div className="reel"></div>
          <div className="reel"></div>
        </div>
        <p className="loader-text">Caricamento...</p>
      </div>
    </div>
  );
};

export default Loader;
