import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

const Recipe = ({ meals }) => {
  let { id } = useParams();
  const meal = meals.find(meal => meal.key === parseInt(id));
  return <div>hey</div>;
};

const mapStateToProps = state => ({
  meals: state.meals
});

export default connect(mapStateToProps)(Recipe);
