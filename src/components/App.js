import { connect } from "react-redux";
import Filter from "./Filter";
import applyFilter from '../helpers/applyFilter';
import Header from '../components/Header';

function App(props) {
  const { meals, filter } = props;
  const filteredMeals = applyFilter(meals, filter);
  const mealsList = (
    <div className="row">
      {filteredMeals.map(meal => {
        return (
          <div className="card col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <img src={meal.image} className="card-img-top" />
            <div className="card-body">
              <h5>{meal.label}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
    <Header homeURL="./" />
    <section className="container px-0 py-4">
      <Filter />
    </section>
    <section className="container">
      {mealsList}
    </section>
    </>
  );
}

const mapStateToProps = state => ({
  meals: state.meals,
  filter: state.filter
});

export default connect(mapStateToProps)(App);
