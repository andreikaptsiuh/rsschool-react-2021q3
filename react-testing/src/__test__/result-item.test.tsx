/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

  const el = render(
    <Router>
      <Provider store={store}>
        <ResultItem card={card} />
      </Provider>
    </Router>,
  );

  expect(el).not.toBeNull();
});

it('Add cards to details', () => {
  const card = {
    id: 8,
    title: 'title',
    author: 'author',
    description: 'description',
    url: 'url',
  };

  const el = render(
    <Router>
      <Provider store={store}>
        <ResultItem card={card} />
      </Provider>
    </Router>,
  );

  const link = el.getByTestId('result_item__title');

  expect(fireEvent.click(link)).toBe(false);
});
