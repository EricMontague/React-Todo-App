import React from "react";
import Filter from "./Filter";

function Footer({ filter, setFilter, handleClick }) {
  return (
    <footer className="card-footer">
      <button type="button" className="btn btn-dark" onClick={handleClick}>
        Clear All
      </button>

      <Filter setFilter={setFilter} filter={filter} />
    </footer>
  );
}

export default Footer;
