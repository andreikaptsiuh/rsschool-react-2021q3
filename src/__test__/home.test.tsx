/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../shared/store/store';
import { Home } from '../components/pages/home/home';

test('Renders without crashing', () => {
  const el = render(
    <Router>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>,
  );
  expect(el).not.toBeNull();
});
