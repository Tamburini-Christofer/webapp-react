//? Importo componente DettaglioFilm
import DettaglioFilm from "./DettaglioFilm"

//? Creo componente Home
const Home = () => {
    return(
        <>
            <h1>PopCornVote</h1>
            <h2>Il gusto del cinema, un voto alla volta.</h2>
            <div>
                <DettaglioFilm />
                <DettaglioFilm />
                <DettaglioFilm />
                <DettaglioFilm />
                <DettaglioFilm />
            </div>
        
        </>
    )
}

export default Home;