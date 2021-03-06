import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import App from '../components/App';
import store from '../store/test-store';

test('the App component renders correctly', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <Route path="/">
          <App />
        </Route>
      </MemoryRouter>
    </Provider>,
  );
  const [header, filterForm, mealsList] = [
    screen.getByTestId('header'),
    screen.getByTestId('filterForm'),
    screen.getByTestId('mealsList'),
  ];

  [header, filterForm, mealsList].forEach(item => {
    expect(item).toBeInTheDocument();
  });
});
