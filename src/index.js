import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import getMeals from "./helpers/getMeals";
import { Provider } from "react-redux";
import store from "./store";
require("dotenv").config();

(async function() {
  const fulfilledStore = await store;

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={fulfilledStore}>
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/test" component={<div>test</div>} />
          </Switch>
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();
