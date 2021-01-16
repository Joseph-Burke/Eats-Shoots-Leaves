import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeFilter } from '../actions';

const Filter = ({changeFilter}) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    changeFilter(filter);
  });
  
  const handleChange = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <input type="text" onChange={handleChange.bind(this)} value={filter} />
  );
};

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  }  
})

export default connect(null, mapDispatchToProps)(Filter);