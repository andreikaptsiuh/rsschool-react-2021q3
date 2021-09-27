/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../shared/store/store';
import { Details } from '../components/pages/details';

test('Renders without crashing', () => {
  const el = render(
    <Provider store={store}>
      <Details />
    </Provider>,
  );
  expect(el).not.toBeNull();
});
