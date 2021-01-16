import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Recipe = ({ meals }) => {
  let { id } = useParams();
  const meal = meals.find(meal => meal.key === parseInt(id));

  console.log(meal);

  const ingredients = (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {meal.ingredientLines.map(line => (
          <li>{line}</li>
        ))}
      </ul>
    </div>
  );

  const healthLabels = (
    <div>
      <h3>Health Labels</h3>
      <ul>
        {meal.healthLabels.map(label => (
          <li>{label}</li>
        ))}
      </ul>
    </div>
  );

  const cautions = (
    <div>
      <h3>Cautions</h3>
      <ul>
        {meal.cautions.map(label => (
          <li>{label}</li>
        ))}
      </ul>
    </div>
  );

  const timeStatement = meal.totalTime == 0 ? "Time Unknown" : `Time: ${meal.totalTime} minutes`;
  const totalTime = <p>{timeStatement}</p>;

  return (
    <div>
      <h1>{meal.label}</h1>
      <h3>by "{meal.source}"</h3>
      <img src={meal.image}></img>
      {totalTime}
      {ingredients}
      {healthLabels}
      {cautions}
      <p>Calories: {Math.floor(meal.calories)}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  meals: state.meals
});

export default connect(mapStateToProps)(Recipe);
