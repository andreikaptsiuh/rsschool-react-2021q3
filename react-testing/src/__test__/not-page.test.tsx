/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotPage } from '../components/pages/not-page';

/* eslint-disable no-undef */
test('Renders without crashing', () => {
  const div = document.createElement('div');

  const el = render(
    <Router>
      <NotPage />
    </Router>,
    div,
  );
  expect(el).not.toBeNull();
});
