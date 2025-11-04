const ReviewFilm = ({ reviewProp }) => {
  const { name, vote, text } = reviewProp;

  return (
    <div className="card mt-4 p-4 shadow">
      <p className="mt-2">{text}</p>
      <strong>⭐ {vote}/5</strong>
      <address className="text-muted">
        <i>Recensione di {name}</i>
      </address>
    </div>
  );
};

export default ReviewFilm;
