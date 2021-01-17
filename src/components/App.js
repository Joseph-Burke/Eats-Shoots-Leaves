import { connect } from "react-redux";
import Filter from "./Filter";

function App(props) {
  const { meals, filter } = props;
  const filteredMeals = meals.filter(meal => {
    const [caselessLabel, caselessFilter] = [
      meal.label.toUpperCase(),
      filter.toUpperCase()
    ];
    return caselessLabel.includes(caselessFilter);
  });
  const mealsList = (
    <div className="row">
      {filteredMeals.map(meal => {
        console.log(meal);
        return (
          <div class="card col-3">
            <img src={meal.image} class="card-img-top" />
            <div class="card-body">
              <h5>{meal.label}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="container">
      <Filter />
      {mealsList}
    </section>
  );
}

const mapStateToProps = state => ({
  meals: state.meals,
  filter: state.filter
});

export default connect(mapStateToProps)(App);
