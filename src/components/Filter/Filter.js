import React from 'react';
import classes from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
  const handleFilterChange = e => {
    onChange(e.target.value);
  };

  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="filter">
        Find contact by Name:
      </label>
      <input
        className={classes.input}
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
