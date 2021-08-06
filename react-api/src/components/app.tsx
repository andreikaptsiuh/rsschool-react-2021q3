import React, { useEffect, useState } from 'react';
import { SearchBar } from './search-bar';
import { getSearch } from '../shared/func';
import { ResultBoard } from './result-board/result-board';
import { ISearch } from '../shared/interfaces';

const App: React.FC = () => {
  const [search, setSearch] = useState<ISearch>({ search: '', sort: '' });
  const [cards, setCards] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const getCards = async (): Promise<void> => {
      setLoad(true);
      setCards(await getSearch(search));
      setLoad(false);
    };
    getCards();
  }, [search]);

  return (
    <>
      <SearchBar setSearch={setSearch} />
      {load ? <h2>loading...</h2> : <ResultBoard cards={cards} />}
    </>
  );
};

export default App;
