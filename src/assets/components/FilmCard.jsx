import { Link } from "react-router-dom";

const FilmCard = ({ filmProp }) => {

  const { id, title, director, description, image } = filmProp;

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={image} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">
            <i>{director}</i>
          </p>
          <p className="card-text">
            {description}
          </p>
          <Link to={`/movies/${id}`} className="btn btn-primary">
            Vedi dettagli
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
