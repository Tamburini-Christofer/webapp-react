//? Importo Link
import { Link } from "react-router-dom"

const FilmCard = () => {
    return (
        <div>
            <img/>
            <div>
                <h5>Titolo film</h5>
                <address><i>Regista</i></address>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quam! Quaerat molestias autem hic neque quia quod asperiores, vel veniam mollitia repellat illo repudiandae praesentium qui deserunt velit adipisci explicabo!
                </p>
                <Link to="movies/1">
                    See more
                </Link>
            </div>
        </div>
    )
}

export default FilmCard;