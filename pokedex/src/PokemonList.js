import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useFetch from "./useFetch";
import Loader from "./Loader";
import capitalize from "./capitalize";

export default function PokemonList() {
  const [{ data, loading, error }] = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=2000"
  );

  if (!data || loading) {
    return <Loader />;
  }

  return (
    <Box>
      <Typography>Pokedex</Typography>
      <ol>
        {data.results.map(({ name, url }, index) => (
          <li>
            <Link to={`pokemon/${index + 1}`}>{capitalize(name)}</Link>
          </li>
        ))}
      </ol>
    </Box>
  );
}
