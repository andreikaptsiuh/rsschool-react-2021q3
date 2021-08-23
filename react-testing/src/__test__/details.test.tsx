/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../shared/store/store';
import { Details } from '../components/pages/details';

/* eslint-disable no-undef */
test('Renders without crashing', () => {
  const el = render(
    <Provider store={store}>
      <Details />
    </Provider>,
  );
  expect(el).not.toBeNull();
});
