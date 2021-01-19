import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import changeFilter from '../actions/actions';
import styles from './styles/Filter.module.css';

const Filter = ({ changeFilter }) => {
  const [filter, setFilter] = useState({
    searchTerm: '',
    maxCalories: 3000,
    maxTime: 120,
    labels: {
      'Peanut-Free': false,
      'Tree-Nut-Free': false,
      'Alcohol-Free': false,
      'Sugar-Conscious': false,
      'Low-Fat': false,
      Balanced: false,
    },
  });

  useEffect(() => {
    changeFilter(filter);
  });

  const handleChange = event => {
    const { target } = event;
    const { value, id } = target;

    if (Object.prototype.hasOwnProperty.call(filter, id)) {
      setFilter({
        ...filter,
        ...{ [id]: value },
      });
    } else if (Object.prototype.hasOwnProperty.call(filter.labels, id)) {
      setFilter({
        ...filter,
        ...{
          labels: {
            ...filter.labels,
            [id]: !filter.labels[id],
          },
        },
      });
    }
  };

  return (
    <form data-testid="filterForm" className="border rounded-lg p-3">
      <h4>Filter</h4>

      <div className="d-flex flex-column flex-md-row">
        <div className="w-100 w-md-50 mr-md-3">
          <label htmlFor="searchTerm" className="form-label">
            Search Term
            <input
              type="text"
              className="form-control"
              id="searchTerm"
              value={filter.searchTerm}
              onChange={handleChange.bind(this)}
            />
          </label>
        </div>

        <div className="w-100 w-md-50 ml-md-3">
          <div className="d-flex">
            <label
              htmlFor="maxCalories"
              className={`form-label ${styles['range-label']} `}
            >
              Calories
              <input
                type="range"
                className="form-range flex-grow-1"
                id="maxCalories"
                min="0"
                max="3000"
                step="100"
                value={filter.maxCalories}
                onChange={handleChange.bind(this)}
              />
            </label>
            <span className={styles['range-value-display']}>
              {[3000, '3000'].includes(filter.maxCalories)
                ? 'Any Calories'
                : `<=${filter.maxCalories} Calories`}
            </span>
          </div>

          <div className="d-flex">
            <label
              htmlFor="maxTime"
              className={`form-label ${styles['range-label']} `}
            >
              Time
              <input
                type="range"
                className="form-range flex-grow-1"
                id="maxTime"
                min="0"
                max="120"
                step="15"
                value={filter.maxTime}
                onChange={handleChange.bind(this)}
              />
            </label>
            <span className={styles['range-value-display']}>
              {[120, '120'].includes(filter.maxTime)
                ? 'Any Time'
                : `<=${filter.maxTime} Minutes`}
            </span>
          </div>
        </div>
      </div>

      <fieldset
        className={`pt-3 pb-1 w-100 w-md-50 ${styles['labels-fieldset']}`}
        onChange={handleChange.bind(this)}
      >
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="Peanut-Free">
            <input
              className="form-check-input"
              type="checkbox"
              id="Peanut-Free"
            />
            Peanut-Free
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="Tree-Nut-Free">
            <input
              className="form-check-input"
              type="checkbox"
              id="Tree-Nut-Free"
            />
            Tree-Nut-Free
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="Alcohol-Free">
            <input
              className="form-check-input"
              type="checkbox"
              id="Alcohol-Free"
            />
            Alcohol-Free
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="Sugar-Conscious">
            <input
              className="form-check-input"
              type="checkbox"
              id="Sugar-Conscious"
            />
            Sugar-Conscious
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="Low-Fat">
            <input className="form-check-input" type="checkbox" id="Low-Fat" />
            Low-Fat
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="Balanced">
            <input className="form-check-input" type="checkbox" id="Balanced" />
            Balanced
          </label>
        </div>
      </fieldset>
    </form>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(null, mapDispatchToProps)(Filter);
