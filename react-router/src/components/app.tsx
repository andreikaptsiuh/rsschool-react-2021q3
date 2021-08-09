import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Header } from './header';
import { Home } from './pages/home';
import { About } from './pages/about';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
