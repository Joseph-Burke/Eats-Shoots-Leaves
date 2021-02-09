import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import Recipe from '../components/Recipe';
import store from '../store/test-store';

test('the Recipe component renders correctly', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/recipe/2']} initialIndex={1}>
        <Route path="/recipe/:id">
          <Recipe />
        </Route>
      </MemoryRouter>
    </Provider>,
  );

  const [header, container, ingredientsTitle] = [
    screen.getByTestId('header'),
    screen.getByTestId('container'),
    screen.getByText(/ingredients/i),
  ];

  expect(header).toBeInTheDocument();
  expect(container).toBeInTheDocument();
  expect(ingredientsTitle).toBeInTheDocument();
});
