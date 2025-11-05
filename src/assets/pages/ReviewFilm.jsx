import { Link } from "react-router-dom";
import "../css/ReviewFilm.css";

const ReviewFilm = ({ reviewProp }) => {
  const { name, vote, text } = reviewProp;

  return (
    <div className="review-card">
      <div className="review-vote">⭐ {vote}/5</div>
      <p className="review-text">{text}</p>
      <address className="review-author">Recensione di {name}</address>
    </div>
  );
};

export default ReviewFilm;
