import { createStore } from "redux";
import reducer from "../reducers/reducer";
import getMeals from "../helpers/getMeals.js";

export default (async function() {
  let meals = await getMeals().then(meals =>
    meals.map((meal, index) => ({
      key: index,
      ...meal
    }))
  );

  const filter = {
    searchTerm: '',
    maxCalories: 10000, 
    maxTime: 1000, 
    labels: {
      "Peanut-Free": false,
      "Tree-Nut-Free": false,
      "Alcohol-Free": false,
      "Sugar-Conscious": false,
      "Low-Fat": false,
      "Balanced": false,
    }
  };
  const initialState = {
    meals,
    filter
  };
  return createStore(reducer, initialState);
})();
