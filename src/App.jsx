import { Routes, Route } from "react-router-dom";
import Layout from "./assets/layouts/layout";
import Home from "./assets/pages/Home";
import MovieShow from "./assets/pages/MovieShow";
import AddMovie from "./assets/pages/AddMovie";
import NotFound from "./assets/pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieShow />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
