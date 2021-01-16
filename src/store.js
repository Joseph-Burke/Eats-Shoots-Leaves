import { createStore } from "redux";
import reducer from "./reducer.js";
import getMeals from "./helpers/getMeals.js";

export default (async function() {
  let meals = await getMeals().then(meals =>
    meals.map((meal, index) => ({
      key: index,
      ...meal
    }))
  );

  const filter = "";
  const initialState = {
    meals,
    filter
  };
  return createStore(reducer, initialState);
})();
