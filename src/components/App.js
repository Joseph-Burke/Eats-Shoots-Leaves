import { connect } from "react-redux";
import Filter from './Filter';

function App(props) {
  const { meals, filter } = props;
  const filteredMeals = meals.filter(meal => {
    const [caselessLabel, caselessFilter] = [meal.label.toUpperCase(), filter.toUpperCase()];
    return caselessLabel.includes(caselessFilter);
  })
  const mealsList = filteredMeals.map(meal => {
    return <div>{meal.label}</div>;
  });
  return (
    <div className="App">
      <header>
        <Filter />
      </header>
      {mealsList}
    </div>
  );
}

const mapStateToProps = state => ({
  meals: state.meals,
  filter: state.filter
});

export default connect(mapStateToProps)(App);
