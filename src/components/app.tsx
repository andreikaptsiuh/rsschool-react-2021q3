import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Header } from './header';
import { Home } from './pages/home/home';
import { About } from './pages/about';
import { Details } from './pages/details';
import { NotPage } from './pages/not-page';
import { ISearch } from '../shared/interfaces';
import { getSearch } from '../shared/func';
import { cardContext, Context } from '../shared/context';

const App: React.FC = () => {
  const [search, setSearch] = useState<ISearch>({
    search: '', sort: '', size: 5, page: 1,
  });
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(0);
  const location = useLocation();

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

  return (
    <Context.Provider value={cardContext}>
      <Header />
      <TransitionGroup>
        <CSSTransition
          timeout={600}
          classNames="fade"
          key={location.key}
        >
          <Switch location={location}>
            <Route path="/" exact>
              <Home setSearch={setSearch} cards={cards} pages={pages} isLoading={isLoading} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/details/:title">
              <Details />
            </Route>
            <Route path="/404" component={NotPage} />
            <Redirect to="/404" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Context.Provider>
  );
};

export default App;
