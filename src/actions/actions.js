import constants from '../constants/constants';

const { CHANGE_FILTER } = constants;

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export default changeFilter;
