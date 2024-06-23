import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AutocompleteInput = ({ query, setQuery, onKeyDown, onFocus }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        className="w-full border border-gray-300 p-2 pr-10"
        placeholder="Search..."
      />
      {query && (
        <button
          onClick={() => setQuery('')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
        </button>
      )}
    </div>
  );
};

export default AutocompleteInput;
