/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { About } from '../components/pages/about';

test('Renders without crashing', () => {
  const el = render(<About />);
  expect(el).not.toBeNull();
});
