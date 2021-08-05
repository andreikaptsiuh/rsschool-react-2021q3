import React, { useEffect, useState } from 'react';
import { SearchBar } from './search-bar';
import { getSearch } from '../shared/func';
import { ResultBoard } from './result-board/result-board';

const App: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async (): Promise<void> => {
      setCards(await getSearch(search));
    };
    getCards();
  }, [search]);

  return (
    <>
      <SearchBar setSearch={setSearch} />
      <ResultBoard cards={cards} />
    </>
  );
};

export default App;
