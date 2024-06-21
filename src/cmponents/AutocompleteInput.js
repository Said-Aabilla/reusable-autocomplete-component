import React from 'react';

const AutocompleteInput = ({ query, setQuery, onKeyDown ,onFocus}) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      className="w-full border border-gray-300 p-2"
      placeholder="Search..."
    />
  );
};

export default AutocompleteInput;
