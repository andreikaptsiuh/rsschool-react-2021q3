/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);
  const [pages, setPages] = useState(0);
  const location = useLocation();

  /* useEffect(() => {
    const getCards = async (): Promise<void> => {
      const res = await getSearch(search);
      setCards(res.articles ? res.articles : []);

      const allRes = res.totalResults ? Math.round(res.totalResults / search.size) : 0;
      setPages(allRes);

      dispatch({
        type: 'LOAD',
        payload: false,
      });
    };
    getCards();
  }, [search]); */

  const cont = {
    title: ' ',
    author: ' ',
    description: ' ',
    url: ' ',
    set: function setType(card: ICard): void {
      cont.title = card.title;
      cont.author = card.author;
      cont.description = card.description;
      cont.url = card.url;
    },
  };

  return (
    <Context.Provider value={cards[0]}>
      <Header />
      <TransitionGroup>
        <CSSTransition
          timeout={500}
          classNames="fade"
          key={location.key}
        >
          <Switch location={location}>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/details">
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
