import "./App.css";

import React, { useEffect, useState } from "react";
import CardComponent from "./components/CardComponent";
import Grid from "@mui/material/Grid";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [monster, setMonster] = useState([]);
  const [search, setSearch] = useState([]);
  const filteredMons = monster.filter((monster) =>
    monster.name
      .toString()
      .toLowerCase()
      .includes(search.toString().toLowerCase())
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((edited) => setMonster(edited));
  }, []);
  console.log(search);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSearch(value);
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          margin: "40px",
          fontFamily: "Bigelow Rules",
          fontSize: "6rem",
          color: "green",
        }}
      >
        Monster Hunt
      </h1>
      <SearchBar handleOnChange={handleOnChange} />
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {filteredMons.map((monst) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardComponent monst={monst} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
