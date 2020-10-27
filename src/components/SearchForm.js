import React, { useState } from "react";

export default function SearchForm(props) {
  const handleInputChange = props.handleInputChange;
  const query = props.query;
  return (
    <section className="search-form">
      <form className="search">
        <label htmlFor="name">Search:</label>
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
    </section>
  );
}
