/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../shared/store/store';
import { SearchBar } from '../components/pages/home/search-bar';

test('Renders without crashing', () => {
  const el = render(
    <Router>
      <Provider store={store}>
        <SearchBar />
      </Provider>
    </Router>,
  );

  expect(el).not.toBeNull();
});
