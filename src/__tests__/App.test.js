import { render, screen } from '@testing-library/react';
import App from '../components/App';
import store from '../store/store';

test('renders learn react link', () => {
  store.then(() => {
    render(<App store={store} />);
    it('passes a test', () => {
      return true;
    })
  })
});
