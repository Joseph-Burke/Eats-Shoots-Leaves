import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUsers } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Header from './Header';
import styles from './styles/Recipe.module.css';

const Recipe = ({ meals }) => {
  const { id } = useParams();
  const meal = meals.find(meal => meal.key === parseInt(id, 10));
  let i;

  i = 0;
  const ingredients = (
    <div>
      <dt>Ingredients</dt>
      {meal.ingredientLines.map(line => {
        i += 1;
        return <dd key={i}>{line}</dd>;
      })}
    </div>
  );

  i = 0;
  const healthLabels = (
    <>
      {meal.healthLabels.map(label => {
        i += 1;
        return (
          <span key={i} className="badge bg-success bg-gradient mr-1">
            {label}
          </span>
        );
      })}
    </>
  );

  i = 0;
  const cautions = (
    <>
      {meal.cautions.map(label => (
        <span key={i} className="badge bg-danger bg-gradient mr-1">
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
      {[0, '0'].includes(meal.totalTime)
        ? 'Unknown'
        : `${meal.totalTime} minutes`}
    </span>
  );

  const servings = (
    <span className="ml-2">
      <FontAwesomeIcon
        icon={faUsers}
        transform="grow-5"
        className="mr-2 ml-1"
      />
      {[0, '0'].includes(meal.yield) ? 'Unknown' : `Serves ${meal.yield}`}
    </span>
  );

  return (
    <>
      <Header />
      <div className="container-fluid" data-testid="container">
        <div className="row card flex-row">
          <div className="col-6">
            <img alt={meal.label} className="card-img-top" src={meal.image} />
          </div>
          <div className={`card-body col-6 py-0 ${styles['card-body']}`}>
            <h1 className="card-title m-0">{meal.label}</h1>
            <h3 className="card-subtitle text-muted font-weight-lighter">
              from
              {' '}
              {meal.source}
            </h3>
            <div className={styles['font-size-20']}>
              {healthLabels}
              {cautions}
            </div>
            <div
              className={`d-flex justify-content-between mt-2 ${styles['font-size-20']}`}
            >
              <div>
                {time}
                {servings}
              </div>
              <span>
                Calories:
                {Math.floor(meal.calories)}
              </span>
            </div>
            {ingredients}
            <a
              target="_blank"
              className="btn btn-primary"
              href={meal.url}
              rel="noreferrer"
            >
              Go To Recipe
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  meals: state.meals,
});

Recipe.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Recipe);
