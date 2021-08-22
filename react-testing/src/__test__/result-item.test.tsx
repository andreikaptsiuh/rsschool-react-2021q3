/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../shared/store/store';
import { ResultItem } from '../components/pages/home/result-item';

/* eslint-disable no-undef */
it('Renders without crashing', () => {
  const card = {
    id: 8,
    title: 'title',
    author: 'author',
    description: 'description',
    url: 'url',
  };
  const div = document.createElement('div');

  const el = render(
    <Router>
      <Provider store={store}>
        <ResultItem card={card} />
      </Provider>
    </Router>,
    div,
  );

  expect(el).not.toBeNull();
});
