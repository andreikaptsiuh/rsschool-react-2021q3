/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../shared/store/store';
import { SearchBar } from '../components/pages/home/search-bar';
import { ResultBoard } from '../components/pages/home/result-board';

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

test('Sort', () => {
  const el = render(
    <Router>
      <Provider store={store}>
        <SearchBar />
      </Provider>
    </Router>,
  );

  const sortElement = el.getByTestId('sort-select') as HTMLSelectElement;
  fireEvent.change(sortElement, { target: { value: 'popular' } });

  expect(sortElement.value).toBe('popular');
});

test('Search', () => {
  const el = render(
    <Router>
      <Provider store={store}>
        <SearchBar />
        <ResultBoard />
      </Provider>
    </Router>,
  );

  const searchBarInput = el.getByTestId('search-bar') as HTMLInputElement;
  searchBarInput.value = 'app';

  expect(searchBarInput.value).toBe('app');

  fireEvent.change(searchBarInput, { target: { value: 'apple' } });
  expect(searchBarInput.value).toBe('apple');

  const formSubmitElement = el.getByTestId('form_submit');
  fireEvent.submit(formSubmitElement);
  setTimeout(() => {
    const resultBoardElement = el.getAllByTestId('result_board__item');
    expect(resultBoardElement.length).toBe(6);

    const link = el.getAllByTestId('result_item__title');
    fireEvent.click(link[0]);

    expect(link.length).toBe(5);

    expect(screen.getByText(/details/)).toBeInTheDocument();
  }, 2000);
});
