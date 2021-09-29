import React, { useEffect, useState } from 'react';
import { SearchBar } from './search-bar';
import { getSearch } from '../shared/func';
import { ResultBoard } from './result-board/result-board';
import { ISearch } from '../shared/interfaces';

const App: React.FC = () => {
  const [search, setSearch] = useState<ISearch>({
    search: '', sort: '', size: 5, page: 1,
  });
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(0);

  const getCards = async (): Promise<void> => {
    setIsLoading(true);
    const res = await getSearch(search);
    setCards(res.articles ? res.articles : []);

    const allRes = res.totalResults ? Math.round(res.totalResults / search.size) : 0;
    setPages(allRes);
    setIsLoading(false);
  };

  useEffect(() => {
    if (search.search !== '') {
      getCards();
    }
  }, [search]);

  return (
    <>
      <SearchBar setSearch={setSearch} pages={pages} />
      {isLoading ? <h2>loading...</h2> : <ResultBoard cards={cards} />}
    </>
  );
};

export default App;
