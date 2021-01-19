import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import storePromise from "../store/store";

test("the Header component renders correctly", async () => {
  const store = await storePromise;
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]} initialIndex={1}>
        <Route path="/" children={<Header />} />
      </MemoryRouter>
    </Provider>
  );

  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});
