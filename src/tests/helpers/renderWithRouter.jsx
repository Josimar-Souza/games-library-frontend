import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => (
  {
    ...render(
      <BrowserRouter>
        { component }
      </BrowserRouter>,
    ),
  }
);

export default renderWithRouter;
