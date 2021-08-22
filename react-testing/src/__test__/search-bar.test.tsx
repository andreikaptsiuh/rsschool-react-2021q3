/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../shared/store/store';
import { SearchBar } from '../components/pages/home/search-bar';

test('Renders without crashing', () => {
  const div = document.createElement('div');

  const el = render(
    <Router>
      <Provider store={store}>
        <SearchBar />
      </Provider>
    </Router>,
    div,
  );

  expect(el).not.toBeNull();
});
