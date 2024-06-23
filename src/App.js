import React from 'react';
import Autocomplete from './components/Autocomplete';

const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold my-4">Autocomplete Component</h1>
      <Autocomplete options={options} />
    </div>
  );
}

export default App;
