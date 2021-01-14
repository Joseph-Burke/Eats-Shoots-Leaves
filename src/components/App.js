import getMeals from "../helpers/getMeals";

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        onClick={() => {
          getMeals().then(output => console.log(output));
        }}
        style={{ height: "100px", background: "grey" }}
      ></header>
    </div>
  );
}

export default App;
