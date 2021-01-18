import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import styles from "./Recipe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Recipe = ({ meals }) => {
  let { id } = useParams();
  const meal = meals.find(meal => meal.key === parseInt(id));

  const ingredients = (
    <div>
      <dt>Ingredients</dt>
      {meal.ingredientLines.map(line => (
        <dd>{line}</dd>
      ))}
    </div>
  );

  const healthLabels = (
    <>
      {meal.healthLabels.map(label => (
        <span className="badge bg-success bg-gradient mr-1">{label}</span>
      ))}
    </>
  );

  const cautions = (
    <>
      {meal.cautions.map(label => (
        <span className="badge bg-danger bg-gradient mr-1">{label}</span>
      ))}
    </>
  );

  const time =
    meal.totalTime == 0 ? null : (
      <span>
        <FontAwesomeIcon
          icon={faClock}
          transform="grow-5"
          className="mr-2 ml-1"
        />
        {meal.totalTime} minutes
      </span>
    );

  return (
    <>
      <Header homeURL="../"></Header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img className="card-img-top" src={meal.image} />
          </div>
          <div className="card-body col-6 py-0">
            <h1 className="card-title">{meal.label}</h1>
            <h3 className="card-subtitle text-muted font-weight-lighter">
              from {meal.source}
            </h3>
            <div className={styles["font-size-20"]}>
              {healthLabels}
              {cautions}
            </div>
            <div
              className={`d-flex justify-content-between mt-2 ${styles["font-size-20"]}`}
            >
              {time}
              <span>Calories: {Math.floor(meal.calories)}</span>
            </div>
            {ingredients}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  meals: state.meals
});

export default connect(mapStateToProps)(Recipe);
