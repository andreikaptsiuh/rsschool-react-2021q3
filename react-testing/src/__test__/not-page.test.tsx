/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotPage } from '../components/pages/not-page';

test('Renders without crashing', () => {
  const el = render(
    <Router>
      <NotPage />
    </Router>,
  );
  expect(el).not.toBeNull();
});
