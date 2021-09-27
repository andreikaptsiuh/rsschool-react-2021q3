import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Header } from './header';
import { ROUTES } from '../shared/routes';

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
            { ROUTES.map((route) => <Route component={route.component} path={route.path} key={route.key} />) }
            <Redirect to="/404" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default App;
