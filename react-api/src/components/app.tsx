import React, { useState } from 'react';
import { SearchBar } from './search-bar';

const App: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  console.log(search);

  return (
    <>
      <SearchBar setSearch={setSearch} />
    </>
  );
};

export default App;
