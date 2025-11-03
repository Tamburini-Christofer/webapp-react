import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./assets/layouts/Layout";
import Home from "./assets/pages/Home";
import ReviewFilm from "./assets/pages/ReviewFilm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<ReviewFilm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
