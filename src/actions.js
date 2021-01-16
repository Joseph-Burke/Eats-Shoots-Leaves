import constants from "./constants";
const { CHANGE_FILTER } = constants;

export const changeFilter = filter => {
  return {
    type: CHANGE_FILTER,
    filter
  };
};
