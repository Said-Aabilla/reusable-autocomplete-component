import React, { useState, useEffect, useRef } from 'react';
import AutocompleteInput from './AutocompleteInput';
import AutocompleteList from './AutocompleteList';
import useAutocomplete from '../hooks/useAutocomplete';

const Autocomplete = ({ options }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showOptions, setShowOptions] = useState(false);
  const groupedOptions = useAutocomplete(options, query);
  const flatOptions = Object.values(groupedOptions).flat();
  
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, flatOptions.length - 1));
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      setQuery(flatOptions[selectedIndex]);
      setShowOptions(false);
      setSelectedIndex(-1);
    }
  };

  const handleFocus = (e) => {
    setShowOptions(true);
  };

  useEffect(() => {
    if (query === '') {
      setShowOptions(false);
    } else {
      setShowOptions(true);
    }
  }, [query]);

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <AutocompleteInput
        query={query}
        setQuery={setQuery}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
      />
      {showOptions && (
        <AutocompleteList
          options={groupedOptions}
          selectedIndex={selectedIndex}
        />
      )}
    </div>
  );
};

export default Autocomplete;
