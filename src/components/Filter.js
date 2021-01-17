import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeFilter } from "../actions";

const Filter = ({ changeFilter }) => {
  const [filter, setFilter] = useState({
    searchTerm: "",
    maxCalories: 3000,
    maxTime: 120,
    labels: {
      "Peanut-Free": false,
      "Tree-Nut-Free": false,
      "Alcohol-Free": false,
      "Sugar-Conscious": false,
      "Low-Fat": false,
      "Balanced": false,
    }
  });

  useEffect(() => {
    changeFilter(filter);
  });

  const handleChange = event => {
    const { target } = event;
    const { value, id } = target;

    if (filter.hasOwnProperty(id)) {
      setFilter({
        ...filter,
        ...{ [id]: value }
      });
    } else if (filter.labels.hasOwnProperty(id)) {
      setFilter({
        ...filter,
        ...{ labels: {
          ...filter.labels,
          [id]: !filter.labels[id]
        }}
      });
    }
  };

  return (
    <form onChange={handleChange.bind(this)}>
      <label htmlFor="searchTerm" className="form-label">
        Search Term
      </label>
      <input
        type="text"
        className="form-control"
        id="searchTerm"
        value={filter.searchTerm}
      />

      <label htmlFor="maxCalories" className="form-label">
        Calories
      </label>
      <input
        type="range"
        className="form-range"
        id="maxCalories"
        min="0"
        max="3000"
        value={filter.maxCalories}
      />

      <label htmlFor="maxTime" className="form-label">
        Time
      </label>
      <input
        type="range"
        className="form-range"
        id="maxTime"
        min="0"
        max="120"
        step="15"
        value={filter.maxTime}
      />

      <fieldset>
        <h4>Allergens, Diets and Health</h4>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="Peanut-Free"
          />
          <label className="form-check-label" htmlFor="peanutFree">
            Peanut-Free
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="Tree-Nut-Free"
          />
          <label className="form-check-label" htmlFor="treeNutFree">
            Tree-Nut-Free
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="Alcohol-Free"
          />
          <label className="form-check-label" htmlFor="alcoholFree">
            Alcohol-Free
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="Sugar-Conscious"
          />
          <label className="form-check-label" htmlFor="sugarConscious">
            Sugar-Conscious
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="Low-Fat"
          />
          <label className="form-check-label" htmlFor="lowFat">
            Low-Fat
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="Balanced"
          />
          <label className="form-check-label" htmlFor="balanced">
            Balanced
          </label>
        </div>
      </fieldset>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  }
});

const mapStateToProps = state => ({
  filter: state.filter
});

export default connect(null, mapDispatchToProps)(Filter);
