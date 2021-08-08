import React, { useEffect, useState } from 'react';
import { SearchBar } from './search-bar';
import { getSearch } from '../shared/func';
import { ResultBoard } from './result-board/result-board';
import { ISearch } from '../shared/interfaces';

const App: React.FC = () => {
  const [search, setSearch] = useState<ISearch>({ search: '', sort: '', size: 5 });
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCards = async (): Promise<void> => {
      setIsLoading(true);
      setCards(await getSearch(search));
      setIsLoading(false);
    };
    getCards();
  }, [search]);

  return (
    <>
      <SearchBar setSearch={setSearch} />
      {isLoading ? <h2>loading...</h2> : <ResultBoard cards={cards} />}
    </>
  );
};

export default App;
