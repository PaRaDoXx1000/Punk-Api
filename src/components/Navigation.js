import React from "react";
import Filter from "./Filter";
import Search from "./Search";
const Navigation = (props) => {
  const { setSearchText, searchBeers, setUrl } = props;
  return (
    <div className="nav">
      <h1>Punk API</h1>
      <Search setSearchText={setSearchText} searchBeers={searchBeers} />
      <Filter setUrl={setUrl} />
    </div>
  );
};
export default Navigation;