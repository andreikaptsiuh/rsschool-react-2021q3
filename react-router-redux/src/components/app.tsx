import React from 'react';
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

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition
          timeout={600}
          classNames="fade"
          key={location.key}
        >
          <Switch location={location}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/details/:id">
              <Details />
            </Route>
            <Route path="/404" component={NotPage} />
            <Redirect to="/404" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default App;
