import React from 'react';

const AutocompleteList = ({ options }) => {
  const optionKeys = Object.keys(options);

  return (
    <ul className="border border-gray-300 mt-1 max-h-60 overflow-auto">
      {optionKeys.length === 0 ? (
        <li className="p-2 text-gray-500">No options</li>
      ) : (
        optionKeys.map((key) => (
          <div key={key}>
            <li className="p-2 bg-gray-200 font-bold">{key}</li>
            {Array.isArray(options[key]) && options[key].map((option, index) => (
              <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
                {option}
              </li>
            ))}
          </div>
        ))
      )}
    </ul>
  );
};

export default AutocompleteList;
