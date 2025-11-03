//? Importo librerie React (poer gestire le rotte)
import { Route, Routes, BrowserRouter } from "react-router-dom";

//? Importo app.css
import "./App.css";

//? Importo il layout
import Layout from "./assets/layouts/layout";

//? Importo pagine
import Home from "./assets/pages/Home";
import DettaglioFilm from "./assets/pages/DettaglioFilm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/movie/:id' element={<DettaglioFilm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
