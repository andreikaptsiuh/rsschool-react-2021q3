/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../shared/store/store';
import { Home } from '../components/pages/home/home';

/* eslint-disable no-undef */
test('Renders without crashing', () => {
  const div = document.createElement('div');

  const el = render(
    <Router>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>,
    div,
  );
  expect(el).not.toBeNull();
});
