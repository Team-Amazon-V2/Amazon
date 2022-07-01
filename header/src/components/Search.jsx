import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search(props) {
  return (
    <SearchIcon onClick={props.handleSearch} className="header_searchIcon" />
  );
}

export default Search;
