/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ResultBoard } from '../components/pages/home/result-board';
import { store } from '../shared/store/store';
import { SearchBar } from '../components/pages/home/search-bar';

describe('result-board', () => {
  test('render', () => {
    const el = render(
      <Router>
        <Provider store={store}>
          <ResultBoard />
        </Provider>
      </Router>,
    );
    expect(el).not.toBeNull();
  });

  it('render search items', () => {
    const el = render(
      <Router>
        <Provider store={store}>
          <SearchBar />
          <ResultBoard />
        </Provider>
      </Router>,
    );
    const resBoard = el.getByTestId('result_board');
    expect(resBoard.childElementCount).toBe(1);

    const searchBarInput = el.getByTestId('search-bar') as HTMLInputElement;
    searchBarInput.value = 'app';

    expect(searchBarInput.value).toBe('app');

    fireEvent.change(searchBarInput, { target: { value: 'apple' } });
    expect(searchBarInput.value).toBe('apple');
  });
});
