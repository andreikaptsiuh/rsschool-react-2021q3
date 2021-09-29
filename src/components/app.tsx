import React from 'react';
import {
  Switch,
  Route,
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
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/details/:title">
              <Details />
            </Route>
            <Route component={NotPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default App;
