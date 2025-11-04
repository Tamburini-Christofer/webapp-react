import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import MovieShow from "./assets/pages/MovieShow";
import NotFound from "./assets/pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<MovieShow />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
