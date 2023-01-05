import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useFetch from "./useFetch";
import Loader from "./Loader";

import capitalize from "./capitalize";

export default function Pokemon() {
  const { id } = useParams();

  const [{ data, loading, error }] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}/`
  );

  if (!data || loading) {
    return <Loader />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1">{capitalize(data.name)}</Typography>
      <img
        alt={data.name}
        src={data.sprites.front_default}
        style={{ height: "50vh" }}
      />
    </Box>
  );
}
