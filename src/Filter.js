import React from 'react';

const Filter = ({ filter, handleFilterChange }) => (
  <label>
    Filter contacts by name:
    <input type="text" value={filter} onChange={handleFilterChange} />
  </label>
);

export default Filter;
