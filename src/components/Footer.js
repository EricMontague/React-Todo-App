import React from "react";
import Filter from "./Filter";

function Footer({ filter, changeFilter, handleClick }) {
  return (
    <footer className="card-footer">
      <button type="button" className="btn btn-dark" onClick={handleClick}>
        Clear All
      </button>

      <Filter filter={filter} handleChange={changeFilter} />
    </footer>
  );
}

export default Footer;
