import React from "react";
import Filter from "./Filter";

function Footer({ applyFilter, handleClick }) {
  return (
    <footer className="card-footer">
      <button type="button" className="btn btn-dark" onClick={handleClick}>
        Clear All
      </button>

      <Filter applyFilter={applyFilter} />
    </footer>
  );
}

export default Footer;
