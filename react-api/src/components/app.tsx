import React, { useState } from 'react';
import { SearchPanel } from './search-panel';

const App: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  console.log(search);

  return (
    <>
      <SearchPanel setSearch={setSearch} />
    </>
  );
};

export default App;
