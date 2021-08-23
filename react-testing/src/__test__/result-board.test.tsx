/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ResultBoard } from '../components/pages/home/result-board';
import { store } from '../shared/store/store';

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

  it('render title', () => {
    const el = render(
      <Router>
        <Provider store={store}>
          <ResultBoard />
        </Provider>
      </Router>,
    );
    const resultBoardTitle = el.getByTestId('result_board__title');
    expect(resultBoardTitle.textContent).toBe('Elements is not found');
  });

  it('render search items', () => {
    const el = render(
      <Router>
        <Provider store={store}>
          <ResultBoard />
        </Provider>
      </Router>,
    );
    const resBoard = el.getByTestId('result_board');
    expect(resBoard.childElementCount).toBe(1);
  });
});
