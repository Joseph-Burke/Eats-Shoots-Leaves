import { connect } from "react-redux";
import ReactRouterDOM, { useParams } from "react-router-dom";
import Header from "../components/Header";
import styles from "./styles/Recipe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUsers } from "@fortawesome/free-solid-svg-icons";

const Recipe = ({ meals }) => {
  const { id } = useParams();
  const meal = meals.find(meal => meal.key === parseInt(id));

  const ingredients = (
    <div>
      <dt>Ingredients</dt>
      {meal.ingredientLines.map((line, index) => (
        <dd key={index}>{line}</dd>
      ))}
    </div>
  );

  const healthLabels = (
    <>
      {meal.healthLabels.map((label, index) => (
        <span key={index} className="badge bg-success bg-gradient mr-1">
          {label}
        </span>
      ))}
    </>
  );

  const cautions = (
    <>
      {meal.cautions.map((label, index) => (
        <span key={index} className="badge bg-danger bg-gradient mr-1">
          {label}
        </span>
      ))}
    </>
  );

  const time = (
    <span>
      <FontAwesomeIcon
        icon={faClock}
        transform="grow-5"
        className="mr-2 ml-1"
      />
      {meal.totalTime == 0 ? "Unknown" : `${meal.totalTime} minutes`}
    </span>
  );

  const servings = (
    <span className="ml-2">
      <FontAwesomeIcon
        icon={faUsers}
        transform="grow-5"
        className="mr-2 ml-1"
      />
      {meal.yield == 0 ? "Unknown" : `Serves ${meal.yield}`}
    </span>
  );

  return (
    <>
      <Header />
      <div className="container-fluid" data-testid="container">
        <div className="row card flex-row">
          <div className="col-6">
            <img className="card-img-top" src={meal.image} />
          </div>
          <div className={`card-body col-6 py-0 ${styles["card-body"]}`}>
            <h1 className="card-title m-0">{meal.label}</h1>
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
              <div>
                {time}
                {servings}
              </div>
              <span>Calories: {Math.floor(meal.calories)}</span>
            </div>
            {ingredients}
            <a target="_blank" className="btn btn-primary" href={meal.url}>
              Go To Recipe
            </a>
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
