import { connect } from "react-redux";

function App(props) {
  const { meals } = props;
  const mealsList = meals.map(meal => {
    return <div>{meal.label}</div>
  });
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ height: "100px", background: "grey" }}
      ></header>
      {mealsList}
    </div>
  );
}

const mapStateToProps = state => ({
  meals: state.meals
});

export default connect(mapStateToProps)(App);
