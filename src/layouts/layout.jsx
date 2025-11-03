//? Importo Outlet
import { Outlet } from "react-router-dom";

//? Importo componente Header
import Header from "../components/Header"

//todo Creazione componente Layout
const layout = () => {
    return(
    <>
        <header>
            <Header />
        </header>
        <main>
            <Outlet />
        </main>
    </>
    )
}

//! Export di Layout
export default layout;