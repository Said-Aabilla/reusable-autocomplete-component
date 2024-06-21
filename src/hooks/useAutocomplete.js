import { useMemo } from 'react';

const useAutocomplete = (options, query) => {
  const filteredOptions = useMemo(() => {
    return options
      .filter(option => option.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => a.localeCompare(b));
  }, [options, query]);

  const groupedOptions = useMemo(() => {
    return filteredOptions.reduce((groups, option) => {
      const firstLetter = option[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(option);
      return groups;
    }, {});
  }, [filteredOptions]);

  return groupedOptions;
};

export default useAutocomplete;
