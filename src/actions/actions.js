import constants from "../constants/constants";
const { CHANGE_FILTER } = constants;

export const changeFilter = filter => {
  return {
    type: CHANGE_FILTER,
    filter
  };
};
