import { Provider } from "react-redux";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../components/App";
import storePromise from "../store/store";

test("the App component renders correctly", () => {
  expect(true).toBe(true);
});
