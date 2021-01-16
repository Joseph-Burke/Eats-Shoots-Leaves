import { createStore } from "redux";
import reducer from "./reducer.js";
import getMeals from "./helpers/getMeals.js";

export default (async function() {
  let meals = await getMeals();
  const initialState = {
    meals
  };
  return createStore(reducer, initialState);
})();
