import React from "react";
import Filter from "./Filter";
import PropTypes from "prop-types";

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

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Footer;
