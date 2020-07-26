import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';

test('AC button should be in the calculator App', () => {
  const { getByText } = render(<App />);
  const acButton = getByText(/AC/i);
  expect(acButton).toBeInTheDocument();
});
