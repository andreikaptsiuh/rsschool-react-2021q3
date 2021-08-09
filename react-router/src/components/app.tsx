import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Header } from './header';
import { Home } from './pages/home/home';
import { About } from './pages/about';
import { Details } from './pages/details';
import { NotPage } from './pages/not-page';
import { ICard, ISearch } from '../shared/interfaces';
import { getSearch } from '../shared/func';
import { Context } from '../shared/context';

const App: React.FC = () => {
  const [search, setSearch] = useState<ISearch>({
    search: '', sort: '', size: 5, page: 1,
  });
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const getCards = async (): Promise<void> => {
      setIsLoading(true);
      const res = await getSearch(search);
      setCards(res.articles ? res.articles : []);

      const allRes = res.totalResults ? Math.round(res.totalResults / search.size) : 0;
      setPages(allRes);
      setIsLoading(false);
    };
    getCards();
  }, [search]);

  const cont = {
    card: {
      title: '',
      author: '',
      description: '',
      url: '',
    },
    set: function setType(card: ICard): void {
      cont.card = card;
    },
  };

  return (
    <Router>
      <Context.Provider value={cards[0]}>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home setSearch={setSearch} cards={cards} pages={pages} isLoading={isLoading} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route component={NotPage} />
        </Switch>
      </Context.Provider>
    </Router>
  );
};

export default App;
