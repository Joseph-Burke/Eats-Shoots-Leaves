import constants from '../constants/constants';

const { CHANGE_FILTER } = constants;

const filterReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        meals: state.meals,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default filterReducer;
