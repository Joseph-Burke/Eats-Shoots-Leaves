import constants from './constants';

const { CHANGE_FILTER } = constants;

export default function(state, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        meals: state.meals,
        filter: action.filter
      }
    default:
      return state;
  }
};
