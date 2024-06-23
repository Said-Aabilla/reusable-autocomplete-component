import React from 'react';

const AutocompleteList = ({ options, selectedIndex, onSelectItem }) => {
  const optionKeys = Object.keys(options);
  let index = 0;

  return (
    <ul className="border border-gray-300 mt-1 max-h-60 overflow-auto">
      {optionKeys.length === 0 ? (
        <li className="p-2 text-gray-500">No options</li>
      ) : (
        optionKeys.map((key) => (
          <div key={key}>
            <li className="p-2 bg-gray-200 font-bold">{key}</li>
            {Array.isArray(options[key]) && options[key].map((option) => {
             
             const expression =  (
              <li
                key={option}
                onClick={() => onSelectItem(option)}
                className={`p-2 cursor-pointer ${index === selectedIndex ? 'bg-gray-200' : ''}`}
              >
                {option}
              </li>
            )

             index ++;
             return expression;
            })}
          </div>
        ))
      )}
    </ul>
  );
};

export default AutocompleteList;
