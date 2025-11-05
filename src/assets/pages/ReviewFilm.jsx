import "./ReviewFilm.css";

const ReviewFilm = ({ reviewProp }) => {
  const { name, vote, text } = reviewProp;

  return (
    <div className="card review-card mt-4 p-4 shadow">
      <p className="review-text mt-2">{text}</p>
      <strong className="review-vote">⭐ {vote}/5</strong>
      <address className="review-author">
        <i>Recensione di {name}</i>
      </address>
    </div>
  );
};

export default ReviewFilm;
