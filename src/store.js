import { createStore } from "redux";
import reducer from "./reducer.js";
import getMeals from "./helpers/getMeals.js";

export default (async function() {
  let meals = await getMeals();
  const filter = '';
  const initialState = {
    meals,
    filter
  };
  return createStore(reducer, initialState);
})();
