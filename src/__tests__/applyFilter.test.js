import applyFilter from "../helpers/applyFilter";

describe("applyFilter", () => {
  const recipes = [
    {
      label: "Scrambled Tofu",
      calories: 2000,
      totalTime: 120,
      dietLabels: ["Vegan"],
      healthLabels: []
    },
    {
      label: "Katsu Curry",
      calories: 1500,
      totalTime: 60,
      dietLabels: [],
      healthLabels: []
    },
    {
      label: "Protein Smoothie",
      calories: 100,
      totalTime: 120,
      dietLabels: [],
      healthLabels: ["Low-Fat"]
    }
  ];

  const filter = {
    searchTerm: "",
    maxCalories: 3000,
    maxTime: 200,
    labels: {
      "Low-Fat": false
    }
  };

  it("filters by search term", () => {
    const searchFilter = { ...filter, ...{ searchTerm: "tofu" } };
    const results = applyFilter(recipes, searchFilter);
    expect(results.length).toBe(1);
    expect(results[0]).toBe(recipes[0]);
  });

  it("filters by calories", () => {
    const searchFilter = { ...filter, ...{ maxCalories: 100 } };
    const results = applyFilter(recipes, searchFilter);
    expect(results.length).toBe(1);
    expect(results[0]).toBe(recipes[2]);
  });

  it("filters by time", () => {
    const timeFilter = { ...filter, ...{ maxTime: 60 } };
    const results = applyFilter(recipes, timeFilter);
    expect(results.length).toBe(1);
    expect(results[0]).toBe(recipes[1]);
  });

  it("filters by label", () => {
    const labelFilter = { ...filter, ...{ labels: { "Low-Fat": true } } };
    const results = applyFilter(recipes, labelFilter);
    expect(results.length).toBe(1);
    expect(results[0]).toBe(recipes[2]);
  });
});
