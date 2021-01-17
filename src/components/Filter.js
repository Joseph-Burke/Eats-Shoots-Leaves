import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeFilter } from "../actions";

const Filter = ({ changeFilter }) => {
  const [filter, setFilter] = useState({
    searchTerm: ""
  });

  useEffect(() => {
    changeFilter(filter);
  });

  const handleChange = event => {
    const { target } = event;
    const { value } = target;

    setFilter({
      ...filter,
      ...{ [target.id]: value }
    });
  };

  return (
    <form>
      <label htmlFor="searchTerm" className="form-label">
        Search Term
      </label>
      <input
        type="text"
        className="form-control"
        id="searchTerm"
        data-attribute="searchTerm"
        onChange={handleChange.bind(this)}
        value={filter.searchTerm}
      />

      <label htmlFor="caloriesFilter" className="form-label">
        Calories
      </label>
      <input
        type="range"
        className="form-range"
        id="caloriesFilter"
        onChange={({ target: { value } }) => {
          console.log(value);
        }}
        min="0"
        max="3000"
        // value={filter}
      />

      <label htmlFor="timeFilter" className="form-label">
        Time
      </label>
      <input
        type="range"
        className="form-range"
        id="timeFilter"
        onChange={({ target: { value } }) => {
          console.log(value);
        }}
        min="0"
        max="120"
        step="15"
        // value={filter}
      />

      <label htmlFor="timeFilter" className="form-label">
        Time
      </label>
      <input
        type="range"
        className="form-range"
        id="timeFilter"
        onChange={({ target: { value } }) => {
          console.log(value);
        }}
        min="0"
        max="120"
        step="15"
        // value={filter}
      />

      <fieldset>
        <h4>Allergens, Diets and Health</h4>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label class="form-check-label" for="inlineCheckbox1">
            Peanut-Free
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            Tree-Nut-Free
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
          />
          <label class="form-check-label" for="inlineCheckbox3">
            Alcohol-Free
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
          />
          <label class="form-check-label" for="inlineCheckbox3">
            Sugar-Conscious
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
          />
          <label class="form-check-label" for="inlineCheckbox3">
            Low-Fat
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
          />
          <label class="form-check-label" for="inlineCheckbox3">
            Balanced
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
          />
          <label class="form-check-label" for="inlineCheckbox3">
            Sulfites
          </label>
        </div>
      </fieldset>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    // console.log(filter);
    dispatch(changeFilter(filter));
  }
});

export default connect(null, mapDispatchToProps)(Filter);
