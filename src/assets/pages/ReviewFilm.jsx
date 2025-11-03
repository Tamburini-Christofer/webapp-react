import { useParams } from "react-router-dom";

const ReviewFilm = () => {
  const { id } = useParams();

  return (
    <div className="card mt-4 p-4 shadow">
      <h3>Recensione film #{id}</h3>
      <p className="mt-3">
        Qui comparirà la recensione completa del film selezionato.
      </p>
      <strong>⭐ 4.5/5</strong>
      <address className="text-muted">
        <i>Recensione di Christofer Tamburini</i>
      </address>
    </div>
  );
};

export default ReviewFilm;

