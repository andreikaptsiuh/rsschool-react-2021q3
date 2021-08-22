/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { getByTestId } from '@testing-library/dom';
import { ResultBoard } from '../components/pages/home/result-board';
import { store } from '../shared/store/store';

/* eslint-disable no-undef */
describe('result-board', () => {
  const div = document.createElement('div');
  const el = render(
    <Router>
      <Provider store={store}>
        <ResultBoard />
      </Provider>
    </Router>,
    div,
  );

  it('render', () => {
    expect(el).not.toBeNull();
  });

  it('render title', () => {
    const resultBoardElement = getByTestId(div, 'result_board');
    const item = resultBoardElement.firstChild;
    expect(item.textContent).toBe('Elements is not found');
  });
});
