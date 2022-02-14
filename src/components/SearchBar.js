import React from "react";
import TextField from "@mui/material/TextField";
const SearchBar = ({ handleOnChange }) => {
  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        margin: "10px",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search.."
        variant="outlined"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchBar;
