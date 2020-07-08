import React from "react";

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

export default SearchBox;
