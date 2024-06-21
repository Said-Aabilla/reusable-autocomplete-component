import React, { useState } from 'react';
import AutocompleteInput from './AutocompleteInput';
import AutocompleteList from './AutocompleteList';
import useAutocomplete from '../hooks/useAutocomplete';

const Autocomplete = ({ options }) => {
  const [query, setQuery] = useState('');
  const groupedOptions = useAutocomplete(options, query);

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <AutocompleteInput query={query} setQuery={setQuery} />
      {query && <AutocompleteList options={groupedOptions} />}
    </div>
  );
};

export default Autocomplete;
