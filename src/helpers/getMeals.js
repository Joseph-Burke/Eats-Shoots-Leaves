export default async function() {
  const { REACT_APP_ID: id, REACT_APP_KEY: key } = process.env;
  const data = await fetch(
    `https://api.edamam.com/search?q=vegan&health=vegan&to=100&app_id=${id}&app_key=${key}`
  ).then(response => response.json());
  const recipes = data.hits.map(arrayItem => arrayItem.recipe);
  return recipes;
}
