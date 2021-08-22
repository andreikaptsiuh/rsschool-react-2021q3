/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../shared/store/store';
import { Details } from '../components/pages/details';

/* eslint-disable no-undef */
test('Renders without crashing', () => {
  const div = document.createElement('div');
  expect(div).not.toBeNull();
  ReactDOM.render(
    <Provider store={store}>
      <Details />
    </Provider>,
    div,
  );
});
