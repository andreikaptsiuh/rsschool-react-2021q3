/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { About } from '../components/pages/about';

/* eslint-disable no-undef */
test('Renders without crashing', () => {
  const div = document.createElement('div');
  expect(div).not.toBeNull();
  ReactDOM.render(<About />, div);
});
