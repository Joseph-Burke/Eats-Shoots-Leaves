import { Provider } from "react-redux";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import { StaticRouter, MemoryRouter, Route } from "react-router-dom";
import Recipe from "../components/Recipe";
import storePromise from "../store/store";

test("the Recipe component renders correctly", async () => {
  const store = await storePromise;

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/recipe/2"]} initialIndex={1}>
        <Route path="/recipe/:id" children={<Recipe />} />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByTestId('header')).toBeInTheDocument();
});
