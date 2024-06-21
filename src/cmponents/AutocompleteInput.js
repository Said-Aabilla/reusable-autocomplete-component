import React from 'react';

const AutocompleteInput = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full border border-gray-300 p-2"
      placeholder="Search..."
    />
  );
};

export default AutocompleteInput;
