import React from "react";
import PropTypes from "prop-types";

function SearchBox({ handleBlur, handleChange }) {
  return (
    <div className="form-group">
      <input
        name="Search"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label>Search</label>
    </div>
  );
}

SearchBox.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchBox;
