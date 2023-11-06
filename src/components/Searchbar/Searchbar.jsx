import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div className="search">
      <div className="searchIconWrapper">
        <SearchIcon />
      </div>
      <InputBase
        className="inputBase"
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
}
