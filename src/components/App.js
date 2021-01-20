import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes, { oneOfType } from 'prop-types';
import Filter from '../containers/Filter';
import applyFilter from '../helpers/applyFilter';
import Header from './Header';
import styles from './styles/App.module.css';

function App(props) {
  const { meals, filter } = props;
  const filteredMeals = applyFilter(meals, filter);
  const mealsList = (
    <div className="row" data-testid="mealsList">
      {filteredMeals.map(meal => (
        <Link
          key={meal.key}
          className={`${styles['recipe-card']} card col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-0 d-block`}
          to={`/recipe/${meal.key}`}
        >
          <img alt={meal.label} src={meal.image} className="card-img-top" />
          <div className={`card-body ${styles['card-body']}`}>
            <h5>{meal.label}</h5>
          </div>
          <div className={`w-100 h-100 ${styles.overlay}`} />
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <Header />
      <section className="container px-0 py-4">
        <Filter />
      </section>
      <section className="container">{mealsList}</section>
    </>
  );
}

App.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.shape({
    searchTerm: PropTypes.string.isRequired,
    maxCalories: oneOfType([PropTypes.string, PropTypes.number]),
    maxTime: oneOfType([PropTypes.string, PropTypes.number]),
    labels: PropTypes.shape({
      'Peanut-Free': PropTypes.bool.isRequired,
      'Tree-Nut-Free': PropTypes.bool.isRequired,
      'Alcohol-Free': PropTypes.bool.isRequired,
      'Sugar-Conscious': PropTypes.bool.isRequired,
      'Low-Fat': PropTypes.bool.isRequired,
      Balanced: PropTypes.bool.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  meals: state.meals,
  filter: state.filter,
});

export default connect(mapStateToProps)(App);
