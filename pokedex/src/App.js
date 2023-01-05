import { BrowserRouter, Routes, Route } from "react-router-dom";

import PokemonList from "./PokemonList";
import Pokemon from "./Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
