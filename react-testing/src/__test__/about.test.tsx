/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { About } from '../components/pages/about';

/* eslint-disable no-undef */
test('Renders without crashing', () => {
  const el = render(<About />);
  expect(el).not.toBeNull();
});
