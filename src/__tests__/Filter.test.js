import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import Filter from '../containers/Filter';
import store from '../store/test-store';

test('the Filter component renders correctly', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <Route path="/">
          <Filter />
        </Route>
      </MemoryRouter>
    </Provider>,
  );

  const filterForm = screen.getByTestId('filterForm');
  expect(filterForm).toBeInTheDocument();
});
