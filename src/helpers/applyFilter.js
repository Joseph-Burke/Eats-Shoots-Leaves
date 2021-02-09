const applyFilter = (mealList, filterObj) => {
  const {
    searchTerm, maxCalories, maxTime, labels,
  } = filterObj;

  return mealList.filter(meal => {
    const {
      label,
      calories,
      totalTime,
      dietLabels: mealDietLabels,
      healthLabels: mealHealthLabels,
    } = meal;

    const searchTermMatch = label
      .toUpperCase()
      .includes(searchTerm.toUpperCase());
    const caloriesMatch = calories <= maxCalories;
    const timeMatch = totalTime <= maxTime;

    const labelsMatch = (() => {
      let match = true;

      Object.keys(labels)
        .filter(key => labels[key] === true)
        .forEach(label => {
          if (
            !mealDietLabels.includes(label)
            && !mealHealthLabels.includes(label)
          ) {
            match = false;
          }
        });

      return match;
    })();

    const allFiltersMatch = searchTermMatch && caloriesMatch && timeMatch && labelsMatch;

    return allFiltersMatch;
  });
};

export default applyFilter;
